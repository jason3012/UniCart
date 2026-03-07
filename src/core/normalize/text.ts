import type { Brand } from "../../types/index.js";

export function normalizeString(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

export function isValidTitle(text: string): boolean {
  const clean = normalizeString(text);
  return clean.length >= 3 && clean.length <= 500;
}

export function isValidImageUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      (parsed.protocol === "http:" || parsed.protocol === "https:") &&
      /\.(jpg|jpeg|png|webp|avif|gif|svg)(\?.*)?$/i.test(parsed.pathname)
    );
  } catch {
    return false;
  }
}

/** Normalizes a potential brand string to the supported Brand union, or null. */
export function normalizeBrand(raw: string): Brand | null {
  const lower = raw.toLowerCase().trim();
  if (lower.includes("zara")) return "Zara";
  if (lower.includes("uniqlo")) return "Uniqlo";
  return null;
}

/** Derives brand deterministically from site detection (most reliable source). */
export function brandFromSite(site: "zara" | "uniqlo"): Brand {
  return site === "zara" ? "Zara" : "Uniqlo";
}
