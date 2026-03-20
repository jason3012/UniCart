'use strict';

const params = new URLSearchParams(location.search);
const itemId = params.get('id');

const subtitleEl = document.getElementById('subtitle');
const titleInput = document.getElementById('f-title');
const priceInput = document.getElementById('f-price');
const categoryInput = document.getElementById('f-category');
const colorInput = document.getElementById('f-color');
const sizingInput = document.getElementById('f-sizing');
const messageEl = document.getElementById('message');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');

let item = null;

// ── Load item ──────────────────────────────────────────────────────────────
(async () => {
  if (!itemId) {
    subtitleEl.textContent = 'No item ID provided.';
    saveBtn.disabled = true;
    return;
  }

  const { items = [] } = await chrome.storage.local.get('items');
  item = items.find((i) => i.id === itemId) ?? null;

  if (!item) {
    subtitleEl.textContent = 'Item not found.';
    saveBtn.disabled = true;
    return;
  }

  subtitleEl.textContent = `${item.brand} · ${item.product_id}`;
  titleInput.value = item.title ?? '';
  priceInput.value = item.price_usd != null ? item.price_usd : '';
  categoryInput.value = item.category ?? '';
  colorInput.value = item.color ?? '';
  sizingInput.value = item.sizing != null ? item.sizing : '';
})();

// ── Save ───────────────────────────────────────────────────────────────────
saveBtn.addEventListener('click', async () => {
  if (!item) return;

  const overrides = {};

  const title = titleInput.value.trim();
  if (title) overrides.title = title;

  const price = parseFloat(priceInput.value);
  if (!isNaN(price) && price >= 0) overrides.price_usd = price;

  const category = categoryInput.value.trim();
  if (category) overrides.category = category;

  const color = colorInput.value.trim();
  if (color) overrides.color = color;

  const sizing = sizingInput.value.trim();
  if (sizing) overrides.sizing = sizing;

  const res = await chrome.runtime.sendMessage({
    type: 'UPDATE_ITEM',
    id: item.id,
    overrides,
  });

  if (res.status === 'updated') {
    messageEl.textContent = 'Saved!';
    messageEl.className = 'message show success';
    setTimeout(() => window.close(), 700);
  } else {
    messageEl.textContent = res.error || 'Save failed.';
    messageEl.className = 'message show error';
  }
});

cancelBtn.addEventListener('click', () => window.close());
