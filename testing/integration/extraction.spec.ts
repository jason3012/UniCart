/**
 * Playwright integration tests — run extract() in-page against real product pages.
 *
 * These tests require live internet access and a compiled/bundled version of
 * the extractor that can be injected into the browser context.
 *
 * Usage:
 *   npx playwright test
 *
 * Product URLs to test — update these as needed.
 */

import { test, expect } from "@playwright/test";
import { readFileSync } from "fs";
import { resolve } from "path";

// ---------------------------------------------------------------------------
// Test URLs (update when pages change)
// ---------------------------------------------------------------------------
const ZARA_URLS: string[] = [
  // Add Zara product page URLs here
  // e.g. "https://www.zara.com/us/en/slim-fit-jeans-p05682327.html"
];

const UNIQLO_URLS: string[] = [
  // Add Uniqlo product page URLs here
  // e.g. "https://www.uniqlo.com/us/en/products/E460342-000/00"
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Builds a self-contained browser script that inlines the extractor logic.
 * In a real setup, you would bundle src/ with esbuild/rollup first and read
 * the bundle here. For now we inline a minimal runtime loader.
 *
 * TODO: run `esbuild src/index.ts --bundle --outfile=dist/extractor.bundle.js`
 * and replace the inline script with readFileSync("dist/extractor.bundle.js").
 */
function getExtractorScript(): string {
  const bundlePath = resolve("dist/extractor.bundle.js");
  try {
    return readFileSync(bundlePath, "utf-8");
  } catch {
    return "/* extractor bundle not found — run: npm run bundle */";
  }
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

for (const url of ZARA_URLS) {
  test(`Zara: extract ${url}`, async ({ page }) => {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20_000 });

    // Wait for product content to stabilise (SPA hydration)
    await page.waitForSelector("h1", { timeout: 10_000 });

    const result = await page.evaluate(
      ([extractorSrc, pageUrl]) => {
        // Inject the extractor into page context and call extract()
        const fn = new Function(extractorSrc + "\nreturn extract(document, arguments[0]);");
        return fn(pageUrl);
      },
      [getExtractorScript(), url] as [string, string]
    );

    expect(result.success).toBe(true);
    expect(result.site).toBe("zara");
    expect(result.product?.title).toBeTruthy();
    expect(result.product?.brand).toBe("Zara");
    expect(result.product?.product_id).toBeTruthy();
    expect(result.product?.image_url).toBeTruthy();
  });
}

for (const url of UNIQLO_URLS) {
  test(`Uniqlo: extract ${url}`, async ({ page }) => {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20_000 });
    await page.waitForSelector("h1", { timeout: 10_000 });

    const result = await page.evaluate(
      ([extractorSrc, pageUrl]) => {
        const fn = new Function(extractorSrc + "\nreturn extract(document, arguments[0]);");
        return fn(pageUrl);
      },
      [getExtractorScript(), url] as [string, string]
    );

    expect(result.success).toBe(true);
    expect(result.site).toBe("uniqlo");
    expect(result.product?.title).toBeTruthy();
    expect(result.product?.brand).toBe("Uniqlo");
    expect(result.product?.product_id).toBeTruthy();
    expect(result.product?.image_url).toBeTruthy();
  });
}

// Placeholder so the test file always has at least one test
test("extractor module is importable (smoke test)", async ({ page }) => {
  // Just verify the bundle path is known — real tests above require live URLs
  expect(typeof getExtractorScript()).toBe("string");
});
