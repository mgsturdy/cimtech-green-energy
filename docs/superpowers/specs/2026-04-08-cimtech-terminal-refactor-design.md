# CimTech "Terminal Industrial" Refactor — Design Spec

**Date:** 2026-04-08
**Status:** Approved, pending implementation plan
**Reference:** https://terminal-industries.com/

## Goal

Full visual refactor of cimtech-green-energy site across all pages. Move from generic light-mode green marketing site to a dark-first, motion-rich, "ops console" aesthetic inspired by Terminal Industries — tuned to CimTech's green identity. Refactor typography, spacing, layout, logo, and imagery treatment throughout. Copy stays largely intact (light polish on headlines/CTAs only).

## Scope

- All pages: `/`, `/about`, `/capabilities`, `/contact`, `/industries`, `/services`, `/what-we-build`
- All shared chrome: nav, footer, section primitives
- `globals.css` token rewrite
- New SVG logo (wordmark + mark + lockup)
- Shared animation system with `prefers-reduced-motion` support
- Imagery treatment strategy (no new stock photography; duotone + specimen framing)
- Light copy polish on headlines + CTAs only

## 1. Brand Tokens

```css
@theme inline {
  /* Base — CimTech forest + lime */
  --color-background: #041F1A;
  --color-surface: #07281F;
  --color-surface-elevated: #0B332A;
  --color-border: rgba(255,255,255,0.12);
  --color-border-strong: rgba(255,255,255,0.22);
  --color-foreground: #F5F7F4;
  --color-muted: #A8B5AE;
  --color-subtle: #6B7A73;

  --color-accent: #A8FF1F;
  --color-accent-hover: #C4FF4D;
  --color-accent-dim: rgba(168,255,31,0.15);
  --color-warn: #FB6B3C;

  --font-sans: var(--font-inter-tight);
  --font-mono: var(--font-geist-mono);

  /* Fluid scale */
  --fs-display: clamp(3rem, 5.7vw, 7.5rem);
  --fs-h1: clamp(2.25rem, 4.2vw, 5rem);
  --fs-h2: clamp(1.75rem, 2.8vw, 3.25rem);
  --fs-h3: clamp(1.25rem, 1.6vw, 1.75rem);
  --fs-body: clamp(1rem, 1.05vw, 1.125rem);
  --fs-label: 0.75rem;

  /* Rhythm */
  --pad-x: clamp(1.25rem, 5.128vw, 6rem);
  --section-y: clamp(4rem, 9vw, 10rem);
}
```

## 2. Typography

- **Inter Tight** (400/500/600) via `next/font/google` — replaces Plus Jakarta
- **Geist Mono** (400/600) — kept for labels, nav, metrics, timestamps
- Tight tracking on headlines (`-0.02em` to `-0.035em`)
- Mono labels: UPPERCASE, `letter-spacing: 0.15em`, size 11–12px
- Body line-height 1.55

## 3. Logo Rework

- **Wordmark:** CIMTECH in Inter Tight 600, custom-kerned, `-0.04em` tracking
- **Mark:** stylized "C" as three stacked arcs (circuit traces / energy waves), lime stroke on forest, 24×24 viewBox
- **Deliverables:**
  - `public/logo/cimtech.svg` — full lockup
  - `public/logo/cimtech-mark.svg` — mark only (favicon source)
  - `public/logo/cimtech-wordmark.svg` — wordmark only
- **Animated:** mark draws in on mount via `stroke-dasharray` (0.8s)
- Replaces `public/images/logo.png` and `footer-logo.png`

## 4. Global Chrome

### Nav
- Sticky, `backdrop-blur(30px)`, bg `rgba(4,31,26,0.7)`, hairline bottom border
- Left: animated logo lockup. Right: mono nav links with swipe-in underline on hover
- Lime radial glow follows active link
- Mobile: full-screen overlay, hamburger → rotating/scaling X morph

### Footer
- Sticky parallax: main content lifts to reveal footer anchored behind
- Giant wordmark at `20vw`, lime outline stroke
- Mono grid: address, contact, status ticker (`OPERATIONAL • 43.65°N 79.38°W • EST 2001`)
- Marquee strip above footer: clients / capabilities / coordinates

