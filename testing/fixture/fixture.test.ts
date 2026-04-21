/**
 * Fixture / snapshot tests.
 *
 * Each fixture lives in testing/fixtures/<brand>/<fixture-name>/
 * and contains:
 *   - input.html   — minimal product-root HTML snippet + relevant <script> tags
 *   - golden.json  — expected ExtractionResult fields (title, brand, image_url, product_id required)
 *
 * To add a fixture:
 *   1. Create the directory + input.html + golden.json
 *   2. Re-run `npm run test:fixture`
 *
 * Golden JSON shape (partial — only the fields you want to assert):
 * {
 *   "success": true,
 *   "site": "zara",
 *   "product": {
 *     "title": "SLIM FIT JEANS",
 *     "brand": "Zara",
 *     "product_id": "05682327",
 *     "image_url": "https://...",
 *     "price_usd": 49.90,       // optional
 *     "category": "...",        // optional
 *     "color": "..."            // optional
 *   }
 * }
 */

import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, resolve } from "path";
import { JSDOM } from "jsdom";
import { extractWithRegistry } from "../../src/registry/index.js";
import type { ExtractionResult } from "../../src/types/index.js";

const FIXTURES_DIR = resolve("testing/fixtures");
const BRANDS = readdirSync(FIXTURES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

// Gate thresholds
const REQUIRED_FIELD_THRESHOLD = 0.9; // 90%
const PRICE_THRESHOLD = 0.8; // 80%

interface GoldenProduct {
  title?: string;
  brand?: string;
  product_id?: string;
  image_url?: string;
  price_usd?: number;
  category?: string;
  color?: string;
}

interface GoldenFile {
  success: boolean;
  site: string;
  product: GoldenProduct;
  // If price is expected but unknown (USD page but exact value not hardcoded), set price_usd_present: true
  price_usd_present?: boolean;
}

interface FixtureResult {
  name: string;
  passed: boolean;
  errors: string[];
  priceTested: boolean;
  priceCorrect: boolean;
}

function loadFixtures(brand: string): { url: string; html: string; golden: GoldenFile; name: string }[] {
  const brandDir = join(FIXTURES_DIR, brand);
  if (!existsSync(brandDir)) return [];

  return readdirSync(brandDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const dir = join(brandDir, d.name);
      const htmlPath = join(dir, "input.html");
      const goldenPath = join(dir, "golden.json");
      const urlPath = join(dir, "url.txt");

      if (!existsSync(htmlPath) || !existsSync(goldenPath)) return null;

      const html = readFileSync(htmlPath, "utf-8");
      const golden = JSON.parse(readFileSync(goldenPath, "utf-8")) as GoldenFile;
      const url = existsSync(urlPath)
        ? readFileSync(urlPath, "utf-8").trim()
        : `https://www.${brand}.com/us/en/fixture`;

      return { url, html, golden, name: d.name };
    })
    .filter((f): f is NonNullable<typeof f> => f !== null);
}

function runFixture(
  html: string,
  url: string,
  golden: GoldenFile
): FixtureResult {
  const dom = new JSDOM(html, { url });
  const result: ExtractionResult = extractWithRegistry(dom.window.document as unknown as Document, url);

  const errors: string[] = [];
  let priceTested = false;
  let priceCorrect = false;

  // success flag
  if (result.success !== golden.success) {
    errors.push(`success: got ${result.success}, expected ${golden.success}`);
  }

  // site
  if (result.site !== golden.site) {
    errors.push(`site: got "${result.site}", expected "${golden.site}"`);
  }

  const p = result.product;
  const g = golden.product;

  if (!p) {
    if (golden.success) errors.push("product is null but golden expects success");
    return { name: "", passed: errors.length === 0, errors, priceTested, priceCorrect };
  }

  // Required fields
  if (g.title !== undefined && p.title !== g.title) {
    errors.push(`title: got "${p.title}", expected "${g.title}"`);
  }
  if (g.brand !== undefined && p.brand !== g.brand) {
    errors.push(`brand: got "${p.brand}", expected "${g.brand}"`);
  }
  if (g.product_id !== undefined && p.product_id !== g.product_id) {
    errors.push(`product_id: got "${p.product_id}", expected "${g.product_id}"`);
  }
  if (g.image_url !== undefined && p.image_url !== g.image_url) {
    errors.push(`image_url: got "${p.image_url}", expected "${g.image_url}"`);
  }

  // Price
  if (g.price_usd !== undefined) {
    priceTested = true;
    if (Math.abs((p.price_usd ?? -1) - g.price_usd) < 0.01) {
      priceCorrect = true;
    } else {
      errors.push(`price_usd: got ${p.price_usd}, expected ${g.price_usd}`);
    }
  } else if (golden.price_usd_present) {
    priceTested = true;
    priceCorrect = p.price_usd !== null && p.price_usd > 0;
    if (!priceCorrect) errors.push("price_usd expected to be present but got null");
  }

  // Optional fields — only check if present in golden
  if (g.category != null && g.category !== "" && p.category === null) {
    errors.push(`category: got null, expected non-empty`);
  }
  if (g.color != null && g.color !== "" && p.color === null) {
    errors.push(`color: got null, expected non-empty`);
  }

  return {
    name: "",
    passed: errors.length === 0,
    errors,
    priceTested,
    priceCorrect,
  };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

for (const brand of BRANDS) {
  describe(`${brand} fixtures`, () => {
    const fixtures = loadFixtures(brand);

    if (fixtures.length === 0) {
      it.skip(`no fixtures found for ${brand} — add fixtures to testing/fixtures/${brand}/`, () => {});
      return;
    }

    const results: FixtureResult[] = [];

    for (const fixture of fixtures) {
      it(`[${brand}] ${fixture.name}`, () => {
        const r = runFixture(fixture.html, fixture.url, fixture.golden);
        r.name = fixture.name;
        results.push(r);
        if (r.errors.length > 0) {
          throw new Error(r.errors.join("\n"));
        }
      });
    }

    it(`[${brand}] required-field gate (≥${REQUIRED_FIELD_THRESHOLD * 100}%)`, () => {
      if (results.length === 0) return;
      const passed = results.filter((r) => r.passed).length;
      const rate = passed / results.length;
      expect(rate).toBeGreaterThanOrEqual(REQUIRED_FIELD_THRESHOLD);
    });

    it(`[${brand}] price gate (≥${PRICE_THRESHOLD * 100}% of USD fixtures)`, () => {
      const priceFixtures = results.filter((r) => r.priceTested);
      if (priceFixtures.length === 0) return;
      const priceRate =
        priceFixtures.filter((r) => r.priceCorrect).length /
        priceFixtures.length;
      expect(priceRate).toBeGreaterThanOrEqual(PRICE_THRESHOLD);
    });
  });
}
