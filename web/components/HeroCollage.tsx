'use client';

import { useRef, useEffect } from 'react';

const SPRING_STIFFNESS = 0.09;
const SPRING_DAMPING = 0.74;
const PARALLAX_STRENGTH = 0.014;
const HOVER_LIFT = -7;

interface CardDef {
  brand: string;
  name: string;
  price: string;
  accentColor: string;
  watermark: string;
  rotate: string;
  delay: string;
  depth: number;
  style: React.CSSProperties;
  imgHeight: string;
  imgClass: string;
}

const CARDS: CardDef[] = [
  {
    brand: 'Zara',
    name: 'Boxy Cotton Jacket',
    price: '$129',
    accentColor: '#c2856a',
    watermark: 'ZARA',
    rotate: '-3.5deg',
    delay: '0.1s',
    depth: 0.4,
    imgHeight: '215px',
    imgClass: 'card-img-0',
    style: {
      position: 'absolute',
      top: '20px',
      left: '0px',
      width: '168px',
      zIndex: 1,
      boxShadow: '0 8px 32px rgba(28,25,23,0.13)',
    },
  },
  {
    brand: 'Uniqlo',
    name: 'Merino V-Neck Sweater',
    price: '$59.90',
    accentColor: '#5a7d8f',
    watermark: 'UNIQLO',
    rotate: '1.5deg',
    delay: '0.25s',
    depth: 1.0,
    imgHeight: '305px',
    imgClass: 'card-img-1',
    style: {
      position: 'absolute',
      top: '-10px',
      left: '150px',
      width: '208px',
      zIndex: 3,
      boxShadow: '0 16px 48px rgba(28,25,23,0.18)',
    },
  },
  {
    brand: 'Zara',
    name: 'Linen Wide Trousers',
    price: '$85',
    accentColor: '#c2856a',
    watermark: 'ZARA',
    rotate: '-1.5deg',
    delay: '0.4s',
    depth: 0.6,
    imgHeight: '200px',
    imgClass: 'card-img-2',
    style: {
      position: 'absolute',
      top: '310px',
      left: '18px',
      width: '188px',
      zIndex: 2,
      boxShadow: '0 8px 28px rgba(28,25,23,0.12)',
    },
  },
  {
    brand: 'Uniqlo',
    name: 'Ribbed Tank Top',
    price: '$24.90',
    accentColor: '#5a7d8f',
    watermark: 'UNIQLO',
    rotate: '3deg',
    delay: '0.55s',
    depth: 0.5,
    imgHeight: '188px',
    imgClass: 'card-img-3',
    style: {
      position: 'absolute',
      top: '280px',
      left: '342px',
      width: '156px',
      zIndex: 2,
      boxShadow: '0 8px 24px rgba(28,25,23,0.11)',
    },
  },
];

type SpringState = { x: number; y: number; vx: number; vy: number };

