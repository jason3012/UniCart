#!/usr/bin/env tsx
/**
 * Fixture generator — creates a fixture from a live product page or a saved HTML file.
 *
 * Usage (auto-fetch — works for most sites):
 *   npm run gen-fixture -- <url>
 *   npm run gen-fixture -- <url> --brand "My Brand"
 *
 * Usage (manual HTML — for sites with bot protection like COS):
 *   npm run gen-fixture -- <url> --html ~/Downloads/product.html
 *
 *   To get the HTML: open the product page in Chrome → Cmd+S → "Webpage, HTML Only"
 *
 * Output:
 *   testing/fixtures/<brand-slug>/<product-slug>/input.html
 *   testing/fixtures/<brand-slug>/<product-slug>/url.txt
 *   testing/fixtures/<brand-slug>/<product-slug>/golden.json  ← DRAFT, review before committing
 */

import { chromium } from "@playwright/test";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { JSDOM } from "jsdom";
import { SITE_REGISTRY } from "../src/registry/sites.js";
import { extractWithRegistry } from "../src/registry/index.js";

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
if (!args.length || args[0].startsWith("--")) {
  console.error(
    "Usage:\n" +
    "  npm run gen-fixture -- <url>\n" +
    "  npm run gen-fixture -- <url> --html ~/Downloads/product.html\n" +
    "  npm run gen-fixture -- <url> --brand 'Display Name'"
  );
  process.exit(1);
}

const url = args[0];
const brandOverrideIdx = args.indexOf("--brand");
const brandOverride = brandOverrideIdx !== -1 ? args[brandOverrideIdx + 1] : null;
const htmlFileIdx = args.indexOf("--html");
const htmlFilePath = htmlFileIdx !== -1 ? args[htmlFileIdx + 1] : null;

// ---------------------------------------------------------------------------
// Determine brand
// ---------------------------------------------------------------------------

let hostname: string;
try {
  hostname = new URL(url).hostname;
} catch {
  console.error(`Invalid URL: ${url}`);
  process.exit(1);
}

const config = SITE_REGISTRY.find((c) => hostname.includes(c.hostname));
const displayName = brandOverride ?? config?.displayName;

if (!displayName) {
  console.error(
    `No registry entry found for ${hostname}.\n` +
    `Add a SiteConfig to SITE_REGISTRY in src/registry/sites.ts first,\n` +
    `or pass --brand "Brand Name" to override.`
  );
  process.exit(1);
}

const brandSlug = slugify(displayName);

// ---------------------------------------------------------------------------
// Determine fixture slug from URL
// ---------------------------------------------------------------------------

const urlObj = new URL(url);
const pathParts = urlObj.pathname
  .split("/")
  .filter(Boolean)
  .map((s) => s.replace(/\.[a-z]{2,5}$/i, "")) // strip extensions like .html
  .map(slugify)
  .filter((s) => s.length > 0);
const productSlug = pathParts[pathParts.length - 1] ?? "product";
const fixtureDir = resolve(`testing/fixtures/${brandSlug}/${productSlug}`);

// ---------------------------------------------------------------------------
// Get HTML — either from a saved file or by fetching live
// ---------------------------------------------------------------------------

let inputHtml: string;

