'use client'

import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="text-sm transition-colors"
      style={{ color: '#a8a29e', fontFamily: 'var(--font-sans)' }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#1c1917')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#a8a29e')}
    >
      Sign out
    </button>
  )
}
