import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Marquee } from '@/components/ui/Marquee';
import { navigation } from '@/data/navigation';

const TICKER = ['● OPERATIONAL', '43.6532°N 79.3832°W', 'EST. 2001', 'ISO 9001:2015', 'RUNTIME 23Y'];

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

      <div className="mx-auto max-w-[1440px] px-[var(--spacing-pad-x)] py-20 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <Link href="/" className="text-[var(--color-foreground)] inline-block">
            <Logo variant="lockup" className="h-7 w-auto" animated={false} />
          </Link>
          <p className="mono-label mt-6 max-w-xs">
            Precision manufacturing partner. Defense. Commercial. Consumer. Clean energy.
          </p>
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
            <li>Ontario, Canada</li>
            <li>hello@cimtech.ca</li>
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
          style={{ WebkitTextStroke: '1px rgba(168,255,31,0.25)' }}
        >
          CIMTECH
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] py-6 text-center mono-label text-[var(--color-subtle)]">
        © 2001–{new Date().getFullYear()} CIMtech Green Energy. All systems nominal.
      </div>
    </footer>
  );
}
