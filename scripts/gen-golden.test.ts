/**
 * Golden file generator — run this to auto-generate golden.json from input.html + url.txt.
 *
 * Usage (generate for a specific fixture):
 *   FIXTURE=zara/slim-fit-jeans npx vitest run scripts/gen-golden.test.ts
 *
 * It prints the generated golden.json to the console and writes it to disk.
 * Review the output before committing — correct any wrong values in golden.json.
 */

import { test } from "vitest";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { JSDOM } from "jsdom";
import { extract } from "../src/index.js";

test("generate golden.json", () => {
  const fixture = process.env.FIXTURE;
  if (!fixture) {
    console.log("Set FIXTURE=<brand>/<name> to generate a golden file.");
    console.log("Example: FIXTURE=zara/slim-fit-jeans npx vitest run scripts/gen-golden.test.ts");
    return;
  }

  const dir = resolve(`testing/fixtures/${fixture}`);
  const html = readFileSync(`${dir}/input.html`, "utf-8");
  const url = readFileSync(`${dir}/url.txt`, "utf-8").trim();

  const dom = new JSDOM(html, { url });
  const result = extract(dom.window.document, url);

  const golden = {
    success: result.success,
    site: result.site,
    product: result.product
      ? {
          title: result.product.title,
          brand: result.product.brand,
          product_id: result.product.product_id,
          image_url: result.product.image_url,
          price_usd: result.product.price_usd,
          color: result.product.color,
        }
      : null,
  };

  const output = JSON.stringify(golden, null, 2);
  console.log("\n--- Generated golden.json ---\n");
  console.log(output);

  writeFileSync(`${dir}/golden.json`, output + "\n");
  console.log(`\nWritten to testing/fixtures/${fixture}/golden.json`);
});
