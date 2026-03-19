import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { contactInfo } from '@/data/navigation';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Services', href: '/services' },
];

const products = [
  { label: 'Fuel Cell Stacks', href: '/products#fuel-cell-stacks' },
  { label: 'Green Hydrogen', href: '/products#green-hydrogen' },
  { label: 'Electrolyzer', href: '/products#electrolyzer' },
];

const resources = [
  { label: 'Blog', href: '/resources/blog' },
  { label: 'Careers', href: '/resources/careers' },
  { label: 'Portfolio', href: '/resources/portfolio' },
  { label: 'Media', href: '/resources/media' },
];

const socialLinks = [
  { label: 'Li', href: contactInfo.social.linkedin },
  { label: 'Fb', href: contactInfo.social.facebook },
  { label: 'Ig', href: contactInfo.social.instagram },
  { label: 'YT', href: contactInfo.social.youtube },
  { label: 'X', href: contactInfo.social.twitter },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[#94A3B8] hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-[#94A3B8]">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-6">
            <Image
              src="/images/logo.png"
              alt="CIMtech Green Energy"
              width={140}
              height={36}
              className="h-9 w-auto brightness-0 invert"
            />
            <div className="space-y-2 text-sm">
              <p>{contactInfo.address}</p>
              <p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-8 h-8 items-center justify-center border border-[#334155] rounded-md text-xs text-[#94A3B8] hover:border-accent hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Products" links={products} />
          <FooterColumn title="Resources" links={resources} />
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[#334155]">
        <Container className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#94A3B8]">
          <p>&copy; 2026 CIMtech Green Energy Mfg</p>
          <p>
            A CimTech company &middot; Sister company of{' '}
            <a
              href="https://risehydrogen.com"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rise Hydrogen
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