export default function HeroCollage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const turbulenceRef = useRef<SVGAnimateElement | null>(null);
  const springs = useRef<SpringState[]>(CARDS.map(() => ({ x: 0, y: 0, vx: 0, vy: 0 })));
  const targets = useRef(CARDS.map(() => ({ x: 0, y: 0 })));
  const readyFlags = useRef<boolean[]>(CARDS.map(() => false));
  const rafRef = useRef<number>(0);
  const hoveredIndex = useRef<number | null>(null);

  // Detect reduced motion once
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  // animationend handoff: remove CSS animation so JS owns transform
  useEffect(() => {
    if (reducedMotion.current) {
      // Skip spring entirely — stop turbulence animate
      if (turbulenceRef.current) {
        turbulenceRef.current.setAttribute('repeatCount', '0');
      }
      return;
    }

    const cleanups: (() => void)[] = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const handler = () => {
        el.style.animation = 'none';
        el.style.transform = `rotate(${CARDS[i].rotate})`;
        readyFlags.current[i] = true;
      };
      el.addEventListener('animationend', handler, { once: true });
      cleanups.push(() => el.removeEventListener('animationend', handler));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  // Spring RAF loop
  useEffect(() => {
    if (reducedMotion.current) return;

    function tick() {
      CARDS.forEach((card, i) => {
        if (!readyFlags.current[i]) return;
        const el = cardRefs.current[i];
        if (!el) return;

        const s = springs.current[i];
        const t = targets.current[i];

        s.vx = s.vx * SPRING_DAMPING + (t.x - s.x) * SPRING_STIFFNESS;
        s.vy = s.vy * SPRING_DAMPING + (t.y - s.y) * SPRING_STIFFNESS;
        s.x += s.vx;
        s.y += s.vy;

        el.style.transform = `rotate(${card.rotate}) translate(${s.x.toFixed(2)}px, ${s.y.toFixed(2)}px)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Container mouse tracking for parallax
  useEffect(() => {
    if (reducedMotion.current) return;
    const container = containerRef.current;
    if (!container) return;

    function onMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);

      CARDS.forEach((card, i) => {
        const baseX = dx * PARALLAX_STRENGTH * card.depth;
        const baseY = dy * PARALLAX_STRENGTH * card.depth;
        targets.current[i].x = baseX;
        // Preserve hover lift on top of parallax
        targets.current[i].y = hoveredIndex.current === i
          ? baseY + HOVER_LIFT
          : baseY;
      });
    }

    function onLeave() {
      CARDS.forEach((_, i) => {
        targets.current[i].x = 0;
        targets.current[i].y = hoveredIndex.current === i ? HOVER_LIFT : 0;
      });
    }

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);
    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  function handleCardEnter(i: number) {
    if (reducedMotion.current) return;
    hoveredIndex.current = i;
    targets.current[i].y += HOVER_LIFT;
    // Boost shadow via class
    cardRefs.current[i]?.classList.add('collage-card-hovered');
  }

  function handleCardLeave(i: number) {
    if (reducedMotion.current) return;
    hoveredIndex.current = null;
    targets.current[i].y -= HOVER_LIFT;
    cardRefs.current[i]?.classList.remove('collage-card-hovered');
  }

  return (
    <div
      ref={containerRef}
      style={{ flex: 1, position: 'relative', height: '580px' }}
    >
      {/* SVG turbulence warm-haze background */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <defs>
          <filter id="warm-haze" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.013 0.010"
              numOctaves="3"
              seed="7"
              result="noise"
            >
              <animate
                ref={turbulenceRef}
                attributeName="baseFrequency"
                values="0.010 0.008;0.016 0.013;0.010 0.008"
                dur="14s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feColorMatrix type="saturate" values="0.35" in="noise" result="tinted" />
            <feComponentTransfer in="tinted" result="colored">
              <feFuncR type="linear" slope="1.15" intercept="0.02" />
              <feFuncG type="linear" slope="0.88" intercept="0.0" />
              <feFuncB type="linear" slope="0.78" intercept="0.0" />
              <feFuncA type="linear" slope="0.11" />
            </feComponentTransfer>
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#warm-haze)" fill="#c2856a" />
      </svg>

      {/* Cards */}
      {CARDS.map((card, i) => (
        <div
          key={card.name}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="collage-card"
          style={{
            ...card.style,
            zIndex: card.style.zIndex,
            '--card-rotate': card.rotate,
            '--card-delay': card.delay,
          } as React.CSSProperties}
          onMouseEnter={() => handleCardEnter(i)}
          onMouseLeave={() => handleCardLeave(i)}
        >
          {/* Image area — breathing gradient */}
          <div
            className={card.imgClass}
            style={{
              height: card.imgHeight,
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '52px',
                fontWeight: 700,
                color: 'rgba(28,25,23,0.07)',
                letterSpacing: '4px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              {card.watermark}
            </span>
          </div>

          {/* Info area */}
          <div
            style={{
              background: '#ffffff',
              padding: '10px 12px 12px',
              borderTop: '1px solid rgba(28,25,23,0.06)',
            }}
          >
            <p
              style={{
                fontSize: '8.5px',
                fontWeight: 700,
                letterSpacing: '1.8px',
                color: card.accentColor,
                textTransform: 'uppercase',
                marginBottom: '3px',
              }}
            >
              {card.brand}
            </p>
            <p
              style={{
                fontSize: '12.5px',
                fontWeight: 500,
                color: 'var(--fg)',
                lineHeight: 1.3,
                marginBottom: '6px',
              }}
            >
              {card.name}
            </p>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--fg)' }}>
              {card.price}
            </p>
          </div>
        </div>
      ))}

      {/* Floating compare badge */}
      <div
        className="collage-badge"
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '0px',
          background: 'var(--fg)',
          color: 'var(--bg)',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '11.5px',
          fontWeight: 600,
          letterSpacing: '0.3px',
          zIndex: 10,
          whiteSpace: 'nowrap',
        }}
      >
        4 items saved ·{' '}
        <span style={{ opacity: 0.6 }}>Compare</span>
      </div>
    </div>
  );
}
