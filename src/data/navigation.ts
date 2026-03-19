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
