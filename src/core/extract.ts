import type {
  ExtractionResult,
  ProductCandidate,
  ProductExtracted,
  ProductField,
  Site,
  FieldCandidate,
  Brand,
} from "../types/index.js";
import { detectSite } from "./detectSite.js";
import { bestCandidate } from "./confidence/score.js";
import { parsePriceUSD, isCurrencyUSD } from "./normalize/price.js";
import {
  normalizeString,
  isValidTitle,
  isValidImageUrl,
  normalizeBrand,
  brandFromSite,
} from "./normalize/text.js";
import { normalizeProductType } from "./normalize/category.js";
import { extractZara } from "../sites/zara.js";
import { extractUniqlo } from "../sites/uniqlo.js";

export interface ExtractOptions {
  debug?: boolean;
}

export function extract(
  doc: Document,
  url: string,
  options: ExtractOptions = {}
): ExtractionResult {
  const site = detectSite(url);

  if (site === "unknown") {
    return {
      success: false,
      site,
      product: null,
      errors: ["Unknown site: URL does not match zara.com or uniqlo.com"],
    };
  }

  const errors: string[] = [];
  const candidates: ProductCandidate[] = [];

  // Layer 1: JSON-LD (highest stability)
  try {
    candidates.push(extractFromJsonLd(doc));
  } catch (e) {
    errors.push(`JSON-LD extraction failed: ${String(e)}`);
  }

  // Layer 2: Meta tags
  try {
    candidates.push(extractFromMeta(doc));
  } catch (e) {
    errors.push(`Meta extraction failed: ${String(e)}`);
  }

  // Layer 3: Site adapter (site_json + site-specific DOM)
  try {
    const adapterResult =
      site === "zara" ? extractZara(doc, url) : extractUniqlo(doc, url);
    candidates.push(adapterResult);
  } catch (e) {
    errors.push(`Site adapter failed: ${String(e)}`);
  }

  // Layer 4: Generic DOM fallback
  try {
    candidates.push(extractFromDom(doc));
  } catch (e) {
    errors.push(`DOM extraction failed: ${String(e)}`);
  }

  // Merge: for each field, pick the best candidate across all layers
  const merged = mergeCandidates(candidates);

  // Brand is always derived from site detection (most reliable)
  merged.brand = {
    value: brandFromSite(site),
    source: "site_json",
    confidence: 0.99,
  };

  // Normalize and validate
  const product = buildProduct(merged, url, options.debug ?? false);

  const success =
    product.title !== null &&
    product.brand !== null &&
    product.image_url !== null &&
    product.product_id !== null;

  if (!success) {
    const missing: string[] = [];
    if (!product.title) missing.push("title");
    if (!product.brand) missing.push("brand");
    if (!product.image_url) missing.push("image_url");
    if (!product.product_id) missing.push("product_id");
    errors.push(`Required fields missing: ${missing.join(", ")}`);
  }

  return { success, site, product, errors };
}

// ---------------------------------------------------------------------------
// JSON-LD extraction
// ---------------------------------------------------------------------------

