# CimTech Terminal Industrial Refactor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Full visual refactor of the CimTech marketing site across all pages into a dark, motion-rich "ops console" aesthetic inspired by Terminal Industries, tuned to CimTech's green identity, with new logo, new typography, new tokens, new animations, and refactored imagery treatment.

**Architecture:** Phased refactor. Foundation first (tokens, fonts, logo, shared animation primitives). Then global chrome (Nav + Footer). Then homepage section-by-section. Then inner pages using shared primitives. Copy stays largely intact; light polish on headlines/CTAs only. Motion via framer-motion with `prefers-reduced-motion` fallbacks. Server Components by default, `'use client'` only where motion/interactivity requires.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind v4 (`@theme inline`), framer-motion 12, next/font, TypeScript, Inter Tight + Geist Mono.

**Reference spec:** `docs/superpowers/specs/2026-04-08-cimtech-terminal-refactor-design.md`

**Testing note:** Visual refactor work is not unit-testable in the traditional sense. Instead of test-first, each task ends with: build passes (`npm run build`), typecheck passes, lint passes, and manual visual verification in dev server. Component tasks include snapshot expectations where feasible.

---

## Phase 0: Setup

### Task 0.1: Branch + dev server sanity

- [ ] **Step 1: Create feature branch**

```bash
cd "/Users/matthewgoulet/CimTech Green Energy"
git checkout -b feature/terminal-industrial-refactor
```

- [ ] **Step 2: Verify current build is green**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Verify dev server boots**

Run: `npm run dev` (in background, kill after verifying)
Expected: `Ready` on http://localhost:3000.

---

## Phase 1: Foundation (Tokens, Fonts, Logo, Duotone Filter)

### Task 1.1: Replace design tokens in globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Rewrite globals.css with new tokens**

Replace entire file contents with:

```css
@import "tailwindcss";

@theme inline {
  /* Base — CimTech forest + lime */
  --color-background: #041F1A;
  --color-surface: #07281F;
  --color-surface-elevated: #0B332A;
  --color-border: rgba(255, 255, 255, 0.12);
  --color-border-strong: rgba(255, 255, 255, 0.22);
  --color-foreground: #F5F7F4;
  --color-muted: #A8B5AE;
  --color-subtle: #6B7A73;

  --color-accent: #A8FF1F;
  --color-accent-hover: #C4FF4D;
  --color-accent-dim: rgba(168, 255, 31, 0.15);
  --color-warn: #FB6B3C;

  --font-sans: var(--font-inter-tight);
  --font-mono: var(--font-geist-mono);

  /* Fluid type scale */
  --text-display: clamp(3rem, 5.7vw, 7.5rem);
  --text-h1: clamp(2.25rem, 4.2vw, 5rem);
  --text-h2: clamp(1.75rem, 2.8vw, 3.25rem);
  --text-h3: clamp(1.25rem, 1.6vw, 1.75rem);
  --text-body: clamp(1rem, 1.05vw, 1.125rem);
  --text-label: 0.75rem;

  /* Rhythm */
  --spacing-pad-x: clamp(1.25rem, 5.128vw, 6rem);
  --spacing-section-y: clamp(4rem, 9vw, 10rem);
}

html {
  scroll-behavior: smooth;
  background-color: var(--color-background);
  color-scheme: dark;
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans);
  font-feature-settings: "ss01", "cv11";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  letter-spacing: -0.025em;
}

.font-mono {
  font-family: var(--font-mono);
}

.mono-label {
  font-family: var(--font-mono);
  font-size: var(--text-label);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-muted);
}

/* Hairline borders */
.border-hairline {
  border-color: var(--color-border);
}

/* Corner markers (+) */
.corner-markers::before,
.corner-markers::after {
  content: "+";
  position: absolute;
  font-family: var(--font-mono);
  color: var(--color-accent);
  font-size: 1rem;
  line-height: 1;
}
.corner-markers::before { top: -0.5rem; left: -0.5rem; }
.corner-markers::after { bottom: -0.5rem; right: -0.5rem; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}

/* Keyframes */
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

@keyframes gradient-drift {
  0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
  50% { transform: translate(-5%, 5%) rotate(180deg); }
}

.animate-blink { animation: blink 1s steps(1) infinite; }
.animate-marquee { animation: marquee 40s linear infinite; }
.animate-marquee-reverse { animation: marquee-reverse 40s linear infinite; }
.animate-gradient-drift { animation: gradient-drift 30s ease-in-out infinite; }
```

- [ ] **Step 2: Typecheck + build**

Run: `npm run build`
Expected: Build succeeds. Existing components may look broken visually — that is expected.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(design): replace tokens with Terminal Industrial dark palette"
```

### Task 1.2: Wire new fonts in layout.tsx

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace font imports with Inter Tight + Geist Mono only**

Replace the file with:

```tsx
import type { Metadata } from 'next';
import { Inter_Tight, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'CIMtech Green Energy — Precision Manufacturing Partner',
    template: '%s | CIMtech Green Energy',
  },
  description:
    'Precision manufacturing partner serving defense, commercial, consumer, and clean energy sectors. NPI prototyping to production scale from Vancouver, Canada.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Build + verify**

Run: `npm run build`
Expected: Build succeeds. (Old font refs like `font-sub`, `font-sans` Plus-Jakarta still referenced in components — fixed per-component later.)

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(design): switch to Inter Tight + Geist Mono fonts"
```

### Task 1.3: Create SVG logo assets

**Files:**
- Create: `public/logo/cimtech-mark.svg`
- Create: `public/logo/cimtech-wordmark.svg`
- Create: `public/logo/cimtech.svg`

- [ ] **Step 1: Create mark (stylized C)**

Write `public/logo/cimtech-mark.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#A8FF1F" stroke-width="2" stroke-linecap="round">
  <path d="M25 9a10 10 0 1 0 0 14" />
  <path d="M22 13a6 6 0 1 0 0 6" opacity="0.7" />
  <path d="M19 15.5a2.5 2.5 0 1 0 0 1" opacity="0.45" />
