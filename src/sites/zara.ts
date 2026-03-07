/**
 * Zara site adapter.
 *
 * Zara runs on Next.js and embeds full product state in #__NEXT_DATA__.
 * This adapter reads that blob first (highest reliability), then falls back
 * to Zara-specific DOM patterns.
 *
 * URL pattern: https://www.zara.com/us/en/[name]-p[ID].html
 */

import type { ProductCandidate } from "../types/index.js";
import { isCurrencyUSD } from "../core/normalize/price.js";
import { normalizeString, isValidTitle, isValidImageUrl } from "../core/normalize/text.js";
import { normalizeCategory } from "../core/normalize/category.js";

export function extractZara(doc: Document, url: string): ProductCandidate {
  const c: ProductCandidate = {};

  // ── 1. __NEXT_DATA__ (site_json) ──────────────────────────────────────────
  const nextData = readNextData(doc);
  if (nextData) {
    const fromNext = buildFromZaraNextData(nextData);
    Object.assign(c, fromNext);
  }

  // ── 2. Product reference from on-page display (highest priority) ──────────
  // Zara shows a reference like "4365/457/710" on every product page.
  // DOM scan for this pattern — confidence beats JSON-LD sku (0.92).
  const domPid = extractProductIdFromDom(doc);
  if (domPid) c.product_id = domPid;

  // ── 3. Product reference from image URL (reliable fallback) ───────────────
  // Zara CDN image filenames encode {productRef}{colorCode}-p.jpg
  // e.g. "04365457710-p.jpg" → "4365457710" (strips leading zero to match display).
  // Confidence 0.93 > JSON-LD sku (0.92), so this wins in fixture context where
  // there is no rendered page body containing the on-page reference text.
  if (!c.product_id || c.product_id.confidence < 0.93) {
    const imgPid = extractProductIdFromImageUrl(doc);
    if (imgPid) c.product_id = imgPid;
  }

  // ── 4. URL-based product_id (last resort — incomplete, missing color code) ─
  if (!c.product_id) {
    const urlPid = extractProductIdFromUrl(url);
    if (urlPid) c.product_id = urlPid;
  }

  // ── 5. DOM fallbacks for other missing fields ─────────────────────────────
  if (!c.color) {
    const color = extractColorFromDom(doc);
    if (color) c.color = color;
  }
  if (!c.category) {
    const cat = extractCategoryFromDom(doc);
    if (cat) c.category = cat;
  }

  return c;
}

// ---------------------------------------------------------------------------
// __NEXT_DATA__ reader
// ---------------------------------------------------------------------------

