import { createClient } from '@/lib/supabase/server';
import type { Item } from '@/lib/types';
import Dashboard from './Dashboard';

export default async function AppPage() {
  const supabase = createClient();
  const { data: items, error } = await supabase
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

  return <Dashboard initialItems={(items as Item[]) ?? []} />;
}
