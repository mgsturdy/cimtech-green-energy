# CimTech Green Energy: Site Generalization Design

## Overview

Reposition the CimTech Green Energy website from a hydrogen-focused manufacturer to a broad, industry-agnostic manufacturing partner. The corporate identity stays "CimTech Green Energy" but the site tells a much bigger story: defense, commercial, consumer, and clean energy manufacturing. Rise Power (formerly Rise Hydrogen) becomes a featured sub-brand demonstrating depth in clean energy.

**Approach:** Strategic reshaping. Keep the existing design system, component library, and visual language. Change the content, restructure pages, and add an Industries page. The problem is positioning, not aesthetics.

## Navigation

**Current:** Home | About | Capabilities | Services | Products | Resources | Contact

**Proposed:** Home | About | Industries | Capabilities | Services | What We Build | Contact

- Products page renamed and reframed as "What We Build"
- Resources page killed, content redistributed
- Industries page added (new)
- Header CTA stays "Get a Quote"
- Phone number stays in nav

## Industry Verticals

Four verticals, presented with equal weight everywhere:

1. **Defense & Military** - Mil-spec components, ruggedized assemblies, low-volume high-precision
2. **Commercial & Industrial** - Production scaling, supply chain reliability, OEM partnerships
3. **Consumer Products** - NPI speed, rapid prototyping, DFM feedback, scaling from 10 to 10,000
4. **Clean Energy** - Fuel cell stacks, electrolyzers, hydrogen systems (Rise Power as proof of depth)

## Rise Power Sub-brand

Rise Power (formerly Rise Hydrogen) is the clean energy sub-brand. Presented as a featured sub-brand, not buried in a footer. It serves as proof that CimTech goes deep in a vertical - building brands, not just parts. Gets a spotlight section on the homepage and a case study section on "What We Build."

## Page-by-Page Design

### Homepage

Narrative arc: who we are → what industries we serve → how we work → proof of depth → get a quote.

1. **Hero** - "Your Manufacturing Partner. From Prototype to Production." with four industries listed below
2. **Metrics band** - 20+ Years | 60K+ Devices | 4 Industries | 10,000 sq ft
3. **About split** - Manufacturing partner story. Breadth + depth positioning. Not hydrogen-specific.
4. **Industries overview** (NEW) - 4 equal cards, one per vertical. Brief value prop each. Links to Industries page.
5. **Capabilities accordion** - Rewritten for multi-industry: NPI, prototyping, precision manufacturing, scaling, assembly, testing
6. **Client logos** - Unchanged
7. **Rise Power spotlight** (NEW, replaces products grid) - Sub-brand showcase. "Our clean energy brand." Link to Rise Power site.
8. **Consultation CTA** - "Get a Quote" with form
9. **Portfolio strip** - Reframed for multi-industry. Existing images with updated captions.

**Removed from homepage:** Products grid (moves to What We Build), Blog + Media section (thin content, not worth homepage space).

### Industries Page (New - /industries)

The "why us" page for each vertical. Structure per industry:

- **What we solve** - specific problems CimTech addresses in this vertical
- **Why CimTech** - differentiators for this buyer
- **Typical work** - concrete examples of deliverables

Layout: Each vertical is a full-width section with an image on one side and a content block on the other (alternating left/right). The content block contains three sub-sections: "What we solve," "Why CimTech," and "Typical work." Numbered badges (01-04) label each vertical. Reuses the SplitSection component pattern but with richer content blocks. Hero at top, CTA at bottom. Images will be general manufacturing/facility shots from existing assets initially.

Each vertical gets equal visual weight. Clean Energy section references Rise Power naturally.

### About Page (Expanded - /about)

Absorbs Team, History, and Media content from the killed Resources page.

1. **Hero** - "Your Manufacturing Partner" (founding year pulled from history data)
2. **Company story split** - Rewritten for broad manufacturing. Rise Power mentioned as proof of depth.
3. **History timeline** (absorbed from Resources) - Key milestones, industry expansions
4. **Pillars accordion** - Rewritten for broad manufacturing values (precision, partnership, scalability, innovation)
5. **Team section** (absorbed from Resources) - CEO Paul Ghotra and key leadership
6. **Key facts split** - Updated stats with multi-industry framing
7. **CTA** - "Get a Quote"

### Capabilities Page (/capabilities)

Same structure, rewritten content.

