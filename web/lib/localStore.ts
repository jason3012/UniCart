/**
 * File-based local store for LOCAL_DEV mode.
 * Persists items to web/.local-items.json so they survive next dev restarts.
 */

import { promises as fs } from 'fs';
import path from 'path';
import type { Item, UpsertPayload } from './types';

const STORE_PATH = path.join(process.cwd(), '.local-items.json');

async function read(): Promise<Item[]> {
  try {
    const raw = await fs.readFile(STORE_PATH, 'utf8');
    return JSON.parse(raw) as Item[];
  } catch {
    return [];
  }
}

async function write(items: Item[]): Promise<void> {
  await fs.writeFile(STORE_PATH, JSON.stringify(items, null, 2), 'utf8');
}

export async function listItems(): Promise<Item[]> {
  return read();
}

export async function upsertItem(payload: UpsertPayload): Promise<Item> {
  const items = await read();
  const now = new Date().toISOString();

  const idx = items.findIndex(
    (i) => i.brand === payload.brand && i.product_id === payload.product_id,
  );

  if (idx !== -1) {
    // Update existing
    items[idx] = {
      ...items[idx],
      ...payload,
      updated_at: now,
    };
    await write(items);
    return items[idx];
  }

  // Insert new
  const item: Item = {
    id: crypto.randomUUID(),
    user_id: 'local',
    url: payload.url,
    brand: payload.brand,
    product_id: payload.product_id,
    title: payload.title,
    image_url: payload.image_url,
    price_usd: payload.price_usd ?? null,
    category: payload.category ?? null,
    color: payload.color ?? null,
    sizing: payload.sizing ?? null,
    field_sources: payload.field_sources ?? null,
    field_confidence: payload.field_confidence ?? null,
    extracted_at: payload.extracted_at ?? null,
    created_at: now,
    updated_at: now,
  };

  items.push(item);
  await write(items);
  return item;
}

export async function upsertItems(payloads: UpsertPayload[]): Promise<Item[]> {
  const results: Item[] = [];
  for (const payload of payloads) {
    results.push(await upsertItem(payload));
  }
  return results;
}

export async function deleteItem(id: string): Promise<void> {
  const items = await read();
  await write(items.filter((i) => i.id !== id));
}
