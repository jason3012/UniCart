/**
 * Generic site adapter.
 *
 * Uses a SiteConfig to extract product data from any registered site.
 * Runs the same 4-layer pipeline as the frozen extract.ts, but the
 * site_json layer reads __NEXT_DATA__ via declarative path config
 * rather than brand-specific hardcoded logic.
 *
 * Confidence for __NEXT_DATA__ hits is 0.82 (vs 0.95 for dedicated
 * adapters) to reflect that generic path traversal is less validated.
 */

import type { ProductCandidate } from "../types/index.js";
import type { SiteConfig } from "./sites.js";
import { isCurrencyUSD } from "../core/normalize/price.js";
import { normalizeString, isValidTitle, isValidImageUrl } from "../core/normalize/text.js";
import { bestCandidate } from "../core/confidence/score.js";
import {
  extractFromJsonLd,
  extractFromMeta,
  extractFromDomFallback,
} from "./shared-extractors.js";

const NEXT_DATA_CONFIDENCE = 0.82;

export function extractGeneric(
  config: SiteConfig,
  doc: Document,
  url: string
): ProductCandidate {
  const layers: ProductCandidate[] = [
    extractFromJsonLd(doc),
    extractFromMeta(doc),
    extractFromNextData(config, doc),
    extractFromDomFallback(doc),
  ];

  // Apply dom overrides on top of DOM fallback
  if (config.domOverrides) {
    layers.push(extractFromDomOverrides(config.domOverrides, doc));
  }

  const merged = mergeCandidates(layers);

  // URL regex for product_id — runs as fallback normally, or at high confidence
  // when preferUrlProductId is set (overrides JSON-LD sku which may be variant-specific)
  if (config.productIdUrlPattern) {
    const match = url.match(config.productIdUrlPattern);
    if (match?.[1] && (!merged.product_id || config.preferUrlProductId)) {
      merged.product_id = {
        value: match[1],
        source: "dom",
        confidence: config.preferUrlProductId ? 0.95 : 0.78,
      };
    }

    // Drawer fallback: listing-page hover panel (e.g. COS quick-view).
    // URL won't match the product pattern, so extract from the first panel link's href.
    if (!merged.product_id && config.drawerProductLinkSelector) {
      const drawerLink = doc.querySelector(config.drawerProductLinkSelector);
      const href = drawerLink?.getAttribute("href") ?? "";
      const drawerMatch = href.match(config.productIdUrlPattern);
      if (drawerMatch?.[1]) {
        merged.product_id = {
          value: drawerMatch[1],
          source: "dom",
          confidence: 0.72,
        };
      }
    }
  }

  // Brand is always set from config (highest authority)
  merged.brand = { value: config.displayName, source: "site_json", confidence: 0.99 };

  return merged;
}

// ---------------------------------------------------------------------------
// __NEXT_DATA__ extraction
// ---------------------------------------------------------------------------