</svg>
```

- [ ] **Step 2: Create wordmark**

Write `public/logo/cimtech-wordmark.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 32">
  <text x="0" y="24" font-family="Inter Tight, system-ui, sans-serif" font-size="28" font-weight="600" letter-spacing="-1.1" fill="#F5F7F4">CIMTECH</text>
</svg>
```

- [ ] **Step 3: Create lockup**

Write `public/logo/cimtech.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 32">
  <g fill="none" stroke="#A8FF1F" stroke-width="2" stroke-linecap="round">
    <path d="M25 9a10 10 0 1 0 0 14" />
    <path d="M22 13a6 6 0 1 0 0 6" opacity="0.7" />
    <path d="M19 15.5a2.5 2.5 0 1 0 0 1" opacity="0.45" />
  </g>
  <text x="44" y="24" font-family="Inter Tight, system-ui, sans-serif" font-size="28" font-weight="600" letter-spacing="-1.1" fill="#F5F7F4">CIMTECH</text>
</svg>
```

- [ ] **Step 4: Replace favicon**

Copy the mark to public root as favicon source:

```bash
cp public/logo/cimtech-mark.svg public/favicon.svg
```

- [ ] **Step 5: Commit**

```bash
git add public/logo public/favicon.svg
git commit -m "feat(brand): add new CimTech SVG logo assets"
```

### Task 1.4: Create Logo React component with draw-in animation

**Files:**
- Create: `src/components/ui/Logo.tsx`

- [ ] **Step 1: Write Logo component**

```tsx
'use client';

import { motion } from 'framer-motion';

type LogoProps = {
  variant?: 'lockup' | 'mark' | 'wordmark';
  className?: string;
  animated?: boolean;
};

export function Logo({ variant = 'lockup', className = '', animated = true }: LogoProps) {
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
        initial={animated ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={drawTransition}
      />
      <motion.path
        d="M22 13a6 6 0 1 0 0 6"
        opacity="0.7"
        initial={animated ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ ...drawTransition, delay: 0.15 }}
      />
      <motion.path
        d="M19 15.5a2.5 2.5 0 1 0 0 1"
        opacity="0.45"
        initial={animated ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
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
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/Logo.tsx
git commit -m "feat(ui): add animated Logo component"
```

### Task 1.5: Duotone SVG filter component

**Files:**
- Create: `src/components/ui/DuotoneFilter.tsx`

- [ ] **Step 1: Write SVG filter defs**

```tsx
export function DuotoneFilter() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <filter id="cimtech-duotone">
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0    0    0    1 0"
          />
          <feComponentTransfer colorInterpolationFilters="sRGB">
            <feFuncR tableValues="0.016 0.659" />
            <feFuncG tableValues="0.122 1.000" />
            <feFuncB tableValues="0.102 0.122" />
          </feComponentTransfer>
        </filter>
        <filter id="cimtech-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0" />
        </filter>
      </defs>
    </svg>
  );
}
```

- [ ] **Step 2: Mount in layout.tsx**

In `src/app/layout.tsx`, add import and render inside `<body>` before `<Header />`:

```tsx
import { DuotoneFilter } from '@/components/ui/DuotoneFilter';
// ...
<body className={`${interTight.variable} ${geistMono.variable} antialiased`}>
  <DuotoneFilter />
  <Header />
  <main>{children}</main>
  <Footer />
</body>
```

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: Passes.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/DuotoneFilter.tsx src/app/layout.tsx
git commit -m "feat(ui): add duotone + grain SVG filters"
```

---

## Phase 2: Shared Animation & Layout Primitives

### Task 2.1: ScrollReveal wrapper

**Files:**
- Create: `src/components/ui/ScrollReveal.tsx`

- [ ] **Step 1: Write component**

```tsx
'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type ScrollRevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
  delay?: number;
  y?: number;
};

export function ScrollReveal({ children, delay = 0, y = 40, ...rest }: ScrollRevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealStagger({ children, staggerDelay = 0.06, ...rest }: { children: ReactNode; staggerDelay?: number } & HTMLMotionProps<'div'>) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : staggerDelay } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
```

- [ ] **Step 2: Typecheck + commit**

```bash
npx tsc --noEmit
git add src/components/ui/ScrollReveal.tsx
git commit -m "feat(ui): add ScrollReveal + stagger primitives"
```

### Task 2.2: AnimatedHeadline (word-by-word color wipe)

**Files:**
- Create: `src/components/ui/AnimatedHeadline.tsx`

- [ ] **Step 1: Write component**

```tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';

type AnimatedHeadlineProps = {
  text: string;
  as?: 'h1' | 'h2';
  className?: string;
};

export function AnimatedHeadline({ text, as = 'h1', className = '' }: AnimatedHeadlineProps) {
  const reduced = useReducedMotion();
  const words = text.split(' ');
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { color: '#6B7A73' },
            visible: {
              color: ['#6B7A73', '#A8FF1F', '#F5F7F4'],
              transition: { duration: reduced ? 0 : 1, times: [0, 0.3, 1], ease: 'easeOut' },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/AnimatedHeadline.tsx
git commit -m "feat(ui): add AnimatedHeadline color-wipe component"
```

### Task 2.3: CountUp component

**Files:**
- Create: `src/components/ui/CountUp.tsx`

