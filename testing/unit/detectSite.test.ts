import { describe, it, expect } from "vitest";
import { detectSite } from "../../src/core/detectSite.js";

describe("detectSite", () => {
  it("detects zara.com", () => {
    expect(detectSite("https://www.zara.com/us/en/item-p12345678.html")).toBe("zara");
  });

  it("detects zara.com subdomain variant", () => {
    expect(detectSite("https://zara.com/es/es/item-p12345678.html")).toBe("zara");
  });

  it("detects uniqlo.com", () => {
    expect(detectSite("https://www.uniqlo.com/us/en/products/E460342-000")).toBe("uniqlo");
  });

  it("detects uniqlo.com subdomain variant", () => {
    expect(detectSite("https://uniqlo.com/us/en/products/E460342-000")).toBe("uniqlo");
  });

  it("returns unknown for unrelated site", () => {
    expect(detectSite("https://www.hm.com/us/en/product/abc")).toBe("unknown");
  });

  it("returns unknown for malformed URL", () => {
    expect(detectSite("not a url")).toBe("unknown");
  });

  it("returns unknown for empty string", () => {
    expect(detectSite("")).toBe("unknown");
  });
});
