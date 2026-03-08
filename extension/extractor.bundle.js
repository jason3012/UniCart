"use strict";
var UniCart = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    detectSite: () => detectSite,
    extract: () => extract
  });

  // src/core/detectSite.ts
  function detectSite(url) {
    try {
      const { hostname } = new URL(url);
      if (hostname.includes("zara.com")) return "zara";
      if (hostname.includes("uniqlo.com")) return "uniqlo";
      return "unknown";
    } catch {
      return "unknown";
    }
  }

  // src/core/confidence/score.ts
  function bestCandidate(candidates) {
    if (candidates.length === 0) return null;
    const SOURCE_PRIORITY = [
      "site_json",
      "jsonld",
      "meta",
      "dom",
      "unknown",
      "user"
    ];
    return candidates.reduce((best, current) => {
      if (current.confidence > best.confidence) return current;
      if (current.confidence === best.confidence) {
        const bestPriority = SOURCE_PRIORITY.indexOf(best.source);
        const currentPriority = SOURCE_PRIORITY.indexOf(current.source);
        if (currentPriority < bestPriority) return current;
      }
      return best;
    });
  }

  // src/core/normalize/price.ts
  function parsePriceUSD(raw) {
    const text = raw.trim();
    const hasUsd = /\$/.test(text) || /\bUSD\b/i.test(text);
    if (!hasUsd) return null;
    if (/\$\s*-\s*\d|\bUSD\s*-\s*\d/i.test(text)) return null;
    if (/\$\s*\d{1,3},\d{2}(?!\d)/.test(text)) return null;
    const match = text.match(/(\d{1,3}(?:,\d{3})*|\d+)(\.\d{1,2})?/);
    if (!match) return null;
    const intPart = match[1];
    const decPart = match[2] ?? "";
    if (intPart.includes(",")) {
      const commaParts = intPart.split(",");
      const allOthersLen3 = commaParts.slice(1).every((p) => p.length === 3);
      if (!allOthersLen3) return null;
    }
    const cleanNum = intPart.replace(/,/g, "") + decPart;
    const amount = parseFloat(cleanNum);
    if (isNaN(amount) || amount <= 0 || amount > 1e5) return null;
    return amount;
  }
  function isCurrencyUSD(currency) {
    return /^(\$|USD|US\$|US dollar)$/i.test(currency.trim());
  }

  // src/core/normalize/text.ts
  function normalizeString(text) {
    return text.replace(/\s+/g, " ").trim();
  }
  function isValidTitle(text) {
    const clean = normalizeString(text);
    return clean.length >= 3 && clean.length <= 500;
  }
  function isValidImageUrl(url) {
    try {
      const parsed = new URL(url);
      return (parsed.protocol === "http:" || parsed.protocol === "https:") && /\.(jpg|jpeg|png|webp|avif|gif|svg)(\?.*)?$/i.test(parsed.pathname);
    } catch {
      return false;
    }
  }
  function normalizeBrand(raw) {
    const lower = raw.toLowerCase().trim();
    if (lower.includes("zara")) return "Zara";
    if (lower.includes("uniqlo")) return "Uniqlo";
    return null;
  }
  function brandFromSite(site) {
    return site === "zara" ? "Zara" : "Uniqlo";
  }

  // src/core/normalize/category.ts
  function normalizeCategory(raw) {
    return raw.replace(/\s+/g, " ").trim().split(/[>\/\|]/).map((s) => s.trim()).filter(Boolean).join(" > ");
  }

  // src/sites/zara.ts
  function extractZara(doc, url) {
    const c = {};
    const nextData = readNextData(doc);
    if (nextData) {
      const fromNext = buildFromZaraNextData(nextData);
      Object.assign(c, fromNext);
    }
    const domPid = extractProductIdFromDom(doc);
    if (domPid) c.product_id = domPid;
    if (!c.product_id || c.product_id.confidence < 0.93) {
      const imgPid = extractProductIdFromImageUrl(doc);
      if (imgPid) c.product_id = imgPid;
    }
    if (!c.product_id) {
      const urlPid = extractProductIdFromUrl(url);
      if (urlPid) c.product_id = urlPid;
    }
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
  function readNextData(doc) {
    try {
      const el = doc.getElementById("__NEXT_DATA__");
      if (!el?.textContent) return null;
      return JSON.parse(el.textContent);
    } catch {
      return null;
    }
  }
  function buildFromZaraNextData(data) {
    const pageProps = safeGet(
      data,
      "props.pageProps"
    );
    if (!pageProps) return {};
    const product = safeGet(pageProps, "ssrProductDetail.product") ?? safeGet(pageProps, "product") ?? deepFindProduct(pageProps);
    if (!product) return {};
    const c = {};
    const name = asString(product.name);
    if (name && isValidTitle(name)) {
      c.title = { value: normalizeString(name), source: "site_json", confidence: 0.95 };
    }
    const id = asString(product.id);
    if (id) {
      c.product_id = { value: id, source: "site_json", confidence: 0.97 };
    }
    const price = safeGet(product, "price");
    if (price) {
      const currency = asString(price.currency) ?? asString(price.currencyIso) ?? "";
      const amount = price.value;
      if (isCurrencyUSD(currency) && typeof amount === "number" && amount > 0) {
        c.price_usd = { value: amount, source: "site_json", confidence: 0.95 };
      }
    }
    const colors = safeGet(product, "detail.colors");
    if (Array.isArray(colors) && colors.length > 0) {
      const colorName = asString(colors[0].name);
      if (colorName) {
        c.color = {
          value: normalizeString(colorName),
          source: "site_json",
          confidence: 0.85
        };
      }
    }
    const images = safeGet(product, "media.images");
    if (Array.isArray(images) && images.length > 0) {
      const main = images.find((img) => img.kind === "image" || img.kind === "main") ?? images[0];
      const rawUrl = asString(main?.url);
      if (rawUrl) {
        const resolved = rawUrl.startsWith("//") ? "https:" + rawUrl : rawUrl;
        if (isValidImageUrl(resolved)) {
          c.image_url = { value: resolved, source: "site_json", confidence: 0.95 };
        }
      }
    }
    const seoCategory = safeGet(pageProps, "seoData.category") ?? safeGet(pageProps, "canonicalData.category");
    if (seoCategory) {
      c.category = {
        value: normalizeCategory(seoCategory),
        source: "site_json",
        confidence: 0.85
      };
    }
    return c;
  }
  function extractProductIdFromImageUrl(doc) {
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
    for (const img of doc.querySelectorAll("img[src]")) {
      const pid = zaraRefFromImageUrl(img.src);
      if (pid) return pid;
    }
    return null;
  }
  function zaraRefFromImageUrl(url) {
    const match = url.match(/\/(\d{10,})-p[./]/);
    if (!match) return null;
    const value = match[1].replace(/^0+/, "") || match[1];
    return { value, source: "dom", confidence: 0.93 };
  }
  function extractProductIdFromUrl(url) {
    const match = url.match(/-p(\d{8,})\./i);
    if (match) {
      return { value: match[1], source: "dom", confidence: 0.75 };
    }
    return null;
  }
  function extractColorFromDom(doc) {
    const selectors = [
      "[data-qa-label*='color-name']",
      "[class*='color-name']",
      "[aria-selected='true'][data-qa-label*='color']",
      ".product-color-extended-name__main"
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
  function extractCategoryFromDom(doc) {
    const nav = doc.querySelector("[aria-label*='breadcrumb' i]") ?? doc.querySelector("[class*='breadcrumb' i]");
    if (!nav) return null;
    const items = Array.from(nav.querySelectorAll("a, li, span")).map((el) => el.textContent?.trim()).filter((t) => Boolean(t) && !/^home$/i.test(t));
    if (items.length > 0) {
      return {
        value: normalizeCategory(items.join(" > ")),
        source: "dom",
        confidence: 0.6
      };
    }
    return null;
  }
  function extractProductIdFromDom(doc) {
    const referenceSelectors = [
      "[data-qa-action='product-detail-info-color-copy']",
      "[class*='reference']",
      "[data-qa-label*='reference']",
      "[class*='product-detail__reference']"
    ];
    for (const sel of referenceSelectors) {
      const el2 = doc.querySelector(sel);
      const text = el2?.textContent ?? "";
      const match = text.match(/(\d{4}\/\d{3}\/\d{3})/);
      if (match) {
        return {
          value: match[1].replace(/\//g, ""),
          source: "dom",
          confidence: 0.98
        };
      }
    }
    const bodyText = doc.body?.textContent ?? "";
    const bodyMatch = bodyText.match(/(\d{4}\/\d{3}\/\d{3})/);
    if (bodyMatch) {
      return {
        value: bodyMatch[1].replace(/\//g, ""),
        source: "dom",
        confidence: 0.92
      };
    }
    const el = doc.querySelector("[data-productid], [data-product-id]");
    const pid = el?.getAttribute("data-productid") ?? el?.getAttribute("data-product-id");
    if (pid?.trim()) {
      return { value: pid.trim(), source: "dom", confidence: 0.7 };
    }
    return null;
  }
  function asString(v) {
    if (typeof v === "string" && v.trim()) return v.trim();
    if (typeof v === "number") return String(v);
    return null;
  }
  function safeGet(obj, path) {
    const parts = path.split(".");
    let current = obj;
    for (const part of parts) {
      if (current == null || typeof current !== "object") return null;
      current = current[part];
    }
    return current ?? null;
  }
  function deepFindProduct(obj, depth = 0) {
    if (depth > 6 || !obj || typeof obj !== "object") return null;
    const o = obj;
    if (typeof o.name === "string" && o.name.length > 2 && (o.id !== void 0 || o.price !== void 0 || o.media !== void 0)) {
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

  // src/sites/uniqlo.ts
  function extractUniqlo(doc, url) {
    const c = {};
    const nextData = readNextData2(doc);
    if (nextData) {
      Object.assign(c, buildFromUniqloNextData(nextData));
    }
    if (!c.product_id) {
      const pid = extractProductIdFromUrl2(url);
      if (pid) c.product_id = pid;
    }
    if (!c.color) {
      const color = extractColorFromDom2(doc);
      if (color) c.color = color;
    }
    if (!c.category) {
      const cat = extractCategoryFromDom2(doc);
      if (cat) c.category = cat;
    }
    if (!c.product_id) {
      const pid = extractProductIdFromDom2(doc, url);
      if (pid) c.product_id = pid;
    }
    return c;
  }
  function readNextData2(doc) {
    try {
      const el = doc.getElementById("__NEXT_DATA__");
      if (!el?.textContent) return null;
      return JSON.parse(el.textContent);
    } catch {
      return null;
    }
  }
  function buildFromUniqloNextData(data) {
    const pageProps = safeGet2(data, "props.pageProps");
    if (!pageProps) return {};
    const product = safeGet2(pageProps, "productDetail") ?? safeGet2(pageProps, "product") ?? safeGet2(pageProps, "productInfo") ?? deepFindProduct2(pageProps);
    if (!product) return {};
    const c = {};
    const name = asString2(product.name);
    if (name && isValidTitle(name)) {
      c.title = {
        value: normalizeString(name),
        source: "site_json",
        confidence: 0.95
      };
    }
    const id = asString2(product.productId) ?? asString2(product.productID) ?? asString2(product.id);
    if (id) {
      c.product_id = { value: id, source: "site_json", confidence: 0.97 };
    }
    const priceBase = safeGet2(product, "prices.base");
    if (priceBase) {
      const currency = asString2(priceBase.currency) ?? "";
      const amount = priceBase.value;
      if (isCurrencyUSD(currency) && typeof amount === "number" && amount > 0) {
        c.price_usd = { value: amount, source: "site_json", confidence: 0.95 };
      }
    }
    if (!c.price_usd) {
      const priceGroup = safeGet2(
        product,
        "priceGroup"
      );
      if (Array.isArray(priceGroup)) {
        for (const pg of priceGroup) {
          const currency = asString2(pg.currency) ?? "";
          const amount = pg.base ?? pg.price;
          if (isCurrencyUSD(currency) && typeof amount === "number" && amount > 0) {
            c.price_usd = { value: amount, source: "site_json", confidence: 0.9 };
            break;
          }
        }
      }
    }
    const colorFromChips = extractColorFromProductData(product);
    if (colorFromChips) c.color = colorFromChips;
    const imageUrl = extractImageFromProductData(product);
    if (imageUrl) c.image_url = imageUrl;
    const category = asString2(
      safeGet2(product, "breadcrumbs") ?? safeGet2(pageProps, "categoryName")
    );
    if (category) {
      c.category = {
        value: normalizeCategory(category),
        source: "site_json",
        confidence: 0.85
      };
    }
    return c;
  }
  function extractColorFromProductData(product) {
    const chips = safeGet2(product, "chips");
    if (Array.isArray(chips) && chips.length > 0) {
      const name = asString2(chips[0].name);
      if (name) return { value: normalizeString(name), source: "site_json", confidence: 0.85 };
    }
    const l2s = safeGet2(product, "l2s");
    if (Array.isArray(l2s) && l2s.length > 0) {
      const colorObj = safeGet2(l2s[0], "color");
      const name = asString2(colorObj?.name);
      if (name) return { value: normalizeString(name), source: "site_json", confidence: 0.8 };
    }
    return null;
  }
  function extractImageFromProductData(product) {
    const mainImage = safeGet2(product, "mainImage");
    if (mainImage) {
      const url = asString2(mainImage.url);
      if (url && isValidImageUrl(resolveProtocol(url))) {
        return { value: resolveProtocol(url), source: "site_json", confidence: 0.95 };
      }
    }
    const images = safeGet2(product, "images");
    if (Array.isArray(images) && images.length > 0) {
      const url = asString2(images[0].url ?? images[0].src);
      if (url && isValidImageUrl(resolveProtocol(url))) {
        return { value: resolveProtocol(url), source: "site_json", confidence: 0.9 };
      }
    }
    return null;
  }
  function extractProductIdFromUrl2(url) {
    const match = url.match(/\/products\/(E\d+)/i);
    if (match) {
      return { value: match[1].toUpperCase(), source: "dom", confidence: 0.88 };
    }
    return null;
  }
  function extractColorFromDom2(doc) {
    const selectors = [
      "[data-testid='color-name']",
      "[class*='color-name']",
      "[class*='colorName']",
      "[aria-selected='true'][data-testid*='color']"
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
  function extractCategoryFromDom2(doc) {
    const nav = doc.querySelector("[aria-label*='breadcrumb' i]") ?? doc.querySelector("[class*='breadcrumb' i]");
    if (!nav) return null;
    const items = Array.from(nav.querySelectorAll("a, li, span")).map((el) => el.textContent?.trim()).filter((t) => Boolean(t) && !/^home$/i.test(t));
    if (items.length > 0) {
      return {
        value: normalizeCategory(items.join(" > ")),
        source: "dom",
        confidence: 0.6
      };
    }
    return null;
  }
  function extractProductIdFromDom2(doc, url) {
    const el = doc.querySelector("[data-product-id], [data-productid]");
    const pid = el?.getAttribute("data-product-id") ?? el?.getAttribute("data-productid");
    if (pid?.trim()) {
      return { value: pid.trim(), source: "dom", confidence: 0.7 };
    }
    const scripts = doc.querySelectorAll("script:not([src])");
    for (const s of scripts) {
      const m = s.textContent?.match(/"productId"\s*:\s*"(E\d+)"/i);
      if (m) return { value: m[1].toUpperCase(), source: "dom", confidence: 0.75 };
    }
    return null;
  }
  function asString2(v) {
    if (typeof v === "string" && v.trim()) return v.trim();
    if (typeof v === "number") return String(v);
    return null;
  }
  function safeGet2(obj, path) {
    const parts = path.split(".");
    let current = obj;
    for (const part of parts) {
      if (current == null || typeof current !== "object") return null;
      current = current[part];
    }
    return current ?? null;
  }
  function resolveProtocol(url) {
    if (!url) return url;
    if (url.startsWith("//")) return "https:" + url;
    return url;
  }
  function deepFindProduct2(obj, depth = 0) {
    if (depth > 6 || !obj || typeof obj !== "object") return null;
    const o = obj;
    if (typeof o.name === "string" && o.name.length > 2 && (o.productId !== void 0 || o.id !== void 0 || o.prices !== void 0)) {
      return o;
    }
    for (const val of Object.values(o)) {
      if (val && typeof val === "object" && !Array.isArray(val)) {
        const found = deepFindProduct2(val, depth + 1);
        if (found) return found;
      }
    }
    return null;
  }

  // src/core/extract.ts
  function extract(doc, url, options = {}) {
    const site = detectSite(url);
    if (site === "unknown") {
      return {
        success: false,
        site,
        product: null,
        errors: ["Unknown site: URL does not match zara.com or uniqlo.com"]
      };
    }
    const errors = [];
    const candidates = [];
    try {
      candidates.push(extractFromJsonLd(doc));
    } catch (e) {
      errors.push(`JSON-LD extraction failed: ${String(e)}`);
    }
    try {
      candidates.push(extractFromMeta(doc));
    } catch (e) {
      errors.push(`Meta extraction failed: ${String(e)}`);
    }
    try {
      const adapterResult = site === "zara" ? extractZara(doc, url) : extractUniqlo(doc, url);
      candidates.push(adapterResult);
    } catch (e) {
      errors.push(`Site adapter failed: ${String(e)}`);
    }
    try {
      candidates.push(extractFromDom(doc));
    } catch (e) {
      errors.push(`DOM extraction failed: ${String(e)}`);
    }
    const merged = mergeCandidates(candidates);
    merged.brand = {
      value: brandFromSite(site),
      source: "site_json",
      confidence: 0.99
    };
    const product = buildProduct(merged, url, options.debug ?? false);
    const success = product.title !== null && product.brand !== null && product.image_url !== null && product.product_id !== null;
    if (!success) {
      const missing = [];
      if (!product.title) missing.push("title");
      if (!product.brand) missing.push("brand");
      if (!product.image_url) missing.push("image_url");
      if (!product.product_id) missing.push("product_id");
      errors.push(`Required fields missing: ${missing.join(", ")}`);
    }
    return { success, site, product, errors };
  }
  function extractFromJsonLd(doc) {
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
  function findProductSchema(data) {
    if (!data || typeof data !== "object") return null;
    if (Array.isArray(data)) {
      for (const item of data) {
        const found = findProductSchema(item);
        if (found) return found;
      }
      return null;
    }
    const obj = data;
    const type = obj["@type"];
    const isProduct = type === "Product" || Array.isArray(type) && type.includes("Product");
    if (isProduct) return obj;
    if (Array.isArray(obj["@graph"])) {
      for (const item of obj["@graph"]) {
        const found = findProductSchema(item);
        if (found) return found;
      }
    }
    return null;
  }
  function buildFromProductSchema(schema) {
    const c = {};
    if (typeof schema.name === "string" && isValidTitle(schema.name)) {
      c.title = { value: normalizeString(schema.name), source: "jsonld", confidence: 0.92 };
    }
    const brandRaw = typeof schema.brand === "string" ? schema.brand : schema.brand && typeof schema.brand === "object" ? schema.brand.name : void 0;
    if (brandRaw) {
      const brand = normalizeBrand(brandRaw);
      if (brand) c.brand = { value: brand, source: "jsonld", confidence: 0.92 };
    }
    const img = schema.image;
    const imgUrl = typeof img === "string" ? img : Array.isArray(img) && typeof img[0] === "string" ? img[0] : typeof img === "object" && img !== null ? img.url : void 0;
    if (imgUrl && isValidImageUrl(imgUrl)) {
      c.image_url = { value: imgUrl, source: "jsonld", confidence: 0.9 };
    }
    const pid = asString3(schema.sku) ?? asString3(schema.productID) ?? asString3(schema.mpn);
    if (pid) {
      c.product_id = { value: pid, source: "jsonld", confidence: 0.92 };
    }
    const offersRaw = schema.offers;
    const offer = Array.isArray(offersRaw) ? offersRaw[0] : offersRaw;
    if (offer && typeof offer === "object") {
      const offerObj = offer;
      const currency = asString3(offerObj.priceCurrency) ?? "";
      const priceRaw = offerObj.price ?? offerObj.lowPrice;
      if (isCurrencyUSD(currency) && priceRaw !== void 0) {
        const amount = typeof priceRaw === "number" ? priceRaw : parseFloat(String(priceRaw));
        if (!isNaN(amount) && amount > 0) {
          c.price_usd = { value: amount, source: "jsonld", confidence: 0.9 };
        }
      }
    }
    const cat = asString3(schema.category);
    if (cat) {
      c.category = {
        value: normalizeCategory(cat),
        source: "jsonld",
        confidence: 0.85
      };
    }
    const color = asString3(schema.color);
    if (color) {
      c.color = { value: normalizeString(color), source: "jsonld", confidence: 0.85 };
    }
    return c;
  }
  function extractFromMeta(doc) {
    const c = {};
    const get = (selector) => doc.querySelector(`meta[property="${selector}"], meta[name="${selector}"]`)?.getAttribute("content") ?? null;
    const ogTitle = get("og:title");
    if (ogTitle && isValidTitle(ogTitle)) {
      c.title = {
        value: normalizeString(ogTitle),
        source: "meta",
        confidence: 0.8
      };
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
      if (brand) c.brand = { value: brand, source: "meta", confidence: 0.8 };
    }
    return c;
  }
  function extractFromDom(doc) {
    const c = {};
    const root = doc.querySelector("[data-testid='product-detail']") ?? doc.querySelector("[class*='product-detail']") ?? doc.querySelector("main") ?? doc.body;
    if (!root) return c;
    const h1 = root.querySelector("h1");
    if (h1?.textContent && isValidTitle(h1.textContent)) {
      c.title = {
        value: normalizeString(h1.textContent),
        source: "dom",
        confidence: 0.55
      };
    }
    const priceEl = findPriceElement(root);
    if (priceEl) {
      const parsed = parsePriceUSD(priceEl);
      if (parsed !== null) {
        c.price_usd = {
          value: parsed,
          source: "dom",
          confidence: 0.5,
          rawValue: priceEl
        };
      }
    }
    const breadcrumb = findBreadcrumb(root, doc);
    if (breadcrumb) {
      c.category = {
        value: normalizeCategory(breadcrumb),
        source: "dom",
        confidence: 0.5
      };
    }
    const imgEl = findMainImage(root);
    if (imgEl && isValidImageUrl(imgEl)) {
      c.image_url = { value: imgEl, source: "dom", confidence: 0.45 };
    }
    return c;
  }
  function findPriceElement(root) {
    const selectors = [
      "[data-testid*='price']",
      "[class*='price']",
      "[itemprop='price']",
      "[class*='Price']"
    ];
    for (const sel of selectors) {
      const el = root.querySelector(sel);
      const text = el?.textContent?.trim();
      if (text && /\$/.test(text)) return text;
    }
    return null;
  }
  function findBreadcrumb(root, doc) {
    const nav = doc.querySelector("[aria-label*='breadcrumb' i]") ?? doc.querySelector("[class*='breadcrumb' i]") ?? doc.querySelector("nav ol") ?? root.querySelector("[class*='breadcrumb' i]");
    if (!nav) return null;
    const items = Array.from(nav.querySelectorAll("a, li, span")).map((el) => el.textContent?.trim()).filter((t) => Boolean(t) && t.length > 0);
    const filtered = items.filter(
      (t) => !/^(home|inicio)$/i.test(t)
    );
    return filtered.length > 0 ? filtered.join(" > ") : null;
  }
  function findMainImage(root) {
    const selectors = [
      "img[data-testid*='image']",
      "img[class*='main']",
      "img[class*='product']",
      "img[class*='hero']"
    ];
    for (const sel of selectors) {
      const img = root.querySelector(sel);
      const src = img?.src ?? img?.dataset?.src ?? img?.dataset?.lazySrc;
      if (src) return resolveProtocol2(src);
    }
    for (const img of root.querySelectorAll("img")) {
      const src = img.src ?? img.dataset?.src;
      if (src && (img.naturalWidth > 300 || img.width > 300)) {
        return resolveProtocol2(src);
      }
    }
    return null;
  }
  function mergeCandidates(layers) {
    const fields = [
      "title",
      "brand",
      "price_usd",
      "category",
      "sizing",
      "color",
      "image_url",
      "product_id"
    ];
    const merged = {};
    for (const field of fields) {
      const all = layers.map((l) => l[field]).filter((c) => c !== void 0);
      const best = bestCandidate(all);
      if (best) {
        merged[field] = best;
      }
    }
    return merged;
  }
  function buildProduct(c, url, debug) {
    const product = {
      title: c.title ? normalizeString(c.title.value) : null,
      brand: c.brand?.value ?? null,
      price_usd: c.price_usd?.value ?? null,
      category: c.category ? normalizeCategory(c.category.value) : null,
      sizing: c.sizing?.value ?? null,
      color: c.color ? normalizeString(c.color.value) : null,
      image_url: resolveProtocol2(c.image_url?.value ?? "") || null,
      product_id: c.product_id?.value?.trim() || null,
      url,
      field_sources: {},
      field_confidence: {}
    };
    if (product.title && !isValidTitle(product.title)) product.title = null;
    if (product.image_url && !isValidImageUrl(product.image_url))
      product.image_url = null;
    const fields = [
      "title",
      "brand",
      "price_usd",
      "category",
      "sizing",
      "color",
      "image_url",
      "product_id"
    ];
    for (const f of fields) {
      const cand = c[f];
      if (cand) {
        product.field_sources[f] = cand.source;
        product.field_confidence[f] = cand.confidence;
      }
    }
    if (debug) {
      const raw = {};
      for (const f of fields) {
        const cand = c[f];
        if (cand && "rawValue" in cand && cand.rawValue) {
          raw[f] = { raw_value: cand.rawValue, raw_source: cand.source };
        }
      }
      if (Object.keys(raw).length > 0) product.raw = raw;
    }
    return product;
  }
  function asString3(v) {
    if (typeof v === "string" && v.trim()) return v.trim();
    if (typeof v === "number") return String(v);
    return null;
  }
  function resolveProtocol2(url) {
    if (!url) return url;
    if (url.startsWith("//")) return "https:" + url;
    return url;
  }
  return __toCommonJS(src_exports);
})();