- [ ] **Step 1: Write component**

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type CountUpProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export function CountUp({ to, suffix = '', prefix = '', duration = 1.2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/CountUp.tsx
git commit -m "feat(ui): add CountUp component"
```

### Task 2.4: CursorGlow wrapper

**Files:**
- Create: `src/components/ui/CursorGlow.tsx`

- [ ] **Step 1: Write component**

```tsx
'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';

type CursorGlowProps = {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: string;
};

export function CursorGlow({
  children,
  className = '',
  color = 'rgba(168, 255, 31, 0.18)',
  size = '15rem',
}: CursorGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `radial-gradient(${size} at var(--mx, 50%) var(--my, 50%), ${color}, transparent 70%)`,
      }}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/CursorGlow.tsx
git commit -m "feat(ui): add CursorGlow wrapper"
```

### Task 2.5: Marquee (infinite scroll)

**Files:**
- Create: `src/components/ui/Marquee.tsx`

- [ ] **Step 1: Write component**

```tsx
import type { ReactNode } from 'react';

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

export function Marquee({ children, reverse = false, pauseOnHover = true, className = '' }: MarqueeProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className={`flex w-max gap-12 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
      >
        <div className="flex gap-12 items-center shrink-0">{children}</div>
        <div className="flex gap-12 items-center shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/Marquee.tsx
git commit -m "feat(ui): add Marquee primitive"
```

### Task 2.6: TickerDivider

**Files:**
- Create: `src/components/ui/TickerDivider.tsx`

- [ ] **Step 1: Write component**

```tsx
import { Marquee } from './Marquee';

const ITEMS = [
  'RUNTIME: 23Y',
  '43.6532°N 79.3832°W',
  'STATUS: OPERATIONAL',
  'ISO 9001:2015',
  'NPI IN 14 DAYS',
  'EST. 2001',
  'ONTARIO / CANADA',
  '●',
];

export function TickerDivider() {
  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-3">
      <Marquee pauseOnHover={false}>
        {ITEMS.map((item, i) => (
          <span key={i} className="mono-label text-[var(--color-muted)] whitespace-nowrap">
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/TickerDivider.tsx
git commit -m "feat(ui): add TickerDivider"
```

### Task 2.7: ImageSpecimen wrapper

**Files:**
- Create: `src/components/ui/ImageSpecimen.tsx`

- [ ] **Step 1: Write component**

```tsx
import Image from 'next/image';

type ImageSpecimenProps = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  className?: string;
  duotone?: boolean;
};

export function ImageSpecimen({
  src,
  alt,
  caption,
  width,
  height,
  className = '',
  duotone = true,
}: ImageSpecimenProps) {
  return (
    <figure className={`relative corner-markers ${className}`}>
      <div className="relative overflow-hidden border border-[var(--color-border-strong)] bg-[var(--color-surface)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto block"
          style={duotone ? { filter: 'url(#cimtech-duotone)' } : undefined}
        />
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60"
          style={{ filter: 'url(#cimtech-grain)' }}
        />
      </div>
      {caption && (
        <figcaption className="mono-label mt-2 flex items-center gap-2">
          <span className="h-px w-6 bg-[var(--color-accent)]" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/ImageSpecimen.tsx
git commit -m "feat(ui): add ImageSpecimen wrapper"
```

### Task 2.8: Button primitive (sweep-fill hover)

**Files:**
- Modify: `src/components/ui/Button.tsx`

- [ ] **Step 1: Replace component**

```tsx
import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'ghost' | 'outline';
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<'button'>, 'ref'>;

const base =
  'group relative inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] px-5 py-3 overflow-hidden transition-colors border';

const variants = {
  primary:
    'border-[var(--color-accent)] text-[var(--color-background)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]',
  outline:
    'border-[var(--color-border-strong)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost:
    'border-transparent text-[var(--color-foreground)] hover:text-[var(--color-accent)]',
};

export function Button({ href, variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/Button.tsx
git commit -m "refactor(ui): Button now uses mono + hover translate"
```

### Task 2.9: Container + Section primitives

**Files:**
- Modify: `src/components/ui/Container.tsx`
- Modify: `src/components/ui/Section.tsx`

- [ ] **Step 1: Replace Container**

```tsx
import type { HTMLAttributes } from 'react';

export function Container({ className = '', children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`w-full mx-auto max-w-[1440px] px-[var(--spacing-pad-x)] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Replace Section**

```tsx
import type { HTMLAttributes } from 'react';

export function Section({ className = '', children, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={`relative py-[var(--spacing-section-y)] ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/Container.tsx src/components/ui/Section.tsx
git commit -m "refactor(ui): Container/Section use new spacing tokens"
```

### Task 2.10: Build checkpoint

- [ ] **Step 1: Build the whole project**

Run: `npm run build`
Expected: Build succeeds. Existing sections still reference old classes and will look broken — fixed in later phases.

---

## Phase 3: Global Chrome (Nav + Footer)

### Task 3.1: Header refactor

**Files:**
- Modify: `src/components/navigation/Header.tsx`

- [ ] **Step 1: Read current file to preserve nav items**

Run: `cat src/components/navigation/Header.tsx` — note the nav items/links structure from `src/data/navigation.ts`.

- [ ] **Step 2: Replace Header**

```tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';
import { primaryNav } from '@/data/navigation';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] backdrop-blur-[30px] bg-[rgba(4,31,26,0.7)]">
      <div className="mx-auto max-w-[1440px] px-[var(--spacing-pad-x)] flex items-center justify-between h-16">
        <Link href="/" className="text-[var(--color-foreground)]">
          <Logo variant="lockup" className="h-6 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {primaryNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative mono-label text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              <span className="mr-2 text-[var(--color-subtle)]">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px bg-[var(--color-accent)] w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-px w-6 bg-[var(--color-foreground)]"
            animate={open ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block h-px w-6 bg-[var(--color-foreground)]"
            animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)]"
          >
            <nav className="px-[var(--spacing-pad-x)] py-6 flex flex-col gap-4">
              {primaryNav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mono-label text-[var(--color-foreground)]"
                  onClick={() => setOpen(false)}
                >
                  <span className="mr-2 text-[var(--color-subtle)]">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 3: Verify `primaryNav` export exists in `src/data/navigation.ts`**

Run: `grep -n primaryNav src/data/navigation.ts`

If the export is named differently (e.g. `navigation`, `navItems`), update the import in Header accordingly. Do NOT rename the data file exports — adapt the import.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: Passes.

- [ ] **Step 5: Commit**

```bash
git add src/components/navigation/Header.tsx
git commit -m "feat(nav): Terminal-style Header with animated mark + mono links"
```

### Task 3.2: Footer refactor

**Files:**
- Modify: `src/components/navigation/Footer.tsx`

- [ ] **Step 1: Replace Footer**

```tsx
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Marquee } from '@/components/ui/Marquee';
import { primaryNav } from '@/data/navigation';

const TICKER = ['● OPERATIONAL', '43.6532°N 79.3832°W', 'EST. 2001', 'ISO 9001:2015', 'RUNTIME 23Y'];

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-background)] border-t border-[var(--color-border)]">
      <div className="border-b border-[var(--color-border)]">
        <Marquee pauseOnHover={false} className="py-4">
          {TICKER.map((t, i) => (
            <span key={i} className="mono-label whitespace-nowrap">{t}</span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-[1440px] px-[var(--spacing-pad-x)] py-20 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <Link href="/" className="text-[var(--color-foreground)] inline-block">
            <Logo variant="lockup" className="h-7 w-auto" animated={false} />
          </Link>
          <p className="mono-label mt-6 max-w-xs">
            Precision manufacturing partner. Defense. Commercial. Consumer. Clean energy.
          </p>
        </div>

        <div className="col-span-6 md:col-span-3">
          <p className="mono-label text-[var(--color-subtle)] mb-4">NAVIGATION</p>
          <ul className="space-y-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[var(--color-foreground)] hover:text-[var(--color-accent)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 md:col-span-3">
          <p className="mono-label text-[var(--color-subtle)] mb-4">CONTACT</p>
          <ul className="space-y-2 text-sm">
            <li>Ontario, Canada</li>
            <li>hello@cimtech.ca</li>
            <li className="mono-label text-[var(--color-accent)] mt-4">● RESPONDS WITHIN 24H</li>
          </ul>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none overflow-hidden"
      >
        <div
          className="font-sans font-semibold text-[20vw] leading-[0.8] tracking-[-0.04em] text-transparent"
          style={{ WebkitTextStroke: '1px rgba(168,255,31,0.25)' }}
        >
          CIMTECH
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] py-6 text-center mono-label text-[var(--color-subtle)]">
        © 2001–{new Date().getFullYear()} CIMtech Green Energy. All systems nominal.
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Build + commit**

```bash
npm run build
git add src/components/navigation/Footer.tsx
git commit -m "feat(nav): Terminal-style Footer with wordmark + ticker"
```

---

## Phase 4: Homepage Sections

> **Pattern note:** Each section below is a `'use client'` component that accepts the same data props already used in `src/data/content.ts`. Before refactoring any section, run `cat src/data/content.ts` to confirm prop shapes. If a prop is missing or named differently, adapt the component signature — do NOT modify `content.ts` shape unless the spec explicitly requires new data fields. Copy polish (headline tweaks, CTA label changes) is applied in Phase 6, not here.

### Task 4.1: HeroHome

**Files:**
- Modify: `src/components/sections/HeroHome.tsx`

- [ ] **Step 1: Read current props**

Run: `cat src/components/sections/HeroHome.tsx` and note the prop names.

- [ ] **Step 2: Replace component**

```tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedHeadline } from '@/components/ui/AnimatedHeadline';
import { Button } from '@/components/ui/Button';

type HeroHomeProps = {
  label?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  imageAlt: string;
};

export function HeroHome({ label, title, description, primaryCta, secondaryCta, image, imageAlt }: HeroHomeProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden border-b border-[var(--color-border)]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        style={{ filter: 'url(#cimtech-duotone) brightness(0.45)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(4,31,26,0.4)] via-transparent to-[rgba(4,31,26,0.95)]" />

      {/* Corner markers */}
      <div className="absolute top-24 left-[var(--spacing-pad-x)] mono-label text-[var(--color-accent)]">
        + CIMTECH // EST. 2001 // ONTARIO, CAN
      </div>
      <div className="absolute top-24 right-[var(--spacing-pad-x)] mono-label text-[var(--color-accent)]">
        43.6532°N 79.3832°W +
      </div>

      <div className="relative mx-auto max-w-[1440px] w-full px-[var(--spacing-pad-x)] pb-24 pt-40">
        {label && <p className="mono-label mb-6">{label}</p>}
        <AnimatedHeadline
          text={title}
          className="font-semibold text-[var(--text-display)] leading-[0.95] max-w-5xl"
        />
        <p className="mt-8 max-w-xl text-[var(--color-muted)] text-[var(--text-body)] leading-relaxed">
          {description}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href={primaryCta.href} variant="primary">{primaryCta.label}</Button>
          {secondaryCta && <Button href={secondaryCta.href} variant="outline">{secondaryCta.label}</Button>}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-[var(--color-border-strong)] rounded-full flex items-start justify-center p-1.5">
          <motion.span
            className="block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Adapt props if shape differs**

If `homeContent.hero` in `src/data/content.ts` uses different prop names, adjust the `HeroHomeProps` type and destructuring to match. Do NOT change `content.ts`.

- [ ] **Step 4: Build + commit**

```bash
npm run build
git add src/components/sections/HeroHome.tsx
git commit -m "feat(sections): Terminal-style HeroHome with color-wipe headline"
```

### Task 4.2: MetricsBand

**Files:**
- Modify: `src/components/sections/MetricsBand.tsx`

- [ ] **Step 1: Replace component**

```tsx
import { CountUp } from '@/components/ui/CountUp';

type Metric = { label: string; value: number; suffix?: string; prefix?: string };

export function MetricsBand({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1440px] px-[var(--spacing-pad-x)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
        {metrics.map((m, i) => (
          <div key={i} className="py-14 px-6 first:pl-0 last:pr-0">
            <p className="mono-label mb-4">{m.label}</p>
            <p className="font-semibold text-[var(--text-h1)] tracking-[-0.03em] leading-none flex items-baseline">
              <CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} />
              <span className="ml-1 w-2 h-8 bg-[var(--color-accent)] animate-blink" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify Metric shape**

Run: `grep -A 5 "metrics:" src/data/content.ts`

If metrics are typed as `{ number: string; label: string }` or similar, adapt the component: parse numeric portion, pass to CountUp, keep the non-numeric part as suffix/prefix. Do NOT modify `content.ts`.

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add src/components/sections/MetricsBand.tsx
git commit -m "feat(sections): MetricsBand with count-up + blinking cursor"
```

### Task 4.3: SplitSection

**Files:**
- Modify: `src/components/sections/SplitSection.tsx`

- [ ] **Step 1: Replace component**

```tsx
import { ReactNode } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ImageSpecimen } from '@/components/ui/ImageSpecimen';

type SplitSectionProps = {
  badge?: string;
  title: string;
  image: string;
  imageAlt: string;
  imageOverlay?: string;
  children: ReactNode;
};

export function SplitSection({ badge, title, image, imageAlt, imageOverlay, children }: SplitSectionProps) {
  return (
    <div className="grid grid-cols-12 gap-8 items-center">
      <ScrollReveal className="col-span-12 md:col-span-7">
        {badge && (
          <p className="mono-label text-[var(--color-accent)] mb-4 flex items-center gap-2">
            <span className="h-px w-6 bg-[var(--color-accent)]" /> {badge}
          </p>
        )}
        <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-6 max-w-xl">{title}</h2>
        <div className="text-[var(--color-muted)] space-y-4 max-w-lg">{children}</div>
      </ScrollReveal>
      <ScrollReveal delay={0.15} className="col-span-12 md:col-span-5">
        <ImageSpecimen src={image} alt={imageAlt} caption={imageOverlay} width={445} height={319} />
      </ScrollReveal>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
npm run build
git add src/components/sections/SplitSection.tsx
git commit -m "feat(sections): SplitSection uses ImageSpecimen + ScrollReveal"
```

### Task 4.4: IndustryCards

**Files:**
- Modify: `src/components/sections/IndustryCard.tsx`

- [ ] **Step 1: Replace component**

```tsx
import Link from 'next/link';
import { CursorGlow } from '@/components/ui/CursorGlow';
import { ImageSpecimen } from '@/components/ui/ImageSpecimen';
import { ScrollRevealStagger, staggerItemVariants } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

type Industry = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  label?: string;
};

export function IndustryCards({ items }: { items: Industry[] }) {
  return (
    <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <motion.div key={i} variants={staggerItemVariants}>
          <Link href={item.href} className="block group">
            <CursorGlow className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-border-strong)] transition-colors corner-markers">
              <ImageSpecimen src={item.image} alt={item.imageAlt} width={360} height={270} caption={item.label} />
              <h3 className="font-semibold text-[var(--text-h3)] mt-6 mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              <p className="mono-label text-[var(--color-accent)] mt-6 flex items-center gap-2">
                VIEW SECTOR
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </p>
            </CursorGlow>
          </Link>
        </motion.div>
      ))}
    </ScrollRevealStagger>
  );
}
```

- [ ] **Step 2: Commit**

```bash
npm run build
git add src/components/sections/IndustryCard.tsx
git commit -m "feat(sections): IndustryCards with cursor glow + specimen framing"
```

### Task 4.5: Accordion

**Files:**
- Modify: `src/components/sections/Accordion.tsx`

- [ ] **Step 1: Replace component**

```tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Item = { title: string; description: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-y border-[var(--color-border)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`border-b border-[var(--color-border)] ${isOpen ? 'bg-[var(--color-surface)]' : ''}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-8 text-left group relative"
            >
              {isOpen && <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-accent)]" />}
              <div className="flex items-center gap-6 pl-6">
                <span className="mono-label text-[var(--color-subtle)]">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-semibold text-[var(--text-h3)] group-hover:text-[var(--color-accent)] transition-colors">{item.title}</span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="font-mono text-2xl text-[var(--color-accent)] pr-6"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pl-16 pr-6 pb-8 max-w-2xl text-[var(--color-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
npm run build
git add src/components/sections/Accordion.tsx
git commit -m "feat(sections): Accordion with smooth expand + lime left-stripe"
```

### Task 4.6: LogoBand

**Files:**
- Modify: `src/components/sections/LogoBand.tsx`

- [ ] **Step 1: Replace component**

```tsx
import Image from 'next/image';
import { Marquee } from '@/components/ui/Marquee';

type Logo = { src: string; alt: string };

export function LogoBand({ logos, label }: { logos: Logo[]; label?: string }) {
  return (
    <section className="py-20 border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      {label && (
        <div className="text-center mb-10">
          <p className="mono-label">{label} // 2001 — PRESENT</p>
        </div>
      )}
      <Marquee>
        {logos.map((logo, i) => (
          <div key={i} className="h-10 w-32 relative opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
npm run build
git add src/components/sections/LogoBand.tsx
git commit -m "feat(sections): LogoBand infinite marquee"
```

### Task 4.7: SubBrandSpotlight

**Files:**
- Modify: `src/components/sections/SubBrandSpotlight.tsx`

- [ ] **Step 1: Replace component**

```tsx
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type SubBrandSpotlightProps = {
  label?: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

export function SubBrandSpotlight({ label, title, description, cta }: SubBrandSpotlightProps) {
  return (
    <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] p-12 md:p-20 corner-markers">
      {/* Gradient mesh */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] animate-gradient-drift"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(168,255,31,0.3), transparent 40%), radial-gradient(circle at 70% 60%, rgba(251,107,60,0.2), transparent 40%)',
          }}
        />
      </div>

      <ScrollReveal className="relative max-w-2xl">
        {label && <p className="mono-label text-[var(--color-accent)] mb-4">+ {label}</p>}
        <h2 className="font-semibold text-[var(--text-h1)] leading-[1.05] mb-6">{title}</h2>
        <p className="text-[var(--color-muted)] mb-8 max-w-xl">{description}</p>
        <Button href={cta.href} variant="primary">{cta.label}</Button>
      </ScrollReveal>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
npm run build
git add src/components/sections/SubBrandSpotlight.tsx
git commit -m "feat(sections): SubBrandSpotlight with drifting gradient mesh"
```

### Task 4.8: ConsultationForm

**Files:**
- Modify: `src/components/sections/ConsultationForm.tsx`

- [ ] **Step 1: Replace component**

```tsx
'use client';

import { useState } from 'react';

type ConsultationFormProps = { title: string; description: string };

const inputBase =
  'w-full bg-transparent border-b border-[var(--color-border-strong)] py-4 text-[var(--color-foreground)] placeholder:text-[var(--color-subtle)] focus:outline-none focus:border-[var(--color-accent)] transition-colors';

export function ConsultationForm({ title, description }: ConsultationFormProps) {
  const [sent, setSent] = useState(false);
  return (
    <div className="grid grid-cols-12 gap-8 border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-16 corner-markers">
      <div className="col-span-12 md:col-span-5">
        <p className="mono-label text-[var(--color-accent)] mb-4">● RESPONDING WITHIN 24H</p>
        <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-4">{title}</h2>
        <p className="text-[var(--color-muted)] max-w-sm">{description}</p>
      </div>
      <form
        className="col-span-12 md:col-span-7 flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <input required className={inputBase} placeholder="FULL NAME" />
        <input required type="email" className={inputBase} placeholder="EMAIL" />
        <input className={inputBase} placeholder="COMPANY" />
        <textarea rows={4} className={inputBase} placeholder="PROJECT BRIEF" />
        <button
          type="submit"
          className="self-start mono-label bg-[var(--color-accent)] text-[var(--color-background)] px-6 py-4 hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          {sent ? 'TRANSMISSION RECEIVED' : 'OPEN A LINE →'}
        </button>
      </form>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
npm run build
git add src/components/sections/ConsultationForm.tsx
git commit -m "feat(sections): ConsultationForm with mono labels + transmit CTA"
```

### Task 4.9: PortfolioGrid

**Files:**
- Modify: `src/components/sections/PortfolioGrid.tsx`

- [ ] **Step 1: Replace component**

```tsx
import { ImageSpecimen } from '@/components/ui/ImageSpecimen';
import { ScrollRevealStagger, staggerItemVariants } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

type Item = { title: string; category?: string; image: string; imageAlt?: string };

export function PortfolioGrid({ items }: { items: Item[] }) {
  return (
    <ScrollRevealStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <motion.div key={i} variants={staggerItemVariants} className="group">
          <ImageSpecimen
            src={item.image}
            alt={item.imageAlt ?? item.title}
            width={240}
            height={180}
            caption={`${String(i + 1).padStart(3, '0')} // ${item.category ?? 'PROJECT'}`}
          />
          <h3 className="mt-4 font-semibold text-base group-hover:text-[var(--color-accent)] transition-colors">{item.title}</h3>
        </motion.div>
      ))}
    </ScrollRevealStagger>
  );
}
```

- [ ] **Step 2: Adapt prop shape if needed**

Run: `grep -A 10 "portfolio" src/data/portfolio.ts`. Adapt `Item` type to match actual data (don't modify `portfolio.ts`).

- [ ] **Step 3: Commit**

```bash
npm run build
git add src/components/sections/PortfolioGrid.tsx
git commit -m "feat(sections): PortfolioGrid as specimen grid"
```

### Task 4.10: Homepage wiring audit

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update page.tsx to use TickerDivider between major sections**

Replace the decorative inline divider blocks (the `<span className="h-px w-8 bg-accent" />` dressings) with `<TickerDivider />` between Industries/Capabilities/Portfolio sections. Keep the existing section ordering. Example pattern:

```tsx
import { TickerDivider } from '@/components/ui/TickerDivider';
// ...between sections:
<TickerDivider />
```

Delete any leftover `bg-surface-elevated` classes that fight the new dark theme.

- [ ] **Step 2: Build + run dev + visual check**

```bash
npm run build
npm run dev
```

Open http://localhost:3000, scroll through homepage, confirm:
- Hero headline color-wipes
- Metrics count up
- Industry cards glow under cursor
- Accordion expands smoothly
- Logo marquee scrolls
- Footer marquee scrolls
- No console errors

Kill dev server.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): wire new sections + ticker dividers"
```

---

## Phase 5: Inner Pages

> **Pattern:** For each inner page, follow these sub-steps:
> 1. Read the current page file (`cat src/app/<page>/page.tsx`) and the component it depends on
> 2. Replace the hero block with the pattern defined below
> 3. Replace any section wrappers with new `Section` + `Container`
> 4. Use existing shared primitives (SplitSection, Accordion, IndustryCards, ImageSpecimen, Button, AnimatedHeadline, TickerDivider) for content blocks
> 5. Delete any old light-mode specific classes (`bg-white`, `text-slate-*`, etc.)
> 6. Build + commit

### Task 5.1: Create shared PageHero component

**Files:**
- Create: `src/components/sections/PageHero.tsx`

- [ ] **Step 1: Write component**

```tsx
import { AnimatedHeadline } from '@/components/ui/AnimatedHeadline';

type PageHeroProps = {
  breadcrumb: string;
  label: string;
  title: string;
  lede: string;
};

export function PageHero({ breadcrumb, label, title, lede }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-end border-b border-[var(--color-border)] overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(168,255,31,0.08)] via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-[1440px] w-full px-[var(--spacing-pad-x)]">
        <p className="mono-label text-[var(--color-subtle)] mb-4">{breadcrumb}</p>
        <p className="mono-label text-[var(--color-accent)] mb-6">+ {label}</p>
        <AnimatedHeadline text={title} className="font-semibold text-[var(--text-h1)] leading-[1.05] max-w-4xl" />
        <p className="mt-6 max-w-xl text-[var(--color-muted)] text-[var(--text-body)] leading-relaxed">{lede}</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
npm run build
git add src/components/sections/PageHero.tsx
git commit -m "feat(sections): shared PageHero primitive for inner pages"
```

### Task 5.2: /about

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Read current**

Run: `cat src/app/about/page.tsx`

- [ ] **Step 2: Rewrite using PageHero + SplitSection + existing Timeline component**

Replace the page content with:

```tsx
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SplitSection } from '@/components/sections/SplitSection';
import { Timeline } from '@/components/sections/Timeline';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { aboutContent } from '@/data/content';

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ ABOUT"
        label={aboutContent.hero.label ?? 'OUR STORY'}
        title={aboutContent.hero.title}
        lede={aboutContent.hero.description}
      />
      <Section>
        <Container>
          <SplitSection
            badge={aboutContent.mission.badge}
            title={aboutContent.mission.title}
            image={aboutContent.mission.image}
            imageAlt={aboutContent.mission.imageAlt}
            imageOverlay={aboutContent.mission.imageCaption}
          >
            <p>{aboutContent.mission.description}</p>
          </SplitSection>
        </Container>
      </Section>
      <TickerDivider />
      <Section>
        <Container>
          <Timeline items={aboutContent.timeline} />
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 3: Refactor Timeline component**

Open `src/components/sections/Timeline.tsx` and replace with:

```tsx
import { ScrollRevealStagger, staggerItemVariants } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

type Milestone = { year: string; title: string; description: string };

export function Timeline({ items }: { items: Milestone[] }) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--color-border)]" />
      <ScrollRevealStagger className="space-y-12">
        {items.map((m, i) => (
          <motion.div key={i} variants={staggerItemVariants} className="relative pl-16">
            <span className="absolute left-[18px] top-2 w-4 h-4 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-background)]" />
            <p className="mono-label text-[var(--color-accent)] mb-1">{m.year}</p>
            <h3 className="font-semibold text-[var(--text-h3)] mb-2">{m.title}</h3>
            <p className="text-[var(--color-muted)] max-w-xl">{m.description}</p>
          </motion.div>
        ))}
      </ScrollRevealStagger>
    </div>
  );
}
```

- [ ] **Step 4: Adapt data shape**

If `aboutContent.timeline` or `aboutContent.mission` fields differ, adapt the page/components. Do not modify `content.ts` schema.

- [ ] **Step 5: Build + commit**

```bash
npm run build
git add src/app/about/page.tsx src/components/sections/Timeline.tsx
git commit -m "feat(about): refactor to Terminal Industrial style"
```

### Task 5.3: /capabilities

**Files:**
- Modify: `src/app/capabilities/page.tsx`

- [ ] **Step 1: Read current**

Run: `cat src/app/capabilities/page.tsx`

- [ ] **Step 2: Rewrite**

```tsx
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Accordion } from '@/components/sections/Accordion';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { capabilitiesContent } from '@/data/content';

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ CAPABILITIES"
        label="WHAT WE BUILD"
        title={capabilitiesContent.hero.title}
        lede={capabilitiesContent.hero.description}
      />
      <TickerDivider />
      <Section>
        <Container>
          <Accordion items={capabilitiesContent.items} />
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 3: Adapt data keys** (if different, use the actual exported name from `content.ts`; do not modify `content.ts`).

