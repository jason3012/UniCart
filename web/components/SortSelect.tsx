'use client';

export type SortKey = 'newest' | 'oldest' | 'price_asc' | 'price_desc' | 'brand' | 'category';

const OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'newest', label: 'Newest saved' },
  { value: 'oldest', label: 'Oldest saved' },
  { value: 'price_asc', label: 'Price: low → high' },
  { value: 'price_desc', label: 'Price: high → low' },
  { value: 'brand', label: 'Brand A → Z' },
  { value: 'category', label: 'Type A → Z' },
];

interface Props {
  value: SortKey;
  onChange: (v: SortKey) => void;
}

export default function SortSelect({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortKey)}
      className="text-sm border border-[#e5e0d8] rounded-lg px-3 py-1.5 bg-[#faf9f7] cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#1c1917] text-[#1c1917]"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
