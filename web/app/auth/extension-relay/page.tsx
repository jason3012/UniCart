import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { createExtensionToken } from '@/lib/auth/token'
import ExtensionRelayClient from './ExtensionRelayClient'

export default async function ExtensionRelayPage({
  searchParams,
}: {
  searchParams: { ext_id?: string }
}) {
  const session = await auth()
  if (!session?.user) redirect('/login')

  const extId = searchParams.ext_id ?? ''
  const token = await createExtensionToken(session.user.id, session.user.email)

  return (
    <ExtensionRelayClient
      extId={extId}
      token={token}
      email={session.user.email ?? ''}
    />
  )
}
