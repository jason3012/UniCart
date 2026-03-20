import { createClient } from '@/lib/supabase/server';
import { listItems } from '@/lib/localStore';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  if (process.env.LOCAL_DEV === 'true') {
    const items = await listItems();
    return NextResponse.json({ items });
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  let query = supabase
    .from('items')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  const brand = searchParams.get('brand');
  if (brand) query = query.eq('brand', brand);

  const category = searchParams.get('category');
  if (category) query = query.eq('category', category);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ items: data });
}