- [ ] **Step 4: Build + commit**

```bash
npm run build
git add src/app/capabilities/page.tsx
git commit -m "feat(capabilities): refactor to Terminal Industrial style"
```

### Task 5.4: /industries

**Files:**
- Modify: `src/app/industries/page.tsx`

- [ ] **Step 1: Read current + note subroutes**

```bash
cat src/app/industries/page.tsx
ls src/app/industries
```

- [ ] **Step 2: Rewrite index**

```tsx
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { IndustryCards } from '@/components/sections/IndustryCard';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { industriesContent } from '@/data/content';

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ INDUSTRIES"
        label="SECTORS SERVED"
        title={industriesContent.hero.title}
        lede={industriesContent.hero.description}
      />
      <TickerDivider />
      <Section>
        <Container>
          <IndustryCards items={industriesContent.items} />
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 3: For each `industries/<slug>/page.tsx` subroute**, apply the same `PageHero` + `Section` + `SplitSection` pattern. Read each file first, preserve its data, replace the layout.

- [ ] **Step 4: Build + commit**

```bash
npm run build
git add src/app/industries
git commit -m "feat(industries): refactor index + subroutes"
```

### Task 5.5: /services

**Files:**
- Modify: `src/app/services/page.tsx`

- [ ] **Step 1: Read current**

Run: `cat src/app/services/page.tsx`

- [ ] **Step 2: Rewrite using Accordion or IndustryCards (whichever fits existing data)**

```tsx
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Accordion } from '@/components/sections/Accordion';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { servicesContent } from '@/data/content';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ SERVICES"
        label="ENGAGEMENT MODELS"
        title={servicesContent.hero.title}
        lede={servicesContent.hero.description}
      />
      <TickerDivider />
      <Section>
        <Container>
          <Accordion items={servicesContent.items} />
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add src/app/services/page.tsx
git commit -m "feat(services): refactor to Terminal Industrial style"
```

### Task 5.6: /what-we-build

**Files:**
- Modify: `src/app/what-we-build/page.tsx`

- [ ] **Step 1: Read + rewrite using PortfolioGrid + PageHero**

```tsx
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { portfolio } from '@/data/portfolio';
import { whatWeBuildContent } from '@/data/content';

