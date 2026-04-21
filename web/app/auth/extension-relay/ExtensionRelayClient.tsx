'use client'

import { useEffect, useState } from 'react'

export default function ExtensionRelayClient({
  extId,
  token,
  email,
}: {
  extId: string
  token: string
  email: string
}) {
  const [status, setStatus] = useState<'relaying' | 'done' | 'error'>('relaying')

  useEffect(() => {
    if (!extId) {
      setStatus('error')
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cr = (window as any).chrome?.runtime
    if (!cr) {
      setStatus('error')
      return
    }

    cr.sendMessage(
      extId,
      { type: 'AUTH_SESSION', access_token: token, user_email: email },
      (response: unknown) => {
        if (cr.lastError) {
          console.error('[UniCart relay]', cr.lastError)
          setStatus('error')
        } else {
          console.log('[UniCart relay] acknowledged:', response)
          setStatus('done')
        }
      },
    )
  }, [extId, token, email])

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-sm text-center">
        {status === 'relaying' && (
          <>
            <div className="text-2xl mb-3 animate-pulse">🔗</div>
            <h1 className="text-xl font-semibold mb-2">Connecting to extension…</h1>
            <p className="text-gray-500 text-sm">Sending your session to UniCart.</p>
          </>
        )}
        {status === 'done' && (
          <>
            <div className="text-2xl mb-3">✅</div>
            <h1 className="text-xl font-semibold mb-2">Signed in!</h1>
            <p className="text-gray-500 text-sm">
              You can close this tab. Your extension is now syncing to your account.
            </p>
          </>
        )}
        {status === 'error' && (
          <>
            <div className="text-2xl mb-3">⚠️</div>
            <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
            <p className="text-gray-500 text-sm mb-4">
              Could not connect to the extension. Try signing in again from the extension popup.
            </p>
            <a href="/app" className="text-sm underline text-gray-700">
              Go to your cart
            </a>
          </>
        )}
      </div>
    </main>
  )
}
