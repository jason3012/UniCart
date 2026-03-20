import { createClient } from '@/lib/supabase/server';
import { listItems } from '@/lib/localStore';
import type { Item } from '@/lib/types';
import Dashboard from './Dashboard';

export default async function AppPage() {
  let items: Item[] = [];

  if (process.env.LOCAL_DEV === 'true') {
    items = await listItems();
  } else {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return (
        <div className="text-center text-red-600 py-16">
          Failed to load items. Please refresh.
        </div>
      );
    }
    items = (data as Item[]) ?? [];
  }

  return <Dashboard initialItems={items} />;
}
