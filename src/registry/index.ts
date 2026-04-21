/**
 * Registry-aware extraction entry point.
 *
 * extractWithRegistry() wraps the frozen extract() function:
 *   - For zara.com / uniqlo.com → delegates to frozen extract() unchanged
 *   - For any site in SITE_REGISTRY → runs the generic adapter
 *   - For unrecognized sites → returns { success: false } with an explicit error
 *
 * The frozen extract() and all its behavior for the two original brands
 * are completely unaffected.
 */

import type {
  ExtractionResult,
  ProductCandidate,
  ProductExtracted,
  ProductField,
} from "../types/index.js";
import { detectSite } from "../core/detectSite.js";
import { extract } from "../core/extract.js";
import {
  normalizeString,
  isValidTitle,
} from "../core/normalize/text.js";
import { isValidImageUrl } from "./shared-extractors.js";
import { normalizeProductType } from "../core/normalize/category.js";
import { SITE_REGISTRY } from "./sites.js";
import { extractGeneric } from "./extract-generic.js";

// Re-export frozen API for back-compat (extension bundle currently calls UniCart.extract)
export { extract } from "../core/extract.js";

export function extractWithRegistry(
  doc: Document,
  url: string
): ExtractionResult {
  // Frozen path — Zara and Uniqlo are handled identically to before
  const site = detectSite(url);
  if (site !== "unknown") {
    return extract(doc, url);
  }

  // Registry lookup
  let hostname: string;
  try {
    hostname = new URL(url).hostname;
  } catch {
    return {
      success: false,
      site: "unknown",
      product: null,
      errors: [`Invalid URL: ${url}`],
    };
  }

  const config = SITE_REGISTRY.find((c) => hostname.includes(c.hostname));
  if (!config) {
    return {
      success: false,
      site: "unknown",
      product: null,
      errors: [
        `Unsupported site: ${hostname}. Add an entry to SITE_REGISTRY in src/registry/sites.ts.`,
      ],
    };
  }

  const errors: string[] = [];
  let candidate: ProductCandidate;
  try {
    candidate = extractGeneric(config, doc, url);
  } catch (e) {
    return {
      success: false,
      site: "unknown",
      product: null,
      errors: [`Generic extraction failed for ${hostname}: ${String(e)}`],
    };
  }

  const product = buildProduct(candidate, url);

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

  return { success, site: "unknown", product, errors };
}

// ---------------------------------------------------------------------------
// buildProduct — local copy using exported normalize utilities.
// Mirrors the private buildProduct() in src/core/extract.ts.
// ---------------------------------------------------------------------------

function buildProduct(c: ProductCandidate, url: string): ProductExtracted {
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

  if (product.title && !isValidTitle(product.title)) product.title = null;
  if (product.image_url && !isValidImageUrl(product.image_url)) product.image_url = null;

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

  return product;
}

function resolveProtocol(url: string): string {
  if (!url) return url;
  if (url.startsWith("//")) return "https:" + url;
  return url;
}
