import { auth } from '@/lib/auth'
import { dbListItems } from '@/lib/db/cosmos'
import { listItems } from '@/lib/localStore'
import type { Item } from '@/lib/types'
import Dashboard from './Dashboard'

export default async function AppPage() {
  let items: Item[] = []

  if (process.env.LOCAL_DEV === 'true') {
    items = await listItems()
  } else {
    const session = await auth()
    if (session?.user?.id) {
      items = await dbListItems(session.user.id)
    }
  }

  return <Dashboard initialItems={items} />
}
