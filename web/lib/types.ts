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
  sizing: number | null;
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
  sizing?: number | null;
  field_sources?: Record<string, string> | null;
  field_confidence?: Record<string, number> | null;
  extracted_at?: string | null;
}
