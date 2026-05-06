import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Marquee } from '@/components/ui/Marquee';
import { navigation, contactInfo } from '@/data/navigation';

const TICKER = ['● OPERATIONAL', '43.6532°N 79.3832°W', 'EST. 2005', 'ISO 9001:2015', 'AS9100D · AEROSPACE', 'RUNTIME 21Y'];

const SOCIAL_LINKS = [
  { key: 'facebook', label: 'Meta', href: contactInfo.social.facebook, icon: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z' },
  { key: 'linkedin', label: 'LinkedIn', href: contactInfo.social.linkedin, icon: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67V9.83h2.67v8.51zM7 8.65a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.69h-2.66v-4.13c0-.99-.02-2.27-1.38-2.27-1.39 0-1.6 1.08-1.6 2.2v4.2h-2.66V9.83h2.55v1.16h.04a2.79 2.79 0 0 1 2.51-1.38c2.69 0 3.19 1.77 3.19 4.07v4.66z' },
  { key: 'instagram', label: 'Instagram', href: contactInfo.social.instagram, icon: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 0 1-1.38-.9 3.71 3.71 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.92c-3.14 0-3.51.01-4.75.07-.99.04-1.53.21-1.89.35-.47.18-.81.4-1.17.76-.36.36-.58.7-.76 1.17-.14.36-.31.9-.35 1.89-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.99.21 1.53.35 1.89.18.47.4.81.76 1.17.36.36.7.58 1.17.76.36.14.9.31 1.89.35 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.99-.04 1.53-.21 1.89-.35.47-.18.81-.4 1.17-.76.36-.36.58-.7.76-1.17.14-.36.31-.9.35-1.89.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.99-.21-1.53-.35-1.89a3.16 3.16 0 0 0-.76-1.17 3.16 3.16 0 0 0-1.17-.76c-.36-.14-.9-.31-1.89-.35-1.24-.06-1.61-.07-4.75-.07zm0 3.27a4.65 4.65 0 1 1 0 9.3 4.65 4.65 0 0 1 0-9.3zm0 7.67a3.02 3.02 0 1 0 0-6.04 3.02 3.02 0 0 0 0 6.04zm5.92-7.85a1.09 1.09 0 1 1-2.17 0 1.09 1.09 0 0 1 2.17 0z' },
  { key: 'x', label: 'X', href: contactInfo.social.x, icon: 'M18.244 2H21.5l-7.59 8.67L23 22h-6.84l-5.36-7-6.13 7H1.41l8.12-9.27L1 2h6.99l4.85 6.41L18.24 2zm-1.2 18h1.84L7.04 4H5.07l11.97 16z' },
] as const;

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-background)] border-t border-[var(--color-border)]">
      <div className="border-b border-[var(--color-border)]">
        <Marquee pauseOnHover={false} className="py-4">
          {TICKER.map((t, i) => (
            <span key={i} className="mono-label whitespace-nowrap">{t}</span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-[1440px] px-[var(--spacing-pad-x)] py-14 md:py-20 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <Link href="/" className="text-[var(--color-foreground)] inline-block">
            <Logo variant="lockup" className="h-10 w-auto" animated={false} />
          </Link>
          <p className="mono-label mt-6 max-w-xs">
            Precision manufacturing partner. Defense. Commercial. Consumer. Clean energy.
          </p>

          <div className="mt-8">
            <p className="mono-label text-[var(--color-subtle)] mb-3">FOLLOW</p>
            <ul className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.key}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 inline-flex items-center justify-center border border-[var(--color-border)] text-[var(--color-foreground)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                      <path d={s.icon} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3">
          <p className="mono-label text-[var(--color-subtle)] mb-4">NAVIGATION</p>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[var(--color-foreground)] hover:text-[var(--color-accent)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 md:col-span-3">
          <p className="mono-label text-[var(--color-subtle)] mb-4">CONTACT</p>
          <ul className="space-y-2 text-sm">
            <li>Surrey, BC, Canada</li>
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-[var(--color-accent)] break-all"
              >
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                className="hover:text-[var(--color-accent)]"
              >
                {contactInfo.phone}
              </a>
            </li>
            <li className="mono-label text-[var(--color-accent)] mt-4">● RESPONDS WITHIN 24H</li>
          </ul>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none overflow-hidden"
      >
        <div
          className="font-sans font-semibold text-[20vw] leading-[0.8] tracking-[-0.04em] text-transparent"
          style={{ WebkitTextStroke: '1px rgba(41,179,75,0.25)' }}
        >
          CIMTECH
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] py-6 text-center mono-label text-[var(--color-subtle)]">
        © 2005–{new Date().getFullYear()} CIMtech Green Energy. All systems nominal.
      </div>
    </footer>
  );
}
