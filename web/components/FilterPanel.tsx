'use client';

import type { Item } from '@/lib/types';
import type { Filters } from '@/app/app/Dashboard';

interface Props {
  items: Item[];
  filters: Filters;
  onChange: (f: Filters) => void;
}

function unique<T>(arr: (T | null | undefined)[]): T[] {
  return Array.from(new Set(arr.filter((v): v is T => v != null))).sort() as T[];
}

export default function FilterPanel({ items, filters, onChange }: Props) {
  const brands = unique(items.map((i) => i.brand));
  const categories = unique(items.map((i) => i.category));
  const colors = unique(items.map((i) => i.color));
  const sizes = unique(items.map((i) => (i.sizing != null ? String(i.sizing) : null)));

  const hasActive = Object.values(filters).some(Boolean);

  function set(key: keyof Filters, value: string) {
    onChange({ ...filters, [key]: value });
  }

  function reset() {
    onChange({ brand: '', category: '', color: '', priceMin: '', priceMax: '', sizing: '' });
  }

  return (
    <div className="space-y-5 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
      <div className="flex items-center justify-between">
        <span className="font-semibold" style={{ color: '#1c1917', fontSize: '13px' }}>Filters</span>
        {hasActive && (
          <button
            onClick={reset}
            className="text-xs hover:underline transition-colors"
            style={{ color: '#a8a29e' }}
          >
            Clear all
          </button>
        )}
      </div>

      {brands.length > 1 && (
        <FilterGroup label="Brand">
          {brands.map((b) => (
            <FilterChip
              key={b}
              label={b}
              active={filters.brand === b}
              onClick={() => set('brand', filters.brand === b ? '' : b)}
            />
          ))}
        </FilterGroup>
      )}

      {categories.length > 0 && (
        <FilterGroup label="Category">
          {categories.map((c) => (
            <FilterChip
              key={c}
              label={c}
              active={filters.category === c}
              onClick={() => set('category', filters.category === c ? '' : c)}
            />
          ))}
        </FilterGroup>
      )}

      {colors.length > 0 && (
        <FilterGroup label="Color">
          {colors.map((c) => (
            <FilterChip
              key={c}
              label={c}
              active={filters.color === c}
              onClick={() => set('color', filters.color === c ? '' : c)}
            />
          ))}
        </FilterGroup>
      )}

      {sizes.length > 0 && (
        <FilterGroup label="Size">
          {sizes.map((s) => (
            <FilterChip
              key={s}
              label={s}
              active={filters.sizing === s}
              onClick={() => set('sizing', filters.sizing === s ? '' : s)}
            />
          ))}
        </FilterGroup>
      )}

      <FilterGroup label="Price">
        <div className="flex items-center gap-1.5 w-full">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceMin}
            onChange={(e) => set('priceMin', e.target.value)}
            className="w-full px-2 py-1.5 border border-[#e5e0d8] rounded-lg text-xs bg-[#faf9f7] focus:outline-none focus:ring-1 focus:ring-[#1c1917]"
            style={{ color: '#1c1917' }}
          />
          <span style={{ color: '#c4bdb4' }}>–</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceMax}
            onChange={(e) => set('priceMax', e.target.value)}
            className="w-full px-2 py-1.5 border border-[#e5e0d8] rounded-lg text-xs bg-[#faf9f7] focus:outline-none focus:ring-1 focus:ring-[#1c1917]"
            style={{ color: '#1c1917' }}
          />
        </div>
      </FilterGroup>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p
        className="uppercase mb-2"
        style={{
          fontSize: '9px', fontWeight: 700, letterSpacing: '1.8px',
          color: '#a8a29e',
        }}
      >
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-2.5 py-1 rounded-full text-xs border transition-colors"
      style={
        active
          ? { background: '#1c1917', color: '#faf9f7', borderColor: '#1c1917' }
          : { background: 'transparent', color: '#78716c', borderColor: '#e5e0d8' }
      }
    >
      {label}
    </button>
  );
}
