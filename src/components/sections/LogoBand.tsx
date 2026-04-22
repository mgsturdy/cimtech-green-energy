import Image from 'next/image';
import { Marquee } from '@/components/ui/Marquee';

type Logo = { src: string; alt: string };

export function LogoBand({ logos, label }: { logos: Logo[]; label?: string }) {
  return (
    <section className="py-12 md:py-20 border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      {label && (
        <div className="text-center mb-10 px-[var(--spacing-pad-x)]">
          <p className="mono-label">{label}{' // 2005 — PRESENT'}</p>
        </div>
      )}
      <Marquee>
        {logos.map((logo, i) =>
          logo.src ? (
            <div
              key={i}
              className="h-12 md:h-14 w-28 md:w-36 relative opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ) : (
            <div
              key={i}
              className="h-10 px-4 flex items-center justify-center border border-[var(--color-border)] opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="mono-label text-[var(--color-subtle)] whitespace-nowrap">{logo.alt}</span>
            </div>
          )
        )}
      </Marquee>
    </section>
  );
}
