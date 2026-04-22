import { auth } from '@/lib/auth'
import { verifyExtensionToken } from '@/lib/auth/token'
import { dbUpsertItem, dbGetProfile } from '@/lib/db/cosmos'
import { upsertItem } from '@/lib/localStore'
import { NextRequest, NextResponse } from 'next/server'
import type { UpsertPayload } from '@/lib/types'

async function getUserId(req: NextRequest): Promise<string | null> {
  const session = await auth()
  if (session?.user?.id) return session.user.id
  const header = req.headers.get('authorization')
  if (header?.startsWith('Bearer ')) {
    try { return await verifyExtensionToken(header.slice(7)) } catch { return null }
  }
  return null
}

export async function POST(request: NextRequest) {
  let body: UpsertPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const required = ['url', 'brand', 'product_id', 'title', 'image_url']
  for (const field of required) {
    if (!body[field as keyof UpsertPayload]) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
    }
  }

  if (process.env.LOCAL_DEV === 'true') {
    return NextResponse.json({ item: await upsertItem(body) })
  }

  const userId = await getUserId(request)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Autofill sizing from profile when page had no default selected
  if (body.sizing == null) {
    const profile = await dbGetProfile(userId).catch(() => null)
    if (profile) {
      const cat = (body.category ?? '').toLowerCase()
      const isBottom = /pant|denim|jean|trouser|chino|short/.test(cat)
      if (isBottom && profile.preferred_numeric_size) {
        body = { ...body, sizing: profile.preferred_numeric_size, sizing_type: 'numeric' }
      } else if (!isBottom && profile.preferred_alpha_size) {
        body = { ...body, sizing: profile.preferred_alpha_size, sizing_type: 'alpha' }
      }
    }
  }

  const item = await dbUpsertItem(userId, body)
  return NextResponse.json({ item }, { status: 200 })
}
