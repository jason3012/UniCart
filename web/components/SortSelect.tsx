'use client';

const OPTIONS = [
  { value: 'newest', label: 'Newest saved' },
  { value: 'oldest', label: 'Oldest saved' },
  { value: 'price_asc', label: 'Price: low → high' },
  { value: 'price_desc', label: 'Price: high → low' },
  { value: 'brand', label: 'Brand A → Z' },
  { value: 'category', label: 'Type A → Z' },
];

interface Props {
  value: string;
  onChange: (v: string) => void; // eslint-disable-line no-unused-vars
}

export default function SortSelect({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-900"
    >
      {OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
