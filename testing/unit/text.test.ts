import { describe, it, expect } from "vitest";
import {
  normalizeString,
  isValidTitle,
  isValidImageUrl,
  normalizeBrand,
} from "../../src/core/normalize/text.js";
import { normalizeProductType } from "../../src/core/normalize/category.js";

describe("normalizeString", () => {
  it("collapses multiple spaces", () => {
    expect(normalizeString("hello   world")).toBe("hello world");
  });
  it("trims leading and trailing whitespace", () => {
    expect(normalizeString("  hello  ")).toBe("hello");
  });
  it("collapses newlines and tabs", () => {
    expect(normalizeString("hello\n\tworld")).toBe("hello world");
  });
});

describe("isValidTitle", () => {
  it("accepts a normal title", () => {
    expect(isValidTitle("SLIM FIT JEANS")).toBe(true);
  });
  it("rejects empty string", () => {
    expect(isValidTitle("")).toBe(false);
  });
  it("rejects very short string", () => {
    expect(isValidTitle("AB")).toBe(false);
  });
  it("accepts minimum length title (3 chars)", () => {
    expect(isValidTitle("TEE")).toBe(true);
  });
  it("rejects string over 500 chars", () => {
    expect(isValidTitle("A".repeat(501))).toBe(false);
  });
});

describe("isValidImageUrl", () => {
  it("accepts https jpg URL", () => {
    expect(
      isValidImageUrl("https://cdn.example.com/img/product.jpg")
    ).toBe(true);
  });
  it("accepts https webp URL with query params", () => {
    expect(
      isValidImageUrl("https://cdn.example.com/img/product.webp?w=800")
    ).toBe(true);
  });
  it("accepts http URL", () => {
    expect(isValidImageUrl("http://cdn.example.com/img/product.png")).toBe(
      true
    );
  });
  it("rejects protocol-relative URL (//)", () => {
    expect(isValidImageUrl("//cdn.example.com/img/product.jpg")).toBe(false);
  });
  it("rejects non-image extension", () => {
    expect(isValidImageUrl("https://example.com/page.html")).toBe(false);
  });
  it("rejects plain string", () => {
    expect(isValidImageUrl("not-a-url")).toBe(false);
  });
  it("rejects empty string", () => {
    expect(isValidImageUrl("")).toBe(false);
  });
});

describe("normalizeBrand", () => {
  it("identifies Zara", () => expect(normalizeBrand("Zara")).toBe("Zara"));
  it("identifies ZARA (uppercase)", () => expect(normalizeBrand("ZARA")).toBe("Zara"));
  it("identifies Uniqlo", () => expect(normalizeBrand("Uniqlo")).toBe("Uniqlo"));
  it("identifies UNIQLO (uppercase)", () => expect(normalizeBrand("UNIQLO")).toBe("Uniqlo"));
  it("returns null for unknown brand", () => expect(normalizeBrand("H&M")).toBeNull());
  it("returns null for empty string", () => expect(normalizeBrand("")).toBeNull());
});

describe("normalizeProductType", () => {
  it("matches jacket from title", () => {
    expect(normalizeProductType("Boxy Fit Cotton Jacket", null)).toBe("Jacket");
  });
  it("matches polo before shirt", () => {
    expect(normalizeProductType("Soft Knit Polo Shirt", null)).toBe("Polo");
  });
  it("matches t-shirt before shirt", () => {
    expect(normalizeProductType("Classic T-Shirt", null)).toBe("T-Shirt");
  });
  it("matches shirt over denim when shirt appears in title", () => {
    expect(normalizeProductType("Selvedge Denim Shirt", null)).toBe("Shirt");
  });
  it("matches pants from chino keyword", () => {
    expect(normalizeProductType("Pleated Baggy Fit Chino Pants", null)).toBe("Pants");
  });
  it("matches bag from shopper keyword", () => {
    expect(normalizeProductType("Leather Detail Shopper Bag", null)).toBe("Bag");
  });
  it("matches coat from title", () => {
    expect(normalizeProductType("BLOCKTECH Coat", null)).toBe("Coat");
  });
  it("falls back to rawCategory when title has no match", () => {
    expect(normalizeProductType("Essential Item", "Women > Jackets")).toBe("Jacket");
  });
  it("returns null when nothing matches", () => {
    expect(normalizeProductType("Gift Card", null)).toBeNull();
  });
  it("is case-insensitive", () => {
    expect(normalizeProductType("SLIM FIT JEANS", null)).toBe("Jeans");
  });
});
