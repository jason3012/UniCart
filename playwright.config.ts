import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./testing/integration",
  fullyParallel: false,
  retries: 1,
  timeout: 30_000,
  use: {
    headless: true,
    // Inject the built extractor via page.addScriptTag in each test
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
