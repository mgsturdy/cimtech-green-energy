'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { type AccordionDetailItem } from '@/data/content';

type AccordionDetailProps = { items: AccordionDetailItem[] };

export function AccordionDetail({ items }: AccordionDetailProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-1">
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={item.number}
            className={`border rounded-lg overflow-hidden transition-colors ${
              isActive ? 'border-accent' : 'border-border'
            }`}
          >
            {/* Header */}
            <button
              type="button"
              className="flex items-center gap-3 px-6 py-4 cursor-pointer w-full text-left"
              onClick={() => setActiveIndex(isActive ? -1 : i)}
            >
              <span className="font-mono text-xs text-accent min-w-[24px]">
                {item.number}
              </span>
              <span className="font-semibold text-[15px] flex-1">
                {item.title}
              </span>
              <span className="text-muted text-lg">
                {isActive ? '\u2212' : '+'}
              </span>
            </button>

            {/* Body */}
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-6">
                    {/* Left: overview + sub-sections */}
                    <div>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {item.overview}
                      </p>
                      {item.subSections.map((sub, j) => (
                        <div key={j}>
                          <h4 className="font-semibold text-sm text-foreground mb-1">
                            {sub.title}
                          </h4>
                          <p className="text-sm text-muted leading-relaxed mb-3">
                            {sub.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Right: image */}
                    {item.image && (
                      <div className="relative rounded-lg overflow-hidden h-[280px] w-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover"
                          alt={item.title}
                        />
                      </div>
                    )}
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
