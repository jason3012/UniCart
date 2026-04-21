/**
 * Shared extraction helpers for the generic adapter.
 *
 * These are copies of the private functions in src/core/extract.ts that could
 * not be exported without modifying the frozen Phase 1 file. Do not diverge
 * from the originals — if extract.ts is ever unfrozen, delete this file and
 * re-export from there directly.
 *
 * One intentional difference: buildFromProductSchema() falls back to the raw
 * brand string at confidence 0.6 when normalizeBrand() returns null (i.e. for
 * brands other than Zara/Uniqlo). The extractWithRegistry orchestrator overrides
 * brand from config.displayName at 0.99 anyway, so this is always a no-op in
 * practice — it just avoids discarding the data entirely.
 */

import type { ProductCandidate } from "../types/index.js";
import { parsePriceUSD, isCurrencyUSD } from "../core/normalize/price.js";
import {
  normalizeString,
  isValidTitle,
  normalizeBrand,
} from "../core/normalize/text.js";

/**
 * Looser image URL check for the registry layer.
 * Exported so registry/index.ts can use it in buildProduct's validation pass.
 *
 * @public
 * The frozen isValidImageUrl() requires a standard file extension (.jpg etc),
 * which rejects many CDN URLs (Ralph Lauren's DemandWare, J.Crew's Scene7,
 * Shopify image servers, etc). This version accepts any https URL with a
 * substantive path that doesn't look like an HTML page.
 */
export function isValidImageUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return false;
    // Standard extension — always accept
    if (/\.(jpg|jpeg|png|webp|avif|gif|svg)(\?.*)?$/i.test(parsed.pathname)) return true;
    // Reject anything that looks like an HTML page
    if (/\.(html?|php|aspx?|jsp)$/i.test(parsed.pathname)) return false;
    // Accept CDN/image-server paths (substantive path, no obvious page extension)
    return parsed.pathname.length > 4;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// JSON-LD extraction
// ---------------------------------------------------------------------------

export function extractFromJsonLd(doc: Document): ProductCandidate {
  const scripts = doc.querySelectorAll('script[type="application/ld+json"]');
  for (const script of scripts) {
    try {
      const data = JSON.parse(script.textContent ?? "");
      const schema = findProductSchema(data);
      if (schema) return buildFromProductSchema(schema);
    } catch {
      continue;
    }
  }
  return {};
}

function findProductSchema(data: unknown): Record<string, unknown> | null {
  if (!data || typeof data !== "object") return null;

  if (Array.isArray(data)) {
    for (const item of data) {
      const found = findProductSchema(item);
      if (found) return found;
    }
    return null;
  }

  const obj = data as Record<string, unknown>;
  const type = obj["@type"];
  const isProduct =
    type === "Product" || (Array.isArray(type) && type.includes("Product"));
  if (isProduct) return obj;

  if (Array.isArray(obj["@graph"])) {
    for (const item of obj["@graph"]) {
      const found = findProductSchema(item);
      if (found) return found;
    }
  }

  // ProductGroup pattern (e.g. Ralph Lauren): search hasVariant for a Product
  if (Array.isArray(obj["hasVariant"])) {
    for (const item of obj["hasVariant"]) {
      const found = findProductSchema(item);
      if (found) return found;
    }
  }

  return null;
}