function readNextData(doc: Document): Record<string, unknown> | null {
  try {
    const el = doc.getElementById("__NEXT_DATA__");
    if (!el?.textContent) return null;
    return JSON.parse(el.textContent) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function buildFromZaraNextData(
  data: Record<string, unknown>
): ProductCandidate {
  // Try known pageProps paths (Zara has changed this structure over time)
  const pageProps = safeGet<Record<string, unknown>>(
    data,
    "props.pageProps"
  );
  if (!pageProps) return {};

  // Find the product object — Zara has used several keys
  const product =
    safeGet<Record<string, unknown>>(pageProps, "ssrProductDetail.product") ??
    safeGet<Record<string, unknown>>(pageProps, "product") ??
    deepFindProduct(pageProps);

  if (!product) return {};

  const c: ProductCandidate = {};

  // title
  const name = asString(product.name);
  if (name && isValidTitle(name)) {
    c.title = { value: normalizeString(name), source: "site_json", confidence: 0.95 };
  }

  // product_id
  const id = asString(product.id);
  if (id) {
    c.product_id = { value: id, source: "site_json", confidence: 0.97 };
  }

  // price — Zara uses { value, currency } or { value, text }
  const price = safeGet<Record<string, unknown>>(product, "price");
  if (price) {
    const currency = asString(price.currency) ?? asString(price.currencyIso) ?? "";
    const amount = price.value;
    if (isCurrencyUSD(currency) && typeof amount === "number" && amount > 0) {
      c.price_usd = { value: amount, source: "site_json", confidence: 0.95 };
    }
  }

  // color — Zara embeds selected color in detail.colors[0].name
  const colors = safeGet<Array<Record<string, unknown>>>(product, "detail.colors");
  if (Array.isArray(colors) && colors.length > 0) {
    const colorName = asString(colors[0].name);
    if (colorName) {
      c.color = {
        value: normalizeString(colorName),
        source: "site_json",
        confidence: 0.85,
      };
    }
  }

  // image — product.media.images, prefer kind === "image" or first entry
  const images = safeGet<Array<Record<string, unknown>>>(product, "media.images");
  if (Array.isArray(images) && images.length > 0) {
    const main =
      images.find((img) => img.kind === "image" || img.kind === "main") ??
      images[0];
    const rawUrl = asString(main?.url);
    if (rawUrl) {
      const resolved = rawUrl.startsWith("//") ? "https:" + rawUrl : rawUrl;
      if (isValidImageUrl(resolved)) {
        c.image_url = { value: resolved, source: "site_json", confidence: 0.95 };
      }
    }
  }

  // category — Zara sometimes puts it in breadcrumbs or seoData
  const seoCategory =
    safeGet<string>(pageProps, "seoData.category") ??
    safeGet<string>(pageProps, "canonicalData.category");
  if (seoCategory) {
    c.category = {
      value: normalizeCategory(seoCategory),
      source: "site_json",
      confidence: 0.85,
    };
  }

  return c;
}

// ---------------------------------------------------------------------------
// Image-URL-based product_id
// Zara CDN filenames: {productRef}{colorCode}-p.jpg (e.g. 04365457710-p.jpg)
// Stripping the leading zero gives the displayed reference without slashes.
// ---------------------------------------------------------------------------

function extractProductIdFromImageUrl(
  doc: Document
): ProductCandidate["product_id"] | null {
  // Scan JSON-LD for image URLs (works even in minimal fixture HTML)
  const scripts = doc.querySelectorAll('script[type="application/ld+json"]');
  for (const script of scripts) {
    try {
      const data = JSON.parse(script.textContent ?? "");
      const items = Array.isArray(data) ? data : [data];
      for (const item of items) {
        const imgUrl = typeof item.image === "string" ? item.image : null;
        if (imgUrl) {
          const pid = zaraRefFromImageUrl(imgUrl);
          if (pid) return pid;
        }
      }
    } catch {
      continue;
    }
  }
  // Also try <img> tags in the rendered DOM
  for (const img of doc.querySelectorAll<HTMLImageElement>("img[src]")) {
    const pid = zaraRefFromImageUrl(img.src);
    if (pid) return pid;
  }
  return null;
}

function zaraRefFromImageUrl(url: string): ProductCandidate["product_id"] | null {
  // Match the numeric segment before "-p" in the CDN path
  const match = url.match(/\/(\d{10,})-p[./]/);
  if (!match) return null;
  // Strip leading zeros to match Zara's displayed reference format (e.g. 4365457710)
  const value = match[1].replace(/^0+/, "") || match[1];
  return { value, source: "dom", confidence: 0.93 };
}

// ---------------------------------------------------------------------------
// URL-based product_id
// Zara URLs: /en-us/item-name-p12345678.html or /item-name-p12345678.html
// ---------------------------------------------------------------------------

function extractProductIdFromUrl(
  url: string
): ProductCandidate["product_id"] | null {
  const match = url.match(/-p(\d{8,})\./i);
  if (match) {
    // Confidence 0.75: URL only encodes the first two reference portions
    // (e.g. "04365457"), missing the color code ("710"). The on-page reference
    // display (XXXX/XXX/XXX) is preferred when available at confidence 0.92+.
    return { value: match[1], source: "dom", confidence: 0.75 };
  }
  return null;
}

// ---------------------------------------------------------------------------
// DOM fallbacks
// ---------------------------------------------------------------------------

function extractColorFromDom(doc: Document): ProductCandidate["color"] | null {
  // Zara marks the active color swatch with aria-selected or a highlight class
  const selectors = [
    "[data-qa-label*='color-name']",
    "[class*='color-name']",
    "[aria-selected='true'][data-qa-label*='color']",
    ".product-color-extended-name__main",
  ];
  for (const sel of selectors) {
    const el = doc.querySelector(sel);
    const text = el?.textContent?.trim();
    if (text) {
      return { value: normalizeString(text), source: "dom", confidence: 0.6 };
    }
  }
  return null;
}

function extractCategoryFromDom(
  doc: Document
): ProductCandidate["category"] | null {
  const nav =
    doc.querySelector("[aria-label*='breadcrumb' i]") ??
    doc.querySelector("[class*='breadcrumb' i]");

  if (!nav) return null;

  const items = Array.from(nav.querySelectorAll("a, li, span"))
    .map((el) => el.textContent?.trim())
    .filter((t): t is string => Boolean(t) && !/^home$/i.test(t));

  if (items.length > 0) {
    return {
      value: normalizeCategory(items.join(" > ")),
      source: "dom",
      confidence: 0.6,
    };
  }
  return null;
}

function extractProductIdFromDom(
  doc: Document
): ProductCandidate["product_id"] | null {
  // Zara displays a reference number on the page in the format XXXX/XXX/XXX
  // e.g. "4365/457/710" — this is the canonical product+color reference.
  // Search known selectors first, then fall back to a full-page regex scan.
  const referenceSelectors = [
    "[data-qa-action='product-detail-info-color-copy']",
    "[class*='reference']",
    "[data-qa-label*='reference']",
    "[class*='product-detail__reference']",
  ];
  for (const sel of referenceSelectors) {
    const el = doc.querySelector(sel);
    const text = el?.textContent ?? "";
    const match = text.match(/(\d{4}\/\d{3}\/\d{3})/);
    if (match) {
      return {
        value: match[1].replace(/\//g, ""),
        source: "dom",
        confidence: 0.98,
      };
    }
  }

  // Full-page scan as fallback (still high confidence — pattern is very specific)
  const bodyText = doc.body?.textContent ?? "";
  const bodyMatch = bodyText.match(/(\d{4}\/\d{3}\/\d{3})/);
  if (bodyMatch) {
    return {
      value: bodyMatch[1].replace(/\//g, ""),
      source: "dom",
      confidence: 0.92,
    };
  }

  // data-productid or data-product-id attributes (last resort)
  const el = doc.querySelector("[data-productid], [data-product-id]");
  const pid =
    el?.getAttribute("data-productid") ??
    el?.getAttribute("data-product-id");
  if (pid?.trim()) {
    return { value: pid.trim(), source: "dom", confidence: 0.7 };
  }

  return null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function asString(v: unknown): string | null {
  if (typeof v === "string" && v.trim()) return v.trim();
  if (typeof v === "number") return String(v);
  return null;
}

/** Navigate a dotted path safely. */
function safeGet<T>(obj: unknown, path: string): T | null {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return null;
    current = (current as Record<string, unknown>)[part];
  }
  return (current as T) ?? null;
}

/**
 * Last-resort: recursively search pageProps for an object that looks like a
 * Zara product (has `id`, `name`, and `price` or `media`).
 */
function deepFindProduct(
  obj: unknown,
  depth = 0
): Record<string, unknown> | null {
  if (depth > 6 || !obj || typeof obj !== "object") return null;

  const o = obj as Record<string, unknown>;

  if (
    typeof o.name === "string" &&
    o.name.length > 2 &&
    (o.id !== undefined || o.price !== undefined || o.media !== undefined)
  ) {
    return o;
  }

  for (const val of Object.values(o)) {
    if (val && typeof val === "object" && !Array.isArray(val)) {
      const found = deepFindProduct(val, depth + 1);
      if (found) return found;
    }
  }
  return null;
}
