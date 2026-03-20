Phase 3 — Website Build (Linked to the Chrome Extension)

Phase 3 objective

Build a clean, minimal website that is directly linked to the Chrome extension and serves as the primary interface for users to manage their “universal cart.”

The website must: 1. Display saved items with image previews (from extraction). 2. Support preset filters and sorting. 3. Support a compare mode for 2–4 items. 4. Be reachable from the extension via a clear “Open Web App” link. 5. Support cross-device persistence (recommended) and consistent data across extension + website.

⸻

Stack and deployment (recommended)
• Next.js (App Router) deployed on Vercel
• Supabase for persistence:
• Postgres for structured item storage
• Auth for user accounts
• Optional Storage if you later need to proxy/cache images (not required if using retailer image URLs)

If you already have local-only data in the extension (chrome.storage), Phase 3 must define a sync path to the website (details below).

⸻

Data model (website contract)

Use a canonical Item record consistent with the extension schema:

Required:
• id (uuid, server-side)
• user_id
• url
• brand (Zara / Uniqlo / future)
• product_id
• title
• image_url
• created_at, updated_at

Optional:
• price_usd (numeric)
• category (string) — maps to “clothing type” filter
• color (string)
• sizing (string recommended for web; if you still store numeric in extension, convert/display carefully)

Metadata (optional but useful):
• field_sources, field_confidence

Uniqueness constraint:
• Unique per user on (user_id, brand, product_id).

⸻

Website pages and routes (minimal)

Public / auth
• / — landing page with product description and “Sign in”
• /login — auth page (Supabase Auth)
• /app — main cart dashboard (protected)
• /compare — compare view (protected; accepts selected item IDs)

Optional:
• /settings — preferences (currency behavior, future season logic, etc.)

⸻

Core features

1. Cart dashboard UI (/app)

Design goals:
• Minimal, clean layout
• Grid of item cards with image, title, brand, and key attributes
• Quick controls: filter, sort, compare selection

Each item card shows:
• Image (from image_url)
• Title
• Brand
• Price (if present)
• Category/type (if present)
• Color/size (if present)
Actions:
• Open product link
• Remove
• Select for compare (checkbox)

2. Filters (preset)

Filters required:
• Clothing type (maps to category)
• Price (range slider or preset buckets)
• Color
• Size
• Brand

Implementation rules:
• Filters must be combinable.
• Filters must be resettable (“Clear all”).
• Filters should update results instantly (client-side state or server query).

Recommended approach:
• Client-side filtering for fast UX if dataset is small/moderate.
• Optionally support server-side filtering as dataset grows.

3. Sorting

Provide sorting options:
• Newest saved
• Oldest saved
• Price low → high
• Price high → low
• Brand A → Z
• Type A → Z

4. Compare mode (2–4 items)

Requirements:
• User can select 2–4 items from dashboard
• Clicking “Compare” navigates to /compare?ids=... or a route with selected IDs
• Compare page shows items side-by-side in a column layout:
• Image
• Title
• Brand
• Price
• Category
• Color
• Size
• Link to product page
• If fewer than 2 or more than 4 selected:
• block the action and show a clear message

UX details:
• Compare selections should be visible (e.g., a sticky compare bar with count).
• Provide “Remove from compare” and “Back to cart.”

⸻

Extension ↔ Website linkage (required)

Extension changes (Phase 3)

Add a clear link in the extension popup:
• Button: “Open Web App”
• Opens the deployed website URL in a new tab.

Also add an “account state” indicator:
• If user is signed in: show email/username + sync status
• If not signed in: show “Sign in to sync items” + link to login page

⸻

Sync strategy (critical decision)

You have two viable Phase 3 approaches. Pick one and implement fully.

Option A (recommended): Website is source of truth (full sync)
• User signs in on website (Supabase).
• Extension also authenticates user (Supabase Auth in extension context).
• Extension writes items directly to Supabase (or calls website API to do so).
• Website reads from Supabase; extension reads/syncs from Supabase.

Pros:
• Cross-device sync
• One unified dataset
• Clean product story

Cons:
• Requires auth in extension (work, but standard)

Option B: One-time export from extension to website
• Extension stores locally.
• Website provides an “Import” flow:
• extension generates a JSON export
• user uploads/imports into website
Pros:
• simpler auth story
Cons:
• not “directly linked” in a real product sense, more manual

Given your requirement (“directly linked”), implement Option A.

⸻

Authentication requirements (Option A)
• Website: Supabase Auth (email magic link or OAuth)
• Extension: must obtain a user session token securely
• simplest: “Sign in” opens website login, then extension uses a handshake mechanism (see below)

Sign-in handshake (clean approach)
• Extension “Sign in” button opens /login?source=extension
• After login, website generates a short-lived link code (or deep link) the extension can use to associate session
• Extension stores only what’s needed (securely), ideally in chrome.storage.local

Exact mechanism can vary, but requirement is: extension must be able to write items to the same user account the website uses.

⸻

Website API surface (needed for extension sync)

Provide minimal endpoints (either Next.js Route Handlers or Server Actions):
• POST /api/items/upsert — insert/update by (user_id, brand, product_id)
• POST /api/items/bulk_upsert — for syncing many local items
• GET /api/items — list items for authenticated user (supports filters/sort optional)
• DELETE /api/items/:id — remove item

Rules:
• All endpoints must require auth (session validation).
• Enforce row-level access: user can only touch their own items.

⸻

Image handling

Primary approach:
• Use retailer image_url directly in <img> / Next Image (allow-list domains).

Fallback approach (only if needed):
• Proxy/caching layer using Supabase Storage or an image proxy endpoint.
• Only do this if hotlinking / CORS causes issues.

⸻

Testing requirements (Phase 3)

Website functional tests
• Items render with images
• Filters work and combine correctly
• Sort works correctly
• Compare selection enforces 2–4
• Remove item works
• Empty state is clean

Extension ↔ website integration tests
• Clicking “Open Web App” opens correct URL
• Auth handshake works end-to-end
• Save in extension shows up on website within acceptable time (near-real-time)
• Duplicate save updates existing item instead of creating duplicates

⸻

Definition of done (Phase 3)

Phase 3 is complete when:
• Website is deployed (Vercel) and linked from extension popup.
• User can sign in and view their saved items with images.
• Filters + sorting work as specified.
• Compare mode works for 2–4 items and blocks invalid selections.
• Extension syncs items to the website account reliably (Option A).

⸻

Post-Phase 3 (future)
• Add more brands via additional adapters
• Add tags/collections, wishlist vs cart separation
• Add better size modeling (string + region)
• Add seasonal/fabric rules if desired
• Add shareable compare links
• Add import/export and backups
