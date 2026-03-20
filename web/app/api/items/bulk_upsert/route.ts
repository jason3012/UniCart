import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import type { UpsertPayload } from '@/lib/types';

export async function POST(request: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { items: UpsertPayload[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: 'items must be a non-empty array' }, { status: 400 });
  }

  const rows = body.items.map((item) => ({
    user_id: user.id,
    url: item.url,
    brand: item.brand,
    product_id: item.product_id,
    title: item.title,
    image_url: item.image_url,
    price_usd: item.price_usd ?? null,
    category: item.category ?? null,
    color: item.color ?? null,
    sizing: item.sizing ?? null,
    field_sources: item.field_sources ?? null,
    field_confidence: item.field_confidence ?? null,
    extracted_at: item.extracted_at ?? null,
    updated_at: new Date().toISOString(),
  }));

  const { data, error } = await supabase
    .from('items')
    .upsert(rows, { onConflict: 'user_id,brand,product_id' })
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ items: data, count: data?.length ?? 0 }, { status: 200 });
}
