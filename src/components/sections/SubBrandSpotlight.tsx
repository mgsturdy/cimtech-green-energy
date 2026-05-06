import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type SubBrandSpotlightProps = {
  // Modern API (from plan)
  label?: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  // Legacy / content.ts API
  subtitle?: string;
  link?: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
  logo?: string;
  logoAlt?: string;
};

export function SubBrandSpotlight({
  label,
  subtitle,
  title,
  description,
  cta,
  link,
  linkLabel,
  image,
  imageAlt,
  logo,
  logoAlt,
}: SubBrandSpotlightProps) {
  const resolvedLabel = label ?? subtitle;
  const resolvedCta = cta ?? (link && linkLabel ? { label: linkLabel, href: link } : undefined);

  return (
    <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-16 corner-markers">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] animate-gradient-drift"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(41,179,75,0.3), transparent 40%), radial-gradient(circle at 70% 60%, rgba(251,107,60,0.2), transparent 40%)',
          }}
        />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <ScrollReveal className="md:col-span-7">
          {logo && (
            <div className="relative h-14 w-48 mb-6">
              <Image src={logo} alt={logoAlt ?? title} fill className="object-contain object-left" />
            </div>
          )}
          {resolvedLabel && (
            <p className="mono-label text-[var(--color-accent)] mb-4">+ {resolvedLabel}</p>
          )}
          <h2 className="font-semibold text-[var(--text-h1)] leading-[1.05] mb-6">{title}</h2>
          <p className="text-[var(--color-muted)] mb-8 max-w-xl">{description}</p>
          {resolvedCta && (
            <Button href={resolvedCta.href} variant="primary">
              {resolvedCta.label}
            </Button>
          )}
        </ScrollReveal>

        {image && (
          <ScrollReveal delay={0.15} className="md:col-span-5">
            <div className="relative aspect-[4/3] w-full border border-[var(--color-border)] overflow-hidden bg-[var(--color-background)]">
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
