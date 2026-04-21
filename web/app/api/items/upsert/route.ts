import { auth } from '@/lib/auth'
import { verifyExtensionToken } from '@/lib/auth/token'
import { dbUpsertItem } from '@/lib/db/cosmos'
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

  const item = await dbUpsertItem(userId, body)
  return NextResponse.json({ item }, { status: 200 })
}
