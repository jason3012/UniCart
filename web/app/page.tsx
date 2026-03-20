import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight mb-4">UniCart</h1>
        <p className="text-lg text-gray-500 mb-8">
          Save items from Zara and Uniqlo with one click. Filter, sort, and
          compare — all in one place.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Sign in
          </Link>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Get the extension
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 text-sm text-gray-500">
          <div>
            <div className="text-2xl mb-2">🛍</div>
            <div className="font-medium text-gray-900 mb-1">Save instantly</div>
            Click the extension on any Zara or Uniqlo product page.
          </div>
          <div>
            <div className="text-2xl mb-2">🔍</div>
            <div className="font-medium text-gray-900 mb-1">Filter &amp; sort</div>
            By brand, category, color, size, and price.
          </div>
          <div>
            <div className="text-2xl mb-2">⚖</div>
            <div className="font-medium text-gray-900 mb-1">Compare</div>
            Select 2–4 items for a side-by-side view.
          </div>
        </div>
      </div>
    </main>
  );
}