## 5. Homepage Sections

### HeroHome
- 100vh, forest base, rotating hero-1/2/3.jpg background with 70% forest color-mix overlay
- Corner "+" markers (4 corners)
- Mono supra-label top-left: `CIMTECH // EST. 2001 // ONTARIO, CAN`
- Display headline: word-by-word color-wipe animation (gray → lime → white), staggered 80ms, 1s cubic-bezier
- Subhead muted
- Primary CTA: lime fill, sweep-fill on hover, arrow translate-x
- Bottom ticker: live mono scroll of capabilities
- Scroll indicator: animated lime dot bouncing inside hairline circle

### MetricsBand
- Full-width, hairline top/bottom
- 4 metrics in mono: small label → huge count-up number (1.2s ease-out on viewport enter) → blinking lime underscore
- Vertical hairline dividers
- Bg `--color-surface`

### SplitSection (About)
- 12-col, 7 text / 5 image
- Image in small framed "specimen" container (~440px) with hairline border, corner "+" markers, mono caption strip below
- Text: mono badge → display headline → body → inline link with swipe underline
- Reveal: text slides up 40px, image clip-path wipes left→right

### IndustryCards
- 2×2 or 3-col grid
- Each: forest bg, hairline border, small framed image (4:3 at ~360px), mono label, h3, body
- Hover: cursor-tracking lime radial glow (15rem blur), scale 1.02, border brightens, arrow translates
- "+" corners appear on hover

### Accordion (Capabilities)
- Full-width rows, hairline dividers, no bg
- Closed: mono index (`01 —`), name, right-aligned "+" toggle
- Open: smooth auto-height via framer-motion, body + small thumbnail
- Active row: lime left-border stripe
- Icon rotates 45° on open

### LogoBand
- Dual-row opposing marquee
- Logos desaturated → full color + lime glow on hover
- Pause on hover
- Mono label: `TRUSTED BY // 2001 – PRESENT`

### SubBrandSpotlight (Rise Power)
- Full-bleed, **no photo**
- Large mark, mono supra-label, display headline, CTA
- Background: animated gradient mesh (slow drift)

### ConsultationForm
- Card with hairline border, forest-elevated bg
- Inputs: transparent bg, bottom-border only, mono labels animate up on focus
- Submit: lime fill sweep-hover
- Left: large mono headline + status indicators (`● RESPONDING WITHIN 24H`)

### PortfolioGrid
- Abandon masonry. 4-col tight grid of small framed specimens (240×180 max)
- Type-forward: cards function like index cards
- Click → lightbox with framer-motion shared element transition

## 6. Section Transitions & Dividers

- **Ticker-tape divider** between major sections: mono scrolling text with timestamps, coordinates, status pings (`0x4F2A • 43.65°N • RUNTIME 23Y • ●`)
- Scroll-triggered: every section fades + translates 40px on viewport enter, staggered children at 60ms
- `whileInView` with `once: true`, 15% threshold

## 7. Inner Pages

Each page gets dedicated treatment, not generic template.

- **Shared chrome**: all pages get new nav, footer, tokens, typography
- **Page hero pattern**: mono breadcrumb / mono label / display title / 1-line lede, 60vh min
- **/about**: SplitSection + timeline (vertical hairline with lime dots for milestones, each animating in on scroll) + team grid with hover reveals
- **/capabilities**: full-width accordion deep-dive, each capability gets a small case-study specimen carousel
- **/industries**: hero + filterable cards (mono tag filters, lime active state) + per-industry deep sections
- **/services**: outcome-oriented; mono engagement-model table
- **/what-we-build**: portfolio-forward, alternating image/text with sticky side-captions
- **/contact**: big form + map block + status indicators + office coordinates

## 8. Animation Inventory

All respect `prefers-reduced-motion: reduce` (transforms killed, marquees paused, color-wipes instant).

