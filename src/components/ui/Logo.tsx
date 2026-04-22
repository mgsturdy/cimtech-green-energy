'use client';

type LogoProps = {
  variant?: 'lockup' | 'mark' | 'wordmark' | 'full-lockup';
  className?: string;
  /** @deprecated animation is handled by IntroAnimation; kept for API compatibility */
  animated?: boolean;
};

// Brand colors — pinned to tokens so the mark can't accidentally inherit theme accents.
// Wordmark uses two-tone gray: "CIM" in darker gray, "tech" in lighter gray.
const BRAND_GRAY = 'var(--color-brand-gray)';
const BRAND_GRAY_LIGHT = 'var(--color-brand-gray-light)';
const BRAND_GREEN = 'var(--color-brand-green)';

// Mark geometry: a thick gray "C" (opening right) with a green horizontal bar
// through the middle, sized in a 64x64 viewBox. Matches cimtech.com.
function MarkGeometry() {
  return (
    <>
      <path
        d="M 51.9 22.7 A 22 22 0 1 0 51.9 41.3"
        fill="none"
        stroke={BRAND_GRAY}
        strokeWidth="10"
        strokeLinecap="butt"
      />
      <rect x="14" y="27.5" width="40" height="9" rx="4.5" fill={BRAND_GREEN} />
    </>
  );
}

type WordmarkTextProps = {
  x: number;
  y: number;
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;
};

function CIMtechText({ x, y, fontSize, fontWeight, letterSpacing }: WordmarkTextProps) {
  return (
    <text
      x={x}
      y={y}
      fontFamily="var(--font-inter-tight), system-ui, sans-serif"
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
    >
      <tspan fill={BRAND_GRAY}>CIM</tspan>
      <tspan fill={BRAND_GRAY_LIGHT}>tech</tspan>
    </text>
  );
}

export function Logo({ variant = 'lockup', className = '' }: LogoProps) {
  if (variant === 'mark') {
    return (
      <svg viewBox="0 0 64 64" className={className} aria-label="CIMtech Green Energy">
        <MarkGeometry />
      </svg>
    );
  }

  if (variant === 'wordmark') {
    return (
      <svg viewBox="0 0 260 60" className={className} aria-label="CIMtech Green Energy">
        <CIMtechText x={0} y={36} fontSize={36} fontWeight={700} letterSpacing={-1} />
        <text
          x="2"
          y="54"
          fontFamily="var(--font-inter-tight), system-ui, sans-serif"
          fontSize="14"
          fontWeight="600"
        >
          <tspan fill={BRAND_GREEN}>Green</tspan>
          <tspan dx="4" fill={BRAND_GRAY}>Energy</tspan>
        </text>
      </svg>
    );
  }

  if (variant === 'full-lockup') {
    return (
      <svg viewBox="0 0 380 90" className={className} aria-label="CIMtech Green Energy">
        <g transform="translate(4, 13)">
          <MarkGeometry />
        </g>
        <CIMtechText x={90} y={52} fontSize={46} fontWeight={700} letterSpacing={-1.4} />
        <text
          x="92"
          y="76"
          fontFamily="var(--font-inter-tight), system-ui, sans-serif"
          fontSize="18"
          fontWeight="600"
        >
          <tspan fill={BRAND_GREEN}>Green</tspan>
          <tspan dx="5" fill={BRAND_GRAY}>Energy</tspan>
        </text>
      </svg>
    );
  }

  // default: compact lockup (mark + stacked wordmark) — used in nav + footer
  return (
    <svg viewBox="0 0 300 44" className={className} aria-label="CIMtech Green Energy">
      <g transform="translate(0, 2) scale(0.625)">
        <MarkGeometry />
      </g>
      <CIMtechText x={50} y={26} fontSize={24} fontWeight={700} letterSpacing={-0.9} />
      <text
        x="51"
        y="40"
        fontFamily="var(--font-inter-tight), system-ui, sans-serif"
        fontSize="10"
        fontWeight="600"
      >
        <tspan fill={BRAND_GREEN}>Green</tspan>
        <tspan dx="3" fill={BRAND_GRAY}>Energy</tspan>
      </text>
    </svg>
  );
}
