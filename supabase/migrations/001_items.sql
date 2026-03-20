-- UniCart items table
CREATE TABLE items (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id         UUID REFERENCES auth.users NOT NULL,
  url             TEXT NOT NULL,
  brand           TEXT NOT NULL,
  product_id      TEXT NOT NULL,
  title           TEXT NOT NULL,
  image_url       TEXT NOT NULL,
  price_usd       NUMERIC,
  category        TEXT,
  color           TEXT,
  sizing          NUMERIC,
  field_sources   JSONB,
  field_confidence JSONB,
  extracted_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at      TIMESTAMPTZ DEFAULT now() NOT NULL,

  UNIQUE (user_id, brand, product_id)
);

ALTER TABLE items ENABLE ROW LEVEL SECURITY;

-- Users can only read/write their own items
CREATE POLICY "own_items" ON items
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER items_updated_at
  BEFORE UPDATE ON items
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