- Hero, overview, detailed accordion with nested sub-sections, equipment specs, CTA
- Categories rewritten: CNC Machining, Assembly & Integration, Testing & QA, Prototyping, Production Scaling, Engineering Support
- Each capability references examples across verticals where natural (not forced)
- Existing AccordionDetail component reused

### Services Page (/services)

Same structure, minor content changes.

- Hero, feature grid with numbered cards, CTA
- Most services already generalize: NPI, Repeat Manufacturing, DFM, Zero Inventory, Engineering
- "Electrolyzer Manufacturing" becomes broader (e.g., "Specialized Assembly" or "Complex System Integration")
- Copy tweaks to remove hydrogen-specific language

### What We Build Page (Replaces Products - /what-we-build)

Narrative arc: what we can build → proof we've built it → how deep we go → get a quote.

1. **Hero** - "From Concept to Production"
2. **Capability categories** - Alternating split sections:
   - Precision Components (CNC-machined parts, tight tolerances)
   - Full Assemblies (multi-component system integration)
   - Prototypes & NPI (rapid first articles, DFM feedback)
   - Production Scale (repeat manufacturing, zero-inventory, volume)
3. **Portfolio grid** (absorbed from Resources) - Visual grid of completed work. Existing portfolio images with reframed multi-industry captions. New images added as work comes in.
4. **Rise Power spotlight** - Featured sub-brand case study. "We didn't just manufacture clean energy products - we built the brand."
5. **CTA** - "Get a Quote"

### Contact Page (/contact)

No structural changes. Minor copy updates to remove hydrogen-specific language. Form, layout, and CTA stay as-is.

### Resources Page

Killed. Content redistributed:
- Team → About
- History → About
- Media → About (if real press coverage exists) or cut
- Portfolio → What We Build
- Blog → Cut (thin content, all hydrogen-specific)
- Careers → Footer link

## Content Strategy

All content remains in TypeScript data files (no CMS). The `src/data/content.ts` file gets a major rewrite for multi-industry framing. New data added for industries page.

**Imagery:** Existing hydrogen/manufacturing images are reused. They work as general manufacturing proof. No new photography required. Portfolio captions get updated. As new vertical work comes in, images can be added incrementally.

**Copy tone:** Confident, specific, not generic. Avoid buzzword soup. Lead with what CimTech actually does and has done. Use hydrogen/clean energy work as concrete proof, not the whole identity.

## Components

### Reused as-is
- HeroStatic, HeroHome (content changes only)
- MetricsBand (content changes only)
- SplitSection (used heavily on Industries and What We Build)
- Accordion, AccordionDetail (content changes only)
- FeatureGrid (content changes only)
- LogoBand (unchanged)
- CTASection, ConsultationForm (unchanged)
- ContactForm (minor copy)
- PortfolioGrid (content changes, moved to What We Build)
- All UI primitives (Button, Card, Badge, Container, Section, Prose)

### New components needed
- **IndustryCard** - For homepage industries overview section. 4 cards with icon/image, title, brief description, link.
- **SubBrandSpotlight** - Rise Power showcase section. Image, brief story, key stats, link to external site.
- **Timeline** - For About page history section (absorbed from Resources). Simple vertical timeline with milestones.

### Removed
- TabSection - Only used by Resources page, which is killed
- BlogList - Blog is cut from the site

### Route changes
- `/products` → `/what-we-build` (new route)
- `/industries` (new route)
- `/resources` (removed)

## Data file changes

### src/data/content.ts
Major rewrite. All page content updated for multi-industry positioning. New sections added for:
- Homepage industries overview cards
- Homepage Rise Power spotlight
- Industries page (4 verticals with what/why/typical structure)
- About page history timeline and team section
- What We Build capability categories and Rise Power case study
- Updated capabilities and services descriptions

### src/data/navigation.ts
- Update nav items: remove Resources, add Industries, rename Products to What We Build
- Update routes accordingly

### src/data/portfolio.ts
- Update captions for multi-industry framing
- Keep existing images

### src/data/blog.ts
- Can be deleted (blog removed from site)

## SEO considerations

- `/products` should redirect to `/what-we-build` (Next.js redirect in config)
- `/resources` should redirect to `/about` (closest equivalent)
- sitemap.ts updated with new routes
- Page metadata updated for multi-industry keywords

## Out of scope

- New photography or imagery
- Rise Power site updates
- CMS integration
- Blog/content marketing system
- E-commerce or product ordering
- Multi-language support
- Analytics integration
