export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Defense & Military', href: '/industries#defense' },
      { label: 'Commercial & Industrial', href: '/industries#commercial' },
      { label: 'Consumer Products', href: '/industries#consumer' },
      { label: 'Clean Energy', href: '/industries#clean-energy' },
    ],
  },
  {
    label: 'Capabilities',
    href: '/capabilities',
    children: [
      { label: 'Precision CNC Machining', href: '/capabilities#cnc' },
      { label: 'Injection Molding', href: '/capabilities#injection' },
      { label: 'Fabrication & Welding', href: '/capabilities#fabrication' },
      { label: '3D Printing', href: '/capabilities#3d-printing' },
      { label: 'Assembly & Integration', href: '/capabilities#assembly' },
      { label: 'Quality Assurance', href: '/capabilities#qa' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'NPI Prototyping', href: '/services#npi-prototype' },
      { label: 'Product Development', href: '/services#product-dev' },
      { label: 'Repeat Manufacturing', href: '/services#repeat' },
      { label: 'Design for Manufacturing', href: '/services#dfm' },
      { label: 'Zero Inventory Program', href: '/services#zero-inventory' },
      { label: 'System Integration', href: '/services#integration' },
      { label: 'Engineering Development', href: '/services#engineering' },
    ],
  },
  {
    label: 'What We Build',
    href: '/what-we-build',
    children: [
      { label: 'Precision Components', href: '/what-we-build#components' },
      { label: 'Full Assemblies', href: '/what-we-build#assemblies' },
      { label: 'Prototypes & NPI', href: '/what-we-build#prototypes' },
      { label: 'Production at Scale', href: '/what-we-build#production' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Insights', href: '/resources#insights' },
      { label: 'Case Studies', href: '/resources#case-studies' },
      { label: 'Blog', href: '/resources#blog' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const contactInfo = {
  phone: '+1 (604) 575-8853',
  phoneDisplay: '604-575-8853',
  email: 'info@cimtech.green',
  address: '5 - 17942 55th Ave, Surrey, BC, Canada V3S 6C8',
  hours: 'Monday – Friday, 8:30 AM – 5:00 PM PT',
  offices: [
    {
      label: 'Canada — Headquarters',
      addressLines: ['Unit 5 — 17942 55th Avenue', 'Surrey, BC V3S 6C8', 'Canada'],
    },
    {
      label: 'USA — Warehouse',
      addressLines: ['1755 Grant Avenue', 'Blaine, WA 98230', 'United States'],
    },
  ],
  social: {
    facebook: 'https://www.facebook.com/CIMtechGreenEnergy',
    linkedin: 'https://ca.linkedin.com/company/cimtechgreenenergy',
    instagram: 'https://www.instagram.com/cimtechgreenenergy/',
    x: 'https://x.com/CIMtechGreen',
  },
};
