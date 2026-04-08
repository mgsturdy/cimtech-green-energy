'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Item = { title: string; description: string; number?: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-y border-[var(--color-border)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`border-b border-[var(--color-border)] ${isOpen ? 'bg-[var(--color-surface)]' : ''}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-8 text-left group relative"
            >
              {isOpen && (
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-accent)]" />
              )}
              <div className="flex items-center gap-6 pl-6">
                <span className="mono-label text-[var(--color-subtle)]">
                  {item.number ?? String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-semibold text-[var(--text-h3)] group-hover:text-[var(--color-accent)] transition-colors">
                  {item.title}
                </span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="font-mono text-2xl text-[var(--color-accent)] pr-6"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pl-16 pr-6 pb-8 max-w-2xl text-[var(--color-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
