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
    <div
      className="fixed bottom-0 left-0 right-0 z-20 border-t border-[#e5e0d8]"
      style={{
        background: 'rgba(250,249,247,0.95)',
        backdropFilter: 'blur(12px)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <span className="text-sm text-[#78716c]">
          <span className="font-semibold text-[#1c1917]">{count}</span>{' '}
          item{count !== 1 ? 's' : ''} selected
          {!canCompare && (
            <span className="text-[#a8a29e]"> — select at least 2 to compare</span>
          )}
          {count === 4 && (
            <span className="text-[#a8a29e]"> — maximum reached</span>
          )}
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={onClear}
            className="text-sm text-[#78716c] hover:text-[#1c1917] transition-colors"
          >
            Clear
          </button>
          <button
            onClick={onCompare}
            disabled={!canCompare}
            className="px-4 py-2 bg-[#1c1917] text-[#faf9f7] text-sm rounded-lg font-medium hover:bg-[#2e2b28] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Compare {count > 0 && `(${count})`}
          </button>
        </div>
      </div>
    </div>
  );
}
