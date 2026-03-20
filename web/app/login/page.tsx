'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage({
  searchParams,
}: {
  searchParams: { source?: string; next?: string; ext_id?: string };
}) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isExtension = searchParams.source === 'extension';
  const extId = searchParams.ext_id ?? '';
  const next = searchParams.next ?? '/app';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const supabase = createClient();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';

    // Build callback URL — pass through extension params so callback page can relay session
    const callbackParams = new URLSearchParams({ next });
    if (isExtension) {
      callbackParams.set('source', 'extension');
      if (extId) callbackParams.set('ext_id', extId);
    }
    const emailRedirectTo = `${siteUrl}/auth/callback?${callbackParams}`;

    const { error: err } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo },
    });

    if (err) {
      setError(err.message);
    } else {
      setSent(true);
    }
    setLoading(false);
  }

  if (sent) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-sm w-full text-center">
          <h1 className="text-2xl font-bold mb-3">Check your email</h1>
          <p className="text-gray-500">
            We sent a magic link to <strong>{email}</strong>. Click it to sign
            in.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-1">Sign in to UniCart</h1>
        {isExtension && (
          <p className="text-sm text-gray-500 mb-6">
            Sign in to sync your extension cart across devices.
          </p>
        )}
        {!isExtension && <div className="mb-6" />}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Sending…' : 'Send magic link'}
          </button>
        </form>
      </div>
    </main>
  );
}
