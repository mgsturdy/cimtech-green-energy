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

// ============================================
// HOME PAGE
// ============================================

export const homeContent = {
  hero: {
    badge: "Canada's Top 10 Manufacturing Company",
    headline: 'Award-Winning Green Energy Manufacturing',
    description: 'Hydrogen fuel cell & electrolyzer manufacturing with over two decades of experience. Instrumental in implementing 60,000+ fuel cell devices in real-world applications.',
    primaryCta: { label: 'Get a Quote', href: '/contact' },
    secondaryCta: { label: 'Our Capabilities', href: '/capabilities' },
    backgroundImage: '/images/hero-1.jpg',
  } as HeroContent,

  metrics: [
    { value: '20+', label: 'Years Experience' },
    { value: '60K+', label: 'Fuel Cell Devices' },
    { value: '10K', label: 'Sq Ft Facility' },
    { value: 'Top 10', label: 'In Canada' },
  ] as Metric[],

  about: {
    badge: 'About CIMtech',
    title: 'Accelerating Green Energy Manufacturing',
    description: "CIMtech Green Energy is a fast-growing technological firm specializing in hydrogen fuel cell & electrolyzer manufacturing. We've recently doubled our manufacturing footprint with a 10,000 sq. ft advanced facility in Vancouver, increasing service levels by 200%.",
    secondaryText: 'Our turnkey solutions pave the way for development and manufacturing of fuel cell electric vehicle components. CIMtech-manufactured components are utilized by global players such as Walmart, Amazon, and Home Depot.',
    image: '/images/ceo.jpg',
    imageAlt: 'Paul Ghotra, Founder & CEO',
    imageCaption: 'Paul Ghotra, Founder & CEO',
  },

  capabilities: [
    { number: '01', title: 'Precision CNC Machining', description: '5-axis machining, CNC turning, grinding, and die & mold manufacturing. 20 CNC machines equipped with 4th & 5th axis capabilities for intricate shapes with micro-millimeter precision.', image: '/images/capability-1.jpg' },
    { number: '02', title: 'Injection Molding', description: 'Low-volume and high-volume injection molding for plastic parts, offering precision, repeatability, and efficiency with lower tooling costs.', image: '/images/capability-2.jpg' },
    { number: '03', title: 'Fabrication & Welding', description: 'Laser cutting, waterjet cutting, sheet metal fabrication, and various welding techniques including MIG, TIG, and resistance welding.', image: '/images/capability-3.jpg' },
    { number: '04', title: '3D Printing', description: 'FDM, SLA, and Metal 3D printing for rapid prototyping and production of complex geometries with exceptional precision.', image: '/images/capability-4.jpg' },
    { number: '05', title: 'Sub-Assemblies', description: 'Heat staking, autoclaving, and hydraulic press services for comprehensive turnkey assembly solutions.', image: '/images/capability-5.jpg' },
    { number: '06', title: 'Quality Assurance', description: 'CMM inspection, ISO9001 and AS9100D certified, Controlled Goods Program compliant. Rigorous quality management throughout production.', image: '/images/capability-6.jpg' },
  ] as AccordionItem[],

  products: [
    { title: 'Fuel Cell Stacks', description: 'Electrochemical cells converting hydrogen chemical energy into electricity through reactions of hydrogen and oxygen.', image: '/images/product-1.jpg', imageAlt: 'Fuel Cell Stacks' },
    { title: 'Green Hydrogen', description: 'Hydrogen produced from clean, renewable sources like wind & solar power for large-scale sustainable energy.', image: '/images/product-2.jpg', imageAlt: 'Green Hydrogen' },
    { title: 'Electrolyzer', description: 'PEM electrolyzers for large-scale hydrogen production, achieving up to 80% efficiency.', image: '/images/product-3.jpg', imageAlt: 'Electrolyzer' },
  ] as ProductItem[],

  clientLogos: [
    { src: '/images/client-logo-1.png', alt: 'Client 1' },
    { src: '/images/client-logo-2.png', alt: 'Client 2' },
    { src: '/images/client-logo-3.png', alt: 'Client 3' },
    { src: '/images/client-logo-4.png', alt: 'Client 4' },
    { src: '/images/client-logo-5.png', alt: 'Client 5' },
    { src: '/images/client-logo-6.png', alt: 'Client 6' },
    { src: '/images/client-logo-7.png', alt: 'Client 7' },
  ],

  cta: {
    title: 'Get Your Free Consultation & Quote',
    description: 'Our engineering team is ready to discuss your fuel cell manufacturing, electrolyzer development, or DFM needs. Contact us today.',
  },

  media: {
    description: 'Our team is available to provide background, facilitate interview requests, and media assistance.',
    downloads: [
      { label: 'Corporate Presentation' },
      { label: 'Brochure' },
      { label: 'Projects' },
    ],
    phone: '+1 (604) 575-8853',
    email: 'info@cimtech.green',
  },
};

