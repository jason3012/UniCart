export const SUPPORTED_BRANDS = [
  'Zara', 'Uniqlo', 'COS', 'Ralph Lauren', 'J.Crew', 'Banana Republic', 'Buck Mason',
] as const

export type SupportedBrand = typeof SUPPORTED_BRANDS[number]

export interface Item {
  id: string;
  user_id: string;
  url: string;
  brand: string;
  product_id: string;
  title: string;
  image_url: string;
  price_usd: number | null;
  category: string | null;
  color: string | null;
  sizing: string | null;
  sizing_type: 'alpha' | 'numeric' | null;
  field_sources: Record<string, string> | null;
  field_confidence: Record<string, number> | null;
  extracted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface UpsertPayload {
  url: string;
  brand: string;
  product_id: string;
  title: string;
  image_url: string;
  price_usd?: number | null;
  category?: string | null;
  color?: string | null;
  sizing?: string | null;
  sizing_type?: 'alpha' | 'numeric' | null;
  field_sources?: Record<string, string> | null;
  field_confidence?: Record<string, number> | null;
  extracted_at?: string | null;
}

export interface UserProfile {
  id: string;
  user_id: string;
  name: string | null;
  height_cm: number | null;
  weight_kg: number | null;
  favorite_brands: string[];
  preferred_alpha_size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | '2XL' | null;
  preferred_numeric_size: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfilePayload {
  name?: string | null;
  height_cm?: number | null;
  weight_kg?: number | null;
  favorite_brands?: string[];
  preferred_alpha_size?: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | '2XL' | null;
  preferred_numeric_size?: string | null;
}
