# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Rules

**Never commit or push `CLAUDE.md` or any file in `.claude/` to the repository.** These are local-only Claude configuration files and must not be included in any git commit or PR.

## Project Overview

UniCart is an extraction-first universal shopping cart.
- **Phase 1 (complete):** TypeScript extraction library — `src/`. All 66 tests passing.
- **Phase 2 (complete):** Manifest V3 Chrome extension — `extension/`. See [`docs/phase2.md`](docs/phase2.md).
- **Phase 3 (current):** Website/web app — Next.js + Supabase. See [`docs/phase3.md`](docs/phase3.md).

## Commands

```bash
npm install           # install deps
npm run build         # tsc --noEmit (type check)
npm run build:ext     # bundle src/index.ts → extension/extractor.bundle.js (esbuild)
npm test              # run all unit + fixture tests (vitest)
npm run test:unit     # unit tests only  (testing/unit/)
npm run test:fixture  # fixture tests    (testing/fixture/)
npm run test:e2e      # playwright integration tests (requires live internet + bundle)
npm run test:watch    # vitest watch mode
npm run lint          # eslint src/
```

To run a single test file:
```bash
npx vitest run testing/unit/price.test.ts
```

## Architecture

### Module layout

```
src/                         # Phase 1 — FROZEN. Do not modify.
  index.ts                   # public re-exports
  types/index.ts             # all shared types
  core/
    extract.ts               # main entry: extract(document, url, options?): ExtractionResult
    detectSite.ts            # detectSite(url): "zara" | "uniqlo" | "unknown"
    normalize/
      price.ts               # parsePriceUSD(), isCurrencyUSD()
      text.ts                # normalizeString(), isValidTitle(), isValidImageUrl(), normalizeBrand()
      category.ts            # normalizeCategory()
    confidence/
      score.ts               # sourceConfidence(), bestCandidate()
  sites/
    zara.ts                  # Zara adapter (extractZara)
    uniqlo.ts                # Uniqlo adapter (extractUniqlo)
extension/                   # Phase 2 — Chrome MV3 extension
  manifest.json
  background.js              # service worker: injection, validation, dedup, storage
  popup.html / popup.js      # cart list UI
  edit.html / edit.js        # item edit form
  styles.css
  extractor.bundle.js        # built artifact (npm run build:ext) — do not edit directly
testing/
  unit/                      # pure unit tests — run without network
  fixture/                   # snapshot tests against local HTML fixtures + golden JSON
    fixture.test.ts          # auto-discovers testing/fixtures/<brand>/<name>/
  integration/               # Playwright tests against live pages (requires bundle)
  fixtures/
    zara/                    # input.html, golden.json, url.txt
    uniqlo/
```

### Extraction pipeline (in order)

1. **JSON-LD** — `script[type="application/ld+json"]` with `@type: Product`; source = `"jsonld"`
2. **Meta tags** — `og:title`, `og:image`, price meta; source = `"meta"`
3. **Site adapter** — reads `#__NEXT_DATA__` (both sites use Next.js); source = `"site_json"`
4. **Generic DOM fallback** — scoped to product root node; source = `"dom"`
5. **Merge** — for each field, `bestCandidate()` picks highest-confidence across all layers
6. **Brand** override — always derived from site detection (confidence 0.99), never from content
7. **Normalize + validate** — all fields cleaned before output

### Output contract (`ProductExtracted`)

```ts
{
  title: string | null
  brand: "Zara" | "Uniqlo" | null
  price_usd: number | null   // null if currency cannot be confirmed as USD
  category: string | null
  sizing: number | null      // null unless page exposes a numeric size default
  color: string | null
  image_url: string | null
  product_id: string | null  // required for success
  url: string
  field_sources: Record<ProductField, FieldSourceType>
  field_confidence: Record<ProductField, number>  // 0..1
  raw?: Record<ProductField, { raw_value, raw_source }>  // debug flag only
}
```

**Extraction is NOT successful if `product_id` is null.**

`product_id` precedence (both adapters): site_json → URL regex → DOM `data-*` attribute.

**Auto-save readiness:** `title`, `brand`, `image_url`, `product_id` must all be non-null.

### Site-specific notes

