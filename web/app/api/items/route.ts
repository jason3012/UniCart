import { auth } from '@/lib/auth'
import { verifyExtensionToken } from '@/lib/auth/token'
import { dbListItems } from '@/lib/db/cosmos'
import { listItems } from '@/lib/localStore'
import { NextRequest, NextResponse } from 'next/server'

async function getUserId(req: NextRequest): Promise<string | null> {
  const session = await auth()
  if (session?.user?.id) return session.user.id
  const header = req.headers.get('authorization')
  if (header?.startsWith('Bearer ')) {
    try { return await verifyExtensionToken(header.slice(7)) } catch { return null }
  }
  return null
}

export async function GET(request: NextRequest) {
  if (process.env.LOCAL_DEV === 'true') {
    return NextResponse.json({ items: await listItems() })
  }

  const userId = await getUserId(request)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(request.url)
  const items = await dbListItems(userId, searchParams.get('brand'), searchParams.get('category'))
  return NextResponse.json({ items })
}
