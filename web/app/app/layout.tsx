import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import SignOutButton from './SignOutButton';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const isLocalDev = process.env.LOCAL_DEV === 'true';

  let userEmail: string | null = null;

  if (!isLocalDev) {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect('/login');
    userEmail = user.email ?? null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/app" className="font-semibold text-lg tracking-tight">
            UniCart
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {isLocalDev ? (
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-medium">
                Local dev
              </span>
            ) : (
              <>
                <span className="hidden sm:block">{userEmail}</span>
                <SignOutButton />
              </>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">{children}</main>
    </div>
  );
}