// ============================================
// ABOUT PAGE
// ============================================

export const aboutContent = {
  story: [
    "CIMtech Green Energy is a fast-growing technological firm, specialising in hydrogen fuel cell & electrolyzer manufacturing. We have recently doubled our manufacturing footprint in Vancouver, Canada through an acquisition of a 10,000 sq. ft advanced manufacturing facility. This expansion in operational capabilities has increased our service levels by 200%. Two decades of manufacturing expertise in Hydrogen energy sector offers distinct benefits to our Global customers.",
    "CIMtech has also been nominated as a top 10 manufacturing company in Canada. We are providing services from proof-of-concept prototypes to large-scaled manufacturing. Our turnkey solutions are paving the way for the development and manufacturing of fuel cell electric vehicle components and assemblies. CIMtech is playing a vital role in creating a greener planet with carbon-neutral initiatives for making our planet a safe place for future generations.",
    "CIMtech-manufactured fuel cell components are utilized by global players such as Walmart, Amazon, and Home Depot for their hydrogen-powered forklift equipment. Fuel cell sub-assemblies manufactured by CIMtech are also utilized in hydrogen fuel-cell powered electric vehicles such as HYVIA delivery vans in Europe (Renault Group), FedEx airport tuggers at Albany International Airport in New York and hydrogen-fuel cell electric vehicles.",
    "CIMtech has earned a reputation for providing innovative and cost-effective solutions that save clients both time and money; having effective systems, processes, and policies in place; and project history that demonstrates a depth of expertise and experience we can assist our customers for rapid growth in green energy sector.",
    "CIMtech Green Energy vision is to focus on accelerating green energy products to make world a better place for all of us and respect for the planet.",
  ],

  pillars: [
    {
      number: '01',
      title: 'Advanced Technology',
      description: 'In Industry 4.0, the successful deployment of advanced technologies such as digital manufacturing (DM), computer numerical control (CNC) machining, enterprise resource planning (ERP), and quality management systems (QMS) is essential for the survival and competitiveness of organizations. CIMtech is based on the premise that emerging technologies will enable a new era of collaboration between humans and machines. Industry 4.0 and the digital transformation of manufacturing is revolutionizing how fuel cells are made. The automated processes and real-time data collection made possible by Industry 4.0 are helping to make fuel cells more reliable and efficient than ever before.',
    },
    {
      number: '02',
      title: 'On Time Delivery',
      description: 'CIMtech is an ERP software-based company. Enterprise Resource Planning (ERP) is a type of software that helps businesses manage and streamline their operations. One of the key benefits of ERP is that it can help improve On-Time-Delivery rates. By integrating all aspects of the business, from manufacturing to accounting, ERP provides visibility into every stage of the process. This makes it easier to identify potential bottlenecks and delays. ERP manages inventory levels for raw material and ensures that we have enough material for end products to meet our customer demands.',
    },
    {
      number: '03',
      title: 'Expert Engineers',
      description: 'As a leading provider of engineering services, we have the experience and technical knowledge to bring your 3D models to life. We use the latest innovative technologies and processes to deliver high quality results, on time and on budget. We also offer troubleshooting and cost-effective solutions to meet your specific needs. CIMtech is capable of scaled manufacturing that helps to take products from design and prototype stage to production.',
    },
    {
      number: '04',
      title: 'Customer Support',
      description: 'Electrolyzers, Fuel cells, and Stacks are just a few of the products we offer comprehensive support for. We have extensive experience working with all types of electrolyzer, fuel cell, and stack technologies, and our team is highly qualified to provide the quality support you need. Contact us today to learn more about our customer support services.',
    },
  ] as PillarItem[],

  keyFacts: {
    title: 'Our Growth',
    stats: [
      '10,000 sq. ft advanced manufacturing facility',
      '200% increase in service levels',
      'Doubled manufacturing footprint',
    ],
    image: '/images/about-card.jpg',
    imageAlt: 'CIMtech facility',
  },

  vision: 'CIMtech Green Energy vision is to focus on accelerating green energy products to make world a better place for all of us and respect for the planet.',
};

