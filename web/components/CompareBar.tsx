'use client';

interface Props {
  count: number;
  onCompare: () => void;
  onClear: () => void;
}

export default function CompareBar({ count, onCompare, onClear }: Props) {
  if (count === 0) return null;

  const canCompare = count >= 2;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-200 bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <span className="text-sm text-gray-600">
          <strong>{count}</strong> item{count !== 1 ? 's' : ''} selected
          {!canCompare && (
            <span className="text-gray-400"> — select at least 2 to compare</span>
          )}
          {count === 4 && (
            <span className="text-gray-400"> — maximum reached</span>
          )}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={onClear}
            className="text-sm text-gray-400 hover:text-gray-700 underline"
          >
            Clear
          </button>
          <button
            onClick={onCompare}
            disabled={!canCompare}
            className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg font-medium hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Compare {count > 0 && `(${count})`}
          </button>
        </div>
      </div>
    </div>
  );
}
