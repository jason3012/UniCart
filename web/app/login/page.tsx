import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import LoginForm from './LoginForm'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string; ext_id?: string }>
}) {
  if (process.env.LOCAL_DEV === 'true') {
    redirect('/app')
  }

  const params = await searchParams
  const isExtension = params.source === 'extension'

  // Already signed in — skip the login form
  const session = await auth()
  if (session?.user) {
    if (isExtension && params.ext_id) {
      redirect(`/auth/extension-relay?ext_id=${encodeURIComponent(params.ext_id)}`)
    }
    redirect('/app')
  }

  return <LoginForm searchParams={params} />
}
