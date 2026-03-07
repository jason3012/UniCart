import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    include: ["testing/unit/**/*.test.ts", "testing/fixture/**/*.test.ts", "scripts/**/*.test.ts"],
  },
});
