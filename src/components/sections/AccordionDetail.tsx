'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { type AccordionDetailItem } from '@/data/content';

type AccordionDetailProps = { items: AccordionDetailItem[] };

export function AccordionDetail({ items }: AccordionDetailProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const reduced = useReducedMotion();

  return (
    <div className="border-y border-[var(--color-border)]">
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={item.number}
            className={`border-b border-[var(--color-border)] last:border-b-0 transition-colors ${
              isActive ? 'bg-[var(--color-surface)]' : ''
            }`}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between py-8 text-left group relative"
              onClick={() => setActiveIndex(isActive ? -1 : i)}
            >
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-accent)]" />
              )}
              <div className="flex items-center gap-6 pl-6 md:pl-8">
                <span className="mono-label text-[var(--color-subtle)]">{item.number}</span>
                <span className="font-semibold text-[var(--text-h3)] group-hover:text-[var(--color-accent)] transition-colors">
                  {item.title}
                </span>
              </div>
              <motion.span
                animate={reduced ? undefined : { rotate: isActive ? 45 : 0 }}
                className="font-mono text-2xl text-[var(--color-accent)] pr-6 md:pr-8"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={reduced ? undefined : { height: 'auto', opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pl-6 md:pl-20 pr-6 md:pr-8 pb-10 max-w-3xl">
                    <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                      {item.overview}
                    </p>
                    <div className="space-y-5">
                      {item.subSections.map((sub, j) => (
                        <div key={j} className="border-l border-[var(--color-border)] pl-5">
                          <h4 className="mono-label text-[var(--color-accent)] mb-1.5">
                            {sub.title}
                          </h4>
                          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                            {sub.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
