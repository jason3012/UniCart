import type { FieldCandidate, FieldSourceType } from "../../types/index.js";

const BASE_CONFIDENCE: Record<FieldSourceType, number> = {
  site_json: 0.95,
  jsonld: 0.92,
  meta: 0.80,
  dom: 0.55,
  user: 1.0,
  unknown: 0.1,
};

export function sourceConfidence(source: FieldSourceType): number {
  return BASE_CONFIDENCE[source] ?? 0.1;
}

/**
 * Given multiple candidates for the same field, returns the one with the
 * highest confidence. On ties, prefers site_json > jsonld > meta > dom.
 */
export function bestCandidate<T>(
  candidates: FieldCandidate<T>[]
): FieldCandidate<T> | null {
  if (candidates.length === 0) return null;

  const SOURCE_PRIORITY: FieldSourceType[] = [
    "site_json",
    "jsonld",
    "meta",
    "dom",
    "unknown",
    "user",
  ];

  return candidates.reduce((best, current) => {
    if (current.confidence > best.confidence) return current;
    if (current.confidence === best.confidence) {
      const bestPriority = SOURCE_PRIORITY.indexOf(best.source);
      const currentPriority = SOURCE_PRIORITY.indexOf(current.source);
      if (currentPriority < bestPriority) return current;
    }
    return best;
  });
}
