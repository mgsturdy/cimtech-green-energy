'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';
import { navigation } from '@/data/navigation';

export function Header() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] backdrop-blur-[30px] bg-[rgba(4,31,26,0.7)]">
      <div className="mx-auto max-w-[1440px] px-[var(--spacing-pad-x)] flex items-center justify-between h-20">
        <Link href="/" className="text-[var(--color-foreground)]">
          <Logo variant="lockup" className="h-9 md:h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative mono-label text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              <span className="mr-2 text-[var(--color-subtle)]">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px bg-[var(--color-accent)] w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-px w-6 bg-[var(--color-foreground)]"
            animate={reduced ? undefined : open ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
            style={reduced ? { rotate: open ? 45 : 0, y: open ? 3 : 0 } : undefined}
          />
          <motion.span
            className="block h-px w-6 bg-[var(--color-foreground)]"
            animate={reduced ? undefined : open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
            style={reduced ? { rotate: open ? -45 : 0, y: open ? -3 : 0 } : undefined}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -10 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -10 }}
            className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)]"
          >
            <nav className="px-[var(--spacing-pad-x)] py-6 flex flex-col gap-4">
              {navigation.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mono-label text-[var(--color-foreground)]"
                  onClick={() => setOpen(false)}
                >
                  <span className="mr-2 text-[var(--color-subtle)]">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
