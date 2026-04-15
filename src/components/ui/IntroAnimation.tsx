'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';

const SESSION_KEY = 'cgee-intro-played';

type Phase = 'reveal' | 'merge' | 'done';

export function IntroAnimation() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>('reveal');
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    sessionStorage.setItem(SESSION_KEY, '1');
    setVisible(true);
    document.body.style.overflow = 'hidden';

    const toMerge = setTimeout(() => setPhase('merge'), 2200);
    const toDone = setTimeout(() => setPhase('done'), 3400);
    const toHide = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
    }, 3900);

    return () => {
      clearTimeout(toMerge);
      clearTimeout(toDone);
      clearTimeout(toHide);
      document.body.style.overflow = '';
    };
  }, [reduced]);

  const skip = () => {
    setPhase('done');
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
    }, 500);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onClick={skip}
          className="fixed inset-0 z-[100] bg-[var(--color-background)] flex items-center justify-center cursor-pointer select-none"
          aria-hidden="true"
        >
          <AnimatePresence mode="wait">
            {phase === 'reveal' && (
              <motion.div
                key="reveal"
                exit={{ opacity: 0, scale: 0.92, filter: 'blur(6px)' }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                className="flex items-center gap-3 md:gap-5 text-[var(--color-brand-gray)]"
              >
                <Step delay={0.15}><CGlyph /></Step>
                <Plus delay={0.55} />
                <Step delay={0.70}><GGlyph /></Step>
                <Plus delay={1.10} />
                <Step delay={1.25}><EGlyph /></Step>
                <Plus delay={1.65} />
                <Step delay={1.80}><PowerGlyph /></Step>
              </motion.div>
            )}

            {phase !== 'reveal' && (
              <motion.div
                key="merge"
                initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="text-[var(--color-foreground)]"
              >
                <Logo variant="full-lockup" className="h-20 md:h-28 w-auto" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0.55, 0] }}
            transition={{ duration: 3.6, times: [0, 0.18, 0.85, 1], ease: 'linear' }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 mono-label text-[var(--color-subtle)] whitespace-nowrap"
          >
            + Precision · Power · Sustainability +
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---- Sequencing wrappers ----

function Step({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className="w-16 h-16 md:w-24 md:h-24"
    >
      {children}
    </motion.div>
  );
}

function Plus({ delay }: { delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.7, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className="font-mono text-2xl md:text-4xl text-[var(--color-brand-green)]"
      aria-hidden="true"
    >
      +
    </motion.span>
  );
}

// ---- Glyph variants (gray ring + role-specific inner element) ----

function RingOnly() {
  // Full ring — used as base for G / Power.
  return <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="10" />;
}

function RingOpen() {
  // C-style ring with gap on the right.
  return <path d="M 64.9 28.3 A 28 28 0 1 0 64.9 51.7" fill="none" stroke="currentColor" strokeWidth="10" />;
}

function CGlyph() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <RingOpen />
    </svg>
  );
}

function GGlyph() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <RingOnly />
      <rect x="44" y="36" width="20" height="8" rx="4" fill="currentColor" />
    </svg>
  );
}

function EGlyph() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <RingOpen />
      <rect x="18" y="36" width="44" height="8" rx="4" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

function PowerGlyph() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <RingOnly />
      <rect x="36" y="20" width="8" height="28" rx="4" fill="var(--color-brand-green)" />
    </svg>
  );
}
