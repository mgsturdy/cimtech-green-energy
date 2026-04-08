'use client';

import { motion } from 'framer-motion';
import { ImageSpecimen } from '@/components/ui/ImageSpecimen';
import { ScrollRevealStagger, staggerItemVariants } from '@/components/ui/ScrollReveal';

// Accepts both the legacy portfolio.ts shape { image, caption }
// and the plan's new shape { title, category?, image, imageAlt? }
type Item = {
  image: string;
  caption?: string;   // legacy: portfolio.ts
  title?: string;     // new API
  category?: string;  // new API
  imageAlt?: string;  // new API
};

export function PortfolioGrid({ items, columns: _columns }: { items: Item[]; columns?: number }) {
  return (
    <ScrollRevealStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, i) => {
        const title = item.title ?? item.caption ?? '';
        const alt = item.imageAlt ?? title;
        const captionLabel = `${String(i + 1).padStart(3, '0')} // ${item.category ?? 'PROJECT'}`;
        return (
          <motion.div key={i} variants={staggerItemVariants} className="group">
            <ImageSpecimen
              src={item.image}
              alt={alt}
              width={240}
              height={180}
              caption={captionLabel}
            />
            <h3 className="mt-4 font-semibold text-base group-hover:text-[var(--color-accent)] transition-colors">
              {title}
            </h3>
          </motion.div>
        );
      })}
    </ScrollRevealStagger>
  );
}