// ============================================
// CAPABILITIES PAGE
// ============================================

export const capabilitiesContent = {
  overview: "With over two decades of manufacturing experience in Fuel Cell & Electrolyzer, CIMtech's Prototype Engineering team is ready to tackle your NPI (New Product Introduction) projects in just 14 days. Our capabilities extend beyond the production of individual CNC Machined parts. We offer complete assembly services, leveraging our 20 years of expertise to drive down your manufacturing costs.",

  capabilities: [
    {
      number: '01',
      title: 'Precision CNC Machining',
      overview: 'Our high-speed milling and multi-axis turning capabilities allow us to craft intricate shapes in a single setup, with micro-millimeter precision.',
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
      overview: 'Precision injection molding for prototyping through high-volume production runs.',
      subSections: [
        { title: 'Low-Volume Injection Molding', description: 'Low-volume injection molding caters to the production of small to medium quantities of plastic parts, typically ranging from a few hundred to a few thousand units. Ideal for prototyping, market testing, and small-batch production.' },
        { title: 'High-Volume Injection Molding', description: 'High-volume injection molding is a production process used to manufacture large quantities of plastic parts with consistent quality and efficiency, leveraging high-speed machines and multi-cavity molds.' },
      ],
      image: '/images/capability-2.jpg',
    },
    {
      number: '03',
      title: 'Fabrication & Welding',
      overview: 'Comprehensive fabrication services including cutting, forming, and joining of metals.',
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
      title: '3D Printing',
      overview: 'Additive manufacturing for rapid prototyping and production of complex geometries.',
      subSections: [
        { title: 'FDM 3D Printing', description: 'Fused Deposition Modeling (FDM) 3D printing fabricates parts layer by layer from thermoplastic materials using a heated nozzle to extrude molten filament onto a build platform.' },
        { title: 'SLA 3D Printing', description: 'Stereolithography (SLA) 3D printing utilizes photopolymerization to produce high-resolution parts with exceptional surface finish using a UV laser to selectively cure liquid resin.' },
        { title: 'Metal 3D Printing', description: 'Metal 3D printing leverages advanced techniques to produce metal parts with exceptional precision using metal powders selectively melted layer by layer with a high-powered laser or electron beam.' },
      ],
      image: '/images/capability-4.jpg',
    },
    {
      number: '05',
      title: 'Sub-Assemblies',
      overview: 'Complete assembly services for turnkey manufacturing solutions.',
      subSections: [
        { title: 'Heat Staking', description: 'Heat staking is a precision manufacturing process commonly used to join thermoplastic parts together by heating a metal or thermoplastic stake and pressing it into a preformed hole.' },
        { title: 'Autoclaving', description: 'Autoclaving is a critical process in the manufacturing of composite materials, subjecting composite layups to elevated temperatures and pressures within an autoclave chamber.' },
        { title: 'Hydraulic Press', description: 'Hydraulic press technology plays a vital role in various manufacturing processes, offering immense power and versatility for shaping, forming, and joining metal components.' },
      ],
      image: '/images/capability-5.jpg',
    },
    {
      number: '06',
      title: 'Quality Assurance',
      overview: 'Rigorous quality management systems ensuring precision and compliance.',
      subSections: [
        { title: 'CMM Inspection', description: 'CIMtech employs cutting-edge Coordinate Measuring Machine (CMM) inspection techniques to ensure the precision and accuracy of manufactured components, verifying dimensional accuracy, geometric tolerances, and surface finish.' },
        { title: 'ISO9001', description: 'CIMtech proudly maintains ISO 9001 certification, underscoring dedication to excellence in quality management systems with rigorous processes for product design, manufacturing, and customer satisfaction.' },
        { title: 'AS9100D', description: 'CIMtech holds AS9100D certification, symbolizing compliance with stringent quality management requirements specific to aerospace manufacturing.' },
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
    'Comprehensive Sub-Assemblies, CNC Parts, Prototyping to Full Production',
    'Technical Expertise, including CNC Machinists & Manufacturing Engineers',
  ],
};

// ============================================
// SERVICES PAGE
// ============================================

export const servicesContent = {
  services: [
    { number: '01', title: 'NPI - Prototype Development', description: 'New Product Introduction (NPI) prototype development involves the creation of initial product models or samples to validate design concepts and functionalities before full-scale production. These services leverage advanced technologies such as 3D printing, CNC machining, and rapid prototyping to quickly produce functional prototypes with high precision and quality.' },
    { number: '02', title: 'NPI - Product Development', description: 'New Product Introduction (NPI) encompasses the critical stages of bringing a new product from concept to market. NPI product development services offer comprehensive support throughout this process, including concept ideation, design and engineering, prototyping, testing, and manufacturing ramp-up.' },
    { number: '03', title: 'Repeat Manufacturing', description: 'Repeat manufacturing with global resources involves optimizing production processes and supply chains for the ongoing manufacturing of existing products. This approach leverages a global network of suppliers, partners, and facilities to ensure consistent quality, cost-effectiveness, and scalability in production.' },
    { number: '04', title: 'Design for Manufacturing (DFM)', description: 'Design for Manufacturing (DFM) is a methodology focused on optimizing product designs for efficient and cost-effective manufacturing processes. DFM services involve collaboration between design engineers and manufacturing experts to identify and address potential manufacturing challenges early in the product development cycle.' },
    { number: '05', title: 'Zero Inventory Program', description: 'The Zero Inventory Program is a supply chain management strategy aimed at minimizing inventory levels while maintaining high product availability and customer satisfaction. This program utilizes advanced forecasting, demand planning, and inventory optimization techniques to synchronize production with customer demand.' },
    { number: '06', title: 'Electrolyzer & Fuel Cell Solutions', description: 'Electrolyzer and fuel cell solutions encompass technologies for producing hydrogen through electrolysis and generating electricity through fuel cell reactions. These solutions offer sustainable alternatives to traditional energy sources, enabling clean and efficient power generation for various applications.' },
    { number: '07', title: 'Engineering Development', description: 'Engineering development services provide comprehensive support for the design, development, and optimization of complex engineering systems and products. These services encompass a wide range of disciplines, including mechanical, electrical, software, and systems engineering.' },
  ] as ServiceItem[],
};

// ============================================
// PRODUCTS PAGE
// ============================================

export const productsContent = {
  products: [
    {
      title: 'Fuel Cell Stacks',
      description: "Fuel cells are a type of electrochemical cell that converts the chemical energy of a fuel into electricity through an electrochemical reaction of hydrogen and oxygen. Fuel cell stacks typically consist of a stack of proton exchange membrane (PEM) fuel cells that are connected in series or parallel, with each cell containing two electrodes (an anode and a cathode) separated by electrolyte. The anode and cathode react with hydrogen and oxygen to produce water, heat, and electricity. Hydrogen ions flow through the electrolyte from the anode to the cathode, and electrons flow through an external circuit from the anode to the cathode, generating an electric current that can be used to power devices such as electric motors.",
      image: '/images/product-1.jpg',
      imageAlt: 'Fuel Cell Stacks',
    },
    {
      title: 'Green Hydrogen',
      description: "Green hydrogen is a type of hydrogen produced from renewable sources, such as wind or solar power. Electrolyzers are currently being developed for large-scale production of hydrogen. The resulting hydrogen is known as Green Hydrogen because it is produced from water using electricity generated through clean & renewable sources. In contrast, Gray hydrogen & Blue hydrogen are produced from fossil fuels using natural gas. Green hydrogen can be used in fuel cells to generate clean energy and has the potential to play a significant role in the transition to a low-carbon economy.",
      image: '/images/product-2.jpg',
      imageAlt: 'Green Hydrogen',
    },
    {
      title: 'Electrolyzer',
      description: "Water electrolysis is a viable pathway for hydrogen generation because hydrogen in the form of water is abundantly available. Splitting of water is achieved by overcoming the inter molecular forces of the constituent atoms (hydrogen and oxygen), requiring an electric current to pass through it. Electrolyzers are becoming more efficient, with some models achieving up to 80% efficiency. PEM electrolyzers use a proton exchange membrane to separate hydrogen and oxygen during the electrolysis process.",
      image: '/images/product-3.jpg',
      imageAlt: 'Electrolyzer',
    },
  ] as ProductItem[],
};

// ============================================
// RESOURCES PAGE
// ============================================

export const resourcesContent = {
  history: [
    "Paul Ghotra's journey began in 1988 when he moved to Vancouver, Canada. He started at a BC hi-tech company that grew from 10 employees to 5,000 over fifteen years.",
    "His father's passing was the catalyst for his engineering career. Educated at a prestigious technical institute specializing in precision mechanics, instrumentation, and manufacturing engineering.",
    "Paul founded CIMTech Green Energy two decades ago, building it into one of Canada's top 10 manufacturing companies in the green energy sector.",
  ],

  team: {
    name: 'Paul Ghotra',
    title: 'Founder & CEO',
    image: '/images/ceo.jpg',
    quote: 'Countries around the world are setting net zero targets and accelerating the move towards clean energy alternatives in vehicles and equipment. We are proud to be supporting these targets and this expansion and investment in new, advanced equipment will allow us to continue being a key global supply chain player in this space.',
    facilityDescription: "CIMtech's cutting-edge digital manufacturing facility for Industry 4.0. CIMTech proudly holds the honor of being among the top 10 manufacturing companies in Canada. Our comprehensive services span from crafting proof-of-concept prototypes to executing large-scale manufacturing projects for the fuel cell industry.",
  },

  careers: {
    mission: 'Explore exciting career opportunities with CIMTech. Our mission is to build a zero-emissions world through advanced manufacturing of fuel cell and electrolyzer components.',
    openings: [
      { title: 'Sales & Business Development Representative', description: 'Join our growing team and help drive business growth in the green energy manufacturing sector.' },
    ],
  },

  media: {
    description: 'Our team is available to provide background, facilitate interview requests, and other media assistance.',
    downloads: [
      { label: 'Corporate Presentation' },
      { label: 'Brochure' },
      { label: 'Projects' },
    ],
  },
};

// ============================================
// CONTACT PAGE
// ============================================

export const contactContent = {
  heading: 'Contact Us - Get in Touch',
  description: 'Have a question about products or partnering? Need a quote? Simply complete the form and someone will be in touch!',
};

// ============================================
// CONSULTATION FORM OPTIONS
// ============================================

export const serviceOptions = [
  'Fuel Cell Solution',
  'Electrolyzer Development',
  'DFM Services',
  'Zero Inventory Program',
];
