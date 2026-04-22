'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SUPPORTED_BRANDS } from '@/lib/types'

const ALPHA_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL'] as const

export default function ProfilePage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState('')
  const [heightCm, setHeightCm] = useState('')
  const [weightKg, setWeightKg] = useState('')
  const [favBrands, setFavBrands] = useState<string[]>([])
  const [alphaSize, setAlphaSize] = useState<string>('')
  const [numericSize, setNumericSize] = useState('')

  function toggleBrand(brand: string) {
    setFavBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || null,
          height_cm: heightCm ? Number(heightCm) : null,
          weight_kg: weightKg ? Number(weightKg) : null,
          favorite_brands: favBrands,
          preferred_alpha_size: (alphaSize as typeof ALPHA_SIZES[number]) || null,
          preferred_numeric_size: numericSize.trim() || null,
        }),
      })
      if (!res.ok) throw new Error('Failed to save profile')
      router.push('/app')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const label = (text: string) => (
    <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', color: '#78716c', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
      {text}
    </label>
  )

  const input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
      {...props}
      style={{
        width: '100%', padding: '10px 14px', borderRadius: '8px',
        border: '1.5px solid #e5e0d8', background: '#fff',
        fontSize: '15px', color: '#1c1917', outline: 'none',
        fontFamily: 'var(--font-sans)',
        ...props.style,
      }}
    />
  )

  return (
    <div style={{ maxWidth: '560px', margin: '0 auto', padding: '40px 0' }}>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontStyle: 'italic', fontWeight: 600, color: '#1c1917', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '8px' }}>
        Set up your profile.
      </p>
      <p style={{ fontSize: '15px', color: '#78716c', marginBottom: '40px', lineHeight: 1.6 }}>
        Help UniCart personalise your experience. You can update this any time.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

        {/* Your info */}
        <section>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#1c1917', marginBottom: '16px', letterSpacing: '-0.2px' }}>Your info</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              {label('Name')}
              {input({ type: 'text', placeholder: 'Your name', value: name, onChange: (e) => setName(e.target.value) })}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                {label('Height (cm)')}
                {input({ type: 'number', placeholder: '175', value: heightCm, onChange: (e) => setHeightCm(e.target.value), min: '100', max: '250' })}
              </div>
              <div>
                {label('Weight (kg)')}
                {input({ type: 'number', placeholder: '70', value: weightKg, onChange: (e) => setWeightKg(e.target.value), min: '30', max: '300' })}
              </div>
            </div>
          </div>
        </section>

        {/* Favourite brands */}
        <section>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#1c1917', marginBottom: '4px', letterSpacing: '-0.2px' }}>Favourite brands</p>
          <p style={{ fontSize: '13px', color: '#a8a29e', marginBottom: '14px' }}>Select all that apply.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {SUPPORTED_BRANDS.map((brand) => {
              const selected = favBrands.includes(brand)
              return (
                <button
                  key={brand}
                  type="button"
                  onClick={() => toggleBrand(brand)}
                  style={{
                    padding: '7px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 500,
                    border: `1.5px solid ${selected ? '#1c1917' : '#e5e0d8'}`,
                    background: selected ? '#1c1917' : '#fff',
                    color: selected ? '#fff' : '#1c1917',
                    cursor: 'pointer', transition: 'all 0.15s',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {brand}
                </button>
              )
            })}
          </div>
        </section>

        {/* Preferred sizing */}
        <section>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#1c1917', marginBottom: '4px', letterSpacing: '-0.2px' }}>Preferred sizing</p>
          <p style={{ fontSize: '13px', color: '#a8a29e', marginBottom: '14px' }}>Used to autofill sizing when a product has no default selected.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              {label('Tops / Outerwear')}
              <select
                value={alphaSize}
                onChange={(e) => setAlphaSize(e.target.value)}
                style={{
                  width: '100%', padding: '10px 14px', borderRadius: '8px',
                  border: '1.5px solid #e5e0d8', background: '#fff',
                  fontSize: '15px', color: alphaSize ? '#1c1917' : '#a8a29e',
                  fontFamily: 'var(--font-sans)', outline: 'none', cursor: 'pointer',
                }}
              >
                <option value="">Select size</option>
                {ALPHA_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              {label('Bottoms (waist)')}
              {input({ type: 'text', placeholder: 'e.g. 32 or 30x32', value: numericSize, onChange: (e) => setNumericSize(e.target.value) })}
            </div>
          </div>
        </section>

        {error && (
          <p style={{ fontSize: '13px', color: '#ef4444' }}>{error}</p>
        )}

        <div style={{ display: 'flex', gap: '12px', paddingTop: '4px' }}>
          <button
            type="submit"
            disabled={saving}
            style={{
              padding: '12px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600,
              background: '#1c1917', color: '#fff', border: 'none', cursor: saving ? 'not-allowed' : 'pointer',
              opacity: saving ? 0.7 : 1, fontFamily: 'var(--font-sans)', letterSpacing: '-0.2px',
            }}
          >
            {saving ? 'Saving…' : 'Save and continue'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/app')}
            style={{
              padding: '12px 20px', borderRadius: '8px', fontSize: '15px', fontWeight: 500,
              background: 'transparent', color: '#78716c', border: '1.5px solid #e5e0d8',
              cursor: 'pointer', fontFamily: 'var(--font-sans)',
            }}
          >
            Skip for now
          </button>
        </div>
      </form>
    </div>
  )
}
