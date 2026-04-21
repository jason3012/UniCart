'use strict';

// ── State ──────────────────────────────────────────────────────────────────
const state = {
  tab: null,
  site: 'unknown',
  saving: false,
  pendingProduct: null,
  pendingExistingId: null,
  items: [],
};

// ── Elements ───────────────────────────────────────────────────────────────
const siteBadge = document.getElementById('site-badge');
const saveBtn = document.getElementById('save-btn');
const messageEl = document.getElementById('message');
const confirmUI = document.getElementById('confirm-ui');
const confirmFields = document.getElementById('confirm-fields');
const confirmCancel = document.getElementById('confirm-cancel');
const confirmSave = document.getElementById('confirm-save');
const duplicateUI = document.getElementById('duplicate-ui');
const dupCancel = document.getElementById('dup-cancel');
const dupNew = document.getElementById('dup-new');
const dupUpdate = document.getElementById('dup-update');
const cartList = document.getElementById('cart-list');
const accountLabel = document.getElementById('account-label');
const webappLink = document.getElementById('webapp-link');

const WEB_APP_URL = 'https://unicart-app-gxg9fycudccngtd2.eastus-01.azurewebsites.net';

// ── Init ───────────────────────────────────────────────────────────────────
(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  state.tab = tab;
  state.site = detectSite(tab?.url);
  renderSiteStatus();
  renderAccountBar();

  const res = await chrome.runtime.sendMessage({ type: 'GET_CART' });
  state.items = res.items || [];
  renderCart();
})();

// ── Account bar ────────────────────────────────────────────────────────────
async function renderAccountBar() {
  const { auth } = await chrome.storage.local.get('auth');
  webappLink.href = WEB_APP_URL + '/app';

  if (auth?.user_email) {
    accountLabel.textContent = auth.user_email;
    accountLabel.className = 'account-label signed-in';
  } else {
    accountLabel.textContent = 'Sign in to sync';
    accountLabel.className = 'account-label signed-out';
    accountLabel.style.cursor = 'pointer';
    accountLabel.addEventListener('click', () => {
      const loginUrl = `${WEB_APP_URL}/login?source=extension&ext_id=${chrome.runtime.id}`;
      chrome.tabs.create({ url: loginUrl });
    });
  }
}

// ── Site detection (hostname-based) ────────────────────────────────────────
function detectSite(url) {
  if (!url) return 'unknown';
  try {
    const host = new URL(url).hostname;
    if (host.includes('zara.com')) return 'zara';
    if (host.includes('uniqlo.com')) return 'uniqlo';
    // Registry brands (REGISTRY_HOSTNAMES loaded from registry.js)
    if (typeof REGISTRY_HOSTNAMES !== 'undefined') {
      if (REGISTRY_HOSTNAMES.some(h => host.includes(h))) return 'registry';
    }
  } catch (_) { /* ignore */ }
  return 'unknown';
}

// ── Render helpers ─────────────────────────────────────────────────────────
function renderSiteStatus() {
  const labels = {
    zara: 'Zara product page',
    uniqlo: 'Uniqlo product page',
    registry: 'Supported product page',
    unknown: 'Unsupported site',
  };
  const supported = state.site !== 'unknown';

  siteBadge.textContent = labels[state.site] ?? 'Unsupported site';
  siteBadge.className = `site-badge ${supported ? 'supported' : 'unsupported'}`;

  saveBtn.disabled = !supported || state.saving;
  saveBtn.textContent = state.saving ? 'Saving…' : 'Save item';
}

function showMessage(text, type) {
  messageEl.textContent = text;
  messageEl.className = `message show ${type}`;
}

function hideMessage() {
  messageEl.className = 'message';
}

// ── Save flow ──────────────────────────────────────────────────────────────
saveBtn.addEventListener('click', async () => {
  if (state.saving || !state.tab) return;
  hideMessage();
  confirmUI.hidden = true;
  duplicateUI.hidden = true;
  state.saving = true;
  renderSiteStatus();

  try {
    const res = await chrome.runtime.sendMessage({
      type: 'SAVE_ITEM',
      tabId: state.tab.id,
    });
    handleSaveResponse(res);
  } catch (err) {
    showMessage(err.message || 'Save failed.', 'error');
  } finally {
    state.saving = false;
    renderSiteStatus();
  }
});

function handleSaveResponse(res) {
  if (res.status === 'saved') {
    showMessage('Item saved!', 'success');
    refreshCart();
  } else if (res.status === 'error') {
    showMessage(res.error || 'Save failed.', 'error');
  } else if (res.status === 'confirm') {
    state.pendingProduct = res.product;
    showConfirmUI(res.needsConfirm);
  } else if (res.status === 'duplicate') {
    state.pendingProduct = res.product;
    state.pendingExistingId = res.existingId;
    duplicateUI.hidden = false;
  }
}

