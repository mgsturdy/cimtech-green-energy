export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Services', href: '/services' },
  { label: 'What We Build', href: '/what-we-build' },
  { label: 'Resources', href: '/resources' },
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
    facebook: 'https://www.facebook.com/CIMtechGreen-100166986037085',
    twitter: 'https://twitter.com/CIMtechGreen',
    linkedin: 'https://www.linkedin.com/company/cimtechgreenenergy',
    youtube: 'https://www.youtube.com/@CIMtechGreenEnergy',
    instagram: 'https://www.instagram.com/cimtechgreenenergy/',
  },
};
