# CimTech Site Generalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the CimTech Green Energy website from hydrogen-focused to a broad manufacturing partner across defense, commercial, consumer, and clean energy verticals.

**Architecture:** Strategic reshaping of existing Next.js 16 site. Keep the design system, component library, and visual language. Rewrite content, restructure navigation (kill Resources, add Industries, rename Products to What We Build), add 3 new components (IndustryCard, SubBrandSpotlight, Timeline). All content stays in TypeScript data files.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion

---

### Task 1: Update Navigation Data and Header/Footer

**Files:**
- Modify: `src/data/navigation.ts`
- Modify: `src/components/navigation/Footer.tsx`

- [ ] **Step 1: Update navigation items in `src/data/navigation.ts`**

Replace the `navigation` array:

```ts
export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Services', href: '/services' },
  { label: 'What We Build', href: '/what-we-build' },
  { label: 'Contact', href: '/contact' },
];
```

- [ ] **Step 2: Update Footer columns in `src/components/navigation/Footer.tsx`**

Replace the `products` and `resources` link arrays at the top of the file:

```tsx
const products = [
  { label: 'Precision Components', href: '/what-we-build#precision-components' },
  { label: 'Full Assemblies', href: '/what-we-build#assemblies' },
  { label: 'Prototypes & NPI', href: '/what-we-build#prototypes' },
  { label: 'Production Scale', href: '/what-we-build#production' },
];

const resources = [
  { label: 'Industries', href: '/industries' },
  { label: 'Careers', href: '/contact' },
  { label: 'Rise Power', href: 'https://risepower.com' },
];
```

Rename the Footer column titles from "Products" to "What We Build" and "Resources" to "Company":

```tsx
<FooterColumn title="What We Build" links={products} />
<FooterColumn title="Company" links={resources} />
```

- [ ] **Step 3: Update Footer copyright text**

Change the copyright line from:

```tsx
<p>&copy; 2026 CIMtech Green Energy Mfg</p>
```

to:

```tsx
<p>&copy; 2026 CIMtech Green Energy</p>
```

- [ ] **Step 4: Run the dev server to verify navigation renders**

Run: `cd "/Users/matthewgoulet/CimTech Green Energy" && npm run build`
Expected: Build succeeds (there will be missing page errors for `/industries` and `/what-we-build` until those pages are created, but the nav/footer should compile)

- [ ] **Step 5: Commit**

```bash
git add src/data/navigation.ts src/components/navigation/Footer.tsx
git commit -m "feat: update navigation for site generalization

Update nav items: remove Resources, add Industries, rename Products
to What We Build. Update Footer columns accordingly."
```

---

### Task 2: Rewrite Content Data

**Files:**
- Modify: `src/data/content.ts`
- Modify: `src/data/portfolio.ts`
- Delete: `src/data/blog.ts`

- [ ] **Step 1: Rewrite `src/data/content.ts` with generalized content**

Replace the entire file. Key changes:
- All interfaces stay the same, plus new ones for industries and timeline
- Home content rewritten for manufacturing partner positioning
- About content rewritten with broader story, new pillars, team section, history timeline
- Capabilities content rewritten for multi-industry
- Services content updated (electrolyzer service broadened)
- Products content replaced with "What We Build" capability categories
- Resources content removed
- New industries content added
- Consultation form service options broadened