// ── Confirm UI ─────────────────────────────────────────────────────────────
function showConfirmUI(fields) {
  confirmFields.innerHTML = '';
  for (const field of fields) {
    const row = document.createElement('div');
    row.className = 'field-row';

    const label = document.createElement('label');
    label.textContent = field.replace(/_/g, ' ');

    const input = document.createElement('input');
    input.type = 'text';
    input.name = field;
    input.placeholder = `Enter ${field.replace(/_/g, ' ')}`;
    input.value = state.pendingProduct?.[field] ?? '';

    row.appendChild(label);
    row.appendChild(input);
    confirmFields.appendChild(row);
  }
  confirmUI.hidden = false;
}

confirmCancel.addEventListener('click', () => {
  confirmUI.hidden = true;
  state.pendingProduct = null;
});

confirmSave.addEventListener('click', async () => {
  const overrides = {};
  for (const input of confirmFields.querySelectorAll('input')) {
    const v = input.value.trim();
    if (v) overrides[input.name] = v;
  }

  confirmUI.hidden = true;
  const res = await chrome.runtime.sendMessage({
    type: 'CONFIRM_SAVE',
    product: state.pendingProduct,
    overrides,
  });
  state.pendingProduct = null;
  handleSaveResponse(res);
});

// ── Duplicate UI ───────────────────────────────────────────────────────────
dupCancel.addEventListener('click', () => {
  duplicateUI.hidden = true;
  state.pendingProduct = null;
  state.pendingExistingId = null;
});

dupNew.addEventListener('click', async () => {
  duplicateUI.hidden = true;
  const res = await chrome.runtime.sendMessage({
    type: 'DUPLICATE_NEW',
    product: state.pendingProduct,
  });
  state.pendingProduct = null;
  state.pendingExistingId = null;
  handleSaveResponse(res);
});

dupUpdate.addEventListener('click', async () => {
  duplicateUI.hidden = true;
  const res = await chrome.runtime.sendMessage({
    type: 'DUPLICATE_UPDATE',
    existingId: state.pendingExistingId,
    product: state.pendingProduct,
  });
  state.pendingProduct = null;
  state.pendingExistingId = null;
  handleSaveResponse(res);
});

// ── Cart rendering ─────────────────────────────────────────────────────────
async function refreshCart() {
  const res = await chrome.runtime.sendMessage({ type: 'GET_CART' });
  state.items = res.items || [];
  renderCart();
}

function renderCart() {
  if (state.items.length === 0) {
    cartList.innerHTML = '<div class="cart-empty">No saved items yet.</div>';
    return;
  }
  cartList.innerHTML = '';
  for (const item of state.items) {
    cartList.appendChild(buildCartRow(item));
  }
}

function buildCartRow(item) {
  const div = document.createElement('div');
  div.className = 'cart-item';

  // Thumbnail
  const img = document.createElement('img');
  img.className = 'cart-thumb';
  img.src = item.image_url || '';
  img.alt = '';
  img.onerror = () => { img.removeAttribute('src'); };

  // Info
  const info = document.createElement('div');
  info.className = 'cart-info';

  const title = document.createElement('div');
  title.className = 'cart-title';
  title.textContent = item.title || 'Untitled';
  title.title = item.title || '';

  const meta = document.createElement('div');
  meta.className = 'cart-meta';
  meta.textContent = [item.brand, item.color, item.category].filter(Boolean).join(' · ');

  info.appendChild(title);
  info.appendChild(meta);

  if (item.price_usd != null) {
    const price = document.createElement('div');
    price.className = 'cart-price';
    price.textContent = `$${Number(item.price_usd).toFixed(2)}`;
    info.appendChild(price);
  }

  // Actions
  const actions = document.createElement('div');
  actions.className = 'cart-actions';

  actions.appendChild(makeBtn('Open', 'btn-secondary', () => {
    chrome.tabs.create({ url: item.url });
  }));
  actions.appendChild(makeBtn('Edit', 'btn-secondary', () => {
    chrome.tabs.create({ url: chrome.runtime.getURL(`edit.html?id=${item.id}`) });
  }));
  actions.appendChild(makeBtn('Delete', 'btn-danger', async () => {
    await chrome.runtime.sendMessage({ type: 'DELETE_ITEM', id: item.id });
    await refreshCart();
  }));

  div.appendChild(img);
  div.appendChild(info);
  div.appendChild(actions);
  return div;
}

function makeBtn(text, cls, onClick) {
  const btn = document.createElement('button');
  btn.className = `btn ${cls}`;
  btn.textContent = text;
  btn.addEventListener('click', onClick);
  return btn;
}
