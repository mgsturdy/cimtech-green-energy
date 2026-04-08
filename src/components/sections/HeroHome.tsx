'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedHeadline } from '@/components/ui/AnimatedHeadline';
import { Button } from '@/components/ui/Button';

type HeroHomeProps = {
  // Modern API (from plan)
  label?: string;
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
  // Legacy / content.ts API
  badge?: string;
  headline?: string;
  backgroundImage?: string;
};

export function HeroHome({
  label,
  badge,
  title,
  headline,
  description,
  primaryCta,
  secondaryCta,
  image,
  backgroundImage,
  imageAlt = '',
}: HeroHomeProps) {
  // Resolve props — support both legacy (content.ts) and new API
  const resolvedLabel = label ?? badge;
  const resolvedTitle = title ?? headline ?? '';
  const resolvedImage = image ?? backgroundImage ?? '';

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden border-b border-[var(--color-border)]">
      <Image
        src={resolvedImage}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        style={{ filter: 'url(#cimtech-duotone) brightness(0.45)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(4,31,26,0.4)] via-transparent to-[rgba(4,31,26,0.95)]" />

      {/* Corner markers */}
      <div className="absolute top-24 left-[var(--spacing-pad-x)] mono-label text-[var(--color-accent)]">
        + CIMTECH // EST. 2001 // ONTARIO, CAN
      </div>
      <div className="absolute top-24 right-[var(--spacing-pad-x)] mono-label text-[var(--color-accent)]">
        43.6532°N 79.3832°W +
      </div>

      <div className="relative mx-auto max-w-[1440px] w-full px-[var(--spacing-pad-x)] pb-24 pt-40">
        {resolvedLabel && <p className="mono-label mb-6">{resolvedLabel}</p>}
        <AnimatedHeadline
          text={resolvedTitle}
          className="font-semibold text-[var(--text-display)] leading-[0.95] max-w-5xl"
        />
        {description && (
          <p className="mt-8 max-w-xl text-[var(--color-muted)] text-[var(--text-body)] leading-relaxed">
            {description}
          </p>
        )}
        {primaryCta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href={primaryCta.href} variant="primary">{primaryCta.label}</Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline">{secondaryCta.label}</Button>
            )}
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-[var(--color-border-strong)] rounded-full flex items-start justify-center p-1.5">
          <motion.span
            className="block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