function buildFromProductSchema(
  schema: Record<string, unknown>
): ProductCandidate {
  const c: ProductCandidate = {};

  if (typeof schema.name === "string" && isValidTitle(schema.name)) {
    c.title = { value: normalizeString(schema.name), source: "jsonld", confidence: 0.92 };
  }

  const brandRaw =
    typeof schema.brand === "string"
      ? schema.brand
      : schema.brand && typeof schema.brand === "object"
      ? ((schema.brand as Record<string, unknown>).name as string | undefined)
      : undefined;
  if (brandRaw) {
    const brand = normalizeBrand(brandRaw);
    if (brand) {
      c.brand = { value: brand, source: "jsonld", confidence: 0.92 };
    } else {
      // Unknown brand — use raw value at lower confidence.
      // extractWithRegistry will override with config.displayName at 0.99.
      c.brand = { value: brandRaw.trim(), source: "jsonld", confidence: 0.6 };
    }
  }

  const img = schema.image;
  const imgUrl =
    typeof img === "string"
      ? img
      : Array.isArray(img) && typeof img[0] === "string"
      ? img[0]
      : typeof img === "object" && img !== null
      ? ((img as Record<string, unknown>).url as string | undefined)
      : undefined;
  if (imgUrl && isValidImageUrl(imgUrl)) {
    c.image_url = { value: imgUrl, source: "jsonld", confidence: 0.9 };
  }

  const pid =
    asString(schema.sku) ?? asString(schema.productID) ?? asString(schema.mpn);
  if (pid) {
    c.product_id = { value: pid, source: "jsonld", confidence: 0.92 };
  }

  const offersRaw = schema.offers;
  const offer = Array.isArray(offersRaw) ? offersRaw[0] : offersRaw;
  if (offer && typeof offer === "object") {
    const offerObj = offer as Record<string, unknown>;
    const currency = asString(offerObj.priceCurrency) ?? "";
    const priceRaw = offerObj.price ?? offerObj.lowPrice;
    if (isCurrencyUSD(currency) && priceRaw !== undefined) {
      const amount =
        typeof priceRaw === "number" ? priceRaw : parseFloat(String(priceRaw));
      if (!isNaN(amount) && amount > 0) {
        c.price_usd = { value: amount, source: "jsonld", confidence: 0.9 };
      }
    }
  }

  const cat = asString(schema.category);
  if (cat) {
    c.category = { value: cat, source: "jsonld", confidence: 0.85 };
  }

  const color = asString(schema.color);
  if (color) {
    c.color = { value: normalizeString(color), source: "jsonld", confidence: 0.85 };
  }

  return c;
}

// ---------------------------------------------------------------------------
// Meta tag extraction
// ---------------------------------------------------------------------------

export function extractFromMeta(doc: Document): ProductCandidate {
  const c: ProductCandidate = {};

  const get = (selector: string): string | null =>
    doc
      .querySelector(`meta[property="${selector}"], meta[name="${selector}"]`)
      ?.getAttribute("content") ?? null;

  const ogTitle = get("og:title");
  if (ogTitle && isValidTitle(ogTitle)) {
    c.title = { value: normalizeString(ogTitle), source: "meta", confidence: 0.8 };
  }

  const ogImage = get("og:image");
  if (ogImage && isValidImageUrl(ogImage)) {
    c.image_url = { value: ogImage, source: "meta", confidence: 0.8 };
  }

  const amount = get("og:price:amount") ?? get("product:price:amount");
  const currency = get("og:price:currency") ?? get("product:price:currency");
  if (amount && currency && isCurrencyUSD(currency)) {
    const parsed = parseFloat(amount);
    if (!isNaN(parsed) && parsed > 0) {
      c.price_usd = { value: parsed, source: "meta", confidence: 0.8 };
    }
  }

  const brandMeta = get("og:brand") ?? get("product:brand");
  if (brandMeta) {
    const brand = normalizeBrand(brandMeta);
    if (brand) {
      c.brand = { value: brand, source: "meta", confidence: 0.8 };
    } else {
      c.brand = { value: brandMeta.trim(), source: "meta", confidence: 0.6 };
    }
  }

  return c;
}

// ---------------------------------------------------------------------------
// Generic DOM fallback
// ---------------------------------------------------------------------------

