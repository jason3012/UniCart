import { auth } from '@/lib/auth'
import { dbGetProfile } from '@/lib/db/cosmos'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import Link from 'next/link'
import SignOutButton from './SignOutButton'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const isLocalDev = process.env.LOCAL_DEV === 'true'
  let userEmail: string | null = null

  if (!isLocalDev) {
    const session = await auth()
    if (!session?.user) redirect('/login')
    userEmail = session.user.email ?? null

    const headersList = await headers()
    const pathname = headersList.get('x-pathname') ?? headersList.get('x-invoke-path') ?? ''
    const isProfilePage = pathname.includes('/app/profile')

    if (!isProfilePage) {
      const profile = await dbGetProfile(session.user.id).catch(() => null)
      if (!profile) redirect('/app/profile')
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)', fontFamily: 'var(--font-sans)' }}>
      <header
        className="sticky top-0 z-10 border-b border-[#e5e0d8]"
        style={{ background: 'rgba(250,249,247,0.9)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/app"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '-0.4px',
              color: '#1c1917',
              textDecoration: 'none',
            }}
          >
            UniCart
          </Link>
          <div className="flex items-center gap-4">
            {isLocalDev ? (
              <span
                className="text-xs px-2 py-0.5 rounded font-medium"
                style={{ background: '#fef3c7', color: '#92400e' }}
              >
                Local dev
              </span>
            ) : (
              <>
                <span className="hidden sm:block text-sm" style={{ color: '#78716c' }}>
                  {userEmail}
                </span>
                <SignOutButton />
              </>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">{children}</main>
    </div>
  )
}
