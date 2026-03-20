/** Ordered from most-specific to least-specific. First match wins. */
const PRODUCT_TYPES: Array<{ label: string; pattern: RegExp }> = [
  { label: "T-Shirt",    pattern: /t[\s-]shirt|tshirt|\btee\b|graphic\s*tee/i },
  { label: "Tank Top",   pattern: /tank\s*top|camisole|\bcami\b|halter\s*top|sleeveless\s*top/i },
  { label: "Polo",       pattern: /\bpolo\b/i },
  { label: "Hoodie",     pattern: /hoodie|hooded\s*sweatshirt/i },
  { label: "Sweatshirt", pattern: /sweatshirt|crewneck|crew[\s-]neck/i },
  { label: "Cardigan",   pattern: /cardigan/i },
  { label: "Sweater",    pattern: /sweater|pullover|\bknitwear\b|\bjumper\b/i },
  { label: "Blouse",     pattern: /blouse/i },
  { label: "Shirt",      pattern: /\bshirt\b/i },
  { label: "Top",        pattern: /\btop\b/i },
  { label: "Coat",       pattern: /\bcoat\b|parka|trench|overcoat/i },
  { label: "Blazer",     pattern: /blazer/i },
  { label: "Jacket",     pattern: /jacket|bomber|windbreaker|anorak|puffer/i },
  { label: "Vest",       pattern: /\bvest\b|gilet|waistcoat/i },
  { label: "Jeans",      pattern: /\bjeans\b|\bdenim\b/i },
  { label: "Leggings",   pattern: /leggings|\btights\b/i },
  { label: "Shorts",     pattern: /\bshorts\b/i },
  { label: "Pants",      pattern: /\bpants\b|trousers|chinos?|slacks|joggers/i },
  { label: "Skirt",      pattern: /\bskirts?\b/i },
  { label: "Dress",      pattern: /\bdress\b|\bgown\b|sundress/i },
  { label: "Jumpsuit",   pattern: /jumpsuit|romper|playsuit|overalls/i },
  { label: "Bag",        pattern: /\bbag\b|\btote\b|backpack|purse|handbag|clutch|satchel|pouch|shopper/i },
  { label: "Sneakers",   pattern: /sneakers?|trainers?/i },
  { label: "Boots",      pattern: /\bboots?\b/i },
  { label: "Sandals",    pattern: /sandals?|flip[\s-]flops?|\bslides\b/i },
  { label: "Shoes",      pattern: /\bshoes?\b|loafers?|\bheels?\b|\bpumps?\b|\bmules?\b|oxfords?/i },
  { label: "Hat",        pattern: /\bhats?\b|\bcaps?\b|beanie|beret/i },
  { label: "Scarf",      pattern: /scarfs?|scarves|\bwrap\b|\bshawl\b/i },
  { label: "Belt",       pattern: /\bbelts?\b/i },
  { label: "Socks",      pattern: /\bsocks?\b|hosiery/i },
  { label: "Swimwear",   pattern: /swimsuit|bikini|swimwear|bathing\s*suit/i },
  { label: "Underwear",  pattern: /underwear|boxers?|\bbriefs?\b|\bbras?\b|lingerie/i },
];

/**
 * Derives a normalized product type from a product title and/or raw category
 * string (e.g. a breadcrumb path). Title is tried first as it is more
 * descriptive; rawCategory is used as a fallback.
 *
 * Returns one of the standard labels (e.g. "Jacket", "Pants") or null if no
 * keyword matches.
 */
export function normalizeProductType(
  title: string | null,
  rawCategory: string | null
): string | null {
  for (const text of [title, rawCategory]) {
    if (!text) continue;
    for (const { label, pattern } of PRODUCT_TYPES) {
      if (pattern.test(text)) return label;
    }
  }
  return null;
}
