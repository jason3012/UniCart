'use client';

import Image from 'next/image';
import type { Item } from '@/lib/types';

const BRAND_ACCENT: Record<string, string> = {
  Zara: '#c2856a',
  Uniqlo: '#5a7d8f',
};

interface Props {
  item: Item;
  selected: boolean;
  onToggleCompare: () => void;
  onDelete: () => void;
}

export default function ItemCard({ item, selected, onToggleCompare, onDelete }: Props) {
  const accent = BRAND_ACCENT[item.brand] ?? '#78716c';

  return (
    <div
      className={`group relative rounded-xl border transition-all overflow-hidden ${
        selected
          ? 'border-[#1c1917] ring-1 ring-[#1c1917]'
          : 'border-[#e5e0d8] hover:border-[#c4bdb4]'
      }`}
      style={{ background: '#faf9f7', fontFamily: 'var(--font-sans)' }}
    >
      {/* Compare checkbox */}
      <button
        onClick={onToggleCompare}
        title={selected ? 'Remove from compare' : 'Add to compare'}
        className={`absolute top-2 left-2 z-10 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
          selected
            ? 'bg-[#1c1917] border-[#1c1917] text-[#faf9f7]'
            : 'bg-white/80 border-[#e5e0d8] text-transparent group-hover:border-[#a8a29e]'
        }`}
      >
        {selected && (
          <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="1,6 4,9 11,2" />
          </svg>
        )}
      </button>

      {/* Image */}
      <div className="relative aspect-[3/4]" style={{ background: '#ede9e3' }}>
        {item.image_url ? (
          <Image
            src={item.image_url}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                letterSpacing: '-0.5px',
              }}
            >
              {item.brand}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-0.5"
          style={{ color: accent, letterSpacing: '1.6px', fontSize: '9px' }}
        >
          {item.brand}
        </p>
        <p
          className="text-sm font-medium leading-snug mb-2 line-clamp-2"
          style={{ color: '#1c1917' }}
          title={item.title}
        >
          {item.title}
        </p>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs mb-3" style={{ color: '#78716c' }}>
          {item.price_usd != null && (
            <span className="font-semibold" style={{ color: '#1c1917', fontSize: '13px' }}>
              ${item.price_usd.toFixed(2)}
            </span>
          )}
          {item.category && <span>{item.category}</span>}
          {item.color && <span>· {item.color}</span>}
          {item.sizing != null && <span>· Size {item.sizing}</span>}
        </div>

        {/* Actions */}
        <div className="flex gap-1.5">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs py-1.5 rounded-lg border border-[#e5e0d8] hover:bg-[#f0ede8] transition-colors"
            style={{ color: '#1c1917' }}
          >
            Open
          </a>
          <button
            onClick={onDelete}
            className="text-xs py-1.5 px-2.5 rounded-lg border border-[#e5e0d8] transition-colors hover:border-red-200 hover:text-red-500"
            style={{ color: '#a8a29e' }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
