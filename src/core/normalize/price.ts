/**
 * Returns USD amount (as a number) or null if the input cannot be confidently
 * parsed as a USD price. Conservative: prefers returning null over a wrong value.
 */
export function parsePriceUSD(raw: string): number | null {
  const text = raw.trim();

  // Must have a clear USD indicator
  const hasUsd = /\$/.test(text) || /\bUSD\b/i.test(text);
  if (!hasUsd) return null;

  // Reject negative prices (e.g. "$-10")
  if (/\$\s*-\s*\d|\bUSD\s*-\s*\d/i.test(text)) return null;

  // Reject European decimal comma pattern: $DD,DD or $DDD,DD (1-3 digits, comma, exactly 2 digits)
  // These look like European decimals (49,90 = 49.90) and are ambiguous in a USD context.
  if (/\$\s*\d{1,3},\d{2}(?!\d)/.test(text)) return null;

  // Match a US-format number: thousands-commas with period decimal
  const match = text.match(/(\d{1,3}(?:,\d{3})*|\d+)(\.\d{1,2})?/);
  if (!match) return null;

  const intPart = match[1];
  const decPart = match[2] ?? "";

  // Validate thousands separators: all post-first comma groups must be exactly 3 digits
  if (intPart.includes(",")) {
    const commaParts = intPart.split(",");
    const allOthersLen3 = commaParts.slice(1).every((p) => p.length === 3);
    if (!allOthersLen3) return null;
  }

  const cleanNum = intPart.replace(/,/g, "") + decPart;
  const amount = parseFloat(cleanNum);

  if (isNaN(amount) || amount <= 0 || amount > 100_000) return null;
  return amount;
}

/**
 * Returns true if the given currency string clearly represents USD.
 * Used when currency is available separately from the price string.
 */
export function isCurrencyUSD(currency: string): boolean {
  return /^(\$|USD|US\$|US dollar)$/i.test(currency.trim());
}
