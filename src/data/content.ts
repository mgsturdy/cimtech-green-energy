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
