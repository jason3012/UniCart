# UniCart

A universal shopping cart for fashion. Save items from any supported retailer with one click, then filter, sort, and compare them all in one place.

<!-- SCREENSHOT: Hero — dashboard showing a grid of saved items from multiple brands -->
![Dashboard](docs/images/dashboard.png)

---

## What it does

Most people shop across 5–10 different retailers and lose track of what they've saved. UniCart is a Chrome extension + web app that extracts product data from any supported retailer page and stores it to a single dashboard.

- **One-click save** — click the extension on any product page, confirm the extracted details, done
- **Universal cart** — items from Zara, Uniqlo, COS, J.Crew, and more, side by side
- **Compare view** — select 2–4 items to compare price, size, and color at a glance
- **Sizing autofill** — set your preferred sizes in your profile; they're applied automatically when a product page has no default selected
- **Synced across devices** — sign in to sync your cart from any browser

<!-- SCREENSHOT: Extension popup showing a Zara product page with the save button -->
![Extension popup](docs/images/extension-popup.png)

---

## Supported retailers

| Brand | Domain |
|---|---|
| Zara | zara.com |
| Uniqlo | uniqlo.com |
| COS | cos.com |
| Ralph Lauren | ralphlauren.com |
| J.Crew | jcrew.com |
| Banana Republic | bananarepublic.gap.com |
| Buck Mason | buckmason.com |

---

## Architecture

```
UniCart/
├── src/                  # Phase 1 — Extraction library (TypeScript, frozen)
│   └── index.ts          # extract(document, url) → ProductExtracted
├── extension/            # Phase 2 — Chrome MV3 extension
│   ├── background.js     # Service worker: save, sync, auth relay
│   ├── popup.html/js     # Cart UI
│   └── extractor.bundle.js  # Bundled extraction library
└── web/                  # Phase 3 — Next.js web app
    ├── app/              # App Router pages
    ├── lib/db/cosmos.ts  # Azure Cosmos DB client
    └── lib/auth/         # Auth.js v5 + Google OAuth
```

**Stack:** Next.js 16 (App Router) · Auth.js v5 (Google OAuth) · Azure Cosmos DB · Azure App Service · Chrome MV3

**Auth flow:** The extension opens the web app's login page with `source=extension&ext_id=<id>`. After Google OAuth, the relay page at `/auth/extension-relay` generates a short-lived JWT and passes it to the extension via `chrome.runtime.sendMessage`. The extension stores it and uses it as a Bearer token on all API calls.

<!-- SCREENSHOT: Profile setup page showing the sizing and brand preference form -->
![Profile setup](docs/images/profile-setup.png)

---

## Local development

### Prerequisites

- Node.js 20+
- An Azure Cosmos DB account with a `unicart` database
- A Google OAuth 2.0 client (for auth)

### 1. Clone and install

```bash
git clone https://github.com/jason3012/UniCart.git
cd UniCart
npm install          # root — installs extraction library deps
cd web && npm install
```

### 2. Configure environment

Create `web/.env.local`:

```env
LOCAL_DEV=true

AUTH_SECRET=<generate with: openssl rand -base64 32>
AUTH_GOOGLE_ID=<your Google OAuth client ID>
AUTH_GOOGLE_SECRET=<your Google OAuth client secret>
AUTH_URL=http://localhost:3000

COSMOS_CONNECTION_STRING=AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<key>;
```

With `LOCAL_DEV=true`, auth is bypassed and items are stored locally in a JSON file — no Cosmos DB required for basic development.

### 3. Run the web app

```bash
cd web
npm run dev          # starts at http://localhost:3000
```

### 4. Load the Chrome extension

```bash
npm run build:ext    # bundles src/index.ts → extension/extractor.bundle.js
```

Then in Chrome:
1. Go to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** → select the `extension/` folder

The extension connects to `http://localhost:3000` when `LOCAL_DEV=true` in the web app.

### 5. Run tests

```bash
npm test             # all unit + fixture tests
npm run test:unit    # unit tests only
npm run test:fixture # snapshot tests against local HTML fixtures
npm run build        # TypeScript type check
```

---

## Cosmos DB setup

Create the required containers in your `unicart` database:

```bash
# Items container (partitioned by user)
az cosmosdb sql container create \
  --account-name <account> --resource-group <rg> \
  --database-name unicart --name items \
  --partition-key-path /user_id

# Profiles container
az cosmosdb sql container create \
  --account-name <account> --resource-group <rg> \
  --database-name unicart --name profiles \
  --partition-key-path /id
```

---

## Deployment (Azure)

The web app deploys to Azure App Service via GitHub Actions. Required app settings:

| Setting | Value |
|---|---|
| `AUTH_SECRET` | 32-byte base64 secret |
| `AUTH_GOOGLE_ID` | Google OAuth client ID |
| `AUTH_GOOGLE_SECRET` | Google OAuth client secret |
| `AUTH_URL` | `https://<your-app>.azurewebsites.net` |
| `COSMOS_CONNECTION_STRING` | Full Azure Cosmos DB connection string |

Also add `https://<your-app>.azurewebsites.net/api/auth/callback/google` to the authorized redirect URIs in your Google Cloud Console OAuth client.

<!-- SCREENSHOT: Compare view showing 2-4 items side by side with price and sizing -->
![Compare view](docs/images/compare.png)

---

## Adding a new retailer

1. Add a site entry to `src/registry/sites.ts` with the hostname and extraction selectors
2. Rebuild the extension bundle: `npm run build:ext`
3. Add the retailer's image CDN hostname to `web/next.config.js` under `images.remotePatterns`
4. Add a fixture for testing: `testing/fixtures/<brand>/<product>/` with `input.html`, `golden.json`, `url.txt`
5. Run `npm run test:fixture` to validate

Note: `src/` uses a registry-based generic extractor for most brands. Zara and Uniqlo have dedicated adapters due to their non-standard `__NEXT_DATA__` schemas.
