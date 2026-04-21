/**
 * Site registry for generic adapter.
 *
 * To add a brand: append one SiteConfig object to SITE_REGISTRY.
 * To remove a brand: delete its entry from SITE_REGISTRY.
 * No other code changes are needed.
 */

export interface NextDataPath {
  /** Dotted path within __NEXT_DATA__ to the product object (e.g. "props.pageProps.product") */
  path: string;
  /** Subfield for product_id within the product object. Defaults to "id", then tries "productId". */
  idField?: string;
  /** Subfield for title. Defaults to "name". */
  nameField?: string;
  /** Dotted subpath within the product object for the price amount (e.g. "price.value") */
  pricePath?: string;
  /** Dotted subpath within the product object for the price currency (e.g. "price.currency") */
  currencyPath?: string;
  /** Dotted subpath within the product object for the main image URL (e.g. "media.images.0.url") */
  imagePath?: string;
  /** Dotted subpath within the product object for the color name (e.g. "detail.colors.0.name") */
  colorPath?: string;
}

export interface SiteConfig {
  /** Hostname substring to match (e.g. "hm.com" matches "www.hm.com") */
  hostname: string;
  /** Brand display name written to product.brand (e.g. "H&M") */
  displayName: string;
  /** URL regex; capture group 1 is the product_id */
  productIdUrlPattern?: RegExp;
  /**
   * When true, the URL regex runs at confidence 0.95 (beats JSON-LD sku at 0.92).
   * Use when the JSON-LD sku is a color/variant-specific ID and the URL contains
   * the stable product code (e.g. J.Crew ME957 vs BE611-WT0002).
   */
  preferUrlProductId?: boolean;
  /** Ordered list of __NEXT_DATA__ paths to try; first successful parse wins */
  nextDataPaths?: NextDataPath[];
  /** Optional overrides for DOM selector fallbacks */
  domOverrides?: {
    titleSelectors?: string[];
    priceSelectors?: string[];
    colorSelectors?: string[];
    productIdSelectors?: string[];
  };
  /**
   * CSS selector for a product link inside an active drawer/hover panel.
   * Used when the URL is a listing page (regex won't match) but the user
   * triggered a quick-view panel — the product_id is extracted from the
   * matched element's href using productIdUrlPattern.
   * Example: '[class*="draggable-drawer"] a[href*="/product/"]'
   */
  drawerProductLinkSelector?: string;
}

export const SITE_REGISTRY: SiteConfig[] = [
  {
    hostname: "cos.com",
    displayName: "COS",
    // product_id is in JSON-LD sku; URL is a fallback (e.g. slim-ribbed-t-shirt-black-1229297002)
    productIdUrlPattern: /-(\d{9,10})$/,
    // Listing pages open a hover panel (.draggable-drawer) — extract product_id from the panel link
    drawerProductLinkSelector: '[class*="draggable-drawer"] a[href*="/product/"]',
  },
  {
    hostname: "ralphlauren.com",
    displayName: "Ralph Lauren",
    // URL: /cable-knit-cotton-sweater/515061.html
    productIdUrlPattern: /\/(\d{5,6})\.html/,
  },
  {
    hostname: "bananarepublic.gap.com",
    displayName: "Banana Republic",
  },
  {
    hostname: "buckmason.com",
    displayName: "Buck Mason",
  },
  {
    hostname: "jcrew.com",
    displayName: "J.Crew",
    // URL: /classic-chino-pant/ME957?... — stable product code, not the color variant from JSON-LD sku
    productIdUrlPattern: /\/([A-Z]{2}\d{3})(?:\?|$)/i,
    preferUrlProductId: true,
  },
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