```ts
// ---- Interfaces ----

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

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  number: string;
  title: string;
  description: string;
  whatWeSolve: string;
  whyCimtech: string;
  typicalWork: string;
  image: string;
  imageAlt: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface CapabilityCategoryItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

// ============================================
// HOME PAGE
// ============================================

export const homeContent = {
  hero: {
    badge: "One of Canada's Top 10 Manufacturing Companies",
    headline: 'Your Manufacturing Partner. From Prototype to Production.',
    description: 'Precision manufacturing across defense, commercial, consumer, and clean energy. Over two decades of experience bringing complex products from concept to scale.',
    primaryCta: { label: 'Get a Quote', href: '/contact' },
    secondaryCta: { label: 'Our Capabilities', href: '/capabilities' },
    backgroundImage: '/images/hero-1.jpg',
  } as HeroContent,

  metrics: [
    { value: '20+', label: 'Years Experience' },
    { value: '60K+', label: 'Devices Delivered' },
    { value: '4', label: 'Industries Served' },
    { value: '10K', label: 'Sq Ft Facility' },
  ] as Metric[],

  about: {
    badge: 'About CIMtech',
    title: 'Manufacturing Expertise Across Industries',
    description: "CIMtech Green Energy is a precision manufacturing partner serving defense, commercial, consumer, and clean energy sectors. From our 10,000 sq. ft advanced facility in Vancouver, we bring complex products from concept to production with engineering-driven precision.",
    secondaryText: 'With over two decades of manufacturing expertise, we offer end-to-end support from NPI prototyping through scaled production. Our clients include global leaders who trust us to deliver precision components and complete assemblies on time and on budget.',
    image: '/images/ceo.jpg',
    imageAlt: 'Paul Ghotra, Founder & CEO',
    imageCaption: 'Paul Ghotra, Founder & CEO',
  },

  industries: [
    { number: '01', title: 'Defense & Military', description: 'Mil-spec components, ruggedized assemblies, and ITAR-compliant manufacturing with full traceability.', href: '/industries' },
    { number: '02', title: 'Commercial & Industrial', description: 'Production scaling, supply chain reliability, and OEM partnerships for industrial applications.', href: '/industries' },
    { number: '03', title: 'Consumer Products', description: 'Rapid NPI, DFM feedback loops, and scaling from prototype to production runs.', href: '/industries' },
    { number: '04', title: 'Clean Energy', description: 'Fuel cell stacks, electrolyzers, and hydrogen power systems. Home of our Rise Power sub-brand.', href: '/industries' },
  ],

  capabilities: [
    { number: '01', title: 'Precision CNC Machining', description: '5-axis machining, CNC turning, grinding, and die & mold manufacturing. 20 CNC machines equipped with 4th & 5th axis capabilities for intricate shapes with micro-millimeter precision.', image: '/images/capability-1.jpg' },
    { number: '02', title: 'Injection Molding', description: 'Low-volume and high-volume injection molding for plastic parts, offering precision, repeatability, and efficiency across prototyping and production.', image: '/images/capability-2.jpg' },
    { number: '03', title: 'Fabrication & Welding', description: 'Laser cutting, waterjet cutting, sheet metal fabrication, and various welding techniques including MIG, TIG, and resistance welding.', image: '/images/capability-3.jpg' },
    { number: '04', title: '3D Printing', description: 'FDM, SLA, and Metal 3D printing for rapid prototyping and production of complex geometries with exceptional precision.', image: '/images/capability-4.jpg' },
    { number: '05', title: 'Assembly & Integration', description: 'Heat staking, autoclaving, and hydraulic press services for comprehensive turnkey assembly solutions across all industries.', image: '/images/capability-5.jpg' },
    { number: '06', title: 'Quality Assurance', description: 'CMM inspection, ISO9001 and AS9100D certified, Controlled Goods Program compliant. Rigorous quality management throughout production.', image: '/images/capability-6.jpg' },
  ] as AccordionItem[],

  clientLogos: [
    { src: '/images/client-logo-1.png', alt: 'Client 1' },
    { src: '/images/client-logo-2.png', alt: 'Client 2' },
    { src: '/images/client-logo-3.png', alt: 'Client 3' },
    { src: '/images/client-logo-4.png', alt: 'Client 4' },
    { src: '/images/client-logo-5.png', alt: 'Client 5' },
    { src: '/images/client-logo-6.png', alt: 'Client 6' },
    { src: '/images/client-logo-7.png', alt: 'Client 7' },
  ],

  risePower: {
    title: 'Rise Power',
    subtitle: 'Our Clean Energy Brand',
    description: "We didn't just manufacture clean energy products — we built the brand. Rise Power is CIMtech's dedicated clean energy division, delivering fuel cell stacks, electrolyzers, and hydrogen power systems to the global market.",
    link: 'https://risepower.com',
    linkLabel: 'Visit Rise Power',
    image: '/images/product-1.jpg',
    imageAlt: 'Rise Power - Clean Energy Products',
  },

  cta: {
    title: 'Get Your Free Consultation & Quote',
    description: 'Our engineering team is ready to discuss your manufacturing needs — from NPI prototyping to scaled production across any industry.',
  },
};

// ============================================
// ABOUT PAGE
// ============================================

export const aboutContent = {
  story: [
    "CIMtech Green Energy is a precision manufacturing partner with over two decades of experience serving defense, commercial, consumer, and clean energy sectors. From our 10,000 sq. ft advanced manufacturing facility in Vancouver, Canada, we bring complex products from concept to production with engineering-driven precision and quality.",
    "What started as a specialized manufacturing operation has grown into a trusted partner for companies across industries who need precision components, complete assemblies, and end-to-end manufacturing support. We've delivered over 60,000 devices and earned recognition as one of Canada's top 10 manufacturing companies.",
    "Our approach is simple: combine deep manufacturing expertise with modern digital workflow systems to deliver precision, speed, and reliability. Whether it's a defense component requiring full traceability, a consumer product prototype needing rapid iteration, or a clean energy system demanding specialized assembly — CIMtech has the capability and track record to deliver.",
    "Through our Rise Power sub-brand, we've demonstrated what a deep CIMtech partnership looks like: not just manufacturing components, but building an entire product line and brand in the clean energy space. That same depth of commitment is available to every client we serve.",
  ],

  timeline: [
    { year: '2004', title: 'Founded', description: 'Paul Ghotra founds CIMtech, bringing decades of precision manufacturing expertise from leading BC hi-tech companies.' },
    { year: '2010', title: 'ISO 9001 Certified', description: 'Achieved ISO 9001 certification, establishing rigorous quality management systems across all operations.' },
    { year: '2015', title: 'AS9100D Certification', description: 'Earned AS9100D aerospace certification, opening defense and aerospace manufacturing capabilities.' },
    { year: '2018', title: 'Controlled Goods Program', description: 'Achieved Controlled Goods Program compliance for defense manufacturing in Canada.' },
    { year: '2022', title: 'Facility Expansion', description: 'Doubled manufacturing footprint with acquisition of 10,000 sq. ft advanced manufacturing facility in Vancouver.' },
    { year: '2024', title: 'Rise Power Launch', description: 'Launched Rise Power as a dedicated clean energy sub-brand, manufacturing fuel cell stacks and electrolyzers.' },
    { year: '2025', title: 'Top 10 Recognition', description: 'Recognized as one of Canada\'s top 10 manufacturing companies, serving clients across four industry verticals.' },
  ] as TimelineItem[],

  pillars: [
    {
      number: '01',
      title: 'Precision Engineering',
      description: 'Our facility runs 20 CNC machines with 4th and 5th axis capabilities, supported by advanced digital manufacturing systems. Industry 4.0 integration means real-time quality monitoring, automated processes, and micro-millimeter precision on every part — whether it\'s a defense housing or a consumer product component.',
    },
    {
      number: '02',
      title: 'On-Time Delivery',
      description: 'ERP-driven operations give us visibility into every stage of production. We track inventory, manage scheduling, and optimize workflows to hit delivery targets consistently. Our clients depend on us as a supply chain partner, not just a vendor — and on-time delivery is how we earn that trust.',
    },
    {
      number: '03',
      title: 'Engineering Partnership',
      description: 'We don\'t just manufacture to spec — we improve it. Our engineering team provides DFM feedback, prototyping support, and cost optimization from day one. We bring 3D models to life using the latest technologies, and we troubleshoot problems before they reach the production floor.',
    },
    {
      number: '04',
      title: 'Scale on Demand',
      description: 'From a single prototype to 60,000+ production units, we scale with you. Our zero-inventory programs, repeat manufacturing systems, and flexible capacity mean you can grow without rebuilding your supply chain. One partner from concept to volume.',
    },
  ] as PillarItem[],

  team: {
    name: 'Paul Ghotra',
    title: 'Founder & CEO',
    image: '/images/ceo.jpg',
    quote: 'We built CIMtech to be the manufacturing partner we wished existed — one that combines precision engineering with real partnership. Whether our clients are building for defense, consumer markets, or clean energy, they get the same commitment to quality and the same depth of support.',
    facilityDescription: "CIMtech's cutting-edge digital manufacturing facility is built for Industry 4.0. Our comprehensive services span from crafting proof-of-concept prototypes to executing large-scale manufacturing projects across defense, commercial, consumer, and clean energy sectors.",
  },

  keyFacts: {
    title: 'Our Growth',
    stats: [
      '10,000 sq. ft advanced manufacturing facility',
      '200% increase in service levels',
      '60,000+ devices delivered across industries',
      '4 industry verticals served',
    ],
    image: '/images/about-card.jpg',
    imageAlt: 'CIMtech facility',
  },

  vision: 'CIMtech Green Energy is your manufacturing partner from prototype to production — delivering precision, speed, and reliability across every industry we serve.',
};

// ============================================
// INDUSTRIES PAGE
// ============================================

export const industriesContent = {
  overview: 'Precision manufacturing tailored to your industry. We bring the same engineering rigor, quality systems, and manufacturing depth to every vertical we serve.',

  industries: [
    {
      number: '01',
      title: 'Defense & Military',
      description: 'Precision manufacturing for defense applications with full traceability and compliance.',
      whatWeSolve: 'Mil-spec components, ITAR-compliant manufacturing, ruggedized assemblies, and low-volume high-precision production runs. We understand the documentation, traceability, and quality requirements that defense programs demand.',
      whyCimtech: 'AS9100D and Controlled Goods Program certified. 20+ years of precision manufacturing with full material traceability. Our controlled facility and quality management systems are built for defense-grade work.',
      typicalWork: 'Precision-machined housings, power system components, ruggedized assemblies, and prototype-to-production scaling for defense programs.',
      image: '/images/capability-6.jpg',
      imageAlt: 'Precision manufacturing for defense',
    },
    {
      number: '02',
      title: 'Commercial & Industrial',
      description: 'Reliable production scaling and supply chain partnership for commercial applications.',
      whatWeSolve: 'Production scaling, supply chain reliability, DFM optimization, and repeat manufacturing with zero-inventory models. We help commercial partners reduce costs while maintaining quality at volume.',
      whyCimtech: 'Proven scale with 60,000+ devices shipped. ERP-driven operations, lean manufacturing processes, and engineering support from prototype through volume production. We become an extension of your team.',
      typicalWork: 'Production assemblies, industrial components, OEM partnerships, and ongoing repeat manufacturing programs.',
      image: '/images/capability-1.jpg',
      imageAlt: 'Commercial manufacturing',
    },
    {
      number: '03',
      title: 'Consumer Products',
      description: 'Fast NPI cycles and rapid scaling for consumer product development.',
      whatWeSolve: 'NPI speed, rapid prototyping, design-for-manufacturing feedback, and scaling from 10 to 10,000 units. We help consumer product companies move from concept to market faster without sacrificing quality.',
      whyCimtech: 'Fast NPI cycles with 14-day prototype turnaround. In-house engineering for DFM optimization. 3D printing, CNC machining, and injection molding under one roof — prototype to production without changing partners.',
      typicalWork: 'Product prototypes, first production runs, consumer device components, and bridge-to-production manufacturing.',
      image: '/images/capability-4.jpg',
      imageAlt: 'Consumer product manufacturing',
    },
    {
      number: '04',
      title: 'Clean Energy',
      description: 'Deep expertise in fuel cell and electrolyzer manufacturing, powered by our Rise Power sub-brand.',
      whatWeSolve: 'Fuel cell stack manufacturing, electrolyzer components, hydrogen system assemblies, and specialized membrane handling. This is where CIMtech started, and where we have the deepest track record.',
      whyCimtech: 'Over 60,000 fuel cell devices deployed globally. Launched Rise Power as our own clean energy brand. Components utilized by global players including Walmart, Amazon, and Home Depot for hydrogen-powered equipment.',
      typicalWork: 'Fuel cell stacks, PEM electrolyzers, hydrogen power system assemblies, and clean energy device components.',
      image: '/images/product-1.jpg',
      imageAlt: 'Clean energy manufacturing',
    },
  ] as IndustryItem[],
};

// ============================================
// CAPABILITIES PAGE
// ============================================

export const capabilitiesContent = {
  overview: "With over two decades of manufacturing experience across defense, commercial, consumer, and clean energy sectors, CIMtech's engineering team is ready to tackle your NPI projects in as few as 14 days. Our capabilities extend beyond individual machined parts — we offer complete assembly services, leveraging our deep expertise to drive down your manufacturing costs.",

  capabilities: [
    {
      number: '01',
      title: 'Precision CNC Machining',
      overview: 'High-speed milling and multi-axis turning for intricate shapes in a single setup, with micro-millimeter precision across all materials and industries.',
      subSections: [
        { title: '5-Axis Machining & Milling', description: '5-axis machining allows for extensive versatility in processing parts of varying sizes and shapes. The 5-axis designation indicates the cutting tool\'s ability to move in five directions: along the X, Y, and Z linear axes, and rotationally along the A and B axes.' },
        { title: 'CNC Turning', description: 'CNC turning is a manufacturing technique where material bars are clamped in a chuck and rotated, while a cutting tool is fed into the workpiece to remove material and form the desired shape.' },
        { title: 'CNC Grinding', description: 'CNC grinding is a precision machining process that utilizes abrasive grinding wheels to remove material from a workpiece, creating precise shapes and surface finishes.' },
        { title: 'Die and Mold Manufacturing', description: 'Die and mold manufacturing involves the fabrication of tooling used to produce plastic, metal, and composite parts through various forming processes such as injection molding, die casting, and stamping.' },
      ],
      image: '/images/capability-1.jpg',
    },
    {
      number: '02',
      title: 'Injection Molding',
      overview: 'Precision injection molding for prototyping through high-volume production runs across consumer, commercial, and industrial applications.',
      subSections: [
        { title: 'Low-Volume Injection Molding', description: 'Low-volume injection molding caters to the production of small to medium quantities of plastic parts, typically ranging from a few hundred to a few thousand units. Ideal for prototyping, market testing, and small-batch production.' },
        { title: 'High-Volume Injection Molding', description: 'High-volume injection molding is a production process used to manufacture large quantities of plastic parts with consistent quality and efficiency, leveraging high-speed machines and multi-cavity molds.' },
      ],
      image: '/images/capability-2.jpg',
    },
    {
      number: '03',
      title: 'Fabrication & Welding',
      overview: 'Comprehensive fabrication services including cutting, forming, and joining of metals for defense, commercial, and industrial applications.',
      subSections: [
        { title: 'Laser Cutting', description: 'Laser cutting is a versatile and precise manufacturing process that utilizes a high-powered laser beam to cut through materials such as metal, plastic, wood, and ceramics with exceptional speed, accuracy, and repeatability.' },
        { title: 'Waterjet Cutting', description: 'Waterjet cutting is a cold cutting process that utilizes a high-pressure stream of water mixed with abrasive particles to cut through a wide range of materials with minimal heat-affected zones and no material distortion.' },
        { title: 'Sheet Metal', description: 'Sheet metal fabrication involves the manipulation of thin metal sheets to create various components and structures using techniques including cutting, bending, forming, and welding.' },
        { title: 'Welding', description: 'Various welding techniques are employed, including arc welding, MIG welding, TIG welding, and resistance welding, each suited to specific materials and applications.' },
      ],
      image: '/images/capability-3.jpg',
    },
    {
      number: '04',
      title: '3D Printing & Rapid Prototyping',
      overview: 'Additive manufacturing for rapid prototyping and production of complex geometries, enabling fast iteration from concept to first article.',
      subSections: [
        { title: 'FDM 3D Printing', description: 'Fused Deposition Modeling (FDM) 3D printing fabricates parts layer by layer from thermoplastic materials using a heated nozzle to extrude molten filament onto a build platform.' },
        { title: 'SLA 3D Printing', description: 'Stereolithography (SLA) 3D printing utilizes photopolymerization to produce high-resolution parts with exceptional surface finish using a UV laser to selectively cure liquid resin.' },
        { title: 'Metal 3D Printing', description: 'Metal 3D printing leverages advanced techniques to produce metal parts with exceptional precision using metal powders selectively melted layer by layer with a high-powered laser or electron beam.' },
      ],
      image: '/images/capability-4.jpg',
    },
    {
      number: '05',
      title: 'Assembly & Integration',
      overview: 'Complete assembly services for turnkey manufacturing solutions, from sub-assemblies to full system integration.',
      subSections: [
        { title: 'Heat Staking', description: 'Heat staking is a precision manufacturing process commonly used to join thermoplastic parts together by heating a metal or thermoplastic stake and pressing it into a preformed hole.' },
        { title: 'Autoclaving', description: 'Autoclaving is a critical process in the manufacturing of composite materials, subjecting composite layups to elevated temperatures and pressures within an autoclave chamber.' },
        { title: 'Hydraulic Press', description: 'Hydraulic press technology plays a vital role in various manufacturing processes, offering immense power and versatility for shaping, forming, and joining metal components.' },
        { title: 'System Integration', description: 'Full system integration services including multi-component assembly, functional testing, and packaging for complete turnkey delivery to our clients.' },
      ],
      image: '/images/capability-5.jpg',
    },
    {
      number: '06',
      title: 'Quality Assurance',
      overview: 'Rigorous quality management systems ensuring precision and compliance across defense, aerospace, commercial, and consumer standards.',
      subSections: [
        { title: 'CMM Inspection', description: 'CIMtech employs cutting-edge Coordinate Measuring Machine (CMM) inspection techniques to ensure the precision and accuracy of manufactured components, verifying dimensional accuracy, geometric tolerances, and surface finish.' },
        { title: 'ISO 9001', description: 'CIMtech maintains ISO 9001 certification, underscoring dedication to excellence in quality management systems with rigorous processes for product design, manufacturing, and customer satisfaction.' },
        { title: 'AS9100D', description: 'CIMtech holds AS9100D certification, symbolizing compliance with stringent quality management requirements specific to aerospace and defense manufacturing.' },
        { title: 'Controlled Goods Program', description: 'CIMtech maintains compliance with the Controlled Goods Program (CGP), demonstrating commitment to safeguarding controlled goods and technologies in Canada.' },
      ],
      image: '/images/capability-6.jpg',
    },
  ] as AccordionDetailItem[],

  equipment: {
    measuring: 'Gage block sets, pin gages, digital micrometers, bore gages, depth micrometers, thread micrometers, calipers 6"-24", drop gages, pin micrometers, 1-2-3 and 2-4-6 blocks, angle plates, sine gages, travel indicators, groove gages.',
    secondary: 'Anodizing, Painting, Epoxy, Powder Coating, Zinc Plating, Clear Chromate, Heat treatment and Autoclave bonding.',
    assembly: 'Pneumatic Helicoil drivers, heat staking inserts, press-fit inserts, arbor presses, assembly benches, and a full array of assembly hand tools and equipment.',
    fabrication: 'Sanders, drill press, vertical and horizontal band saw.',
  },

  stats: [
    '20 CNC Machines equipped with 4th & 5th Axis Capabilities',
    'Streamlined Digital Workflow with ERP Systems',
    'Fully Traceable Quality Assurance Systems',
    'Comprehensive Assembly, CNC Parts, Prototyping to Full Production',
    'Technical Expertise, including CNC Machinists & Manufacturing Engineers',
  ],
};

// ============================================
// SERVICES PAGE
// ============================================

export const servicesContent = {
  services: [
    { number: '01', title: 'NPI - Prototype Development', description: 'New Product Introduction (NPI) prototype development involves the creation of initial product models or samples to validate design concepts and functionalities before full-scale production. We leverage 3D printing, CNC machining, and rapid prototyping to produce functional prototypes with high precision in as few as 14 days.' },
    { number: '02', title: 'NPI - Product Development', description: 'Comprehensive support through the critical stages of bringing a new product from concept to market. Our NPI product development services include concept ideation, design and engineering, prototyping, testing, and manufacturing ramp-up — all under one roof.' },
    { number: '03', title: 'Repeat Manufacturing', description: 'Optimized production processes and supply chains for ongoing manufacturing of existing products. We leverage our facility and global supplier network to ensure consistent quality, cost-effectiveness, and scalability in production.' },
    { number: '04', title: 'Design for Manufacturing (DFM)', description: 'Collaboration between our design engineers and manufacturing experts to identify and address potential manufacturing challenges early in the product development cycle. DFM optimization reduces costs, improves quality, and accelerates time to production.' },
    { number: '05', title: 'Zero Inventory Program', description: 'Advanced supply chain management that minimizes inventory levels while maintaining high product availability. We use demand forecasting, planning, and inventory optimization to synchronize production with your customer demand.' },
    { number: '06', title: 'Complex System Integration', description: 'End-to-end assembly and integration of multi-component systems. From fuel cell stacks to electromechanical assemblies, we handle the complexity of bringing together precision components into complete, tested, production-ready systems.' },
    { number: '07', title: 'Engineering Development', description: 'Comprehensive engineering support for the design, development, and optimization of complex products. Our services span mechanical, electrical, and systems engineering — from 3D modeling to production-ready designs.' },
  ] as ServiceItem[],
};

// ============================================
// WHAT WE BUILD PAGE
// ============================================

export const whatWeBuildContent = {
  categories: [
    {
      title: 'Precision Components',
      description: 'CNC-machined parts with tight tolerances and complex geometries. From defense housings requiring full traceability to consumer device internals demanding surface-finish perfection — our 20 CNC machines with 4th and 5th axis capabilities deliver micro-millimeter precision on every part.',
      image: '/images/capability-1.jpg',
      imageAlt: 'Precision CNC machined components',
    },
    {
      title: 'Full Assemblies',
      description: 'Multi-component system integration from sub-assembly to complete product. We handle heat staking, autoclaving, hydraulic press operations, and full system integration. Our turnkey assembly services mean you get tested, production-ready units — not just parts.',
      image: '/images/capability-5.jpg',
      imageAlt: 'Full assembly and integration',
    },
    {
      title: 'Prototypes & NPI',
      description: 'Rapid first articles and NPI runs in as few as 14 days. Our in-house 3D printing (FDM, SLA, Metal), CNC machining, and injection molding capabilities enable fast iteration. DFM feedback loops catch manufacturing issues before they become production problems.',
      image: '/images/capability-4.jpg',
      imageAlt: 'Rapid prototyping and NPI',
    },
    {
      title: 'Production at Scale',
      description: 'Repeat manufacturing with consistent quality at volume. Over 60,000 devices shipped. Our zero-inventory programs, ERP-driven scheduling, and lean manufacturing processes keep your supply chain reliable and your costs predictable.',
      image: '/images/capability-3.jpg',
      imageAlt: 'Scaled production manufacturing',
    },
  ] as CapabilityCategoryItem[],

  risePower: {
    title: 'Rise Power: Our Clean Energy Brand',
    description: "We didn't just manufacture clean energy products — we built the brand. Rise Power is CIMtech's dedicated clean energy division, producing fuel cell stacks, PEM electrolyzers, and hydrogen power systems deployed globally. With 60,000+ devices in the field powering operations for companies like Walmart, Amazon, and Home Depot, Rise Power demonstrates what a deep CIMtech partnership can become.",
    link: 'https://risepower.com',
    linkLabel: 'Visit Rise Power',
    image: '/images/product-1.jpg',
    imageAlt: 'Rise Power clean energy products',
  },
};

// ============================================
// CONTACT PAGE
// ============================================

export const contactContent = {
  heading: 'Contact Us - Get in Touch',
  description: 'Have a question about manufacturing capabilities or partnering? Need a quote? Simply complete the form and someone will be in touch.',
};

// ============================================
// CONSULTATION FORM OPTIONS
// ============================================

export const serviceOptions = [
  'NPI / Prototyping',
  'Production Manufacturing',
  'DFM Services',
  'Assembly & Integration',
  'Defense / Mil-Spec',
  'Clean Energy',
  'Other',
];
```