function extractFromNextData(
  config: SiteConfig,
  doc: Document
): ProductCandidate {
  if (!config.nextDataPaths?.length) return {};

  const el = doc.getElementById("__NEXT_DATA__");
  if (!el?.textContent) return {};

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(el.textContent) as Record<string, unknown>;
  } catch {
    return {};
  }

  for (const pathConfig of config.nextDataPaths) {
    const product = safeGet<Record<string, unknown>>(data, pathConfig.path);
    if (!product || typeof product !== "object") continue;

    const c: ProductCandidate = {};

    // title
    const nameField = pathConfig.nameField ?? "name";
    const name = asString(product[nameField]);
    if (name && isValidTitle(name)) {
      c.title = { value: normalizeString(name), source: "site_json", confidence: NEXT_DATA_CONFIDENCE };
    }

    // product_id — try configured field, then common fallbacks
    const idField = pathConfig.idField ?? "id";
    const id =
      asString(product[idField]) ??
      asString(product["productId"]) ??
      asString(product["sku"]);
    if (id) {
      c.product_id = { value: id, source: "site_json", confidence: NEXT_DATA_CONFIDENCE };
    }

    // price
    if (pathConfig.pricePath && pathConfig.currencyPath) {
      const priceVal = safeGet<unknown>(product, pathConfig.pricePath);
      const currency = asString(safeGet(product, pathConfig.currencyPath)) ?? "";
      if (isCurrencyUSD(currency) && priceVal !== undefined) {
        const amount =
          typeof priceVal === "number" ? priceVal : parseFloat(String(priceVal));
        if (!isNaN(amount) && amount > 0) {
          c.price_usd = { value: amount, source: "site_json", confidence: NEXT_DATA_CONFIDENCE };
        }
      }
    }

    // image
    if (pathConfig.imagePath) {
      const imgRaw = asString(safeGet(product, pathConfig.imagePath));
      if (imgRaw) {
        const resolved = imgRaw.startsWith("//") ? "https:" + imgRaw : imgRaw;
        if (isValidImageUrl(resolved)) {
          c.image_url = { value: resolved, source: "site_json", confidence: NEXT_DATA_CONFIDENCE };
        }
      }
    }

    // color
    if (pathConfig.colorPath) {
      const color = asString(safeGet(product, pathConfig.colorPath));
      if (color) {
        c.color = { value: normalizeString(color), source: "site_json", confidence: NEXT_DATA_CONFIDENCE };
      }
    }

    // If we extracted at least a title or product_id, this path worked — stop
    if (c.title || c.product_id) return c;
  }

  return {};
}

// ---------------------------------------------------------------------------
// DOM overrides
// ---------------------------------------------------------------------------

function extractFromDomOverrides(
  overrides: NonNullable<SiteConfig["domOverrides"]>,
  doc: Document
): ProductCandidate {
  const c: ProductCandidate = {};

  if (overrides.titleSelectors) {
    for (const sel of overrides.titleSelectors) {
      const text = doc.querySelector(sel)?.textContent?.trim();
      if (text && isValidTitle(text)) {
        c.title = { value: normalizeString(text), source: "dom", confidence: 0.6 };
        break;
      }
    }
  }

  if (overrides.colorSelectors) {
    for (const sel of overrides.colorSelectors) {
      const text = doc.querySelector(sel)?.textContent?.trim();
      if (text) {
        c.color = { value: normalizeString(text), source: "dom", confidence: 0.6 };
        break;
      }
    }
  }

  if (overrides.productIdSelectors) {
    for (const sel of overrides.productIdSelectors) {
      const el = doc.querySelector(sel);
      const text =
        el?.getAttribute("data-product-id") ??
        el?.getAttribute("data-productid") ??
        el?.textContent?.trim();
      if (text) {
        c.product_id = { value: text, source: "dom", confidence: 0.65 };
        break;
      }
    }
  }

  return c;
}

// ---------------------------------------------------------------------------
// Merge
// ---------------------------------------------------------------------------

function mergeCandidates(layers: ProductCandidate[]): ProductCandidate {
  const fields: (keyof ProductCandidate)[] = [
    "title", "brand", "price_usd", "category", "sizing",
    "color", "image_url", "product_id", "material",
  ];

  const merged: ProductCandidate = {};
  for (const field of fields) {
    const all = layers
      .map((l) => l[field])
      .filter((c): c is NonNullable<typeof c> => c !== undefined);
    const best = bestCandidate(all as Parameters<typeof bestCandidate>[0]);
    if (best) (merged as Record<string, unknown>)[field] = best;
  }
  return merged;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function asString(v: unknown): string | null {
  if (typeof v === "string" && v.trim()) return v.trim();
  if (typeof v === "number") return String(v);
  return null;
}

/** Navigate a dotted path safely, supports numeric indices (e.g. "images.0.url") */
function safeGet<T>(obj: unknown, path: string): T | null {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return null;
    if (Array.isArray(current)) {
      const index = parseInt(part, 10);
      current = isNaN(index) ? undefined : current[index];
    } else {
      current = (current as Record<string, unknown>)[part];
    }
  }
  return (current as T) ?? null;
}
