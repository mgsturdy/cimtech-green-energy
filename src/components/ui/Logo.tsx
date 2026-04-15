'use client';

type LogoProps = {
  variant?: 'lockup' | 'mark' | 'wordmark' | 'full-lockup';
  className?: string;
  /** @deprecated animation is handled by IntroAnimation; kept for API compatibility */
  animated?: boolean;
};

// PDF-faithful brand colors — fixed, do NOT inherit from theme.
const BRAND_GRAY = 'var(--color-brand-gray)';
const BRAND_GREEN = 'var(--color-brand-green)';

// Brand mark geometry in a 64x64 viewBox.
function MarkGeometry() {
  return (
    <>
      <path
        d="M 51.9 22.7 A 22 22 0 1 0 51.9 41.3"
        fill="none"
        stroke={BRAND_GRAY}
        strokeWidth="10"
      />
      <rect x="14" y="27" width="36" height="10" rx="5" fill={BRAND_GREEN} />
    </>
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
      <svg viewBox="0 0 260 40" className={className} aria-label="CIMtech Green Energy">
        <text x="0" y="26" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="30" fontWeight="600" letterSpacing="-1" fill={BRAND_GRAY}>CIMtech</text>
        <text x="0" y="38" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="10" fontWeight="500" letterSpacing="0.08em">
          <tspan fill={BRAND_GREEN}>GREEN</tspan>
          <tspan dx="4" fill={BRAND_GRAY}>ENERGY</tspan>
        </text>
      </svg>
    );
  }

  if (variant === 'full-lockup') {
    return (
      <svg viewBox="0 0 360 80" className={className} aria-label="CIMtech Green Energy">
        <g transform="translate(4, 8)">
          <MarkGeometry />
        </g>
        <text x="84" y="48" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="40" fontWeight="600" letterSpacing="-1.2" fill={BRAND_GRAY}>CIMtech</text>
        <text x="86" y="66" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="15" fontWeight="500" letterSpacing="0.06em">
          <tspan fill={BRAND_GREEN}>GREEN</tspan>
          <tspan dx="6" fill={BRAND_GRAY}>ENERGY</tspan>
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 280 32" className={className} aria-label="CIMtech Green Energy">
      <g transform="translate(0, 0) scale(0.5)">
        <MarkGeometry />
      </g>
      <text x="40" y="22" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="22" fontWeight="600" letterSpacing="-0.8" fill={BRAND_GRAY}>CIMtech</text>
      <text x="40" y="30" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="7" fontWeight="500" letterSpacing="0.14em">
        <tspan fill={BRAND_GREEN}>GREEN</tspan>
        <tspan dx="3" fill={BRAND_GRAY}>ENERGY</tspan>
      </text>
    </svg>
  );
}
