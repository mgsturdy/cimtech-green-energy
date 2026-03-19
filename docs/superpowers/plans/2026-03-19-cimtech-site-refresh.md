# CIMtech Green Energy Site Refresh - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the CIMtech Green Energy website as a modern Next.js 16 site with light theme, green accents, and shared architectural DNA with the Rise Hydrogen sister site.

**Architecture:** Next.js 16 App Router with static TypeScript data files, Tailwind CSS 4 for styling, Framer Motion for animations. Components split into ui/ (primitives), sections/ (page sections), and navigation/ (header/footer). All content in src/data/.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Resend (email)

**Spec:** `docs/superpowers/specs/2026-03-19-cimtech-site-refresh-design.md`

**Reference codebase:** Rise Hydrogen at `/Users/matthewgoulet/RiseHydrogen/`

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, Header, Footer, metadata
│   ├── globals.css             # Tailwind @theme, animations, body styles
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── capabilities/page.tsx
│   ├── services/page.tsx
│   ├── products/page.tsx
│   ├── resources/page.tsx
│   ├── contact/page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── api/contact/route.ts    # Form submission endpoint
├── components/
│   ├── navigation/
│   │   ├── Header.tsx          # Sticky nav, mobile hamburger menu
│   │   └── Footer.tsx          # Multi-column dark footer
│   ├── sections/
│   │   ├── HeroHome.tsx        # Homepage hero: bg image, overlay, badge, CTAs
│   │   ├── HeroStatic.tsx      # Inner page hero: title + optional description
│   │   ├── MetricsBand.tsx     # 4-stat band overlapping hero
│   │   ├── SplitSection.tsx    # Image + text side-by-side (reversible)
│   │   ├── Accordion.tsx       # Numbered expand/collapse items (Framer Motion)
│   │   ├── AccordionDetail.tsx # Extended accordion with nested sub-sections
│   │   ├── FeatureGrid.tsx     # Numbered card grid
│   │   ├── LogoBand.tsx        # Client logo row (grayscale -> color hover)
│   │   ├── CTASection.tsx      # Dark CTA with headline + buttons
│   │   ├── ConsultationForm.tsx # Dark CTA with embedded form
│   │   ├── ContactForm.tsx     # Full contact page form
│   │   ├── BlogList.tsx        # Article list with green border accent
│   │   ├── PortfolioGrid.tsx   # Image grid with captions
│   │   └── TabSection.tsx      # Hash-routed tabbed content
│   └── ui/
│       ├── Button.tsx          # Primary/secondary/ghost, sm/md/lg
│       ├── Card.tsx            # Border + surface + hover elevation
│       ├── Badge.tsx           # Green line + monospace label
│       ├── Container.tsx       # max-w-7xl wrapper
│       ├── Section.tsx         # py-20 lg:py-28 wrapper
│       └── Prose.tsx           # Rich text typography wrapper
└── data/
    ├── content.ts              # All page content organized by page
    ├── navigation.ts           # Nav items (flat, no children)
    ├── portfolio.ts            # Portfolio items with images + captions
    └── blog.ts                 # Blog post data
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.gitignore`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd "/Users/matthewgoulet/CimTech Green Energy"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-turbopack --import-alias "@/*"
```

Select defaults when prompted. This scaffolds the project with the right structure.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install framer-motion @tailwindcss/typography
```

- [ ] **Step 3: Verify the dev server starts**

```bash
npm run dev
```

Expected: Server starts on localhost:3000 with the default Next.js page.

- [ ] **Step 4: Clean up scaffolded files**

Remove the default page content from `src/app/page.tsx` (replace with a simple placeholder). Remove default styles from `src/app/globals.css`. Remove `src/app/favicon.ico` default if present.

- [ ] **Step 5: Copy image assets**

Images are already downloaded to `public/images/`. Verify they exist:

```bash
ls public/images/
```

Expected: 31 image files (hero-1/2/3.jpg, ceo.jpg, logo.png, footer-logo.png, product-1/2/3.jpg, capability-1/2/3/4/5/6.jpg, client-logo-1/2/3/4/5/6/7.png, portfolio-1/2/3/4/5/6.jpg, about-card.jpg, blog-thumb.webp, thomas-badge.png)

- [ ] **Step 6: Initialize git, create feature branch, and commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js 16 project with dependencies"
git checkout -b feature/site-refresh
```

