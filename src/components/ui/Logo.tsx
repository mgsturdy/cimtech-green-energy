'use client';

type LogoProps = {
  variant?: 'lockup' | 'mark' | 'wordmark' | 'full-lockup';
  className?: string;
  /** @deprecated animation is handled by IntroAnimation; kept for API compatibility */
  animated?: boolean;
};

// Brand mark geometry in a 64x64 viewBox.
// Ring: currentColor arc (open on the right) — adapts to dark/light contexts.
// Bar:  accent-green capsule threaded horizontally through the ring.
function MarkGeometry() {
  return (
    <>
      <path
        d="M 51.9 22.7 A 22 22 0 1 0 51.9 41.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
      />
      <rect x="14" y="27" width="36" height="10" rx="5" fill="var(--color-accent)" />
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
        <text x="0" y="26" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="30" fontWeight="600" letterSpacing="-1" fill="currentColor">CIMtech</text>
        <text x="0" y="38" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="10" fontWeight="500" letterSpacing="0.08em">
          <tspan fill="var(--color-accent)">GREEN</tspan>
          <tspan dx="4" fill="currentColor" opacity="0.75">ENERGY</tspan>
        </text>
      </svg>
    );
  }

  if (variant === 'full-lockup') {
    // Larger lockup with mark + two-line wordmark. Used in intro animation / marketing surfaces.
    return (
      <svg viewBox="0 0 360 80" className={className} aria-label="CIMtech Green Energy">
        <g transform="translate(4, 8)">
          <MarkGeometry />
        </g>
        <text x="84" y="48" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="40" fontWeight="600" letterSpacing="-1.2" fill="currentColor">CIMtech</text>
        <text x="86" y="66" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="15" fontWeight="500" letterSpacing="0.06em">
          <tspan fill="var(--color-accent)">GREEN</tspan>
          <tspan dx="6" fill="currentColor" opacity="0.8">ENERGY</tspan>
        </text>
      </svg>
    );
  }

  // Default nav lockup — compact, single-line-dominant. Matches previous footprint (h-6 → ~210px wide).
  return (
    <svg viewBox="0 0 280 32" className={className} aria-label="CIMtech Green Energy">
      <g transform="translate(0, 0) scale(0.5)">
        <MarkGeometry />
      </g>
      <text x="40" y="22" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="22" fontWeight="600" letterSpacing="-0.8" fill="currentColor">CIMtech</text>
      <text x="40" y="30" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="7" fontWeight="500" letterSpacing="0.14em">
        <tspan fill="var(--color-accent)">GREEN</tspan>
        <tspan dx="3" fill="currentColor" opacity="0.75">ENERGY</tspan>
      </text>
    </svg>
  );
}
