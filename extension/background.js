'use strict';

// Message router
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  const handler = HANDLERS[msg.type];
  if (handler) {
    handler(msg)
      .then(sendResponse)
      .catch((err) => {
        console.error('[UniCart] Handler error:', err);
        sendResponse({ status: 'error', error: err.message });
      });
    return true; // keep channel open for async response
  }
});

const HANDLERS = {
  GET_CART: async () => {
    const { items = [] } = await chrome.storage.local.get('items');
    return { status: 'ok', items };
  },

  SAVE_ITEM: async ({ tabId }) => {
    // Inject the Phase 1 extractor bundle (sets window.UniCart)
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ['extractor.bundle.js'],
    });

    // Run extraction and return the result
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId },
      func: () => window.UniCart.extract(document, location.href),
    });

    console.log('[UniCart] Extraction result:', JSON.stringify(result, null, 2));

    if (!result || !result.success || !result.product) {
      return {
        status: 'error',
        error: result?.errors?.join(', ') || 'Extraction failed.',
      };
    }

    const product = result.product;

    // product_id is required; block save if null
    if (!product.product_id) {
      return { status: 'error', error: 'Could not extract a product ID from this page.' };
    }

    // Check required fields and confidence
    const REQUIRED = ['title', 'brand', 'product_id', 'image_url'];
    const needsConfirm = REQUIRED.filter((field) => {
      const value = product[field];
      const conf = product.field_confidence?.[field] ?? 0;
      return !value || conf < 0.7;
    });

    if (needsConfirm.length > 0) {
      return { status: 'confirm', product, needsConfirm };
    }

    // Check for duplicate by (brand, product_id)
    const { items = [] } = await chrome.storage.local.get('items');
    const existing = items.find(
      (i) => i.brand === product.brand && i.product_id === product.product_id
    );
    if (existing) {
      return { status: 'duplicate', product, existingId: existing.id };
    }

    // Save
    const item = buildItem(product);
    await chrome.storage.local.set({ items: [...items, item] });
    return { status: 'saved', item };
  },

  // User confirmed missing required fields
  CONFIRM_SAVE: async ({ product, overrides = {} }) => {
    const { items = [] } = await chrome.storage.local.get('items');
    const item = buildItem(product, overrides);
    await chrome.storage.local.set({ items: [...items, item] });
    return { status: 'saved', item };
  },

  // User chose to update existing duplicate
  DUPLICATE_UPDATE: async ({ existingId, product }) => {
    const { items = [] } = await chrome.storage.local.get('items');
    const idx = items.findIndex((i) => i.id === existingId);
    if (idx === -1) return { status: 'error', error: 'Item not found.' };

    const now = new Date().toISOString();
    items[idx] = {
      ...buildItem(product),
      id: existingId,
      created_at: items[idx].created_at,
      updated_at: now,
      extracted_at: now,
    };
    await chrome.storage.local.set({ items });
    return { status: 'saved', item: items[idx] };
  },

  // User chose to save a new copy despite duplicate
  DUPLICATE_NEW: async ({ product }) => {
    const { items = [] } = await chrome.storage.local.get('items');
    const item = buildItem(product);
    await chrome.storage.local.set({ items: [...items, item] });
    return { status: 'saved', item };
  },

  DELETE_ITEM: async ({ id }) => {
    const { items = [] } = await chrome.storage.local.get('items');
    await chrome.storage.local.set({ items: items.filter((i) => i.id !== id) });
    return { status: 'deleted' };
  },

  UPDATE_ITEM: async ({ id, overrides }) => {
    const { items = [] } = await chrome.storage.local.get('items');
    const idx = items.findIndex((i) => i.id === id);
    if (idx === -1) return { status: 'error', error: 'Item not found.' };

    const item = items[idx];
    item.field_sources ??= {};
    item.field_confidence ??= {};

    for (const [field, value] of Object.entries(overrides)) {
      item[field] = value;
      item.field_sources[field] = 'user';
      item.field_confidence[field] = 1.0;
    }
    item.updated_at = new Date().toISOString();
    items[idx] = item;
    await chrome.storage.local.set({ items });
    return { status: 'updated', item };
  },
};

function buildItem(product, userOverrides = {}) {
  const now = new Date().toISOString();
  const item = {
    id: crypto.randomUUID(),
    url: product.url,
    brand: product.brand,
    product_id: product.product_id,
    title: product.title,
    image_url: product.image_url,
    price_usd: product.price_usd ?? null,
    category: product.category ?? null,
    color: product.color ?? null,
    sizing: product.sizing ?? null,
    field_sources: { ...(product.field_sources ?? {}) },
    field_confidence: { ...(product.field_confidence ?? {}) },
    created_at: now,
    updated_at: now,
    extracted_at: now,
  };

  for (const [field, value] of Object.entries(userOverrides)) {
    item[field] = value;
    item.field_sources[field] = 'user';
    item.field_confidence[field] = 1.0;
  }

  return item;
}
