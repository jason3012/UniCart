import React from 'react'
import { auth } from '@/lib/auth'
import { dbGetItemsByIds } from '@/lib/db/cosmos'
import { listItems } from '@/lib/localStore'
import { redirect } from 'next/navigation'
import type { Item } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'

const BRAND_ACCENT: Record<string, string> = {
  Zara: '#c2856a',
  Uniqlo: '#5a7d8f',
  COS: '#6b7280',
  'Ralph Lauren': '#2c4a7c',
  'Banana Republic': '#b89a6e',
  'Buck Mason': '#8c7e6a',
  'J.Crew': '#3d5a80',
}

const FIELDS: { key: keyof Item; label: string }[] = [
  { key: 'brand', label: 'Brand' },
  { key: 'price_usd', label: 'Price' },
  { key: 'category', label: 'Category' },
  { key: 'color', label: 'Color' },
  { key: 'sizing', label: 'Size' },
]

function fmt(key: keyof Item, value: unknown): string {
  if (value == null) return '—'
  if (key === 'price_usd') return `$${Number(value).toFixed(2)}`
  return String(value)
}

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string }>
}) {
  const { ids: rawIdsParam } = await searchParams
  const rawIds = rawIdsParam ?? ''
  const ids = rawIds
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  if (ids.length < 2 || ids.length > 4) {
    return (
      <main
        className="flex min-h-screen items-center justify-center px-6"
        style={{ background: 'var(--bg)', fontFamily: 'var(--font-sans)' }}
      >
        <div className="text-center max-w-sm">
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '40px',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#c4bdb4',
              marginBottom: '16px',
              letterSpacing: '-0.5px',
            }}
          >
            Invalid selection.
          </p>
          <p className="text-sm mb-6" style={{ color: '#78716c' }}>
            Please select between 2 and 4 items to compare.
          </p>
          <Link href="/app" className="text-sm underline" style={{ color: '#1c1917' }}>
            ← Back to cart
          </Link>
        </div>
      </main>
    )
  }

  let items: Item[]

  if (process.env.LOCAL_DEV === 'true') {
    const all = await listItems()
    items = all.filter((i) => ids.includes(i.id))
  } else {
    const session = await auth()
    if (!session?.user?.id) redirect('/login')
    items = await dbGetItemsByIds(session.user.id, ids)
  }

  if (items.length < 2) redirect('/app')

  const ordered = ids
    .map((id) => items.find((i) => i.id === id))
    .filter(Boolean) as Item[]

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', fontFamily: 'var(--font-sans)' }}>
      <header
        className="sticky top-0 z-10 border-b border-[#e5e0d8]"
        style={{ background: 'rgba(250,249,247,0.9)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-6">
          <Link href="/app" className="text-sm transition-colors text-[#78716c] hover:text-[#1c1917]">
            ← Back
          </Link>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 600,
              fontStyle: 'italic',
              color: '#1c1917',
              letterSpacing: '-0.3px',
            }}
          >
            Compare
          </span>
          <span className="text-sm" style={{ color: '#a8a29e' }}>
            {ordered.length} items
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 overflow-x-auto">
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: `repeat(${ordered.length}, minmax(200px, 1fr))` }}
        >
          {ordered.map((item) => {
            const accent = BRAND_ACCENT[item.brand] ?? '#78716c'
            return (
              <div key={item.id} className="flex flex-col">
                <div
                  className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4"
                  style={{ background: '#ede9e3' }}
                >
                  {item.image_url ? (
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '28px',
                          fontStyle: 'italic',
                          fontWeight: 500,
                          color: '#c4bdb4',
                        }}
                      >
                        {item.brand}
                      </span>
                    </div>
                  )}
                </div>
                <p
                  className="uppercase mb-1"
                  style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1.8px', color: accent }}
                >
                  {item.brand}
                </p>
                <p
                  className="font-medium text-sm leading-snug mb-3 line-clamp-2"
                  style={{ color: '#1c1917' }}
                >
                  {item.title}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline"
                  style={{ color: '#78716c' }}
                >
                  View product →
                </a>
              </div>
            )
          })}

          {FIELDS.map(({ key, label }) => (
            <React.Fragment key={key}>
              <div
                className="pt-4 pb-1"
                style={{ gridColumn: '1 / -1', borderTop: '1px solid #e5e0d8' }}
              >
                <span
                  className="uppercase"
                  style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1.8px', color: '#a8a29e' }}
                >
                  {label}
                </span>
              </div>
              {ordered.map((item) => (
                <div key={`${item.id}-${key}`} className="text-sm pb-1" style={{ color: '#1c1917' }}>
                  {fmt(key, item[key])}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  )
}
