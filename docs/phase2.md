Phase 2 objective

Build a Manifest V3 Chrome extension that: 1. Runs the Phase 1 extraction library on the current tab only when the user clicks. 2. Prompts for user input only when required fields are missing or low-confidence. 3. Saves extracted items into a local universal cart (Chrome local storage) for now. 4. Provides a popup UI to view, open, edit, and delete saved items. 5. Does no background collection and no browsing-history tracking.

Supported scope (v1)
• Supported auto-extraction sites: Zara + Uniqlo
• Unsupported sites: show a clear “Unsupported site” state (optional: allow “Save URL only” marked as incomplete).

⸻

Data contract (Phase 2 persistence model)

Store each saved item with:

Required
• id (internal UUID)
• url (string)
• brand ("Zara" | "Uniqlo")
• product_id (string)
• title (string)
• image_url (string)
• created_at (ISO string)
• updated_at (ISO string)

Optional
• price_usd (number | null)
• category (string | null)
• color (string | null)
• sizing (number | null)

Metadata (for quality/debug)
• field_sources (per-field source)
• field_confidence (per-field confidence 0..1)
• extracted_at (ISO string)

User edits
• Either keep user_overrides object, or update:
• field_sources[field] = "user"
• field_confidence[field] = 1.0

⸻

Save flow (required behavior)

Trigger: user clicks toolbar action or popup button “Save item”. 1. Get the active tab (URL + tabId). 2. Inject a content script just-in-time (preferred) using scripting.executeScript. 3. Content script calls extract(document, url) from Phase 1 library and returns the ExtractionResult. 4. Validate required fields:
• title, brand, product_id, image_url, url 5. If any required field is missing or confidence < threshold → open confirm UI. 6. If confirm UI resolves missing fields → save item. 7. Deduplicate:
• Primary key: (brand, product_id)
• If duplicate exists: prompt user
• “Update existing” (recommended default)
• “Save as new copy” (optional)

Important: If product_id cannot be obtained, do not save (must block).

⸻

Confirmation rules (deterministic)

Define one consistent rule set:

Required fields
• Missing → always ask
• Present but confidence < 0.7 → ask

Optional fields
• Missing → allow save (editable later)
• Present but confidence < 0.5 → keep but label “low confidence” or ask user (pick one and keep consistent)

Recommended for MVP: prompt only for required fields; optional fields remain blank if uncertain.

⸻

Extension architecture (modules)

Implement the extension as these components: 1. manifest.json (MV3)
• Action entry (toolbar icon)
• Permissions: keep minimal
• activeTab, scripting, storage
• Background: service worker
• Popup: HTML/JS UI bundle 2. Service worker (background)
• Handles click event (chrome.action.onClicked)
• Coordinates script injection
• Receives extraction result via messaging
• Applies validation/dedupe logic
• Writes to chrome.storage.local
• Notifies popup of changes (or popup re-reads storage on open) 3. Content script (injected on demand)
• Imports/uses Phase 1 extractor
• Runs extraction in-page
• Returns structured result to service worker 4. Popup UI
• “Save current item” button
• List saved items (thumb + title + brand + price if available)
• Actions: Open / Edit / Delete
• “Unsupported site” messaging 5. Edit UI
• Simple form for: category, color, sizing, price_usd (and optional title)
• On save: persist overrides and update timestamps

⸻

UX requirements (Phase 2)

Popup must show:
• Detected site status: “Zara product page” / “Uniqlo product page” / “Unsupported”
• Button: “Save item”
• After save: confirmation message
• Saved items list with:
• thumbnail
• title (truncated)
• brand
• price if present
• Open/Edit/Delete actions

Confirm UI appears only if required fields fail validation/confidence.

⸻

Storage requirements (Phase 2)

Use chrome.storage.local only.
• Store items in a stable shape: either itemsById map or items[].
• Keep a secondary index or computed lookup to dedupe by (brand, product_id).

⸻

Testing requirements (Phase 2)

Manual test checklist (must pass)
On both Zara and Uniqlo: 1. Save on a fully loaded product page → item saved with required fields. 2. Save immediately after navigation (before full render) → either waits/stabilizes or triggers confirm UI; does not save broken data. 3. Duplicate save → offers update vs new. 4. Unsupported site → shows unsupported state; no crash. 5. Edit optional fields → persists and marks source=user. 6. Open item → navigates to correct URL. 7. Delete item → removed and persists.

Debugging hooks (required)
• Log extraction result and confidence map in dev builds.
• Provide a way to view service worker logs and content script logs (standard DevTools).

⸻

Definition of done (Phase 2)

Phase 2 is complete when:
• Unpacked extension runs locally.
• “Save item” works reliably for Zara + Uniqlo and blocks saves without product_id.
• Confirmation UI only appears when required.
• Popup shows cart list and supports open/edit/delete.
• No background scraping; minimal permissions.
