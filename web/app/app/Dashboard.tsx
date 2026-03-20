'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import type { Item } from '@/lib/types';
import ItemCard from '@/components/ItemCard';
import FilterPanel from '@/components/FilterPanel';
import SortSelect from '@/components/SortSelect';
import CompareBar from '@/components/CompareBar';

type SortKey = 'newest' | 'oldest' | 'price_asc' | 'price_desc' | 'brand' | 'category';

export interface Filters {
  brand: string;
  category: string;
  color: string;
  priceMin: string;
  priceMax: string;
  sizing: string;
}

const EMPTY_FILTERS: Filters = {
  brand: '',
  category: '',
  color: '',
  priceMin: '',
  priceMax: '',
  sizing: '',
};

function applyFilters(items: Item[], filters: Filters): Item[] {
  return items.filter((item) => {
    if (filters.brand && item.brand.toLowerCase() !== filters.brand.toLowerCase()) return false;
    if (filters.category && item.category?.toLowerCase() !== filters.category.toLowerCase()) return false;
    if (filters.color && item.color?.toLowerCase() !== filters.color.toLowerCase()) return false;
    if (filters.priceMin && (item.price_usd ?? Infinity) < Number(filters.priceMin)) return false;
    if (filters.priceMax && (item.price_usd ?? -Infinity) > Number(filters.priceMax)) return false;
    if (filters.sizing && String(item.sizing) !== filters.sizing) return false;
    return true;
  });
}

function applySort(items: Item[], sort: SortKey): Item[] {
  const sorted = [...items];
  switch (sort) {
    case 'newest': return sorted.sort((a, b) => b.created_at.localeCompare(a.created_at));
    case 'oldest': return sorted.sort((a, b) => a.created_at.localeCompare(b.created_at));
    case 'price_asc': return sorted.sort((a, b) => (a.price_usd ?? Infinity) - (b.price_usd ?? Infinity));
    case 'price_desc': return sorted.sort((a, b) => (b.price_usd ?? -Infinity) - (a.price_usd ?? -Infinity));
    case 'brand': return sorted.sort((a, b) => a.brand.localeCompare(b.brand));
    case 'category': return sorted.sort((a, b) => (a.category ?? '').localeCompare(b.category ?? ''));
    default: return sorted;
  }
}

export default function Dashboard({ initialItems }: { initialItems: Item[] }) {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>(initialItems);
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [sort, setSort] = useState<SortKey>('newest');
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  async function refreshItems() {
    setRefreshing(true);
    try {
      const res = await fetch('/api/items');
      if (res.ok) {
        const { items: fresh } = await res.json();
        setItems(fresh);
      }
    } finally {
      setRefreshing(false);
    }
  }

  const displayed = useMemo(
    () => applySort(applyFilters(items, filters), sort),
    [items, filters, sort],
  );

  function toggleCompare(id: string) {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 4) return prev; // silently cap at 4
      return [...prev, id];
    });
  }

  async function handleDelete(id: string) {
    const res = await fetch(`/api/items/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      setCompareIds((prev) => prev.filter((x) => x !== id));
    }
  }

  function handleCompare() {
    if (compareIds.length < 2) return;
    router.push(`/compare?ids=${compareIds.join(',')}`);
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">
          My cart
          <span className="ml-2 text-sm font-normal text-gray-400">
            {displayed.length} item{displayed.length !== 1 ? 's' : ''}
          </span>
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={refreshItems}
            disabled={refreshing}
            title="Refresh items"
            className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors disabled:opacity-40"
          >
            <span className={refreshing ? 'inline-block animate-spin' : ''}>↻</span>
          </button>
          <SortSelect value={sort} onChange={setSort} />
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar filters */}
        <aside className="hidden md:block w-52 shrink-0">
          <FilterPanel items={items} filters={filters} onChange={setFilters} />
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {displayed.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400">
              <div className="text-4xl mb-4">🛍</div>
              {items.length === 0 ? (
                <>
                  <p className="font-medium mb-1">No saved items yet</p>
                  <p className="text-sm">Use the extension on a Zara or Uniqlo product page to save items.</p>
                </>
              ) : (
                <>
                  <p className="font-medium mb-1">No items match your filters</p>
                  <button
                    onClick={() => setFilters(EMPTY_FILTERS)}
                    className="text-sm underline mt-1"
                  >
                    Clear all filters
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayed.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  selected={compareIds.includes(item.id)}
                  onToggleCompare={() => toggleCompare(item.id)}
                  onDelete={() => handleDelete(item.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <CompareBar
        count={compareIds.length}
        onCompare={handleCompare}
        onClear={() => setCompareIds([])}
      />
    </div>
  );
}