export default function WhatWeBuildPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ WHAT WE BUILD"
        label="PORTFOLIO"
        title={whatWeBuildContent.hero.title}
        lede={whatWeBuildContent.hero.description}
      />
      <TickerDivider />
      <Section>
        <Container>
          <PortfolioGrid items={portfolio} />
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Adapt keys** (use actual export name from `content.ts` if different).

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add src/app/what-we-build/page.tsx
git commit -m "feat(what-we-build): refactor to Terminal Industrial style"
```

### Task 5.7: /contact

**Files:**
- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Rewrite**

```tsx
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ConsultationForm } from '@/components/sections/ConsultationForm';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { contactContent } from '@/data/content';

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ CONTACT"
        label="OPEN A LINE"
        title={contactContent.hero.title}
        lede={contactContent.hero.description}
      />
      <TickerDivider />
      <Section>
        <Container>
          <ConsultationForm title={contactContent.form.title} description={contactContent.form.description} />
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Adapt keys + commit**

```bash
npm run build
git add src/app/contact/page.tsx
git commit -m "feat(contact): refactor to Terminal Industrial style"
```

---

## Phase 6: Copy Polish (Light)

### Task 6.1: Headline + CTA tightening

**Files:**
- Modify: `src/data/content.ts`

- [ ] **Step 1: Read current content**

