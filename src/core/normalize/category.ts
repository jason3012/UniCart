export function normalizeCategory(raw: string): string {
  return raw
    .replace(/\s+/g, " ")
    .trim()
    .split(/[>\/\|]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .join(" > ");
}
