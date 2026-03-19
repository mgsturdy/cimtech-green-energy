# CIMtech Green Energy Website Refresh - Design Spec

## Overview

Rebuild the CIMtech Green Energy website using the same tech stack as Rise Hydrogen (Next.js 16, Tailwind CSS 4, Framer Motion, TypeScript) with a shared architectural DNA but distinct visual identity. CIMtech gets a light theme with green accents, warmer typography, and manufacturing-forward aesthetics, while Rise Hydrogen maintains its dark/blue technical feel.

## Goals

- Modernize CIMtech's web presence to match the quality of Rise Hydrogen
- Preserve all existing content from the live site (cimtechgreenenergy.com)
- Create visual family resemblance between sister companies without them feeling like palette swaps
- Flatten navigation from deep nesting to rich single-page sections

## Tech Stack

- **Framework:** Next.js 16 with App Router, React 19, TypeScript
- **Styling:** Tailwind CSS 4 with @theme directive in globals.css
- **Animation:** Framer Motion (respects prefers-reduced-motion)
- **Fonts:** Plus Jakarta Sans (headings), Inter (body), Geist Mono (labels/badges)
- **Path alias:** `@/*` maps to `./src/*`

## Design System

### Color Palette

| Variable | Value | Purpose |
|----------|-------|---------|
| `--color-background` | #FAFBFC | Primary background |
| `--color-foreground` | #1A1A2E | Primary text |
| `--color-surface` | #FFFFFF | Card/section backgrounds |
| `--color-surface-elevated` | #F1F5F9 | Hover states |
| `--color-border` | #E2E8F0 | Borders and dividers |
| `--color-muted` | #64748B | Secondary text |
| `--color-accent` | #16A34A | Green accent (CTAs, highlights) |
| `--color-accent-hover` | #22C55E | Lighter green on hover |

### Typography

- **Headings:** Plus Jakarta Sans (Bold/Extra Bold) - geometric, modern, approachable
- **Body:** Inter (Regular/Medium) - shared with Rise for cross-site consistency
- **Labels/Badges:** Geist Mono - shared with Rise for numbered technical labels