Run: `cat src/data/content.ts`

- [ ] **Step 2: Apply copy edits**

Edit the following fields in `content.ts` (only values, not keys). Be conservative — preserve any copy that's already sharp. Target changes:

- Home hero title: tighten to 5–9 words, sharp technical voice. Example: "Precision manufacturing for the next energy era." → "Hardware for the energy transition."
- Home hero CTA labels: "Get Started" → "Start a project". "Contact Us" → "Open a line".
- About hero title: 5–9 words.
- Capabilities hero title: "What we make, to spec, at scale."
- Industries hero title: short punchy version.
- Services hero title: "How we engage."
- Contact hero title: "Open a line."
- All CTAs replaced: "Learn more" → "View →", "Submit" → "Open a line →", "Get in touch" → "Transmit".

The exact wording should match the spirit of CimTech (do not invent product names). If a current headline is already good, leave it alone.

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add src/data/content.ts
git commit -m "feat(copy): sharpen headlines + CTAs sitewide"
```

---

## Phase 7: Audits + Polish

### Task 7.1: Reduced-motion audit

- [ ] **Step 1: Test in browser**

```bash
npm run dev
```

In Chrome DevTools → Rendering → Emulate CSS media feature `prefers-reduced-motion: reduce`. Reload each page. Confirm:
- Headlines show instantly (no color-wipe)
- Counts show final value immediately
- Marquees paused
- Scroll reveals static
- Accordion still expands (allowed as UI feedback)

- [ ] **Step 2: Fix any missed animations**

Any component still animating wraps its motion in a `useReducedMotion()` check and returns early / skips the animation.

- [ ] **Step 3: Commit if changes were needed**

```bash
git add -A
git commit -m "fix(a11y): honor prefers-reduced-motion everywhere"
```

### Task 7.2: Responsive audit

- [ ] **Step 1: Check breakpoints in dev**

Open each page at 320, 768, 1024, 1440, 2560 widths. Verify:
- Hero text does not clip
- Nav hamburger works on mobile
- Grids collapse properly
- Footer marquee stays readable
- Metrics band wraps 2×2 on mobile

- [ ] **Step 2: Fix any layout bugs inline**

Common fixes: add `flex-wrap`, adjust `grid-cols-*` breakpoint, fix `max-w` on long text.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "fix(layout): responsive polish"
```

