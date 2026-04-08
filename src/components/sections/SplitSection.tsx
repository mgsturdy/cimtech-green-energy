import { type ReactNode } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ImageSpecimen } from '@/components/ui/ImageSpecimen';

type SplitSectionProps = {
  badge?: string;
  title: string;
  image: string;
  imageAlt: string;
  imageOverlay?: string;
  reverse?: boolean;
  children: ReactNode;
};

export function SplitSection({
  badge,
  title,
  image,
  imageAlt,
  imageOverlay,
  reverse = false,
  children,
}: SplitSectionProps) {
  return (
    <div className={`grid grid-cols-12 gap-8 items-center ${reverse ? 'direction-rtl' : ''}`}>
      <ScrollReveal className={`col-span-12 md:col-span-7 ${reverse ? 'md:order-last' : ''}`}>
        {badge && (
          <p className="mono-label text-[var(--color-accent)] mb-4 flex items-center gap-2">
            <span className="h-px w-6 bg-[var(--color-accent)]" /> {badge}
          </p>
        )}
        <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-6 max-w-xl">{title}</h2>
        <div className="text-[var(--color-muted)] space-y-4 max-w-lg">{children}</div>
      </ScrollReveal>
      <ScrollReveal delay={0.15} className="col-span-12 md:col-span-5">
        <ImageSpecimen
          src={image}
          alt={imageAlt}
          caption={imageOverlay}
          width={445}
          height={319}
        />
      </ScrollReveal>
    </div>
  );
}
