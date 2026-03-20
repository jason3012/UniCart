'use client';

import Image from 'next/image';
import type { Item } from '@/lib/types';

interface Props {
  item: Item;
  selected: boolean;
  onToggleCompare: () => void;
  onDelete: () => void;
}

export default function ItemCard({ item, selected, onToggleCompare, onDelete }: Props) {
  return (
    <div
      className={`group relative rounded-xl border transition-all ${
        selected ? 'border-gray-900 ring-1 ring-gray-900' : 'border-gray-200 hover:border-gray-300'
      } bg-white overflow-hidden`}
    >
      {/* Compare checkbox */}
      <button
        onClick={onToggleCompare}
        title={selected ? 'Remove from compare' : 'Add to compare'}
        className={`absolute top-2 left-2 z-10 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
          selected
            ? 'bg-gray-900 border-gray-900 text-white'
            : 'bg-white border-gray-300 text-transparent group-hover:border-gray-500'
        }`}
      >
        {selected && (
          <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="1,6 4,9 11,2" />
          </svg>
        )}
      </button>

      {/* Image */}
      <div className="relative aspect-[3/4] bg-gray-100">
        {item.image_url ? (
          <Image
            src={item.image_url}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl">
            🖼
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
          {item.brand}
        </p>
        <p className="text-sm font-medium leading-snug mb-1 line-clamp-2" title={item.title}>
          {item.title}
        </p>

        <div className="flex flex-wrap gap-1 text-xs text-gray-500 mb-2">
          {item.price_usd != null && (
            <span className="font-semibold text-gray-900">${item.price_usd.toFixed(2)}</span>
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
            className="flex-1 text-center text-xs py-1.5 rounded border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Open
          </a>
          <button
            onClick={onDelete}
            className="text-xs py-1.5 px-2.5 rounded border border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-500 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
