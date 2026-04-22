import { CosmosClient, Database } from '@azure/cosmos'
import type { Item, UpsertPayload, UserProfile, ProfilePayload } from '@/lib/types'

let _db: Database | null = null

function getDb(): Database {
  if (_db) return _db
  const cs = process.env.COSMOS_CONNECTION_STRING
  if (!cs) throw new Error('COSMOS_CONNECTION_STRING not set')
  _db = new CosmosClient(cs).database('unicart')
  return _db
}

function makeId(userId: string, brand: string, productId: string): string {
  return `${userId}:${brand}:${productId}`
}

export async function dbListItems(
  userId: string,
  brand?: string | null,
  category?: string | null,
): Promise<Item[]> {
  const container = getDb().container('items')
  let query = 'SELECT * FROM c WHERE c.user_id = @userId'
  const parameters: { name: string; value: string }[] = [{ name: '@userId', value: userId }]
  if (brand) {
    query += ' AND c.brand = @brand'
    parameters.push({ name: '@brand', value: brand })
  }
  if (category) {
    query += ' AND c.category = @category'
    parameters.push({ name: '@category', value: category })
  }
  query += ' ORDER BY c.created_at DESC'
  const { resources } = await container.items
    .query<Item>({ query, parameters }, { partitionKey: userId })
    .fetchAll()
  return resources
}

export async function dbUpsertItem(userId: string, payload: UpsertPayload): Promise<Item> {
  const container = getDb().container('items')
  const now = new Date().toISOString()
  const id = makeId(userId, payload.brand, payload.product_id)

  let createdAt = now
  try {
    const { resource } = await container.item(id, userId).read<Item>()
    if (resource) createdAt = resource.created_at
  } catch {
    // new item — use now
  }

  const sizing = payload.sizing != null ? String(payload.sizing) : null
  const sizingType = payload.sizing_type
    ?? (sizing == null ? null : /^\d/.test(sizing) ? 'numeric' : 'alpha')

  const doc: Item = {
    id,
    user_id: userId,
    url: payload.url,
    brand: payload.brand,
    product_id: payload.product_id,
    title: payload.title,
    image_url: payload.image_url,
    price_usd: payload.price_usd ?? null,
    category: payload.category ?? null,
    color: payload.color ?? null,
    sizing,
    sizing_type: sizingType,
    field_sources: payload.field_sources ?? null,
    field_confidence: payload.field_confidence ?? null,
    extracted_at: payload.extracted_at ?? null,
    created_at: createdAt,
    updated_at: now,
  }

  const { resource } = await container.items.upsert<Item>(doc)
  return resource!
}

export async function dbDeleteItem(userId: string, id: string): Promise<void> {
  await getDb().container('items').item(id, userId).delete()
}

export async function dbGetItemsByIds(userId: string, ids: string[]): Promise<Item[]> {
  const container = getDb().container('items')
  const placeholders = ids.map((_, i) => `@id${i}`).join(', ')
  const parameters = ids.map((id, i) => ({ name: `@id${i}`, value: id }))
  parameters.push({ name: '@userId', value: userId })
  const { resources } = await container.items
    .query<Item>(
      {
        query: `SELECT * FROM c WHERE c.user_id = @userId AND c.id IN (${placeholders})`,
        parameters,
      },
      { partitionKey: userId },
    )
    .fetchAll()
  return resources
}

export async function dbGetProfile(userId: string): Promise<UserProfile | null> {
  try {
    const { resource } = await getDb().container('profiles').item(userId, userId).read<UserProfile>()
    return resource ?? null
  } catch {
    return null
  }
}

export async function dbUpsertProfile(userId: string, payload: ProfilePayload): Promise<UserProfile> {
  const now = new Date().toISOString()
  const existing = await dbGetProfile(userId)

  const doc: UserProfile = {
    id: userId,
    user_id: userId,
    name: payload.name ?? existing?.name ?? null,
    height_cm: payload.height_cm ?? existing?.height_cm ?? null,
    weight_kg: payload.weight_kg ?? existing?.weight_kg ?? null,
    favorite_brands: payload.favorite_brands ?? existing?.favorite_brands ?? [],
    preferred_alpha_size: payload.preferred_alpha_size ?? existing?.preferred_alpha_size ?? null,
    preferred_numeric_size: payload.preferred_numeric_size ?? existing?.preferred_numeric_size ?? null,
    created_at: existing?.created_at ?? now,
    updated_at: now,
  }

  const { resource } = await getDb().container('profiles').items.upsert<UserProfile>(doc)
  return resource!
}
