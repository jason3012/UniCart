import { redirect } from 'next/navigation'
import LoginForm from './LoginForm'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { source?: string; ext_id?: string }
}) {
  if (process.env.LOCAL_DEV === 'true') {
    redirect('/app')
  }

  return <LoginForm searchParams={searchParams} />
}
