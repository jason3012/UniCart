import type { Site } from "../types/index.js";

export function detectSite(url: string): Site {
  try {
    const { hostname } = new URL(url);
    if (hostname.includes("zara.com")) return "zara";
    if (hostname.includes("uniqlo.com")) return "uniqlo";
    return "unknown";
  } catch {
    return "unknown";
  }
}
