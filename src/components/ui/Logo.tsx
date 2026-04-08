'use client';

import { motion, useReducedMotion } from 'framer-motion';

type LogoProps = {
  variant?: 'lockup' | 'mark' | 'wordmark';
  className?: string;
  animated?: boolean;
};

export function Logo({ variant = 'lockup', className = '', animated = true }: LogoProps) {
  const reduced = useReducedMotion();
  const shouldAnimate = animated && !reduced;
  const drawTransition = { duration: 0.8, ease: 'easeInOut' as const };

  if (variant === 'wordmark') {
    return (
      <svg viewBox="0 0 220 32" className={className} aria-label="CIMtech">
        <text x="0" y="24" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="28" fontWeight="600" letterSpacing="-1.1" fill="currentColor">CIMTECH</text>
      </svg>
    );
  }

  const MarkPaths = (
    <g fill="none" stroke="#A8FF1F" strokeWidth="2" strokeLinecap="round">
      <motion.path
        d="M25 9a10 10 0 1 0 0 14"
        initial={shouldAnimate ? { pathLength: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1 } : undefined}
        transition={drawTransition}
      />
      <motion.path
        d="M22 13a6 6 0 1 0 0 6"
        opacity="0.7"
        initial={shouldAnimate ? { pathLength: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1 } : undefined}
        transition={{ ...drawTransition, delay: 0.15 }}
      />
      <motion.path
        d="M19 15.5a2.5 2.5 0 1 0 0 1"
        opacity="0.45"
        initial={shouldAnimate ? { pathLength: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1 } : undefined}
        transition={{ ...drawTransition, delay: 0.3 }}
      />
    </g>
  );

  if (variant === 'mark') {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-label="CIMtech">
        {MarkPaths}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 280 32" className={className} aria-label="CIMtech">
      {MarkPaths}
      <text x="44" y="24" fontFamily="var(--font-inter-tight), system-ui, sans-serif" fontSize="28" fontWeight="600" letterSpacing="-1.1" fill="currentColor">CIMTECH</text>
    </svg>
  );
}
