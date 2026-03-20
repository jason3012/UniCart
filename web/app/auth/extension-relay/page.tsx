'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

// This page runs in the browser after auth, reads the session,
// and relays the tokens to the Chrome extension via chrome.runtime.sendMessage.
export default function ExtensionRelayPage({
  searchParams,
}: {
  searchParams: { ext_id?: string };
}) {
  const [status, setStatus] = useState<'relaying' | 'done' | 'error'>('relaying');

  useEffect(() => {
    const extId = searchParams.ext_id;
    if (!extId) {
      setStatus('error');
      return;
    }

    (async () => {
      try {
        const supabase = createClient();
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) throw new Error('No session');

        // chrome.runtime is available in pages running inside Chrome
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cr = (window as any).chrome?.runtime;
        if (!cr) throw new Error('Not in Chrome');

        cr.sendMessage(
          extId,
          {
            type: 'AUTH_SESSION',
            access_token: session.access_token,
            refresh_token: session.refresh_token,
            user_email: session.user.email,
          },
          (response: unknown) => {
            if (cr.lastError) {
              console.error('[UniCart relay] Extension error:', cr.lastError);
              setStatus('error');
            } else {
              console.log('[UniCart relay] Extension acknowledged:', response);
              setStatus('done');
            }
          },
        );
      } catch (err) {
        console.error('[UniCart relay] Error:', err);
        setStatus('error');
      }
    })();
  }, [searchParams.ext_id]);

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
              Could not connect to the extension. Try signing in again from the
              extension popup.
            </p>
            <a
              href="/app"
              className="text-sm underline text-gray-700"
            >
              Go to your cart
            </a>
          </>
        )}
      </div>
    </main>
  );
}