- [ ] **Step 2: Update portfolio captions in `src/data/portfolio.ts`**

```ts
export interface PortfolioItem {
  image: string;
  caption: string;
}

export const portfolio: PortfolioItem[] = [
  { image: '/images/portfolio-1.jpg', caption: 'Precision Fuel Cell Assembly' },
  { image: '/images/portfolio-2.jpg', caption: 'PVDF Machined Components' },
  { image: '/images/portfolio-3.jpg', caption: 'G110 FR4 End Plates' },
  { image: '/images/portfolio-4.jpg', caption: 'Multi-Component Assembly' },
  { image: '/images/portfolio-5.jpg', caption: 'PEM Electrolyzer System' },
  { image: '/images/portfolio-6.jpg', caption: 'Production-Scale Deployment' },
];
```

- [ ] **Step 3: Delete `src/data/blog.ts`**

```bash
git rm src/data/blog.ts
```

- [ ] **Step 4: Verify the data file compiles**

Run: `cd "/Users/matthewgoulet/CimTech Green Energy" && npx tsc --noEmit src/data/content.ts src/data/portfolio.ts`
Expected: No type errors

- [ ] **Step 5: Commit**

```bash
git add src/data/content.ts src/data/portfolio.ts
git commit -m "feat: rewrite content data for multi-industry positioning

Replace hydrogen-focused content with broad manufacturing partner
messaging. Add industries data, what-we-build categories, timeline,
and Rise Power sub-brand content. Remove blog data."
```