| # | Animation | Where |
|---|---|---|
| 1 | Headline word-by-word color wipe | All page heros |
| 2 | Count-up metrics | MetricsBand |
| 3 | Scroll reveal (40px slide + fade, stagger) | All sections |
| 4 | Cursor-tracking lime radial glow | Cards, CTAs |
| 5 | Swipe-in underline | All text links |
| 6 | Infinite marquee (2-row opposing) | Logo band, ticker dividers |
| 7 | Sticky parallax footer | Global |
| 8 | Logo mark draw-in | Nav on mount |
| 9 | Hamburger morph | Mobile nav |
| 10 | Accordion expand (smooth auto-height) | Capabilities |
| 11 | Image clip-path wipe reveal | Split sections |
| 12 | Hover tilt on cards (6deg max) | Industry, portfolio |
| 13 | Button sweep-fill on hover | All primary CTAs |
| 14 | Scroll indicator bouncing lime dot | Hero |
| 15 | Gradient mesh drift | Sub-brand spotlight |

## 9. Copy Polish (Light)

- Rewrite hero tagline in Terminal's sharp voice
- Tighten page heros to 5–9 word display headlines
- Punch up CTAs: "Get a quote" → "Start a project", "Contact us" → "Open a line"
- Add mono supra-labels throughout (EST. 2001, coordinates, status)
- Body paragraphs untouched

## 10. Imagery Strategy (B + D)

### Problem
Current assets are undersized for the new design:
- `hero-*.jpg` 1600×808 — OK for letterboxed hero up to 1600px viewport
- `about-card.jpg` 445×319 — too small for full-width panel
- `capability-*.jpg` 362×309 — thumbnail sized
- `portfolio-*.jpg` **168×100** — unusable at any meaningful display size
- `logo.png` 236×72 — replaced by SVG

### Strategy: treat constraint as feature + use fewer, bigger images

**Treatment applied to all photos:**
- Duotone forest `#041F1A` → lime `#A8FF1F` via SVG `feColorMatrix` or CSS filter stack
- Grain overlay: tiled SVG noise at 8% opacity
- Halftone dither on hover (SVG filter, opacity fade)
- Framed as "technical specimens": hairline border + mono caption strip (`CAP_001.JPG // 43.65°N // 2024`)
- Display size capped to 2× source resolution

**Layout consequences:**
- PortfolioGrid: 4-col tight grid of small specimens (240×180 max) — no masonry
- IndustryCards: image shrinks to ~360px wide, 4:3, type-dominant layout
- SplitSection: image panel ~440px, floats in generous whitespace
- Accordion: thumbnails native size, fine as-is
- Hero: letterboxes above 1600px with forest bars (intentional, on-brand)
- SubBrandSpotlight: no photo — gradient mesh only
- LogoBand: client logos untouched

**Nano banana generation targets** (via Jessica over SSH, flagged `[NEEDS_GEN]` in code):
- SubBrandSpotlight ambient background (only if gradient mesh doesn't land)
- Contact page background texture specimen
- Optional: /about manifesto hero at 2560w

## 11. Implementation Phases

1. **Foundation** — tokens, fonts (next/font wiring), SVG logo assets, favicon, duotone filter utilities
2. **Global chrome** — Nav (desktop + mobile), Footer with parallax, ticker divider component, reduced-motion wrapper
3. **Shared primitives** — Section, Container, ScrollReveal, CursorGlow, ImageSpecimen, TickerDivider, Marquee
4. **Homepage sections** — refactor all 9 sections in order
5. **Inner pages** — about, capabilities, contact, industries, services, what-we-build
6. **Copy polish** — headlines + CTAs across all pages
7. **Reduced-motion audit**
8. **Responsive audit** — 320, 768, 1024, 1440, 2560
9. **Performance pass** — `next/image`, motion lazy-loading, font subsetting

## 12. Assumptions & Constraints

- `framer-motion` stays as motion library (already installed)
- No dark-mode toggle — site is dark-only
- No new stock photography purchased; existing assets treated
- Tailwind v4 `@theme inline` approach retained
- Next.js 16 App Router, Server Components by default, `'use client'` only where motion/interaction requires
- Copy untouched except headlines + CTAs (Option B scope)