function extractFromJsonLd(doc: Document): ProductCandidate {
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

function findProductSchema(
  data: unknown
): Record<string, unknown> | null {
  if (!data || typeof data !== "object") return null;

  // Top-level array (Zara sends an array of per-variant Product objects)
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

  // @graph array
  if (Array.isArray(obj["@graph"])) {
    for (const item of obj["@graph"]) {
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

  // brand: handle both string ("ZARA") and object ({ name: "ZARA" })
  const brandRaw =
    typeof schema.brand === "string"
      ? schema.brand
      : schema.brand && typeof schema.brand === "object"
      ? ((schema.brand as Record<string, unknown>).name as string | undefined)
      : undefined;
  if (brandRaw) {
    const brand = normalizeBrand(brandRaw);
    if (brand) c.brand = { value: brand, source: "jsonld", confidence: 0.92 };
  }

  // image
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

  // product_id: prefer sku > productID > mpn
  const pid =
    asString(schema.sku) ?? asString(schema.productID) ?? asString(schema.mpn);
  if (pid) {
    c.product_id = { value: pid, source: "jsonld", confidence: 0.92 };
  }

  // price from offers
  const offersRaw = schema.offers;
  const offer =
    Array.isArray(offersRaw) ? offersRaw[0] : offersRaw;
  if (offer && typeof offer === "object") {
    const offerObj = offer as Record<string, unknown>;
    const currency = asString(offerObj.priceCurrency) ?? "";
    const priceRaw = offerObj.price ?? offerObj.lowPrice;
    if (isCurrencyUSD(currency) && priceRaw !== undefined) {
      const amount =
        typeof priceRaw === "number"
          ? priceRaw
          : parseFloat(String(priceRaw));
      if (!isNaN(amount) && amount > 0) {
        c.price_usd = { value: amount, source: "jsonld", confidence: 0.9 };
      }
    }
  }

  // category
  const cat = asString(schema.category);
  if (cat) {
    c.category = {
      value: cat,
      source: "jsonld",
      confidence: 0.85,
    };
  }

  // color (Zara includes this directly in the Product schema)
  const color = asString(schema.color);
  if (color) {
    c.color = { value: normalizeString(color), source: "jsonld", confidence: 0.85 };
  }

  return c;
}

// ---------------------------------------------------------------------------
// Meta tag extraction
// ---------------------------------------------------------------------------

function extractFromMeta(doc: Document): ProductCandidate {
  const c: ProductCandidate = {};

  const get = (selector: string): string | null =>
    doc
      .querySelector(`meta[property="${selector}"], meta[name="${selector}"]`)
      ?.getAttribute("content") ?? null;

  const ogTitle = get("og:title");
  if (ogTitle && isValidTitle(ogTitle)) {
    c.title = {
      value: normalizeString(ogTitle),
      source: "meta",
      confidence: 0.8,
    };
  }

  const ogImage = get("og:image");
  if (ogImage && isValidImageUrl(ogImage)) {
    c.image_url = { value: ogImage, source: "meta", confidence: 0.8 };
  }

  // Price from OG / product meta
  const amount = get("og:price:amount") ?? get("product:price:amount");
  const currency = get("og:price:currency") ?? get("product:price:currency");
  if (amount && currency && isCurrencyUSD(currency)) {
    const parsed = parseFloat(amount);
    if (!isNaN(parsed) && parsed > 0) {
      c.price_usd = { value: parsed, source: "meta", confidence: 0.8 };
    }
  }

  // Brand from meta
  const brandMeta = get("og:brand") ?? get("product:brand");
  if (brandMeta) {
    const brand = normalizeBrand(brandMeta);
    if (brand) c.brand = { value: brand, source: "meta", confidence: 0.8 };
  }

  return c;
}

// ---------------------------------------------------------------------------
// Generic DOM fallback
// ---------------------------------------------------------------------------

function extractFromDom(doc: Document): ProductCandidate {
  const c: ProductCandidate = {};

  // Product root: look for common containers
  const root =
    doc.querySelector("[data-testid='product-detail']") ??
    doc.querySelector("[class*='product-detail']") ??
    doc.querySelector("main") ??
    doc.body;

  if (!root) return c;

  // Title: first h1 in product root
  const h1 = root.querySelector("h1");
  if (h1?.textContent && isValidTitle(h1.textContent)) {
    c.title = {
      value: normalizeString(h1.textContent),
      source: "dom",
      confidence: 0.55,
    };
  }

  // Price: look for currency pattern
  const priceEl = findPriceElement(root);
  if (priceEl) {
    const parsed = parsePriceUSD(priceEl);
    if (parsed !== null) {
      c.price_usd = {
        value: parsed,
        source: "dom",
        confidence: 0.5,
        rawValue: priceEl,
      };
    }
  }

  // Category: breadcrumb
  const breadcrumb = findBreadcrumb(root, doc);
  if (breadcrumb) {
    c.category = {
      value: breadcrumb,
      source: "dom",
      confidence: 0.5,
    };
  }

  // Main image
  const imgEl = findMainImage(root);
  if (imgEl && isValidImageUrl(imgEl)) {
    c.image_url = { value: imgEl, source: "dom", confidence: 0.45 };
  }

  // Material: scan <li> elements for percentage-based composition strings
  const materialItems = Array.from(doc.querySelectorAll("li"))
    .filter(el => /^\d+%\s+\w+/i.test(el.textContent?.trim() ?? "") && el.children.length === 0)
    .map(el => el.textContent?.trim())
    .filter((t): t is string => Boolean(t));
  if (materialItems.length > 0) {
    c.material = { value: materialItems.join(", "), source: "dom", confidence: 0.55 };
  }

  return c;
}

function findPriceElement(root: Element): string | null {
  // Prefer elements with explicit price roles / test IDs
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

  // Drop first item if it's "Home" / site name, take last 2–3 segments
  const filtered = items.filter(
    (t) => !/^(home|inicio)$/i.test(t)
  );
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
  // Fallback: first large-ish img in root
  for (const img of root.querySelectorAll<HTMLImageElement>("img")) {
    const src = img.src ?? img.dataset?.src;
    if (src && (img.naturalWidth > 300 || img.width > 300)) {
      return resolveProtocol(src);
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Merge + build
// ---------------------------------------------------------------------------

function mergeCandidates(layers: ProductCandidate[]): ProductCandidate {
  const fields: (keyof ProductCandidate)[] = [
    "title",
    "brand",
    "price_usd",
    "category",
    "sizing",
    "color",
    "image_url",
    "product_id",
    "material",
  ];

  const merged: ProductCandidate = {};

  for (const field of fields) {
    const all = layers
      .map((l) => l[field])
      .filter((c): c is NonNullable<typeof c> => c !== undefined);

    // TypeScript: cast through unknown to avoid union complaints
    const best = bestCandidate(all as FieldCandidate<unknown>[]);
    if (best) {
      (merged as Record<string, unknown>)[field] = best;
    }
  }

  return merged;
}

function buildProduct(
  c: ProductCandidate,
  url: string,
  debug: boolean
): ProductExtracted {
  const product: ProductExtracted = {
    title: c.title ? normalizeString(c.title.value) : null,
    brand: c.brand?.value ?? null,
    price_usd: c.price_usd?.value ?? null,
    category: normalizeProductType(c.title?.value ?? null, c.category?.value ?? null),
    sizing: c.sizing?.value ?? null,
    color: c.color ? normalizeString(c.color.value) : null,
    image_url: resolveProtocol(c.image_url?.value ?? "") || null,
    product_id: c.product_id?.value?.trim() || null,
    material: c.material ? normalizeString(c.material.value) : null,
    url,
    field_sources: {},
    field_confidence: {},
  };

  // Validate
  if (product.title && !isValidTitle(product.title)) product.title = null;
  if (product.image_url && !isValidImageUrl(product.image_url))
    product.image_url = null;

  // Populate sources + confidence
  const fields: ProductField[] = [
    "title", "brand", "price_usd", "category", "sizing",
    "color", "image_url", "product_id", "material",
  ];
  for (const f of fields) {
    const cand = c[f as keyof ProductCandidate];
    if (cand) {
      product.field_sources[f] = cand.source;
      product.field_confidence[f] = cand.confidence;
    }
  }

  // Debug raw storage
  if (debug) {
    const raw: ProductExtracted["raw"] = {};
    for (const f of fields) {
      const cand = c[f as keyof ProductCandidate];
      if (cand && "rawValue" in cand && cand.rawValue) {
        raw[f] = { raw_value: cand.rawValue, raw_source: cand.source };
      }
    }
    if (Object.keys(raw).length > 0) product.raw = raw;
  }

  return product;
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