---

### Task 3: Create New Components (IndustryCard, SubBrandSpotlight, Timeline)

**Files:**
- Create: `src/components/sections/IndustryCard.tsx`
- Create: `src/components/sections/SubBrandSpotlight.tsx`
- Create: `src/components/sections/Timeline.tsx`

- [ ] **Step 1: Create `src/components/sections/IndustryCard.tsx`**

```tsx
import Link from 'next/link';

type IndustryCardItem = {
  number: string;
  title: string;
  description: string;
  href: string;
};

type IndustryCardProps = {
  items: IndustryCardItem[];
};

export function IndustryCards({ items }: IndustryCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group border border-border bg-surface rounded-xl p-6 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="font-mono text-xs text-accent mb-3">{item.number}</div>
          <h3 className="font-sans text-lg font-bold mb-2 group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{item.description}</p>
          <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-4">
            Learn More <span aria-hidden="true">&rarr;</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/sections/SubBrandSpotlight.tsx`**

```tsx
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

type SubBrandSpotlightProps = {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
};

export function SubBrandSpotlight({
  title,
  subtitle,
  description,
  link,
  linkLabel,
  image,
  imageAlt,
}: SubBrandSpotlightProps) {
  return (
    <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0f2a1a] rounded-2xl p-12 lg:p-16 overflow-hidden">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <Badge className="mb-4 text-accent-hover">{subtitle}</Badge>
          <h2 className="font-sans text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-[#94A3B8] leading-relaxed mb-6">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            {linkLabel} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden relative h-[300px]">
          <Image
            src={image}
            fill
            className="object-cover"
            alt={imageAlt}
          />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create `src/components/sections/Timeline.tsx`**

```tsx
import { type TimelineItem } from '@/data/content';

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border" aria-hidden="true" />

      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.year} className="relative flex gap-6">
            {/* Dot */}
            <div className="relative z-10 flex-shrink-0 w-[47px] flex justify-center">
              <div className="w-3 h-3 rounded-full bg-accent mt-1.5" />
            </div>

            {/* Content */}
            <div className="pb-2">
              <div className="font-mono text-xs text-accent mb-1">{item.year}</div>
              <h3 className="font-sans text-base font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify components compile**

