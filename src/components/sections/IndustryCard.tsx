'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CursorGlow } from '@/components/ui/CursorGlow';
import { ImageSpecimen } from '@/components/ui/ImageSpecimen';
import { ScrollRevealStagger, staggerItemVariants } from '@/components/ui/ScrollReveal';

type Industry = {
  number?: string;
  title: string;
  description: string;
  href: string;
  // Optional image fields — not present on homeContent.industries
  image?: string;
  imageAlt?: string;
  label?: string;
};

export function IndustryCards({ items }: { items: Industry[] }) {
  return (
    <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <motion.div key={i} variants={staggerItemVariants}>
          <Link href={item.href} className="block group h-full">
            <CursorGlow className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-border-strong)] transition-colors corner-markers h-full flex flex-col">
              {item.image && (
                <ImageSpecimen
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  width={360}
                  height={270}
                  caption={item.label}
                  className="mb-4"
                />
              )}
              {item.number && (
                <p className="mono-label text-[var(--color-subtle)] mb-3">{item.number}</p>
              )}
              <h3 className="font-semibold text-[var(--text-h3)] mb-2 flex-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">{item.description}</p>
              <p className="mono-label text-[var(--color-accent)] flex items-center gap-2">
                VIEW SECTOR
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </p>
            </CursorGlow>
          </Link>
        </motion.div>
      ))}
    </ScrollRevealStagger>
  );
}