Font CSS variable mapping (mirrors Rise's convention):
- `--font-sans` -> Plus Jakarta Sans (headings, via `font-sans` utility)
- `--font-sub` -> Inter (body text, via `font-sub` utility)
- `--font-mono` -> Geist Mono (labels/badges, via `font-mono` utility)

### Visual Language

- **Background pattern:** Subtle dot grid (radial-gradient, 28px spacing, 0.06 opacity)
- **Section labels:** Green horizontal line + monospace uppercase text
- **Numbered elements:** Geist Mono "01", "02" etc. in green
- **Cards:** White surface, 1px border, rounded-12px, hover elevation + green border
- **Buttons:**
  - Primary: `bg-accent text-white`, hover `bg-accent-hover`
  - Secondary: `border border-border text-foreground`, hover `border-accent text-accent`
  - Ghost: `text-muted`, hover `text-foreground`
  - Sizes: sm (py-2 px-3 text-sm), md (py-2.5 px-5 text-sm), lg (py-3.5 px-7 text-base)
- **Dark sections:** Hero and CTA use dark gradient (#1A1A2E to #0f2a1a) with dot grid overlay

### Shared with Rise Hydrogen

- Container: max-w-7xl, px-6 lg:px-8
- Section spacing: py-20 lg:py-28
- Grid gaps: gap-4, gap-6, gap-8, gap-12
- Card pattern: border + surface bg + hover elevation
- Badge pattern: accent line + monospace label
- Button variants: primary/secondary/ghost, sm/md/lg
- Body font (Inter) and mono font (Geist Mono)

### Different from Rise Hydrogen

- Light background vs dark
- Green accent vs blue
- Plus Jakarta Sans headings vs Aldrich
- Dot grid pattern vs line grid
- Green line accents vs corner brackets
- Manufacturing/clean energy aesthetic vs defense/tech

## Site Structure

### Navigation

Flat nav bar with 7 items (no dropdowns). Sticky header with backdrop blur on scroll.

Items: Home | About | Capabilities | Services | Products | Resources | Contact

Right side: phone number (monospace) + "Get a Quote" CTA button.

Mobile: hamburger menu with full-screen modal (same pattern as Rise).

### Pages

#### 1. Home (`/`)

Sections in order:
1. **Hero** - Dark background with hero-1.jpg, dot grid overlay, pulsing badge ("Canada's Top 10 Manufacturing Company"), headline, description, two CTAs (Get a Quote + Our Capabilities)
2. **Metrics Band** - Overlapping hero bottom, white card with 4 stats: 20+ Years, 60K+ Devices, 10K Sq Ft, Top 10
3. **About Split** - Text left (company description, key facts), CEO photo right with name overlay
4. **Capabilities Accordion** - Light gray background, centered heading, 6 numbered accordion items with expand/collapse (Framer Motion). Each shows short description + image when expanded (simple content model: text + optional image):
   - 01 Precision CNC Machining
   - 02 Injection Molding
   - 03 Fabrication & Welding
   - 04 3D Printing
   - 05 Sub-Assemblies
   - 06 Quality Assurance
5. **Products Grid** - 3 cards (Fuel Cell Stacks, Green Hydrogen, Electrolyzer) with images, descriptions, learn more links
6. **Client Logo Band** - Grayscale logos with color on hover, 7 logos
7. **Consultation CTA** - Dark rounded card with embedded ConsultationForm (Name, Email, Service Required dropdown, Message, Send button)
8. **Blog + Media** - Two-column: latest blog post (left) with green left border accent, media/downloads (right) with arrow links
9. **Portfolio Strip** - 6 portfolio images in a grid row
10. **Footer**

#### 2. About (`/about`)

1. **HeroStatic** - Page title + breadcrumb
2. **Company Story** - Full company description with mission/vision
3. **4 Pillars Accordion** - Same pattern as capabilities:
   - Advanced Technology (Industry 4.0, digital manufacturing, CNC, ERP)
   - On Time Delivery (ERP-based delivery management)
   - Expert Engineers (engineering services, 3D models to production)
   - Customer Support (comprehensive product support)
4. **Key Facts Split** - Image + stats (10K sq ft facility, 200% capacity increase, doubled footprint)
5. **Global Clients** - Walmart, Amazon, Home Depot, Renault/HYVIA, FedEx mentioned
6. **Vision CTA** - "Accelerating green energy products to make world a better place"

#### 3. Capabilities (`/capabilities`)

1. **HeroStatic**
2. **Overview Intro** - NPI in 14 days, service list, sub-assembly services
3. **Capabilities Detail Accordion** - Same 6 categories but with nested sub-sections. Uses an extended content model: each accordion item contains multiple sub-items rendered as a list or sub-accordion. This is a different variant from the homepage's simple accordion.
   - CNC Machining: 5-axis, turning, grinding, die/mold (4 sub-sections)
   - Injection Molding: low-volume, high-volume (2 sub-sections)
   - Fabrication & Welding: laser cutting, waterjet, sheet metal, welding (4 sub-sections)
   - 3D Printing: FDM, SLA, Metal (3 sub-sections)
   - Sub-Assemblies: heat staking, autoclaving, hydraulic press (3 sub-sections)
   - Quality Assurance: CMM, ISO9001, AS9100D, CGP (4 sub-sections)
4. **Equipment Specs Band** - Measuring instruments, secondary processes, assembly equipment, fabrication equipment
5. **CTA Section**

#### 4. Services (`/services`)

1. **HeroStatic**
2. **Services Feature Grid** - 7 cards in responsive grid (2-3 columns):
   - NPI - Prototype Development
   - NPI - Product Development
   - Repeat Manufacturing - Global Resources
   - Design for Manufacturing (DFM)
   - Zero Inventory Program
   - Electrolyzer & Fuel Cell Solutions
   - Engineering Development
3. Each card: numbered badge, title, description, link arrow
4. **CTA Section**

#### 5. Products (`/products`)

1. **HeroStatic**
2. **Three alternating SplitSections** (image/text alternating left/right):
   - Fuel Cell Stacks - PEM technology, stack composition, electrochemical process
   - Green Hydrogen - renewable production, role in low-carbon economy
   - Electrolyzer - PEM electrolysis, 80% efficiency, green vs blue vs gray hydrogen
3. **Consultation CTA**

#### 6. Resources (`/resources`)

1. **HeroStatic**
2. **Tabbed/Sectioned layout** with 6 tabs (hash-based routing, e.g. `/resources#blog` for direct linking and shareability):
   - **History** - Paul Ghotra's journey from 1988, founding story
   - **Team** - CEO profile with quote, facility description
   - **Blog** - Article list (4 posts with dates, titles, excerpts)
   - **Careers** - Mission statement + current openings (Sales & BD Rep)
   - **Portfolio** - Image grid using the 6 downloaded portfolio images with descriptive captions (HYDROGEN FUEL CELL, PVDF FUEL CELL PARTS, G110 FR4 END PLATES, FUEL CELL ASSEMBLY, PEM ELECTROLYZER, HYDROGEN FORKLIFT). Additional items can be text-only cards or added when more images are sourced.
   - **Media** - Downloads (Corporate Presentation, Brochure, Projects PDFs) + press contact info

#### 7. Contact (`/contact`)

1. **HeroStatic**
2. **Split Layout** - Contact form (left) + contact info (right)
   - Form: First Name, Last Name, Email, Phone, Address, Message
   - Info: Address, phone, email, hours (MON-FRI 8:30 AM - 5 PM)
   - Social media links
   - Optional embedded map

### Footer (all pages)

Dark background (#1A1A2E). 4-column grid:
1. Brand column: logo (inverted), address, phone, email, social icons
2. Quick Links: Home, About, Capabilities, Services
3. Products: Fuel Cell Stacks, Green Hydrogen, Electrolyzer
4. Resources: Blog, Careers, Portfolio, Media

Bottom bar: copyright + "Sister company of Rise Hydrogen"

## Component Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, Header/Footer)
│   ├── globals.css             # Tailwind theme (@theme directive)
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── capabilities/page.tsx
│   ├── services/page.tsx
│   ├── products/page.tsx
│   ├── resources/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── navigation/
│   │   ├── Header.tsx          # Sticky nav, mobile menu
│   │   └── Footer.tsx          # Multi-column footer
│   ├── sections/
│   │   ├── HeroHome.tsx        # Homepage hero with bg image + overlay
│   │   ├── HeroStatic.tsx      # Inner page heroes
│   │   ├── MetricsBand.tsx     # 4-stat metric display
│   │   ├── SplitSection.tsx    # Image + text side-by-side
│   │   ├── Accordion.tsx       # Expandable numbered items (Framer Motion)
   │   │   ├── AccordionDetail.tsx # Extended accordion with nested sub-sections
│   │   ├── FeatureGrid.tsx     # Card grid for services
│   │   ├── LogoBand.tsx        # Client logo carousel
│   │   ├── CTASection.tsx      # Dark CTA with headline + buttons (reusable)
│   │   ├── ConsultationForm.tsx # Embedded form in dark CTA (homepage)
│   │   ├── ContactForm.tsx     # Full contact form (contact page)
│   │   ├── BlogList.tsx        # Article list
│   │   ├── PortfolioGrid.tsx   # Image grid
│   │   └── TabSection.tsx      # Tabbed content (Resources)
│   └── ui/
│       ├── Button.tsx          # Primary/secondary/ghost
│       ├── Card.tsx            # Surface with hover
│       ├── Badge.tsx           # Line + monospace label
│       ├── Container.tsx       # max-w-7xl wrapper
│       ├── Section.tsx         # Vertical spacing wrapper
│       └── Prose.tsx           # Rich text wrapper (blog, long-form content)
└── data/
    ├── content.ts              # All page content
    ├── navigation.ts           # Nav structure
    ├── portfolio.ts            # Portfolio items
    └── blog.ts                 # Blog post data
```

## Data Strategy

All content stored in TypeScript data files (`src/data/`). No CMS or API calls for initial build. Content organized by page with typed interfaces. Same pattern as Rise Hydrogen.

Data files:
- `content.ts` - page content (home, about, capabilities, services, products, contact)
- `navigation.ts` - nav structure
- `portfolio.ts` - portfolio items with captions
- `blog.ts` - blog post data (title, date, excerpt, slug)

## Form Submission

Both the ConsultationForm (homepage) and ContactForm (contact page) submit to a Next.js API route at `/api/contact`. The API route sends email notifications. For initial build, use a simple implementation:

- `src/app/api/contact/route.ts` - POST handler
- Validates required fields server-side
- Sends notification email via Resend (or logs to console in development)
- Returns JSON success/error response
- Client-side: basic validation, loading state, success/error feedback

## Image Assets

All images downloaded from the current live site and stored in `public/images/`:
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` - Hero backgrounds
- `ceo.jpg` - Paul Ghotra portrait
- `logo.png`, `footer-logo.png` - Company logos
- `product-1.jpg` through `product-3.jpg` - Product card images
- `capability-1.jpg` through `capability-6.jpg` - Capability section images
- `client-logo-1.png` through `client-logo-7.png` - Client/partner logos
- `portfolio-1.jpg` through `portfolio-6.jpg` - Portfolio project images
- `about-card.jpg`, `blog-thumb.webp` - Supporting images
- `thomas-badge.png` - Thomas Supplier Tier V badge

## Responsive Breakpoints

- Mobile first approach
- Key breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile: stacked layouts, hamburger menu, single column grids
- Desktop: multi-column grids, horizontal accordion option

## Accessibility

- Semantic HTML (nav, section, article, main, footer)
- ARIA attributes for interactive components
- Focus-visible outlines on buttons/links
- Respects prefers-reduced-motion for Framer Motion animations
- Alt text on all images
- Color contrast meeting WCAG AA

## SEO & Metadata

- `robots.ts` and `sitemap.ts` in app root (same pattern as Rise)
- Per-page metadata via `generateMetadata` or static `metadata` export
- Title template: `%s | CIMtech Green Energy`
- Default description from homepage meta
- OG images can be added later; not blocking for initial build

## Out of Scope

- Investors section (dropped until content is ready)
- CMS integration (static data files for now)
- Authentication/login
- E-commerce functionality
- Blog pagination (static list for initial build)
- OG image generation (can be added post-launch)