Run: `cd "/Users/matthewgoulet/CimTech Green Energy" && npx tsc --noEmit`
Expected: No type errors (pages may have import errors for deleted blog.ts, that's expected and will be fixed in later tasks)

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/IndustryCard.tsx src/components/sections/SubBrandSpotlight.tsx src/components/sections/Timeline.tsx
git commit -m "feat: add IndustryCards, SubBrandSpotlight, and Timeline components

New section components for the generalized site: industry overview
cards for homepage, Rise Power spotlight, and company history timeline."
```

---

### Task 4: Rewrite Homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rewrite `src/app/page.tsx`**

```tsx
import { HeroHome } from '@/components/sections/HeroHome';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { SplitSection } from '@/components/sections/SplitSection';
import { Accordion } from '@/components/sections/Accordion';
import { IndustryCards } from '@/components/sections/IndustryCard';
import { LogoBand } from '@/components/sections/LogoBand';
import { SubBrandSpotlight } from '@/components/sections/SubBrandSpotlight';
import { ConsultationForm } from '@/components/sections/ConsultationForm';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { homeContent } from '@/data/content';
import { portfolio } from '@/data/portfolio';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroHome {...homeContent.hero} />

      {/* Metrics */}
      <MetricsBand metrics={homeContent.metrics} />

      {/* About Split */}
      <Section>
        <Container>
          <SplitSection
            badge={homeContent.about.badge}
            title={homeContent.about.title}
            image={homeContent.about.image}
            imageAlt={homeContent.about.imageAlt}
            imageOverlay={homeContent.about.imageCaption}
          >
            <p className="text-muted leading-relaxed mb-3">{homeContent.about.description}</p>
            <p className="text-sm text-muted leading-relaxed">{homeContent.about.secondaryText}</p>
          </SplitSection>
        </Container>
      </Section>

      {/* Industries Overview */}
      <Section className="bg-surface-elevated">
        <Container>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Industries We Serve</span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-sans text-3xl font-bold">Built for Your Industry</h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">The same engineering rigor and manufacturing depth, tailored to your sector.</p>
          </div>
          <IndustryCards items={homeContent.industries} />
        </Container>
      </Section>

      {/* Capabilities Accordion */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">What We Do</span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-sans text-3xl font-bold">Our Capabilities</h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">Over two decades of manufacturing expertise. NPI prototypes in as few as 14 days.</p>
          </div>
          <Accordion items={homeContent.capabilities} />
        </Container>
      </Section>

      {/* Client Logos */}
      <LogoBand logos={homeContent.clientLogos} label="Trusted By Industry Leaders" />

      {/* Rise Power Spotlight */}
      <Section>
        <Container>
          <SubBrandSpotlight {...homeContent.risePower} />
        </Container>
      </Section>

      {/* Consultation Form CTA */}
      <Section>
        <Container>
          <ConsultationForm
            title={homeContent.cta.title}
            description={homeContent.cta.description}
          />
        </Container>
      </Section>

      {/* Portfolio Strip */}
      <Section className="pb-0">
        <Container>
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2.5">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Our Work</span>
              <span className="h-px w-8 bg-accent" />
            </div>
          </div>
          <PortfolioGrid items={portfolio} />
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Verify homepage renders**

Run: `cd "/Users/matthewgoulet/CimTech Green Energy" && npx tsc --noEmit src/app/page.tsx`
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: rewrite homepage for multi-industry positioning

Replace hydrogen-focused homepage with manufacturing partner narrative.
Add industries overview cards, Rise Power spotlight. Remove products
grid and blog/media section."
```

---

### Task 5: Create Industries Page

**Files:**
- Create: `src/app/industries/page.tsx`

- [ ] **Step 1: Create `src/app/industries/page.tsx`**

```tsx
import type { Metadata } from 'next';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { SplitSection } from '@/components/sections/SplitSection';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { industriesContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'CIMtech serves defense, commercial, consumer, and clean energy sectors with precision manufacturing, NPI prototyping, and production scaling.',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <HeroStatic
        title="Built for Your Industry"
        description="Precision manufacturing across defense, commercial, consumer, and clean energy. Same engineering rigor. Tailored to your requirements."
      />

      {/* Overview */}
      <Section>
        <Container>
          <p className="text-muted leading-relaxed max-w-3xl">
            {industriesContent.overview}
          </p>
        </Container>
      </Section>

      {/* Industry Verticals */}
      {industriesContent.industries.map((industry, i) => (
        <Section key={industry.title} dark={i % 2 === 1}>
          <Container>
            <SplitSection
              badge={industry.number}
              title={industry.title}
              image={industry.image}
              imageAlt={industry.imageAlt}
              reverse={i % 2 === 1}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">What We Solve</h3>
                  <p className="text-sm text-muted leading-relaxed">{industry.whatWeSolve}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Why CIMtech</h3>
                  <p className="text-sm text-muted leading-relaxed">{industry.whyCimtech}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Typical Work</h3>
                  <p className="text-sm text-muted leading-relaxed">{industry.typicalWork}</p>
                </div>
              </div>
            </SplitSection>
          </Container>
        </Section>
      ))}

      {/* CTA */}
      <Section>
        <Container>
          <CTASection
            title="Ready to Discuss Your Project?"
            description="No matter your industry, our team is ready to bring your manufacturing project to life with precision and speed."
            primaryCta={{ label: 'Get a Quote', href: '/contact' }}
          />
        </Container>
      </Section>
    </>
  );
}
```

Note: The `Section` component's `dark` prop is used on alternating industries. Check if the `Section` component supports the `dark` prop. If it only supports a `className` prop, use `className="bg-[#1A1A2E] text-white"` on alternating sections instead. Read the Section component to verify.

- [ ] **Step 2: Verify the page compiles**

Run: `cd "/Users/matthewgoulet/CimTech Green Energy" && npx tsc --noEmit src/app/industries/page.tsx`
Expected: No type errors. If `Section` doesn't have a `dark` prop, adjust accordingly.

- [ ] **Step 3: Commit**

```bash
git add src/app/industries/page.tsx
git commit -m "feat: add Industries page with four verticals

Defense, commercial, consumer, and clean energy verticals with
what-we-solve, why-CIMtech, and typical-work sections each."
```

---

### Task 6: Rewrite About Page

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Rewrite `src/app/about/page.tsx`**

```tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { Accordion } from '@/components/sections/Accordion';
import { SplitSection } from '@/components/sections/SplitSection';
import { Timeline } from '@/components/sections/Timeline';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { Badge } from '@/components/ui/Badge';
import { aboutContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'CIMtech Green Energy is a precision manufacturing partner serving defense, commercial, consumer, and clean energy sectors from Vancouver, Canada.',
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroStatic title="Your Manufacturing Partner" />

      {/* 2. Company Story */}
      <Section>
        <Container>
          <Prose>
            {aboutContent.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Prose>
        </Container>
      </Section>

      {/* 3. History Timeline */}
      <Section dark>
        <Container>
          <h2 className="font-sans text-3xl font-bold text-center mb-10">
            Our Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            <Timeline items={aboutContent.timeline} />
          </div>
        </Container>
      </Section>

      {/* 4. Pillars Accordion */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-4">What Drives Us</Badge>
            <h2 className="font-sans text-3xl font-bold">Our Core Values</h2>
          </div>
          <Accordion
            items={aboutContent.pillars.map(({ number, title, description }) => ({
              number,
              title,
              description,
            }))}
          />
        </Container>
      </Section>

      {/* 5. Team Section */}
      <Section dark>
        <Container>
          <div className="text-center mb-10">
            <h2 className="font-sans text-3xl font-bold">Leadership</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
              <div className="relative w-32 h-32 flex-shrink-0 rounded-full overflow-hidden">
                <Image
                  src={aboutContent.team.image}
                  alt={aboutContent.team.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold">{aboutContent.team.name}</h3>
                <p className="text-muted text-sm mb-4">{aboutContent.team.title}</p>
                <blockquote className="border-l-2 border-accent pl-4 text-muted italic leading-relaxed">
                  {aboutContent.team.quote}
                </blockquote>
              </div>
            </div>
            <p className="text-muted leading-relaxed">{aboutContent.team.facilityDescription}</p>
          </div>
        </Container>
      </Section>

      {/* 6. Key Facts Split */}
      <Section>
        <Container>
          <SplitSection
            title="Our Growth"
            image={aboutContent.keyFacts.image}
            imageAlt={aboutContent.keyFacts.imageAlt}
          >
            <ul className="list-disc list-inside space-y-2 text-muted">
              {aboutContent.keyFacts.stats.map((stat, i) => (
                <li key={i}>{stat}</li>
              ))}
            </ul>
          </SplitSection>
        </Container>
      </Section>

      {/* 7. Vision CTA */}
      <Section>
        <Container>
          <CTASection
            title={aboutContent.vision}
            description=""
            primaryCta={{ label: 'Get a Quote', href: '/contact' }}
          />
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Verify the page compiles**

Run: `cd "/Users/matthewgoulet/CimTech Green Energy" && npx tsc --noEmit src/app/about/page.tsx`
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: expand About page with timeline, team, and broad positioning

Add history timeline and team section (absorbed from Resources).
Rewrite story and pillars for multi-industry manufacturing partner."
```

---

### Task 7: Update Capabilities and Services Pages

**Files:**
- Modify: `src/app/capabilities/page.tsx`
- Modify: `src/app/services/page.tsx`

- [ ] **Step 1: Update metadata in `src/app/capabilities/page.tsx`**

Change the metadata description:

```ts
export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'CIMtech offers precision CNC machining, injection molding, fabrication, 3D printing, assembly & integration, and quality assurance across defense, commercial, consumer, and clean energy sectors.',
};
```

No other changes needed to capabilities page structure — the content data changes in Task 2 handle the rest.

- [ ] **Step 2: Update metadata in `src/app/services/page.tsx`**

Change the metadata description:

```ts
export const metadata: Metadata = {
  title: 'Services',
  description: 'CIMtech offers NPI prototype development, repeat manufacturing, DFM, zero inventory programs, complex system integration, and engineering development across all industries.',
};
```

No other changes needed to services page structure.

- [ ] **Step 3: Commit**

```bash
git add src/app/capabilities/page.tsx src/app/services/page.tsx
git commit -m "feat: update Capabilities and Services page metadata

Broaden descriptions from hydrogen-specific to multi-industry."
```

---

### Task 8: Create What We Build Page and Remove Old Pages

**Files:**
- Create: `src/app/what-we-build/page.tsx`
- Delete: `src/app/products/page.tsx`
- Delete: `src/app/resources/page.tsx`

- [ ] **Step 1: Create `src/app/what-we-build/page.tsx`**

```tsx
import type { Metadata } from 'next';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { SplitSection } from '@/components/sections/SplitSection';
import { SubBrandSpotlight } from '@/components/sections/SubBrandSpotlight';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { whatWeBuildContent } from '@/data/content';
import { portfolio } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'What We Build',
  description: 'From precision components to full assemblies, prototypes to production scale. See what CIMtech manufacturing delivers across industries.',
};

export default function WhatWeBuildPage() {
  return (
    <>
      {/* Hero */}
      <HeroStatic
        title="From Concept to Production"
        description="Prototypes, production runs, and everything in between. See what precision manufacturing looks like."
      />

      {/* Capability Categories - alternating splits */}
      {whatWeBuildContent.categories.map((category, i) => (
        <Section key={category.title}>
          <Container>
            <SplitSection
              badge={category.title}
              title={category.title}
              image={category.image}
              imageAlt={category.imageAlt}
              reverse={i % 2 === 1}
            >
              <p className="text-muted leading-relaxed">{category.description}</p>
            </SplitSection>
          </Container>
        </Section>
      ))}

      {/* Portfolio Grid */}
      <Section className="bg-surface-elevated">
        <Container>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Portfolio</span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-sans text-3xl font-bold">Our Work</h2>
          </div>
          <PortfolioGrid items={portfolio} columns={3} />
        </Container>
      </Section>

      {/* Rise Power Spotlight */}
      <Section>
        <Container>
          <SubBrandSpotlight
            title={whatWeBuildContent.risePower.title}
            subtitle="Our Clean Energy Brand"
            description={whatWeBuildContent.risePower.description}
            link={whatWeBuildContent.risePower.link}
            linkLabel={whatWeBuildContent.risePower.linkLabel}
            image={whatWeBuildContent.risePower.image}
            imageAlt={whatWeBuildContent.risePower.imageAlt}
          />
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <CTASection
            title="Ready to Build Something?"
            description="From a single prototype to production at scale. Tell us what you need."
            primaryCta={{ label: 'Get a Quote', href: '/contact' }}
          />
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Delete old pages**

```bash
cd "/Users/matthewgoulet/CimTech Green Energy"
rm src/app/products/page.tsx
rmdir src/app/products
rm src/app/resources/page.tsx
rmdir src/app/resources
```

- [ ] **Step 3: Verify the build compiles**

Run: `cd "/Users/matthewgoulet/CimTech Green Energy" && npx tsc --noEmit`
Expected: No type errors

- [ ] **Step 4: Commit**

```bash
git add src/app/what-we-build/page.tsx
git rm src/app/products/page.tsx src/app/resources/page.tsx
git commit -m "feat: add What We Build page, remove Products and Resources

Replace Products with capability-focused What We Build page including
portfolio grid and Rise Power spotlight. Remove Resources page
(content redistributed to About and What We Build)."
```

---

### Task 9: Update Contact Page and Layout Metadata

**Files:**
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update contact page metadata**

In `src/app/contact/page.tsx`, change the metadata:

```ts
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact CIMtech Green Energy for precision manufacturing services. Located in Surrey, BC, Canada.',
};
```

- [ ] **Step 2: Update root layout metadata**

In `src/app/layout.tsx`, change the metadata:

```ts
export const metadata: Metadata = {
  title: {
    default: 'CIMtech Green Energy — Precision Manufacturing Partner',
    template: '%s | CIMtech Green Energy',
  },
  description:
    'Precision manufacturing partner serving defense, commercial, consumer, and clean energy sectors. NPI prototyping to production scale from Vancouver, Canada.',
};
```

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/page.tsx src/app/layout.tsx
git commit -m "feat: update site-wide and Contact page metadata

Broaden meta descriptions from hydrogen-specific to multi-industry
manufacturing partner positioning."
```

---

### Task 10: Add Redirects, Update Sitemap, and SEO

**Files:**
- Modify: `next.config.ts`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/robots.ts` (if needed)

- [ ] **Step 1: Add redirects in `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/what-we-build',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 2: Update `src/app/sitemap.ts`**

```ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cimtechgreenenergy.com';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/capabilities`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/what-we-build`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];
}
```

- [ ] **Step 3: Commit**

```bash
git add next.config.ts src/app/sitemap.ts
git commit -m "feat: add redirects and update sitemap

301 redirect /products to /what-we-build and /resources to /about.
Update sitemap with new routes."
```

---

### Task 11: Clean Up Unused Components and Final Build Verification

**Files:**
- Optionally delete: `src/components/sections/TabSection.tsx`
- Optionally delete: `src/components/sections/BlogList.tsx`

- [ ] **Step 1: Check if TabSection and BlogList are still imported anywhere**

```bash
cd "/Users/matthewgoulet/CimTech Green Energy"
grep -r "TabSection" src/ --include="*.tsx" --include="*.ts"
grep -r "BlogList" src/ --include="*.tsx" --include="*.ts"
```

Expected: No imports found (Resources page deleted, Blog section removed from homepage).

- [ ] **Step 2: Delete unused components**

```bash
git rm src/components/sections/TabSection.tsx src/components/sections/BlogList.tsx
```

- [ ] **Step 3: Run full build**

Run: `cd "/Users/matthewgoulet/CimTech Green Energy" && npm run build`
Expected: Build succeeds with no errors. All pages render.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove unused TabSection and BlogList components

These components were only used by the Resources page and homepage
blog section, both of which have been removed."
```

---

### Task 12: Visual Review and Polish

**Files:** Various, based on visual review findings

- [ ] **Step 1: Start dev server and review all pages**

```bash
cd "/Users/matthewgoulet/CimTech Green Energy" && npm run dev
```

Visit each page in the browser:
- `http://localhost:3000` (Homepage)
- `http://localhost:3000/about`
- `http://localhost:3000/industries`
- `http://localhost:3000/capabilities`
- `http://localhost:3000/services`
- `http://localhost:3000/what-we-build`
- `http://localhost:3000/contact`

Check for:
- Navigation links all work
- No broken images
- Dark sections render correctly on Industries page
- Timeline renders correctly on About page
- Industry cards look balanced on homepage
- Rise Power spotlight renders correctly
- Footer links point to correct pages
- Mobile menu works
- Redirects work: `/products` -> `/what-we-build`, `/resources` -> `/about`

- [ ] **Step 2: Fix any issues found during review**

Address layout, spacing, or rendering issues discovered during the visual review.

- [ ] **Step 3: Commit any fixes**

```bash
git add -A
git commit -m "fix: visual polish from site generalization review"
```

- [ ] **Step 4: Run final production build**

```bash
cd "/Users/matthewgoulet/CimTech Green Energy" && npm run build
```

Expected: Clean build, no warnings or errors.
