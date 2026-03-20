import { redirect } from 'next/navigation';
import LoginForm from './LoginForm';

// Server component — checks LOCAL_DEV before rendering the Supabase-dependent form
export default function LoginPage({
  searchParams,
}: {
  searchParams: { source?: string; next?: string; ext_id?: string };
}) {
  if (process.env.LOCAL_DEV === 'true') {
    redirect('/app');
  }

  return <LoginForm searchParams={searchParams} />;
}
