import { createClient } from '@/lib/supabase/server';
import { listItems } from '@/lib/localStore';
import { redirect } from 'next/navigation';
import type { Item } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

const FIELDS: { key: keyof Item; label: string }[] = [
  { key: 'brand', label: 'Brand' },
  { key: 'price_usd', label: 'Price' },
  { key: 'category', label: 'Category' },
  { key: 'color', label: 'Color' },
  { key: 'sizing', label: 'Size' },
];

function fmt(key: keyof Item, value: unknown): string {
  if (value == null) return '—';
  if (key === 'price_usd') return `$${Number(value).toFixed(2)}`;
  return String(value);
}

export default async function ComparePage({
  searchParams,
}: {
  searchParams: { ids?: string };
}) {
  const rawIds = searchParams.ids ?? '';
  const ids = rawIds
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (ids.length < 2 || ids.length > 4) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="text-3xl mb-4">⚠️</div>
          <h1 className="text-xl font-semibold mb-2">Invalid selection</h1>
          <p className="text-gray-500 mb-4">
            Please select between 2 and 4 items to compare.
          </p>
          <Link href="/app" className="underline text-gray-700">
            Back to cart
          </Link>
        </div>
      </main>
    );
  }

  let items: Item[];

  if (process.env.LOCAL_DEV === 'true') {
    const all = await listItems();
    items = all.filter((i) => ids.includes(i.id));
  } else {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .in('id', ids);

    if (error || !data) redirect('/app');
    items = data as Item[];
  }

  if (items.length < 2) {
    redirect('/app');
  }

  // Preserve the user-requested order
  const ordered = ids
    .map((id) => (items as Item[]).find((i) => i.id === id))
    .filter(Boolean) as Item[];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href="/app" className="text-sm text-gray-500 hover:text-gray-900">
            ← Back to cart
          </Link>
          <span className="font-semibold">Compare</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 overflow-x-auto">
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${ordered.length}, minmax(200px, 1fr))` }}
        >
          {/* Images + titles */}
          {ordered.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 mb-3">
                {item.image_url ? (
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl">
                    🖼
                  </div>
                )}
              </div>
              <p className="font-medium text-sm leading-snug mb-2 line-clamp-2">{item.title}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 underline"
              >
                View product →
              </a>
            </div>
          ))}

          {/* Attribute rows */}
          {FIELDS.map(({ key, label }) => (
            <>
              {/* Row label spanning all columns — use a divider row */}
              <div
                key={`label-${key}`}
                className="col-span-full border-t border-gray-100 pt-3 pb-1"
                style={{ gridColumn: `1 / -1` }}
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {label}
                </span>
              </div>
              {ordered.map((item) => (
                <div key={`${item.id}-${key}`} className="text-sm text-gray-700">
                  {fmt(key, item[key])}
                </div>
              ))}
            </>
          ))}
        </div>
      </main>
    </div>
  );
}
