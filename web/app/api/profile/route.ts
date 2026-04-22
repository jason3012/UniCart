import { auth } from '@/lib/auth'
import { dbGetProfile, dbUpsertProfile } from '@/lib/db/cosmos'
import { NextRequest, NextResponse } from 'next/server'
import type { ProfilePayload } from '@/lib/types'

async function getUserId(): Promise<string | null> {
  const session = await auth()
  return session?.user?.id ?? null
}

export async function GET() {
  if (process.env.LOCAL_DEV === 'true') {
    return NextResponse.json({ profile: null }, { status: 200 })
  }
  const userId = await getUserId()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const profile = await dbGetProfile(userId)
  if (!profile) return NextResponse.json({ profile: null }, { status: 404 })
  return NextResponse.json({ profile })
}

export async function PUT(request: NextRequest) {
  if (process.env.LOCAL_DEV === 'true') {
    return NextResponse.json({ profile: null }, { status: 200 })
  }
  const userId = await getUserId()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: ProfilePayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const profile = await dbUpsertProfile(userId, body)
  return NextResponse.json({ profile })
}