**Zara** (`sites/zara.ts`):
- URL product_id pattern: `/-p(\d{8,})\./` (e.g. `-p05682327.html`)
- `__NEXT_DATA__` paths tried: `props.pageProps.ssrProductDetail.product`, `.product`, or `deepFindProduct()`
- Image URLs are protocol-relative `//...` and get resolved to `https:`

**Uniqlo** (`sites/uniqlo.ts`):
- URL product_id pattern: `/products/(E\d+)/i` (e.g. `E460342`)
- `__NEXT_DATA__` paths tried: `props.pageProps.productDetail`, `.product`, `.productInfo`
- Color lives in `product.chips[0].name` or `product.l2s[0].color.name`

## Key Constraints

- **`src/` is frozen.** Phase 1 files must not be modified. The extension content script calls `extract(document, url)` from Phase 1 unmodified.
- **`sizing`:** only numeric when page clearly shows a numeric default; otherwise `null`. Never guess alpha → number.
- **`price_usd`:** conservative parser — rejects European decimal format (e.g. `$49,90`), negative values, and anything without a `$` or `USD` indicator.
- **`raw` storage:** only populated when `options.debug = true`; never stores full HTML.
- **Site adapters:** return `ProductCandidate` with confidence scores; never force a field value without a score.
- **Browser environment:** `src/` uses only DOM APIs (no Node.js built-ins). Tests use jsdom via vitest's `environment: "jsdom"`.

## Adding Fixtures (Test Level 2)

```
testing/fixtures/zara/my-product/
  input.html   ← minimal HTML: <script id="__NEXT_DATA__">, <script type="application/ld+json">,
                  relevant <meta> tags, and product-root HTML snippet
  golden.json  ← expected result (see fixture.test.ts header for shape)
  url.txt      ← the original product URL (used as the `url` argument to extract())
```

Run `npm run test:fixture` to validate. Gate thresholds: ≥ 90% required fields, ≥ 80% price accuracy.

## Phase 2 (Chrome Extension) — Complete

Full spec: [`docs/phase2.md`](docs/phase2.md)

- MV3 extension with service worker (`background.js`), popup UI, and edit UI
- Content script injects `extractor.bundle.js` on demand via `scripting.executeScript`
- Storage: `chrome.storage.local` only; keyed by `(brand, product_id)` for dedup
- Rebuild bundle after any `src/` change: `npm run build:ext`

## Phase 3 (Website) — Current

Full spec: [`docs/phase3.md`](docs/phase3.md)

**Stack:** Next.js (App Router) on Vercel + Supabase (Postgres + Auth)

**Routes:**
- `/` — landing page
- `/login` — Supabase Auth (magic link or OAuth)
- `/app` — protected cart dashboard
- `/compare` — protected compare view (2–4 items via `?ids=...`)
- `/settings` — optional preferences

**API surface** (Next.js Route Handlers, all require auth):
- `POST /api/items/upsert` — insert/update by `(user_id, brand, product_id)`
- `POST /api/items/bulk_upsert` — sync many local items
- `GET /api/items` — list for authenticated user
- `DELETE /api/items/:id` — remove item

**Sync strategy (Option A):** Supabase is the source of truth. Extension authenticates via a sign-in handshake: "Sign in" opens `/login?source=extension`, then the extension uses the resulting session to write items directly to Supabase.

**Canonical Item schema** (Supabase `items` table):
- Required: `id` (uuid), `user_id`, `url`, `brand`, `product_id`, `title`, `image_url`, `created_at`, `updated_at`
- Optional: `price_usd`, `category`, `color`, `sizing`
- Uniqueness: `(user_id, brand, product_id)`

**Image handling:** Use retailer `image_url` directly in Next.js `<Image>` with allow-listed domains. Only proxy if CORS issues arise.

**Extension changes for Phase 3:** Add "Open Web App" button in popup + account state indicator (signed-in email or "Sign in to sync" link).

## Integration Tests (Test Level 3)

Add product URLs to `testing/integration/extraction.spec.ts` arrays, build a browser bundle first:
```bash
npx esbuild src/index.ts --bundle --outfile=dist/extractor.bundle.js --platform=browser
npx playwright test
```
