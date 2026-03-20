import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/app';
  const source = searchParams.get('source');
  const extId = searchParams.get('ext_id');

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // If triggered from extension, redirect to a page that relays session to extension
      if (source === 'extension' && extId) {
        return NextResponse.redirect(
          `${origin}/auth/extension-relay?ext_id=${encodeURIComponent(extId)}`,
        );
      }
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