export function extractFromDomFallback(doc: Document): ProductCandidate {
  const c: ProductCandidate = {};

  const root =
    doc.querySelector("[data-testid='product-detail']") ??
    doc.querySelector("[class*='product-detail']") ??
    doc.querySelector("main") ??
    doc.body;

  if (!root) return c;

  const h1 = root.querySelector("h1");
  if (h1?.textContent && isValidTitle(h1.textContent)) {
    c.title = {
      value: normalizeString(h1.textContent),
      source: "dom",
      confidence: 0.55,
    };
  }

  const priceEl = findPriceElement(root);
  if (priceEl) {
    const parsed = parsePriceUSD(priceEl);
    if (parsed !== null) {
      c.price_usd = { value: parsed, source: "dom", confidence: 0.5, rawValue: priceEl };
    }
  }

  const breadcrumb = findBreadcrumb(root, doc);
  if (breadcrumb) {
    c.category = { value: breadcrumb, source: "dom", confidence: 0.5 };
  }

  const imgEl = findMainImage(root);
  if (imgEl && isValidImageUrl(imgEl)) {
    c.image_url = { value: imgEl, source: "dom", confidence: 0.45 };
  }

  const sizeVal = findSelectedSize(root);
  if (sizeVal) {
    c.sizing = { value: sizeVal, source: "dom", confidence: 0.5 };
  }

  const materialItems = Array.from(doc.querySelectorAll("li"))
    .filter(
      (el) =>
        /^\d+%\s+\w+/i.test(el.textContent?.trim() ?? "") &&
        el.children.length === 0
    )
    .map((el) => el.textContent?.trim())
    .filter((t): t is string => Boolean(t));
  if (materialItems.length > 0) {
    c.material = { value: materialItems.join(", "), source: "dom", confidence: 0.55 };
  }

  return c;
}

function findPriceElement(root: Element): string | null {
  const selectors = [
    "[data-testid*='price']",
    "[class*='price']",
    "[itemprop='price']",
    "[class*='Price']",
  ];
  for (const sel of selectors) {
    const el = root.querySelector(sel);
    const text = el?.textContent?.trim();
    if (text && /\$/.test(text)) return text;
  }
  return null;
}

function findBreadcrumb(root: Element, doc: Document): string | null {
  const nav =
    doc.querySelector("[aria-label*='breadcrumb' i]") ??
    doc.querySelector("[class*='breadcrumb' i]") ??
    doc.querySelector("nav ol") ??
    root.querySelector("[class*='breadcrumb' i]");

  if (!nav) return null;

  const items = Array.from(nav.querySelectorAll("a, li, span"))
    .map((el) => el.textContent?.trim())
    .filter((t): t is string => Boolean(t) && t.length > 0);

  const filtered = items.filter((t) => !/^(home|inicio)$/i.test(t));
  return filtered.length > 0 ? filtered.join(" > ") : null;
}

function findMainImage(root: Element): string | null {
  const selectors = [
    "img[data-testid*='image']",
    "img[class*='main']",
    "img[class*='product']",
    "img[class*='hero']",
  ];
  for (const sel of selectors) {
    const img = root.querySelector<HTMLImageElement>(sel);
    const src = img?.src ?? img?.dataset?.src ?? img?.dataset?.lazySrc;
    if (src) return resolveProtocol(src);
  }
  for (const img of root.querySelectorAll<HTMLImageElement>("img")) {
    const src = img.src ?? img.dataset?.src;
    if (src && (img.naturalWidth > 300 || img.width > 300)) {
      return resolveProtocol(src);
    }
  }
  return null;
}

function findSelectedSize(root: Element): string | null {
  const SIZE_RE = /^(XXS|XS|S|M|L|XL|XXL|2XL|3XL|\d{1,3}(?:\.\d)?)$/i;

  const activeSelectors = [
    "[data-testid*='size'][aria-selected='true']",
    "[class*='size'][aria-selected='true']",
    "[class*='size'][class*='selected']",
    "[class*='size'][class*='active']",
    "button[class*='size'][aria-pressed='true']",
    "[data-size][aria-selected='true']",
  ];
  for (const sel of activeSelectors) {
    const text = root.querySelector(sel)?.textContent?.trim();
    if (text && SIZE_RE.test(text)) return text.toUpperCase();
  }

  // <select> with a non-placeholder selected option
  const sizeSelect = root.querySelector<HTMLSelectElement>(
    "select[class*='size'], select[data-testid*='size'], select[aria-label*='size' i]"
  );
  if (sizeSelect) {
    const opt = sizeSelect.options[sizeSelect.selectedIndex];
    if (opt && SIZE_RE.test(opt.value.trim())) return opt.value.trim().toUpperCase();
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

function resolveProtocol(url: string): string {
  if (!url) return url;
  if (url.startsWith("//")) return "https:" + url;
  return url;
}
