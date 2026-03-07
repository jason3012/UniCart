# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UniCart is an extraction-first universal shopping cart.
- **Phase 1 (complete):** TypeScript extraction library — `src/`. All 66 tests passing.
- **Phase 2 (current):** Manifest V3 Chrome extension — see [`docs/phase2.md`](docs/phase2.md).
- **Phase 3 (deferred):** Website/web app.

## Commands

```bash
npm install           # install deps
npm run build         # tsc --noEmit (type check)
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
src/
  index.ts             # public re-exports
  types/index.ts       # all shared types
  core/
    extract.ts         # main entry: extract(document, url, options?): ExtractionResult
    detectSite.ts      # detectSite(url): "zara" | "uniqlo" | "unknown"
    normalize/
      price.ts         # parsePriceUSD(), isCurrencyUSD()
      text.ts          # normalizeString(), isValidTitle(), isValidImageUrl(), normalizeBrand()
      category.ts      # normalizeCategory()
    confidence/
      score.ts         # sourceConfidence(), bestCandidate()
  sites/
    zara.ts            # Zara adapter (extractZara)
    uniqlo.ts          # Uniqlo adapter (extractUniqlo)
testing/
  unit/                # pure unit tests — run without network
  fixture/             # snapshot tests against local HTML fixtures + golden JSON
    fixture.test.ts    # auto-discovers testing/fixtures/<brand>/<name>/
  integration/         # Playwright tests against live pages (requires bundle)
  fixtures/
    zara/              # add fixture subdirs here (input.html, golden.json, url.txt)
    uniqlo/            # add fixture subdirs here
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

## Phase 2 (Chrome Extension)

Full spec: [`docs/phase2.md`](docs/phase2.md)

- MV3 extension: manifest + service worker + content script + popup UI
- Content script calls `extract(document, url)` from Phase 1 — **`src/` is frozen. Do not modify any Phase 1 files.**
- Storage: `chrome.storage.local` only
- Entry point for bundling: `src/index.ts` → `dist/extractor.bundle.js`
- Extension source lives in `extension/` (to be created)

## Integration Tests (Test Level 3)

Add product URLs to `testing/integration/extraction.spec.ts` arrays, build a browser bundle first:
```bash
npx esbuild src/index.ts --bundle --outfile=dist/extractor.bundle.js --platform=browser
npx playwright test
```
