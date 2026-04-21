import Link from 'next/link';
import HeroCollage from '@/components/HeroCollage';

const FEATURES = [
  {
    n: '01',
    title: 'Save instantly',
    desc: 'Click the extension on any Zara or Uniqlo product page. No copying links, no manual entry — one click.',
  },
  {
    n: '02',
    title: 'Filter & sort',
    desc: 'By brand, category, color, size, and price. Filters combine instantly and clear in one tap.',
  },
  {
    n: '03',
    title: 'Compare side-by-side',
    desc: 'Select 2–4 items and compare everything at once — price, color, size, and more.',
  },
];

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: 'var(--font-sans)' }}>

      {/* ── Nav ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '0 48px',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(250,249,247,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(28,25,23,0.07)',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px', fontWeight: 600, letterSpacing: '-0.5px',
          color: 'var(--fg)',
        }}>
          UniCart
        </span>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px', fontWeight: 500, color: 'var(--muted)',
              textDecoration: 'none', padding: '8px 16px', borderRadius: '6px',
            }}
          >
            Get extension
          </a>
          <Link
            href="/login"
            style={{
              fontSize: '14px', fontWeight: 600,
              background: 'var(--fg)', color: 'var(--bg)',
              padding: '9px 20px', borderRadius: '7px', textDecoration: 'none',
              letterSpacing: '-0.1px',
            }}
          >
            Sign in
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '96px 48px 72px',
        maxWidth: '1280px', margin: '0 auto',
        gap: '40px',
      }}>
        {/* Left — copy */}
        <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
          <p style={{
            fontSize: '10.5px', fontWeight: 700, letterSpacing: '2.5px',
            color: 'var(--accent-zara)', textTransform: 'uppercase',
            marginBottom: '28px',
          }}>
            Universal Shopping Cart
          </p>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 7.5vw, 104px)',
            fontWeight: 600,
            fontStyle: 'italic',
            lineHeight: 1.0,
            letterSpacing: '-2px',
            color: 'var(--fg)',
            marginBottom: '36px',
          }}>
            Every<br />
            piece,<br />
            <em style={{ color: 'var(--accent-zara)', fontStyle: 'italic' }}>one</em> place.
          </h1>

          <p style={{
            fontSize: '17px', lineHeight: 1.7, color: 'var(--muted)',
            maxWidth: '400px', marginBottom: '48px', fontWeight: 400,
          }}>
            Save items from Zara and Uniqlo with one click.
            Filter, sort, and compare — all in one cart.
          </p>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link
              href="/login"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'var(--fg)', color: 'var(--bg)',
                padding: '14px 28px', borderRadius: '8px',
                fontSize: '15px', fontWeight: 600, textDecoration: 'none',
                letterSpacing: '-0.2px',
              }}
            >
              Sign in to your cart
            </Link>
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1.5px solid var(--border)',
                color: 'var(--fg)',
                padding: '14px 28px', borderRadius: '8px',
                fontSize: '15px', fontWeight: 500, textDecoration: 'none',
                background: 'transparent',
                letterSpacing: '-0.1px',
              }}
            >
              Get Chrome extension
            </a>
          </div>

          {/* Brand tags */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '52px' }}>
            {[
              { label: 'Zara', color: 'var(--accent-zara)' },
              { label: 'Uniqlo', color: 'var(--accent-uniqlo)' },
              { label: 'More coming', color: 'var(--muted)' },
            ].map((t) => (
              <span key={t.label} style={{
                fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px',
                color: t.color, padding: '4px 12px',
                border: `1.5px solid ${t.color}`,
                borderRadius: '20px', opacity: t.label === 'More coming' ? 0.55 : 1,
              }}>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — card collage */}
        <HeroCollage />
      </section>

      {/* ── Features ── */}
      <section style={{
        borderTop: '1px solid var(--border)',
        padding: '88px 48px',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '56px',
        }}>
          {FEATURES.map((f) => (
            <div key={f.n}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '56px', fontWeight: 600, fontStyle: 'italic',
                color: 'var(--border)', lineHeight: 1, marginBottom: '20px',
                letterSpacing: '-1px',
              }}>
                {f.n}
              </p>
              <h3 style={{
                fontSize: '19px', fontWeight: 600, color: 'var(--fg)',
                marginBottom: '10px', letterSpacing: '-0.4px',
              }}>
                {f.title}
              </h3>
              <p style={{
                fontSize: '15px', color: 'var(--muted)', lineHeight: 1.65,
              }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{
        padding: '80px 48px 100px',
        textAlign: 'center',
        maxWidth: '720px', margin: '0 auto',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 600, fontStyle: 'italic',
          color: 'var(--fg)', lineHeight: 1.1,
          marginBottom: '36px', letterSpacing: '-1.5px',
        }}>
          Your wardrobe,<br />organized.
        </p>
        <Link
          href="/login"
          style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'var(--fg)', color: 'var(--bg)',
            padding: '16px 36px', borderRadius: '8px',
            fontSize: '16px', fontWeight: 600, textDecoration: 'none',
            letterSpacing: '-0.2px',
          }}
        >
          Get started — it&apos;s free
        </Link>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '24px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        maxWidth: '1280px', margin: '0 auto',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '18px', fontWeight: 600, color: 'var(--fg)',
        }}>
          UniCart
        </span>
        <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
          Supports Zara · Uniqlo
        </p>
      </footer>
    </div>
  );
}
