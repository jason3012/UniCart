import { auth } from '@/lib/auth'
import { verifyExtensionToken } from '@/lib/auth/token'
import { dbUpsertItem } from '@/lib/db/cosmos'
import { upsertItems } from '@/lib/localStore'
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
  let body: { items: UpsertPayload[] }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: 'items must be a non-empty array' }, { status: 400 })
  }

  if (process.env.LOCAL_DEV === 'true') {
    const items = await upsertItems(body.items)
    return NextResponse.json({ items, count: items.length })
  }

  const userId = await getUserId(request)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const items = await Promise.all(body.items.map((payload) => dbUpsertItem(userId, payload)))
  return NextResponse.json({ items, count: items.length }, { status: 200 })
}
