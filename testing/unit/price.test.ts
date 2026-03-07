import { describe, it, expect } from "vitest";
import { parsePriceUSD, isCurrencyUSD } from "../../src/core/normalize/price.js";

describe("parsePriceUSD", () => {
  it("parses simple dollar sign", () => {
    expect(parsePriceUSD("$49.90")).toBe(49.9);
  });

  it("parses with thousands separator", () => {
    expect(parsePriceUSD("$1,234.56")).toBe(1234.56);
  });

  it("parses USD label before number", () => {
    expect(parsePriceUSD("USD 39.90")).toBe(39.9);
  });

  it("parses USD label after number", () => {
    expect(parsePriceUSD("39.90 USD")).toBe(39.9);
  });

  it("parses integer price", () => {
    expect(parsePriceUSD("$50")).toBe(50);
  });

  it("returns null for price without currency indicator", () => {
    expect(parsePriceUSD("49.90")).toBeNull();
  });

  it("returns null for European decimal format (49,90)", () => {
    // "49,90" with comma as decimal is ambiguous — reject
    expect(parsePriceUSD("$49,90")).toBeNull();
  });

  it("returns null for empty string", () => {
    expect(parsePriceUSD("")).toBeNull();
  });

  it("returns null for non-numeric content", () => {
    expect(parsePriceUSD("price unavailable")).toBeNull();
  });

  it("returns null for zero price", () => {
    expect(parsePriceUSD("$0.00")).toBeNull();
  });

  it("returns null for negative price", () => {
    expect(parsePriceUSD("$-10")).toBeNull();
  });

  it("handles whitespace around the price", () => {
    expect(parsePriceUSD("  $29.99  ")).toBe(29.99);
  });

  it("parses price with no decimal part", () => {
    expect(parsePriceUSD("$100")).toBe(100);
  });

  it("handles multi-word string with embedded price", () => {
    expect(parsePriceUSD("Regular price $59.90")).toBe(59.9);
  });
});

describe("isCurrencyUSD", () => {
  it("recognizes $", () => expect(isCurrencyUSD("$")).toBe(true));
  it("recognizes USD", () => expect(isCurrencyUSD("USD")).toBe(true));
  it("recognizes US$", () => expect(isCurrencyUSD("US$")).toBe(true));
  it("is case-insensitive for USD label", () => expect(isCurrencyUSD("usd")).toBe(true));
  it("rejects EUR", () => expect(isCurrencyUSD("EUR")).toBe(false));
  it("rejects GBP", () => expect(isCurrencyUSD("GBP")).toBe(false));
  it("rejects empty string", () => expect(isCurrencyUSD("")).toBe(false));
});
