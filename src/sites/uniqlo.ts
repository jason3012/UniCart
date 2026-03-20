/**
 * Uniqlo site adapter.
 *
 * Uniqlo US runs on Next.js (or a hybrid SSR/SPA) and embeds product state
 * in #__NEXT_DATA__. This adapter reads that first, then falls back to
 * Uniqlo-specific DOM patterns.
 *
 * URL patterns:
 *   https://www.uniqlo.com/us/en/products/E460342-000/00
 *   https://www.uniqlo.com/us/en/products/E460342-000
 *   Product ID is the "E" prefixed code (e.g. E460342).
 */

import type { ProductCandidate } from "../types/index.js";
import { isCurrencyUSD } from "../core/normalize/price.js";
import {
  normalizeString,
  isValidTitle,
  isValidImageUrl,
} from "../core/normalize/text.js";

export function extractUniqlo(doc: Document, url: string): ProductCandidate {
  const c: ProductCandidate = {};

  // ── 1. __NEXT_DATA__ (site_json) ──────────────────────────────────────────
  const nextData = readNextData(doc);
  if (nextData) {
    Object.assign(c, buildFromUniqloNextData(nextData));
  }

  // ── 2. URL-based product_id ───────────────────────────────────────────────
  if (!c.product_id) {
    const pid = extractProductIdFromUrl(url);
    if (pid) c.product_id = pid;
  }

  // ── 3. DOM fallbacks ──────────────────────────────────────────────────────
  if (!c.material) {
    const mat = extractMaterialFromDom(doc);
    if (mat) c.material = mat;
  }
  if (!c.color) {
    const color = extractColorFromDom(doc);
    if (color) c.color = color;
  }
  if (!c.category) {
    const cat = extractCategoryFromDom(doc);
    if (cat) c.category = cat;
  }
  if (!c.product_id) {
    const pid = extractProductIdFromDom(doc, url);
    if (pid) c.product_id = pid;
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

function buildFromUniqloNextData(
  data: Record<string, unknown>
): ProductCandidate {
  const pageProps = safeGet<Record<string, unknown>>(data, "props.pageProps");
  if (!pageProps) return {};

  // Uniqlo has used several keys across regions/versions
  const product =
    safeGet<Record<string, unknown>>(pageProps, "productDetail") ??
    safeGet<Record<string, unknown>>(pageProps, "product") ??
    safeGet<Record<string, unknown>>(pageProps, "productInfo") ??
    deepFindProduct(pageProps);

  if (!product) return {};

  const c: ProductCandidate = {};

  // title — Uniqlo uses "name" at product root
  const name = asString(product.name);
  if (name && isValidTitle(name)) {
    c.title = {
      value: normalizeString(name),
      source: "site_json",
      confidence: 0.95,
    };
  }

  // product_id — "productId" or "id" field
  const id =
    asString(product.productId) ??
    asString(product.productID) ??
    asString(product.id);
  if (id) {
    c.product_id = { value: id, source: "site_json", confidence: 0.97 };
  }

  // price — Uniqlo structure: prices.base.value / prices.base.currency
  const priceBase = safeGet<Record<string, unknown>>(product, "prices.base");
  if (priceBase) {
    const currency = asString(priceBase.currency) ?? "";
    const amount = priceBase.value;
    if (isCurrencyUSD(currency) && typeof amount === "number" && amount > 0) {
      c.price_usd = { value: amount, source: "site_json", confidence: 0.95 };
    }
  }

  // Alternative price location: product.priceGroup
  if (!c.price_usd) {
    const priceGroup = safeGet<Array<Record<string, unknown>>>(
      product,
      "priceGroup"
    );
    if (Array.isArray(priceGroup)) {
      for (const pg of priceGroup) {
        const currency = asString(pg.currency) ?? "";
        const amount = pg.base ?? pg.price;
        if (isCurrencyUSD(currency) && typeof amount === "number" && amount > 0) {
          c.price_usd = { value: amount, source: "site_json", confidence: 0.9 };
          break;
        }
      }
    }
  }

  // color — Uniqlo embeds color in chips or l2s (product variants)
  const colorFromChips = extractColorFromProductData(product);
  if (colorFromChips) c.color = colorFromChips;

  // image — Uniqlo uses "images" array or "mainImage"
  const imageUrl = extractImageFromProductData(product);
  if (imageUrl) c.image_url = imageUrl;

  // category
  const category =
    asString(
      safeGet<string>(product, "breadcrumbs") ??
      safeGet<string>(pageProps, "categoryName")
    );
  if (category) {
    c.category = {
      value: category,
      source: "site_json",
      confidence: 0.85,
    };
  }

  return c;
}

function extractColorFromProductData(
  product: Record<string, unknown>
): ProductCandidate["color"] | null {
  // chips array: [{ colorCode, name, ... }]
  const chips = safeGet<Array<Record<string, unknown>>>(product, "chips");
  if (Array.isArray(chips) && chips.length > 0) {
    const name = asString(chips[0].name);
    if (name) return { value: normalizeString(name), source: "site_json", confidence: 0.85 };
  }

  // l2s array (product variants, each has a color object)
  const l2s = safeGet<Array<Record<string, unknown>>>(product, "l2s");
  if (Array.isArray(l2s) && l2s.length > 0) {
    const colorObj = safeGet<Record<string, unknown>>(l2s[0], "color");
    const name = asString(colorObj?.name);
    if (name) return { value: normalizeString(name), source: "site_json", confidence: 0.8 };
  }

  return null;
}

function extractImageFromProductData(
  product: Record<string, unknown>
): ProductCandidate["image_url"] | null {
  // Uniqlo image CDN: images[0].url or mainImage.url
  const mainImage = safeGet<Record<string, unknown>>(product, "mainImage");
  if (mainImage) {
    const url = asString(mainImage.url);
    if (url && isValidImageUrl(resolveProtocol(url))) {
      return { value: resolveProtocol(url), source: "site_json", confidence: 0.95 };
    }
  }

  const images = safeGet<Array<Record<string, unknown>>>(product, "images");
  if (Array.isArray(images) && images.length > 0) {
    const url = asString(images[0].url ?? images[0].src);
    if (url && isValidImageUrl(resolveProtocol(url))) {
      return { value: resolveProtocol(url), source: "site_json", confidence: 0.9 };
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// URL-based product_id
// ---------------------------------------------------------------------------

function extractProductIdFromUrl(
  url: string
): ProductCandidate["product_id"] | null {
  // /products/E460342-000 or /products/E460342
  const match = url.match(/\/products\/(E\d+)/i);
  if (match) {
    return { value: match[1].toUpperCase(), source: "dom", confidence: 0.88 };
  }
  return null;
}

// ---------------------------------------------------------------------------
// DOM fallbacks
// ---------------------------------------------------------------------------

function extractMaterialFromDom(
  doc: Document
): ProductCandidate["material"] | null {
  // Uniqlo's "Materials / Care" accordion: id="productMaterialDescription-content"
  // Content is in the DOM even when collapsed (aria-hidden but not removed).
  const section = doc.getElementById("productMaterialDescription-content");
  if (section) {
    const els = Array.from(section.querySelectorAll('[data-testid="ITOTypography"]'));
    for (let i = 0; i < els.length; i++) {
      if (/fabric\s*details/i.test(els[i].textContent?.trim() ?? "")) {
        const raw = els[i + 1]?.textContent?.trim();
        if (raw) {
          const line = raw.split(/\r?\n/).find((l) => /\d+%/.test(l))?.trim();
          if (line) return { value: line, source: "dom", confidence: 0.8 };
        }
      }
    }
  }
  // Fallback: percentage pattern scan
  const items = Array.from(doc.querySelectorAll("li, p"))
    .filter(
      (el) =>
        /^\d+%\s+\w+/i.test(el.textContent?.trim() ?? "") &&
        el.children.length === 0
    )
    .map((el) => el.textContent?.trim())
    .filter((t): t is string => Boolean(t));
  if (items.length > 0) {
    return { value: items[0], source: "dom", confidence: 0.65 };
  }
  return null;
}

function extractColorFromDom(doc: Document): ProductCandidate["color"] | null {
  const selectors = [
    "[data-testid='color-name']",
    "[class*='color-name']",
    "[class*='colorName']",
    "[aria-selected='true'][data-testid*='color']",
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
      value: items.join(" > "),
      source: "dom",
      confidence: 0.6,
    };
  }
  return null;
}

function extractProductIdFromDom(
  doc: Document,
  url: string
): ProductCandidate["product_id"] | null {
  // data attribute
  const el = doc.querySelector("[data-product-id], [data-productid]");
  const pid =
    el?.getAttribute("data-product-id") ??
    el?.getAttribute("data-productid");
  if (pid?.trim()) {
    return { value: pid.trim(), source: "dom", confidence: 0.7 };
  }

  // Try extracting from any <script> that references productId
  const scripts = doc.querySelectorAll("script:not([src])");
  for (const s of scripts) {
    const m = s.textContent?.match(/"productId"\s*:\s*"(E\d+)"/i);
    if (m) return { value: m[1].toUpperCase(), source: "dom", confidence: 0.75 };
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

function safeGet<T>(obj: unknown, path: string): T | null {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return null;
    current = (current as Record<string, unknown>)[part];
  }
  return (current as T) ?? null;
}

function resolveProtocol(url: string): string {
  if (!url) return url;
  if (url.startsWith("//")) return "https:" + url;
  return url;
}

function deepFindProduct(
  obj: unknown,
  depth = 0
): Record<string, unknown> | null {
  if (depth > 6 || !obj || typeof obj !== "object") return null;
  const o = obj as Record<string, unknown>;

  if (
    typeof o.name === "string" &&
    o.name.length > 2 &&
    (o.productId !== undefined || o.id !== undefined || o.prices !== undefined)
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
