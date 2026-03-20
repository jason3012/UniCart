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

  let body: UpsertPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const required = ['url', 'brand', 'product_id', 'title', 'image_url'];
  for (const field of required) {
    if (!body[field as keyof UpsertPayload]) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
  }

  const { data, error } = await supabase
    .from('items')
    .upsert(
      {
        user_id: user.id,
        url: body.url,
        brand: body.brand,
        product_id: body.product_id,
        title: body.title,
        image_url: body.image_url,
        price_usd: body.price_usd ?? null,
        category: body.category ?? null,
        color: body.color ?? null,
        sizing: body.sizing ?? null,
        field_sources: body.field_sources ?? null,
        field_confidence: body.field_confidence ?? null,
        extracted_at: body.extracted_at ?? null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,brand,product_id' },
    )
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ item: data }, { status: 200 });
}