Note: Initial commit on main is fine for scaffolding. All subsequent work happens on `feature/site-refresh`.

---

### Task 2: Theme & Global Styles

**Files:**
- Create: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Write globals.css with CIMtech theme**

```css
@import "tailwindcss";

@theme inline {
  --color-background: #FAFBFC;
  --color-foreground: #1A1A2E;
  --color-surface: #FFFFFF;
  --color-surface-elevated: #F1F5F9;
  --color-border: #E2E8F0;
  --color-muted: #64748B;
  --color-accent: #16A34A;
  --color-accent-hover: #22C55E;
  --font-sans: var(--font-plus-jakarta-sans);
  --font-sub: var(--font-inter);
  --font-mono: var(--font-geist-mono);
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
```

- [ ] **Step 2: Write layout.tsx with fonts**

```tsx
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Geist_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'CIMtech Green Energy — Hydrogen Fuel Cell & Electrolyzer Manufacturing',
    template: '%s | CIMtech Green Energy',
  },
  description:
    'Award-winning hydrogen fuel cell and electrolyzer manufacturing company in Canada. Top 10 green energy manufacturer serving the USA, Canada & Europe.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${geistMono.variable} font-sub antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
```

Note: `font-sub` (Inter) as default body class. This is deliberately inverted from Rise Hydrogen, which uses `font-sans` on the body. CIMtech uses Inter (body-friendly) as default, with `font-sans` (Plus Jakarta Sans) applied explicitly on headings. Add a comment in the actual file explaining this. Header/Footer added in Task 5.

- [ ] **Step 3: Write placeholder page.tsx**

```tsx
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="font-sans text-4xl font-bold">CIMtech Green Energy</h1>
    </div>
  );
}
```

- [ ] **Step 4: Verify fonts and theme render correctly**

```bash
npm run dev
```

Visit localhost:3000. Verify: Plus Jakarta Sans heading renders, light background (#FAFBFC), dark text (#1A1A2E).

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx src/app/page.tsx
git commit -m "feat: add CIMtech theme and font configuration"
```

---

### Task 3: UI Primitives

**Files:**
- Create: `src/components/ui/Button.tsx`, `Card.tsx`, `Badge.tsx`, `Container.tsx`, `Section.tsx`, `Prose.tsx`

- [ ] **Step 1: Create Container.tsx**

```tsx
import { type ReactNode } from 'react';

export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Create Section.tsx**

```tsx
import { type ReactNode } from 'react';

export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}
```

- [ ] **Step 3: Create Button.tsx**

```tsx
import Link from 'next/link';
import { type ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover active:bg-accent/90',
    secondary:
      'border border-border text-foreground hover:border-accent hover:text-accent',
    ghost: 'text-muted hover:text-foreground',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
```

- [ ] **Step 4: Create Card.tsx**

```tsx
import Link from 'next/link';
import { type ReactNode } from 'react';

export function Card({
  children,
  href,
  className = '',
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const base = `border border-border bg-surface rounded-xl p-6 lg:p-8 ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} block transition-all duration-300 hover:border-accent/30 hover:bg-surface-elevated group`}
      >
        {children}
      </Link>
    );
  }

  return <div className={base}>{children}</div>;
}
```

- [ ] **Step 5: Create Badge.tsx**

```tsx
import { type ReactNode } from 'react';

export function Badge({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent font-mono ${className}`}
    >
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}
```

- [ ] **Step 6: Create Prose.tsx**

```tsx
import { type ReactNode } from 'react';

