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

  // src/registry/index.ts
  var registry_exports = {};
  __export(registry_exports, {
    extract: () => extract,
    extractWithRegistry: () => extractWithRegistry
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
  var PRODUCT_TYPES = [
    { label: "T-Shirt", pattern: /t[\s-]shirt|tshirt|\btee\b|graphic\s*tee/i },
    { label: "Tank Top", pattern: /tank\s*top|camisole|\bcami\b|halter\s*top|sleeveless\s*top/i },
    { label: "Polo", pattern: /\bpolo\b/i },
    { label: "Hoodie", pattern: /hoodie|hooded\s*sweatshirt/i },
    { label: "Sweatshirt", pattern: /sweatshirt|crewneck|crew[\s-]neck/i },
    { label: "Cardigan", pattern: /cardigan/i },
    { label: "Sweater", pattern: /sweater|pullover|\bknitwear\b|\bjumper\b/i },
    { label: "Blouse", pattern: /blouse/i },
    { label: "Shirt", pattern: /\bshirt\b/i },
    { label: "Top", pattern: /\btop\b/i },
    { label: "Coat", pattern: /\bcoat\b|parka|trench|overcoat/i },
    { label: "Blazer", pattern: /blazer/i },
    { label: "Jacket", pattern: /jacket|bomber|windbreaker|anorak|puffer/i },
    { label: "Vest", pattern: /\bvest\b|gilet|waistcoat/i },
    { label: "Jeans", pattern: /\bjeans\b|\bdenim\b/i },
    { label: "Leggings", pattern: /leggings|\btights\b/i },
    { label: "Shorts", pattern: /\bshorts\b/i },
    { label: "Pants", pattern: /\bpants\b|trousers|chinos?|slacks|joggers/i },
    { label: "Skirt", pattern: /\bskirts?\b/i },
    { label: "Dress", pattern: /\bdress\b|\bgown\b|sundress/i },
    { label: "Jumpsuit", pattern: /jumpsuit|romper|playsuit|overalls/i },
    { label: "Bag", pattern: /\bbag\b|\btote\b|backpack|purse|handbag|clutch|satchel|pouch|shopper/i },
    { label: "Sneakers", pattern: /sneakers?|trainers?/i },
    { label: "Boots", pattern: /\bboots?\b/i },
    { label: "Sandals", pattern: /sandals?|flip[\s-]flops?|\bslides\b/i },
    { label: "Shoes", pattern: /\bshoes?\b|loafers?|\bheels?\b|\bpumps?\b|\bmules?\b|oxfords?/i },
    { label: "Hat", pattern: /\bhats?\b|\bcaps?\b|beanie|beret/i },
    { label: "Scarf", pattern: /scarfs?|scarves|\bwrap\b|\bshawl\b/i },
    { label: "Belt", pattern: /\bbelts?\b/i },
    { label: "Socks", pattern: /\bsocks?\b|hosiery/i },
    { label: "Swimwear", pattern: /swimsuit|bikini|swimwear|bathing\s*suit/i },
    { label: "Underwear", pattern: /underwear|boxers?|\bbriefs?\b|\bbras?\b|lingerie/i }
  ];
  function normalizeProductType(title, rawCategory) {
    for (const text of [title, rawCategory]) {
      if (!text) continue;
      for (const { label, pattern } of PRODUCT_TYPES) {
        if (pattern.test(text)) return label;
      }
    }
    return null;
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
        value: seoCategory,
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
  function extractMaterialFromDom(doc) {
    const items = Array.from(doc.querySelectorAll("li")).filter(
      (el) => /^\d+%\s+\w+/i.test(el.textContent?.trim() ?? "") && el.children.length === 0
    ).map((el) => el.textContent?.trim()).filter((t) => Boolean(t));
    if (items.length > 0) {
      return { value: items.join(", "), source: "dom", confidence: 0.75 };
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
        value: items.join(" > "),
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
    if (!c.material) {
      const mat = extractMaterialFromDom2(doc);
      if (mat) c.material = mat;
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
        value: category,
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
  function extractMaterialFromDom2(doc) {
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
    const items = Array.from(doc.querySelectorAll("li, p")).filter(
      (el) => /^\d+%\s+\w+/i.test(el.textContent?.trim() ?? "") && el.children.length === 0
    ).map((el) => el.textContent?.trim()).filter((t) => Boolean(t));
    if (items.length > 0) {
      return { value: items[0], source: "dom", confidence: 0.65 };
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
        value: items.join(" > "),
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
        value: cat,
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
        value: breadcrumb,
        source: "dom",
        confidence: 0.5
      };
    }
    const imgEl = findMainImage(root);
    if (imgEl && isValidImageUrl(imgEl)) {
      c.image_url = { value: imgEl, source: "dom", confidence: 0.45 };
    }
    const materialItems = Array.from(doc.querySelectorAll("li")).filter((el) => /^\d+%\s+\w+/i.test(el.textContent?.trim() ?? "") && el.children.length === 0).map((el) => el.textContent?.trim()).filter((t) => Boolean(t));
    if (materialItems.length > 0) {
      c.material = { value: materialItems.join(", "), source: "dom", confidence: 0.55 };
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
      "product_id",
      "material"
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
      category: normalizeProductType(c.title?.value ?? null, c.category?.value ?? null),
      sizing: c.sizing?.value ?? null,
      color: c.color ? normalizeString(c.color.value) : null,
      image_url: resolveProtocol2(c.image_url?.value ?? "") || null,
      product_id: c.product_id?.value?.trim() || null,
      material: c.material ? normalizeString(c.material.value) : null,
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
      "product_id",
      "material"
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

  // src/registry/shared-extractors.ts
  function isValidImageUrl2(url) {
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return false;
      if (/\.(jpg|jpeg|png|webp|avif|gif|svg)(\?.*)?$/i.test(parsed.pathname)) return true;
      if (/\.(html?|php|aspx?|jsp)$/i.test(parsed.pathname)) return false;
      return parsed.pathname.length > 4;
    } catch {
      return false;
    }
  }
  function extractFromJsonLd2(doc) {
    const scripts = doc.querySelectorAll('script[type="application/ld+json"]');
    for (const script of scripts) {
      try {
        const data = JSON.parse(script.textContent ?? "");
        const schema = findProductSchema2(data);
        if (schema) return buildFromProductSchema2(schema);
      } catch {
        continue;
      }
    }
    return {};
  }
  function findProductSchema2(data) {
    if (!data || typeof data !== "object") return null;
    if (Array.isArray(data)) {
      for (const item of data) {
        const found = findProductSchema2(item);
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
        const found = findProductSchema2(item);
        if (found) return found;
      }
    }
    if (Array.isArray(obj["hasVariant"])) {
      for (const item of obj["hasVariant"]) {
        const found = findProductSchema2(item);
        if (found) return found;
      }
    }
    return null;
  }
  function buildFromProductSchema2(schema) {
    const c = {};
    if (typeof schema.name === "string" && isValidTitle(schema.name)) {
      c.title = { value: normalizeString(schema.name), source: "jsonld", confidence: 0.92 };
    }
    const brandRaw = typeof schema.brand === "string" ? schema.brand : schema.brand && typeof schema.brand === "object" ? schema.brand.name : void 0;
    if (brandRaw) {
      const brand = normalizeBrand(brandRaw);
      if (brand) {
        c.brand = { value: brand, source: "jsonld", confidence: 0.92 };
      } else {
        c.brand = { value: brandRaw.trim(), source: "jsonld", confidence: 0.6 };
      }
    }
    const img = schema.image;
    const imgUrl = typeof img === "string" ? img : Array.isArray(img) && typeof img[0] === "string" ? img[0] : typeof img === "object" && img !== null ? img.url : void 0;
    if (imgUrl && isValidImageUrl2(imgUrl)) {
      c.image_url = { value: imgUrl, source: "jsonld", confidence: 0.9 };
    }
    const pid = asString4(schema.sku) ?? asString4(schema.productID) ?? asString4(schema.mpn);
    if (pid) {
      c.product_id = { value: pid, source: "jsonld", confidence: 0.92 };
    }
    const offersRaw = schema.offers;
    const offer = Array.isArray(offersRaw) ? offersRaw[0] : offersRaw;
    if (offer && typeof offer === "object") {
      const offerObj = offer;
      const currency = asString4(offerObj.priceCurrency) ?? "";
      const priceRaw = offerObj.price ?? offerObj.lowPrice;
      if (isCurrencyUSD(currency) && priceRaw !== void 0) {
        const amount = typeof priceRaw === "number" ? priceRaw : parseFloat(String(priceRaw));
        if (!isNaN(amount) && amount > 0) {
          c.price_usd = { value: amount, source: "jsonld", confidence: 0.9 };
        }
      }
    }
    const cat = asString4(schema.category);
    if (cat) {
      c.category = { value: cat, source: "jsonld", confidence: 0.85 };
    }
    const color = asString4(schema.color);
    if (color) {
      c.color = { value: normalizeString(color), source: "jsonld", confidence: 0.85 };
    }
    return c;
  }
  function extractFromMeta2(doc) {
    const c = {};
    const get = (selector) => doc.querySelector(`meta[property="${selector}"], meta[name="${selector}"]`)?.getAttribute("content") ?? null;
    const ogTitle = get("og:title");
    if (ogTitle && isValidTitle(ogTitle)) {
      c.title = { value: normalizeString(ogTitle), source: "meta", confidence: 0.8 };
    }
    const ogImage = get("og:image");
    if (ogImage && isValidImageUrl2(ogImage)) {
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
  function extractFromDomFallback(doc) {
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
    const priceEl = findPriceElement2(root);
    if (priceEl) {
      const parsed = parsePriceUSD(priceEl);
      if (parsed !== null) {
        c.price_usd = { value: parsed, source: "dom", confidence: 0.5, rawValue: priceEl };
      }
    }
    const breadcrumb = findBreadcrumb2(root, doc);
    if (breadcrumb) {
      c.category = { value: breadcrumb, source: "dom", confidence: 0.5 };
    }
    const imgEl = findMainImage2(root);
    if (imgEl && isValidImageUrl2(imgEl)) {
      c.image_url = { value: imgEl, source: "dom", confidence: 0.45 };
    }
    const sizeVal = findSelectedSize(root);
    if (sizeVal) {
      c.sizing = { value: sizeVal, source: "dom", confidence: 0.5 };
    }
    const materialItems = Array.from(doc.querySelectorAll("li")).filter(
      (el) => /^\d+%\s+\w+/i.test(el.textContent?.trim() ?? "") && el.children.length === 0
    ).map((el) => el.textContent?.trim()).filter((t) => Boolean(t));
    if (materialItems.length > 0) {
      c.material = { value: materialItems.join(", "), source: "dom", confidence: 0.55 };
    }
    return c;
  }
  function findPriceElement2(root) {
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
  function findBreadcrumb2(root, doc) {
    const nav = doc.querySelector("[aria-label*='breadcrumb' i]") ?? doc.querySelector("[class*='breadcrumb' i]") ?? doc.querySelector("nav ol") ?? root.querySelector("[class*='breadcrumb' i]");
    if (!nav) return null;
    const items = Array.from(nav.querySelectorAll("a, li, span")).map((el) => el.textContent?.trim()).filter((t) => Boolean(t) && t.length > 0);
    const filtered = items.filter((t) => !/^(home|inicio)$/i.test(t));
    return filtered.length > 0 ? filtered.join(" > ") : null;
  }
  function findMainImage2(root) {
    const selectors = [
      "img[data-testid*='image']",
      "img[class*='main']",
      "img[class*='product']",
      "img[class*='hero']"
    ];
    for (const sel of selectors) {
      const img = root.querySelector(sel);
      const src = img?.src ?? img?.dataset?.src ?? img?.dataset?.lazySrc;
      if (src) return resolveProtocol3(src);
    }
    for (const img of root.querySelectorAll("img")) {
      const src = img.src ?? img.dataset?.src;
      if (src && (img.naturalWidth > 300 || img.width > 300)) {
        return resolveProtocol3(src);
      }
    }
    return null;
  }
  function findSelectedSize(root) {
    const SIZE_RE = /^(XXS|XS|S|M|L|XL|XXL|2XL|3XL|\d{1,3}(?:\.\d)?)$/i;
    const activeSelectors = [
      "[data-testid*='size'][aria-selected='true']",
      "[class*='size'][aria-selected='true']",
      "[class*='size'][class*='selected']",
      "[class*='size'][class*='active']",
      "button[class*='size'][aria-pressed='true']",
      "[data-size][aria-selected='true']"
    ];
    for (const sel of activeSelectors) {
      const text = root.querySelector(sel)?.textContent?.trim();
      if (text && SIZE_RE.test(text)) return text.toUpperCase();
    }
    const sizeSelect = root.querySelector(
      "select[class*='size'], select[data-testid*='size'], select[aria-label*='size' i]"
    );
    if (sizeSelect) {
      const opt = sizeSelect.options[sizeSelect.selectedIndex];
      if (opt && SIZE_RE.test(opt.value.trim())) return opt.value.trim().toUpperCase();
    }
    return null;
  }
  function asString4(v) {
    if (typeof v === "string" && v.trim()) return v.trim();
    if (typeof v === "number") return String(v);
    return null;
  }
  function resolveProtocol3(url) {
    if (!url) return url;
    if (url.startsWith("//")) return "https:" + url;
    return url;
  }

  // src/registry/sites.ts
  var SITE_REGISTRY = [
    {
      hostname: "cos.com",
      displayName: "COS",
      // product_id is in JSON-LD sku; URL is a fallback (e.g. slim-ribbed-t-shirt-black-1229297002)
      productIdUrlPattern: /-(\d{9,10})$/,
      // Listing pages open a hover panel (.draggable-drawer) — extract product_id from the panel link
      drawerProductLinkSelector: '[class*="draggable-drawer"] a[href*="/product/"]'
    },
    {
      hostname: "ralphlauren.com",
      displayName: "Ralph Lauren",
      // URL: /cable-knit-cotton-sweater/515061.html
      productIdUrlPattern: /\/(\d{5,6})\.html/
    },
    {
      hostname: "bananarepublic.gap.com",
      displayName: "Banana Republic"
    },
    {
      hostname: "buckmason.com",
      displayName: "Buck Mason"
    },
    {
      hostname: "jcrew.com",
      displayName: "J.Crew",
      // URL: /classic-chino-pant/ME957?... — stable product code, not the color variant from JSON-LD sku
      productIdUrlPattern: /\/([A-Z]{2}\d{3})(?:\?|$)/i,
      preferUrlProductId: true
    }
    // {
    //   hostname: "",
    //   displayName: "",
    // },
    // {
    //   hostname: "",
    //   displayName: "",
    // },
    // {
    //   hostname: "",
    //   displayName: "",
    // },
    // {
    //   hostname: "",
    //   displayName: "",
    // },
    // {
    //   hostname: "",
    //   displayName: "",
    // },
    // {
    //   hostname: "",
    //   displayName: "",
    // },
    // {
    //   hostname: "",
    //   displayName: "",
    // },
    // Add new brands here. Each entry = one brand.
    // Example (not yet validated — run gen-fixture.ts to generate a fixture first):
    //
    // {
    //   hostname: "hm.com",
    //   displayName: "H&M",
    //   productIdUrlPattern: /\/productpage\.(\d+)\.html/i,
    //   nextDataPaths: [
    //     {
    //       path: "props.pageProps.product",
    //       idField: "code",
    //       pricePath: "whitePrice.value",
    //       currencyPath: "whitePrice.currency",
    //       imagePath: "images.0.url",
    //       colorPath: "articlesList.0.color.text",
    //     },
    //   ],
    // },
  ];

  // src/registry/extract-generic.ts
  var NEXT_DATA_CONFIDENCE = 0.82;
  function extractGeneric(config, doc, url) {
    const layers = [
      extractFromJsonLd2(doc),
      extractFromMeta2(doc),
      extractFromNextData(config, doc),
      extractFromDomFallback(doc)
    ];
    if (config.domOverrides) {
      layers.push(extractFromDomOverrides(config.domOverrides, doc));
    }
    const merged = mergeCandidates2(layers);
    if (config.productIdUrlPattern) {
      const match = url.match(config.productIdUrlPattern);
      if (match?.[1] && (!merged.product_id || config.preferUrlProductId)) {
        merged.product_id = {
          value: match[1],
          source: "dom",
          confidence: config.preferUrlProductId ? 0.95 : 0.78
        };
      }
      if (!merged.product_id && config.drawerProductLinkSelector) {
        const drawerLink = doc.querySelector(config.drawerProductLinkSelector);
        const href = drawerLink?.getAttribute("href") ?? "";
        const drawerMatch = href.match(config.productIdUrlPattern);
        if (drawerMatch?.[1]) {
          merged.product_id = {
            value: drawerMatch[1],
            source: "dom",
            confidence: 0.72
          };
        }
      }
    }
    merged.brand = { value: config.displayName, source: "site_json", confidence: 0.99 };
    return merged;
  }
  function extractFromNextData(config, doc) {
    if (!config.nextDataPaths?.length) return {};
    const el = doc.getElementById("__NEXT_DATA__");
    if (!el?.textContent) return {};
    let data;
    try {
      data = JSON.parse(el.textContent);
    } catch {
      return {};
    }
    for (const pathConfig of config.nextDataPaths) {
      const product = safeGet3(data, pathConfig.path);
      if (!product || typeof product !== "object") continue;
      const c = {};
      const nameField = pathConfig.nameField ?? "name";
      const name = asString5(product[nameField]);
      if (name && isValidTitle(name)) {
        c.title = { value: normalizeString(name), source: "site_json", confidence: NEXT_DATA_CONFIDENCE };
      }
      const idField = pathConfig.idField ?? "id";
      const id = asString5(product[idField]) ?? asString5(product["productId"]) ?? asString5(product["sku"]);
      if (id) {
        c.product_id = { value: id, source: "site_json", confidence: NEXT_DATA_CONFIDENCE };
      }
      if (pathConfig.pricePath && pathConfig.currencyPath) {
        const priceVal = safeGet3(product, pathConfig.pricePath);
        const currency = asString5(safeGet3(product, pathConfig.currencyPath)) ?? "";
        if (isCurrencyUSD(currency) && priceVal !== void 0) {
          const amount = typeof priceVal === "number" ? priceVal : parseFloat(String(priceVal));
          if (!isNaN(amount) && amount > 0) {
            c.price_usd = { value: amount, source: "site_json", confidence: NEXT_DATA_CONFIDENCE };
          }
        }
      }
      if (pathConfig.imagePath) {
        const imgRaw = asString5(safeGet3(product, pathConfig.imagePath));
        if (imgRaw) {
          const resolved = imgRaw.startsWith("//") ? "https:" + imgRaw : imgRaw;
          if (isValidImageUrl(resolved)) {
            c.image_url = { value: resolved, source: "site_json", confidence: NEXT_DATA_CONFIDENCE };
          }
        }
      }
      if (pathConfig.colorPath) {
        const color = asString5(safeGet3(product, pathConfig.colorPath));
        if (color) {
          c.color = { value: normalizeString(color), source: "site_json", confidence: NEXT_DATA_CONFIDENCE };
        }
      }
      if (c.title || c.product_id) return c;
    }
    return {};
  }
  function extractFromDomOverrides(overrides, doc) {
    const c = {};
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
        const text = el?.getAttribute("data-product-id") ?? el?.getAttribute("data-productid") ?? el?.textContent?.trim();
        if (text) {
          c.product_id = { value: text, source: "dom", confidence: 0.65 };
          break;
        }
      }
    }
    return c;
  }
  function mergeCandidates2(layers) {
    const fields = [
      "title",
      "brand",
      "price_usd",
      "category",
      "sizing",
      "color",
      "image_url",
      "product_id",
      "material"
    ];
    const merged = {};
    for (const field of fields) {
      const all = layers.map((l) => l[field]).filter((c) => c !== void 0);
      const best = bestCandidate(all);
      if (best) merged[field] = best;
    }
    return merged;
  }
  function asString5(v) {
    if (typeof v === "string" && v.trim()) return v.trim();
    if (typeof v === "number") return String(v);
    return null;
  }
  function safeGet3(obj, path) {
    const parts = path.split(".");
    let current = obj;
    for (const part of parts) {
      if (current == null || typeof current !== "object") return null;
      if (Array.isArray(current)) {
        const index = parseInt(part, 10);
        current = isNaN(index) ? void 0 : current[index];
      } else {
        current = current[part];
      }
    }
    return current ?? null;
  }

  // src/registry/index.ts
  function extractWithRegistry(doc, url) {
    const site = detectSite(url);
    if (site !== "unknown") {
      return extract(doc, url);
    }
    let hostname;
    try {
      hostname = new URL(url).hostname;
    } catch {
      return {
        success: false,
        site: "unknown",
        product: null,
        errors: [`Invalid URL: ${url}`]
      };
    }
    const config = SITE_REGISTRY.find((c) => hostname.includes(c.hostname));
    if (!config) {
      return {
        success: false,
        site: "unknown",
        product: null,
        errors: [
          `Unsupported site: ${hostname}. Add an entry to SITE_REGISTRY in src/registry/sites.ts.`
        ]
      };
    }
    const errors = [];
    let candidate;
    try {
      candidate = extractGeneric(config, doc, url);
    } catch (e) {
      return {
        success: false,
        site: "unknown",
        product: null,
        errors: [`Generic extraction failed for ${hostname}: ${String(e)}`]
      };
    }
    const product = buildProduct2(candidate, url);
    const success = product.title !== null && product.brand !== null && product.image_url !== null && product.product_id !== null;
    if (!success) {
      const missing = [];
      if (!product.title) missing.push("title");
      if (!product.brand) missing.push("brand");
      if (!product.image_url) missing.push("image_url");
      if (!product.product_id) missing.push("product_id");
      errors.push(`Required fields missing: ${missing.join(", ")}`);
    }
    return { success, site: "unknown", product, errors };
  }
  function buildProduct2(c, url) {
    const product = {
      title: c.title ? normalizeString(c.title.value) : null,
      brand: c.brand?.value ?? null,
      price_usd: c.price_usd?.value ?? null,
      category: normalizeProductType(c.title?.value ?? null, c.category?.value ?? null),
      sizing: c.sizing?.value ?? null,
      color: c.color ? normalizeString(c.color.value) : null,
      image_url: resolveProtocol4(c.image_url?.value ?? "") || null,
      product_id: c.product_id?.value?.trim() || null,
      material: c.material ? normalizeString(c.material.value) : null,
      url,
      field_sources: {},
      field_confidence: {}
    };
    if (product.title && !isValidTitle(product.title)) product.title = null;
    if (product.image_url && !isValidImageUrl2(product.image_url)) product.image_url = null;
    const fields = [
      "title",
      "brand",
      "price_usd",
      "category",
      "sizing",
      "color",
      "image_url",
      "product_id",
      "material"
    ];
    for (const f of fields) {
      const cand = c[f];
      if (cand) {
        product.field_sources[f] = cand.source;
        product.field_confidence[f] = cand.confidence;
      }
    }
    return product;
  }
  function resolveProtocol4(url) {
    if (!url) return url;
    if (url.startsWith("//")) return "https:" + url;
    return url;
  }
  return __toCommonJS(registry_exports);
})();
