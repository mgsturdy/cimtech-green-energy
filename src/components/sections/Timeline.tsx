'use client';

import { motion } from 'framer-motion';
import { ScrollRevealStagger, staggerItemVariants } from '@/components/ui/ScrollReveal';
import { type TimelineItem } from '@/data/content';

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--color-border)]" />
      <ScrollRevealStagger className="space-y-12">
        {items.map((m, i) => (
          <motion.div key={i} variants={staggerItemVariants} className="relative pl-16">
            <span className="absolute left-[18px] top-2 w-4 h-4 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-background)]" />
            <p className="mono-label text-[var(--color-accent)] mb-1">{m.year}</p>
            <h3 className="font-semibold text-[var(--text-h3)] mb-2">{m.title}</h3>
            <p className="text-[var(--color-muted)] max-w-xl">{m.description}</p>
          </motion.div>
        ))}
      </ScrollRevealStagger>
    </div>
  );
}