export function Prose({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`prose prose-slate max-w-none text-muted leading-relaxed [&_strong]:text-foreground [&_a]:text-accent [&_a:hover]:text-accent-hover [&_h2]:font-sans [&_h2]:text-foreground [&_h3]:font-sans [&_h3]:text-foreground [&_li]:marker:text-accent ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 7: Verify all primitives render**

Update `src/app/page.tsx` temporarily to import and render each primitive. Verify they render on localhost:3000.

- [ ] **Step 8: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add UI primitives (Button, Card, Badge, Container, Section, Prose)"
```

---

### Task 4: Data Files

**Files:**
- Create: `src/data/navigation.ts`, `src/data/content.ts`, `src/data/portfolio.ts`, `src/data/blog.ts`

- [ ] **Step 1: Create navigation.ts**

```tsx
export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const contactInfo = {
  phone: '+1 (604) 575-8853',
  phoneDisplay: '604-575-8853',
  email: 'info@cimtech.green',
  address: '5 - 17942 55th Ave, Surrey, BC, Canada V3S 6C8',
  hours: 'MON - FRI: 8:30 AM - 5 PM',
  social: {
    facebook: 'https://www.facebook.com/CIMtechGreen-100166986037085',
    twitter: 'https://twitter.com/CIMtechGreen',
    linkedin: 'https://www.linkedin.com/company/cimtechgreenenergy',
    youtube: 'https://www.youtube.com/@CIMtechGreenEnergy',
    instagram: 'https://www.instagram.com/cimtechgreenenergy/',
  },
};
```

- [ ] **Step 2: Create content.ts (interfaces)**

This is the largest file in the project. Start with the TypeScript interfaces:

```tsx
// src/data/content.ts

export interface HeroContent {
  badge: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  backgroundImage: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface AccordionItem {
  number: string;
  title: string;
  description: string;
  image?: string;
}

export interface AccordionDetailItem {
  number: string;
  title: string;
  overview: string;
  subSections: { title: string; description: string }[];
  image?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface ProductItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

// Home page
export const homeContent = {
  hero: { badge: "Canada's Top 10 Manufacturing Company", headline: '...', /* etc */ } as HeroContent,
  metrics: [ { value: '20+', label: 'Years Experience' }, /* etc */ ] as Metric[],
  about: { badge: 'About CIMtech', title: '...', description: '...', image: '/images/ceo.jpg' },
  capabilities: [ /* 6 AccordionItems */ ] as AccordionItem[],
  products: [ /* 3 ProductItems */ ] as ProductItem[],
  clientLogos: [ { src: '/images/client-logo-1.png', alt: 'Client' }, /* 7 total */ ],
  cta: { title: 'Get Your Free Consultation & Quote', description: '...' },
};

// About page
export const aboutContent = {
  story: '...',  // Full company description paragraphs
  pillars: [ /* 4 PillarItems with full text */ ] as PillarItem[],
  keyFacts: { title: '...', stats: [ /* ... */ ], image: '/images/about-card.jpg' },
  vision: '...',
};

// Capabilities page
export const capabilitiesContent = {
  overview: '...',
  capabilities: [ /* 6 AccordionDetailItems with full sub-sections */ ] as AccordionDetailItem[],
  equipment: { measuring: '...', secondary: '...', assembly: '...', fabrication: '...' },
};

// Services page
export const servicesContent = {
  services: [ /* 7 ServiceItems */ ] as ServiceItem[],
};

// Products page
export const productsContent = {
  products: [ /* 3 ProductItems with full descriptions */ ] as ProductItem[],
};

// Resources page
export const resourcesContent = {
  history: '...',  // Paul Ghotra's story
  team: { name: 'Paul Ghotra', title: 'Founder & CEO', quote: '...', facilityDescription: '...' },
  careers: { mission: '...', openings: [{ title: 'Sales & Business Development Representative' }] },
  media: { description: '...', downloads: [{ label: 'Corporate Presentation' }, { label: 'Brochure' }, { label: 'Projects' }] },
};

// Contact page
export const contactContent = {
  heading: 'Contact Us - Get in Touch',
  description: 'Have a question about products or partnering? Need a quote? Simply complete the form and someone will be in touch!',
};
```

Fill in all `'...'` values with the full text content from the spec document (`docs/superpowers/specs/2026-03-19-cimtech-site-refresh-design.md`) and the original live site content extraction. This step will take longer than typical steps due to the volume of text content.

- [ ] **Step 2b: Verify content.ts compiles**

```bash
npx tsc --noEmit src/data/content.ts
```

Expected: No type errors.

- [ ] **Step 3: Create portfolio.ts**

```tsx
export interface PortfolioItem {
  image: string;
  caption: string;
}

export const portfolio: PortfolioItem[] = [
  { image: '/images/portfolio-1.jpg', caption: 'Hydrogen Fuel Cell' },
  { image: '/images/portfolio-2.jpg', caption: 'PVDF Fuel Cell Parts' },
  { image: '/images/portfolio-3.jpg', caption: 'G110 FR4 End Plates' },
  { image: '/images/portfolio-4.jpg', caption: 'Fuel Cell Assembly' },
  { image: '/images/portfolio-5.jpg', caption: 'PEM Electrolyzer' },
  { image: '/images/portfolio-6.jpg', caption: 'Hydrogen Forklift' },
];
```

- [ ] **Step 4: Create blog.ts**

```tsx
export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'From Concept to Production: How CIMtech Supports Clients at Every Stage of Manufacturing',
    date: 'Aug 11, 2025',
    excerpt: 'In the fast-paced green energy sector, moving from an idea to full-scale production is no small feat...',
    slug: 'concept-to-production',
  },
  {
    title: 'Exploring the Right Partner Selection for Fuel Cell Manufacturing',
    date: 'Jul 15, 2025',
    excerpt: 'Choosing the right manufacturing partner for fuel cell components is critical to success...',
    slug: 'partner-selection',
  },
  {
    title: 'CNC Machining Unveiled: From Raw Material to Precision Parts',
    date: 'Jun 20, 2025',
    excerpt: 'Understanding the journey of raw material through CNC machining to become precision components...',
    slug: 'cnc-machining-unveiled',
  },
  {
    title: 'Materials Matter: A CNC Machinist\'s Expertise',
    date: 'May 10, 2025',
    excerpt: 'The choice of material is one of the most important decisions in CNC machining...',
    slug: 'materials-matter',
  },
];
```

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: add data files (navigation, content, portfolio, blog)"
```

---

### Task 5: Header & Footer Navigation

**Files:**
- Create: `src/components/navigation/Header.tsx`, `src/components/navigation/Footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Header.tsx**

Sticky nav with backdrop blur. Logo left, nav links center, phone + CTA right. Mobile hamburger with full-screen modal. Uses `navigation` data. Follow Rise's Header pattern but adapted for flat nav (no dropdowns). Mark as `'use client'` for scroll state and mobile menu toggle.

Key implementation details:
- `useState` for mobile menu open/closed
- `useEffect` for scroll detection (add backdrop blur after scrolling)
- Logo: `<Image src="/images/logo.png" />`
- Nav links: map over `navigation` array
- Active state: compare `pathname` via `usePathname()`
- Mobile: full-screen overlay with close button
- Right side: phone in `font-mono text-muted`, green "Get a Quote" Button

- [ ] **Step 2: Create Footer.tsx**

Dark footer (#1A1A2E). 4-column grid. Uses `contactInfo` and `navigation` data. Follow Rise's Footer pattern.

Key implementation details:
- Dark background with `bg-[#1A1A2E]` and `text-[#94A3B8]`
- Column 1: logo (inverted filter), address, phone, email, social icons
- Column 2: Quick Links (Home, About, Capabilities, Services)
- Column 3: Products (Fuel Cell Stacks, Green Hydrogen, Electrolyzer)
- Column 4: Resources (Blog, Careers, Portfolio, Media)
- Bottom bar: copyright + "Sister company of Rise Hydrogen"
- Social icons: bordered squares with hover green accent

- [ ] **Step 3: Add Header and Footer to layout.tsx**

```tsx
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
// ... existing imports

// In the body:
<Header />
<main>{children}</main>
<Footer />
```

- [ ] **Step 4: Verify nav renders on all routes**

```bash
npm run dev
```

Check localhost:3000 - header and footer visible. Test mobile hamburger by resizing browser.

- [ ] **Step 5: Commit**

```bash
git add src/components/navigation/ src/app/layout.tsx
git commit -m "feat: add Header and Footer navigation components"
```

---

### Task 6: Homepage Sections (Part 1 - Hero through Capabilities)

**Files:**
- Create: `src/components/sections/HeroHome.tsx`, `MetricsBand.tsx`, `SplitSection.tsx`, `Accordion.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create HeroHome.tsx**

Homepage hero with background image, dark overlay, dot grid pattern, pulsing badge, headline, description, two CTA buttons. Reference the mockup HTML for exact structure.

Key implementation details:
- Background: `<Image src="/images/hero-1.jpg" fill />` with dark gradient overlay
- Dot grid: CSS radial-gradient pattern at 0.06 opacity
- Badge: green border pill with pulsing dot + monospace text
- Headline: `font-sans text-5xl font-extrabold text-white`
- Description: `text-[#94A3B8]`
- Two buttons: primary "Get a Quote" + secondary (ghost white border) "Our Capabilities"
- Min height: `min-h-[520px]` with flex center

- [ ] **Step 2: Create MetricsBand.tsx**

White card overlapping hero bottom with 4 stats.

```tsx
type Metric = { value: string; label: string };

export function MetricsBand({ metrics }: { metrics: Metric[] }) {
  // White card, rounded-xl, border, negative margin-top
  // Grid 4 columns, each: value in font-sans text-4xl font-extrabold text-accent
  // Label in font-mono text-xs uppercase text-muted
  // Dividers between items
}
```

- [ ] **Step 3: Create SplitSection.tsx**

Reusable image + text side-by-side with optional reverse.

```tsx
type SplitSectionProps = {
  badge?: string;
  title: string;
  children: ReactNode;  // text content
  image: string;
  imageAlt: string;
  reverse?: boolean;
  imageOverlay?: string;  // optional text overlay on image
};
```

Grid 2 columns, `gap-12`, image with `rounded-xl overflow-hidden`, optional gradient overlay at bottom for caption.

- [ ] **Step 4: Create Accordion.tsx**

Numbered expandable items with Framer Motion.

```tsx
'use client';

type AccordionItem = {
  number: string;
  title: string;
  description: string;
  image?: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  // useState for activeIndex
  // Map items, each with header (number + title + toggle icon)
  // Active item: border-accent, expanded body with AnimatePresence
  // Body: grid 2 cols (text left, image right)
  // Framer Motion: initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
}
```

- [ ] **Step 5: Wire up homepage Part 1**

Update `src/app/page.tsx` to import and render: HeroHome, MetricsBand, SplitSection (about preview with CEO photo), Accordion (capabilities). Use content from `src/data/content.ts`.

- [ ] **Step 6: Verify homepage renders sections 1-4**

```bash
npm run dev
```

Visit localhost:3000. Verify hero with image, metrics overlapping, about split with CEO, capabilities accordion.

- [ ] **Step 7: Commit**

```bash
git add src/components/sections/HeroHome.tsx src/components/sections/MetricsBand.tsx src/components/sections/SplitSection.tsx src/components/sections/Accordion.tsx src/app/page.tsx
git commit -m "feat: add homepage hero, metrics, about split, capabilities accordion"
```

---

### Task 7: Homepage Sections (Part 2 - Products through Footer)

**Files:**
- Create: `src/components/sections/FeatureGrid.tsx`, `LogoBand.tsx`, `ConsultationForm.tsx`, `CTASection.tsx`, `BlogList.tsx`, `PortfolioGrid.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create FeatureGrid.tsx**

Reusable numbered card grid for products and services.

```tsx
type FeatureItem = {
  number?: string;
  title: string;
  description: string;
  image?: string;
  href?: string;
};

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: FeatureItem[];
  columns?: 2 | 3;
}) {
  // Grid with responsive columns
  // Each card: border, rounded-xl, image top (if provided), body with title + desc + link arrow
  // Hover: border-accent, translateY(-2px), subtle shadow
}
```

- [ ] **Step 2: Create LogoBand.tsx**

```tsx
export function LogoBand({
  logos,
  label,
}: {
  logos: { src: string; alt: string }[];
  label?: string;
}) {
  // Centered row of logos
  // Each: grayscale(100%) opacity-60, hover: grayscale(0%) opacity-100
  // Label above in font-mono uppercase text-accent
}
```

- [ ] **Step 3: Create CTASection.tsx**

Reusable dark CTA with headline and buttons (no form).

```tsx
export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  // Dark gradient background, rounded-2xl, dot grid overlay
  // Centered text + buttons
}
```

- [ ] **Step 4: Create ConsultationForm.tsx**

Dark CTA section with embedded form (homepage specific).

```tsx
'use client';

export function ConsultationForm() {
  // Dark gradient background, rounded-2xl, dot grid overlay
  // Grid 2 cols: text left, form right
  // Form: Name, Email, Service Required (select), Message (textarea), Submit button
  // Client-side state for form values, loading, success/error
  // Submits to /api/contact
}
```

- [ ] **Step 5: Create BlogList.tsx**

```tsx
import { type BlogPost } from '@/data/blog';

export function BlogList({ posts, limit }: { posts: BlogPost[]; limit?: number }) {
  // Green left border accent on each post
  // Date in font-mono, title as h3, excerpt, "Read More" link arrow
}
```

- [ ] **Step 6: Create PortfolioGrid.tsx**

```tsx
import { type PortfolioItem } from '@/data/portfolio';

export function PortfolioGrid({ items, columns = 6 }: { items: PortfolioItem[]; columns?: number }) {
  // CSS grid, rounded-xl overflow-hidden
  // Each: Image with object-cover, hover overlay with caption
}
```

- [ ] **Step 7: Wire up homepage Part 2**

Add to `src/app/page.tsx`: FeatureGrid (3 product cards), LogoBand (7 client logos), ConsultationForm, BlogList (1 post) + media card side by side, PortfolioGrid.

- [ ] **Step 8: Verify complete homepage**

```bash
npm run dev
```

Visit localhost:3000. Scroll through entire homepage. Verify all 9 sections render correctly.

- [ ] **Step 9: Commit**

```bash
git add src/components/sections/ src/app/page.tsx
git commit -m "feat: complete homepage with all sections"
```

---

### Task 8: Inner Page Hero + About Page

**Files:**
- Create: `src/components/sections/HeroStatic.tsx`, `src/app/about/page.tsx`

- [ ] **Step 1: Create HeroStatic.tsx**

Simple hero for inner pages with title and optional description.

```tsx
export function HeroStatic({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  // Light gray background (bg-surface-elevated)
  // Container + Section with reduced padding (py-16 lg:py-20)
  // Title: font-sans text-4xl font-bold
  // Description: text-muted max-w-2xl
}
```

- [ ] **Step 2: Create About page**

`src/app/about/page.tsx` with:
1. HeroStatic ("About CIMtech Green Energy")
2. Company story in Prose wrapper (full text from content.ts)
3. Accordion with 4 pillars (Advanced Technology, On Time Delivery, Expert Engineers, Customer Support)
4. SplitSection for key facts (image + stats)
5. Global clients mention
6. CTASection with vision statement

Add page metadata: `export const metadata = { title: 'About' }`.

- [ ] **Step 3: Verify About page**

Visit localhost:3000/about. Verify all sections render with real content.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/HeroStatic.tsx src/app/about/
git commit -m "feat: add HeroStatic component and About page"
```

---

### Task 9: Capabilities Page

**Files:**
- Create: `src/components/sections/AccordionDetail.tsx`, `src/app/capabilities/page.tsx`

- [ ] **Step 1: Create AccordionDetail.tsx**

Extended accordion for capabilities detail page. Each item contains multiple sub-sections.

```tsx
'use client';

type SubSection = {
  title: string;
  description: string;
};

type AccordionDetailItem = {
  number: string;
  title: string;
  overview: string;
  subSections: SubSection[];
  image?: string;
};

export function AccordionDetail({ items }: { items: AccordionDetailItem[] }) {
  // Same expand/collapse as Accordion but body layout is different:
  // Left column: overview text + sub-section list (each with bold title + description)
  // Right column: image
  // Framer Motion animations
}
```

- [ ] **Step 2: Create Capabilities page**

`src/app/capabilities/page.tsx` with:
1. HeroStatic
2. Overview intro paragraph (NPI in 14 days, service list)
3. AccordionDetail with 6 capabilities (each with full sub-sections from content.ts)
4. Equipment specs band (4-column grid of spec categories)
5. CTASection

All content from the capabilities section of the spec/content.ts.

- [ ] **Step 3: Verify Capabilities page**

Visit localhost:3000/capabilities. Expand each accordion item. Verify sub-sections render.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/AccordionDetail.tsx src/app/capabilities/
git commit -m "feat: add Capabilities page with detailed accordion"
```

---

### Task 10: Services Page

**Files:**
- Create: `src/app/services/page.tsx`

- [ ] **Step 1: Create Services page**

`src/app/services/page.tsx` with:
1. HeroStatic
2. FeatureGrid with 7 service cards (numbered 01-07, each with title + description)
3. CTASection

Uses existing FeatureGrid component. All content from services section of content.ts.

- [ ] **Step 2: Verify Services page**

Visit localhost:3000/services. Verify 7 cards in responsive grid.

- [ ] **Step 3: Commit**

```bash
git add src/app/services/
git commit -m "feat: add Services page"
```

---

### Task 11: Products Page

**Files:**
- Create: `src/app/products/page.tsx`

- [ ] **Step 1: Create Products page**

`src/app/products/page.tsx` with:
1. HeroStatic
2. Three alternating SplitSections:
   - Fuel Cell Stacks (image left, text right)
   - Green Hydrogen (text left, image right - reverse)
   - Electrolyzer (image left, text right)
3. ConsultationForm CTA

Uses existing SplitSection with `reverse` prop. Full technical descriptions from content.ts.

- [ ] **Step 2: Verify Products page**

Visit localhost:3000/products. Verify alternating layout.

- [ ] **Step 3: Commit**

```bash
git add src/app/products/
git commit -m "feat: add Products page with alternating split sections"
```

---

### Task 12: Resources Page

**Files:**
- Create: `src/components/sections/TabSection.tsx`, `src/app/resources/page.tsx`

- [ ] **Step 1: Create TabSection.tsx**

Hash-routed tabbed content component.

```tsx
'use client';

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

export function TabSection({ tabs }: { tabs: Tab[] }) {
  // usePathname + useEffect to read window.location.hash on mount
  // useState for activeTab, default to first tab or hash value
  // Tab row: horizontal buttons, active has border-b-2 border-accent text-accent
  // Content area below tabs
  // On tab click: update hash via window.history.replaceState
  // Framer Motion crossfade for content transitions
}
```

- [ ] **Step 2: Create Resources page**

`src/app/resources/page.tsx` with:
1. HeroStatic
2. TabSection with 6 tabs:
   - History: Prose content (Paul Ghotra's story)
   - Team: CEO profile with quote + facility description
   - Blog: BlogList with all 4 posts
   - Careers: Mission statement + open positions
   - Portfolio: PortfolioGrid
   - Media: Download links + press contact info

- [ ] **Step 3: Verify Resources page**

Visit localhost:3000/resources. Click each tab. Verify hash routing works (localhost:3000/resources#blog).

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/TabSection.tsx src/app/resources/
git commit -m "feat: add Resources page with hash-routed tabs"
```

---

### Task 13: Contact Page + API Route

**Files:**
- Create: `src/components/sections/ContactForm.tsx`, `src/app/contact/page.tsx`, `src/app/api/contact/route.ts`

- [ ] **Step 1: Create ContactForm.tsx**

Full contact form for the contact page (different from ConsultationForm).

```tsx
'use client';

export function ContactForm() {
  // Grid 2 cols: form left, info right
  // Form: First Name, Last Name, Email, Phone, Address, Message
  // All inputs styled with border-border, rounded-md, focus:border-accent
  // Submit button (primary)
  // Client-side validation for required fields
  // Submits to /api/contact
  // Right side: address, phone, email, hours, social links
}
```

- [ ] **Step 2: Create API route**

```tsx
// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required' },
      { status: 400 }
    );
  }

  // In production, send via Resend/SendGrid
  // For now, log to console
  console.log('Contact form submission:', body);

  return NextResponse.json({ success: true });
}
```

- [ ] **Step 3: Create Contact page**

`src/app/contact/page.tsx` with:
1. HeroStatic
2. ContactForm component

Note: Embedded map is out of scope for initial build. Can be added later with Google Maps embed or Mapbox.

- [ ] **Step 4: Verify Contact page and form submission**

Visit localhost:3000/contact. Fill out form, submit. Check terminal for console.log output.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/ContactForm.tsx src/app/contact/ src/app/api/
git commit -m "feat: add Contact page with form and API route"
```

---

### Task 14: SEO, Robots, Sitemap & Final Polish

**Files:**
- Create: `src/app/robots.ts`, `src/app/sitemap.ts`
- Modify: all page files (add metadata exports)

- [ ] **Step 1: Create robots.ts**

```tsx
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.cimtechgreenenergy.com/sitemap.xml',
  };
}
```

- [ ] **Step 2: Create sitemap.ts**

```tsx
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cimtechgreenenergy.com';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/capabilities`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];
}
```

- [ ] **Step 3: Add per-page metadata to all pages**

Each page file should export metadata with appropriate title and description. Example:

```tsx
// src/app/about/page.tsx
export const metadata = {
  title: 'About',
  description: 'CIMtech Green Energy is a technological firm specializing in hydrogen fuel cell & electrolyzer manufacturing, offering assemblies since 2006.',
};
```

Do this for: about, capabilities, services, products, resources, contact.

- [ ] **Step 4: Add .superpowers to .gitignore**

```bash
echo ".superpowers/" >> .gitignore
```

- [ ] **Step 5: Run build to verify no errors**

```bash
npm run build
```

Expected: Build completes successfully with no TypeScript or build errors.

- [ ] **Step 6: Run lint**

```bash
npm run lint
```

Fix any lint issues.

- [ ] **Step 7: Final commit**

```bash
git add src/app/robots.ts src/app/sitemap.ts src/app/about/page.tsx src/app/capabilities/page.tsx src/app/services/page.tsx src/app/products/page.tsx src/app/resources/page.tsx src/app/contact/page.tsx .gitignore
git commit -m "feat: add SEO files, per-page metadata, final polish"
```

---

## Execution Notes

- **Content.ts is the largest file.** Task 4 Step 2 will take the most time. All text content from the live site extraction should be placed there. Type it carefully with proper interfaces.
- **Image paths** all use `/images/` prefix (Next.js serves from `public/`).
- **Framer Motion** is only needed in `Accordion.tsx`, `AccordionDetail.tsx`, `TabSection.tsx`, and mobile menu in `Header.tsx`. Mark these `'use client'`.
- **Rise Hydrogen reference**: When implementing any component, check the Rise equivalent at `/Users/matthewgoulet/RiseHydrogen/src/` for patterns.
- **ConsultationForm vs ContactForm**: ConsultationForm is the dark embedded form on the homepage. ContactForm is the full form on the contact page with split layout.