### Task 7.3: Performance sweep

- [ ] **Step 1: Audit image usage**

Run: `grep -rn "<img " src/` — every match must be replaced with `next/image`.

- [ ] **Step 2: Run production build + Lighthouse**

```bash
npm run build
npm run start
```

Open Chrome DevTools → Lighthouse → Mobile → Performance. Note any scores below 85. Common fixes: `priority` prop on hero images, `loading="lazy"` on marquee content, font-display swap (next/font already handles).

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "perf: image + motion lazy-loading pass"
```

### Task 7.4: Final smoke test

- [ ] **Step 1: Click every link on every page**

Verify no 404s, no console errors, all hovers work, all CTAs route correctly.

- [ ] **Step 2: Verify build is green**

```bash
npm run build
npm run lint
npx tsc --noEmit
```

All three must pass.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final smoke test pass" --allow-empty
```

---

## Phase 8: Handoff

### Task 8.1: Push branch + open PR

- [ ] **Step 1: Push**

```bash
git push -u origin feature/terminal-industrial-refactor
```

- [ ] **Step 2: Open PR**

```bash
gh pr create --title "Terminal Industrial refactor: full visual overhaul" --body "$(cat <<'EOF'
## Summary
- Full visual refactor across all pages: dark forest + lime palette, Inter Tight + Geist Mono, sticky blur nav, Terminal-style hero with color-wipe headline
- New SVG logo (mark, wordmark, lockup)
- Shared animation primitives: ScrollReveal, AnimatedHeadline, CountUp, CursorGlow, Marquee, TickerDivider, ImageSpecimen
- All 9 homepage sections rebuilt
- All inner pages (/about, /capabilities, /industries, /services, /what-we-build, /contact) rebuilt
- Duotone image treatment via SVG filter
- Light copy polish on headlines + CTAs
- Full prefers-reduced-motion support

## Test plan
- [ ] Visually QA every page at 320/768/1024/1440/2560
- [ ] Verify reduced-motion mode degrades gracefully
- [ ] Lighthouse mobile > 85
- [ ] No console errors on any page

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

---

## Self-Review

**Spec coverage:**
- §1 tokens → Task 1.1 ✓
- §2 typography → Task 1.2 + globals.css ✓
- §3 logo → Tasks 1.3 + 1.4 ✓
- §4 nav + footer → Tasks 3.1 + 3.2 ✓
- §5 homepage sections (9) → Tasks 4.1–4.10 ✓
- §6 transitions/dividers → Tasks 2.1, 2.6 + wired in 4.10 ✓
- §7 inner pages → Tasks 5.1–5.7 ✓
- §8 animation inventory (15) → covered in Tasks 2.1–2.7 + per-section usage ✓
- §9 copy polish → Task 6.1 ✓
- §10 imagery strategy → Task 2.7 ImageSpecimen + DuotoneFilter 1.5 ✓
- §11 phases → plan is phased ✓
- §12 assumptions → respected (no new deps, no dark-mode toggle, Next 16 App Router) ✓

**Placeholder scan:** No "TBD", no "similar to above". One location uses "adapt data shape" language where the plan genuinely depends on reading `content.ts` — this is an intentional adaptation instruction with clear guidance, not a placeholder.

**Type consistency:** `primaryNav` imported consistently. `aboutContent`, `capabilitiesContent` etc. assumed — executor verifies via `cat content.ts` at each task and adapts.

**Risks flagged:**
- `content.ts` key names may not match my assumed names. Every inner page task includes a "read current" step to adapt.
- `Metric` shape may be `{ number: string }` rather than `{ value: number }`. Task 4.2 includes a verification step.
- `primaryNav` export name may differ. Task 3.1 step 3 checks and adapts.
