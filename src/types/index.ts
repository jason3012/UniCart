export type Brand = "Zara" | "Uniqlo";

export type Site = "zara" | "uniqlo" | "unknown";

export type FieldSourceType =
  | "jsonld"
  | "meta"
  | "dom"
  | "site_json"
  | "user"
  | "unknown";

export type ProductField =
  | "title"
  | "brand"
  | "price_usd"
  | "category"
  | "sizing"
  | "color"
  | "image_url"
  | "product_id"
  | "material";

export interface FieldCandidate<T = string> {
  value: T;
  source: FieldSourceType;
  confidence: number;
  rawValue?: string;
}

export interface ProductCandidate {
  title?: FieldCandidate<string>;
  brand?: FieldCandidate<Brand>;
  price_usd?: FieldCandidate<number>;
  category?: FieldCandidate<string>;
  sizing?: FieldCandidate<string>;
  color?: FieldCandidate<string>;
  image_url?: FieldCandidate<string>;
  product_id?: FieldCandidate<string>;
  material?: FieldCandidate<string>;
}

export interface RawFieldData {
  raw_value: string;
  raw_source: FieldSourceType;
}

export interface ProductExtracted {
  title: string | null;
  brand: Brand | null;
  price_usd: number | null;
  category: string | null;
  sizing: string | null;
  color: string | null;
  image_url: string | null;
  product_id: string | null;
  material: string | null;
  url: string;
  field_sources: Partial<Record<ProductField, FieldSourceType>>;
  field_confidence: Partial<Record<ProductField, number>>;
  raw?: Partial<Record<ProductField, RawFieldData>>;
}

export interface ExtractionResult {
  success: boolean;
  site: Site;
  product: ProductExtracted | null;
  errors: string[];
}