if (htmlFilePath) {
  // Manual mode: user saved the page from their browser
  console.log(`\nReading HTML from ${htmlFilePath} …`);
  const rawHtml = readFileSync(resolve(htmlFilePath), "utf-8");
  inputHtml = extractMinimalHtml(rawHtml, url);
} else {
  // Auto mode: fetch with Playwright
  console.log(`\nFetching ${url} …`);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    extraHTTPHeaders: {
      "Accept-Language": "en-US,en;q=0.9",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    },
  });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
  } catch {
    // Timeout can happen on slow/protected sites — try to grab what loaded
    console.warn("Warning: page did not reach networkidle. Extracting what was loaded.");
  }

  const extractedHtml = await page.evaluate(() => {
    const parts: string[] = [];

    const nextData = document.getElementById("__NEXT_DATA__");
    if (nextData) parts.push(nextData.outerHTML);

    for (const s of document.querySelectorAll('script[type="application/ld+json"]')) {
      parts.push(s.outerHTML);
    }

    for (const m of document.querySelectorAll("meta")) {
      const prop = m.getAttribute("property") ?? m.getAttribute("name") ?? "";
      if (prop.startsWith("og:") || prop.startsWith("product:")) {
        parts.push(m.outerHTML);
      }
    }

    const h1 = document.querySelector("h1");
    if (h1) parts.push(h1.outerHTML);

    for (const sel of ["[data-testid*='price']", "[class*='price']", "[itemprop='price']"]) {
      const el = document.querySelector(sel);
      if (el) { parts.push(el.outerHTML); break; }
    }

    const title = document.querySelector("title");
    if (title) parts.push(title.outerHTML);

    return parts.join("\n");
  });

  await browser.close();

  inputHtml = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n${extractedHtml}\n</head>\n<body>\n</body>\n</html>`;
}

// ---------------------------------------------------------------------------
// Write fixture files
// ---------------------------------------------------------------------------

mkdirSync(fixtureDir, { recursive: true });
writeFileSync(`${fixtureDir}/input.html`, inputHtml);
writeFileSync(`${fixtureDir}/url.txt`, url + "\n");

console.log(`Written: testing/fixtures/${brandSlug}/${productSlug}/input.html`);
console.log(`Written: testing/fixtures/${brandSlug}/${productSlug}/url.txt`);

// ---------------------------------------------------------------------------
// Generate draft golden.json
// ---------------------------------------------------------------------------

const dom = new JSDOM(inputHtml, { url });
const result = extractWithRegistry(dom.window.document as unknown as Document, url);

const golden = {
  success: result.success,
  site: result.site,
  product: result.product
    ? {
        title: result.product.title,
        brand: result.product.brand,
        product_id: result.product.product_id,
        image_url: result.product.image_url,
        price_usd: result.product.price_usd,
        color: result.product.color,
        material: result.product.material,
      }
    : null,
};

const goldenJson = JSON.stringify(golden, null, 2);
writeFileSync(`${fixtureDir}/golden.json`, goldenJson + "\n");

console.log(`\n--- Draft golden.json ---\n`);
console.log(goldenJson);

if (!result.success) {
  console.log(`\nExtraction errors:`);
  for (const err of result.errors) console.log(`  ${err}`);
  console.log(`\nIf product_id is missing, add productIdUrlPattern or nextDataPaths to the`);
  console.log(`SiteConfig for ${hostname} in src/registry/sites.ts, then re-run.`);
} else {
  console.log(`\nExtraction succeeded! Review the draft golden and correct any wrong values.`);
}

console.log(`\nNext steps:`);
console.log(`  1. Review testing/fixtures/${brandSlug}/${productSlug}/golden.json`);
console.log(`  2. npm run test:fixture`);
console.log(`  3. git add testing/fixtures/${brandSlug}/${productSlug}/`);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/**
 * From a full saved HTML page, extract only the elements the extractor needs.
 * This strips the bulk of the page and produces a minimal input.html.
 */
function extractMinimalHtml(rawHtml: string, pageUrl: string): string {
  const dom = new JSDOM(rawHtml, { url: pageUrl });
  const doc = dom.window.document;
  const parts: string[] = [];

  const nextData = doc.getElementById("__NEXT_DATA__");
  if (nextData) parts.push(nextData.outerHTML);

  for (const s of doc.querySelectorAll('script[type="application/ld+json"]')) {
    parts.push(s.outerHTML);
  }

  for (const m of doc.querySelectorAll("meta")) {
    const prop = m.getAttribute("property") ?? m.getAttribute("name") ?? "";
    if (prop.startsWith("og:") || prop.startsWith("product:")) {
      parts.push(m.outerHTML);
    }
  }

  const h1 = doc.querySelector("h1");
  if (h1) parts.push(h1.outerHTML);

  for (const sel of ["[data-testid*='price']", "[class*='price']", "[itemprop='price']"]) {
    const el = doc.querySelector(sel);
    if (el) { parts.push(el.outerHTML); break; }
  }

  const title = doc.querySelector("title");
  if (title) parts.push(title.outerHTML);

  return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n${parts.join("\n")}\n</head>\n<body>\n</body>\n</html>`;
}
