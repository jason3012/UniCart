'use strict';

// Provides REGISTRY_HOSTNAMES global — auto-generated from src/registry/sites.ts
importScripts('registry.js');

// For local testing: change to 'http://localhost:3000'
// For production: change to 'https://unicart.vercel.app'
const WEB_APP_URL = 'https://unicart-app-gxg9fycudccngtd2.eastus-01.azurewebsites.net';

// ── Badge indicator ─────────────────────────────────────────────────────────
function detectSiteFromUrl(url) {
  if (!url) return 'unknown';
  try {
    const host = new URL(url).hostname;
    if (host.includes('zara.com')) return 'zara';
    if (host.includes('uniqlo.com')) return 'uniqlo';
    if (typeof REGISTRY_HOSTNAMES !== 'undefined' &&
        REGISTRY_HOSTNAMES.some((h) => host.includes(h))) return 'registry';
  } catch (_) { /* ignore */ }
  return 'unknown';
}

function updateBadge(tabId, url) {
  const site = detectSiteFromUrl(url);
  if (site !== 'unknown') {
    chrome.action.setBadgeText({ text: '●', tabId });
    chrome.action.setBadgeBackgroundColor({ color: '#22c55e', tabId });
  } else {
    chrome.action.setBadgeText({ text: '', tabId });
  }
}

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  try {
    const tab = await chrome.tabs.get(tabId);
    updateBadge(tabId, tab.url);
  } catch (_) { /* tab may have been closed */ }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') updateBadge(tabId, tab.url);
});

// Internal message router (from popup / content scripts)
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

// External message router (from the UniCart web app — auth relay)
chrome.runtime.onMessageExternal.addListener((msg, _sender, sendResponse) => {
  if (msg.type === 'AUTH_SESSION') {
    const { access_token, refresh_token, user_email } = msg;
    if (!access_token) {
      sendResponse({ status: 'error', error: 'No access_token' });
      return true;
    }
    chrome.storage.local.set({ auth: { access_token, refresh_token, user_email } })
      .then(() => {
        console.log('[UniCart] Auth session saved for', user_email);
        // Sync local items to the server now that we have a session
        syncToServer(access_token).catch(console.error);
        sendResponse({ status: 'ok' });
      });
    return true;
  }
});

// ── Supabase sync helpers ───────────────────────────────────────────────────
async function syncToServer(accessToken) {
  const { items = [] } = await chrome.storage.local.get('items');
  if (items.length === 0) return;

  console.log('[UniCart] Syncing', items.length, 'item(s) to server…');
  const res = await fetch(`${WEB_APP_URL}/api/items/bulk_upsert`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ items }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    console.error('[UniCart] Sync failed:', body);
  } else {
    const body = await res.json();
    console.log('[UniCart] Sync complete:', body.count, 'item(s) upserted');
  }
}

async function saveToServer(item) {
  const { auth } = await chrome.storage.local.get('auth');
  // In production, skip if not signed in. In local dev, always try.
  const token = auth?.access_token;
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  await fetch(`${WEB_APP_URL}/api/items/upsert`, {
    method: 'POST',
    headers,
    body: JSON.stringify(item),
  }).catch((err) => console.warn('[UniCart] Server upsert failed:', err));
}

async function deleteFromServer(item) {
  // We don't store the server UUID locally, so use brand+product_id lookup via upsert table
  // The server will handle dedup — nothing to do on delete unless we cache the server ID.
  // For now, deletions only affect local storage; server items persist until next full sync.
  void item;
}

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
      func: () => (window.UniCart.extractWithRegistry ?? window.UniCart.extract)(document, location.href),
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
    saveToServer(item).catch(console.error);
    return { status: 'saved', item };
  },

  // User confirmed missing required fields
  CONFIRM_SAVE: async ({ product, overrides = {} }) => {
    const { items = [] } = await chrome.storage.local.get('items');
    const item = buildItem(product, overrides);
    await chrome.storage.local.set({ items: [...items, item] });
    saveToServer(item).catch(console.error);
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
    saveToServer(items[idx]).catch(console.error);
    return { status: 'saved', item: items[idx] };
  },

  // User chose to save a new copy despite duplicate
  DUPLICATE_NEW: async ({ product }) => {
    const { items = [] } = await chrome.storage.local.get('items');
    const item = buildItem(product);
    await chrome.storage.local.set({ items: [...items, item] });
    saveToServer(item).catch(console.error);
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
