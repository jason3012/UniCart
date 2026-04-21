import { auth } from '@/lib/auth'
import { verifyExtensionToken } from '@/lib/auth/token'
import { dbDeleteItem } from '@/lib/db/cosmos'
import { deleteItem } from '@/lib/localStore'
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params

  if (process.env.LOCAL_DEV === 'true') {
    await deleteItem(id)
    return NextResponse.json({ status: 'deleted' })
  }

  const userId = await getUserId(request)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await dbDeleteItem(userId, id)
  return NextResponse.json({ status: 'deleted' })
}
