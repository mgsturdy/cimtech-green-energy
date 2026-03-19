'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { navigation, contactInfo } from '@/data/navigation';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const toggleMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-sm ${
          scrolled ? 'border-b border-border shadow-sm' : ''
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="CIMtech Green Energy home">
              <Image
                src="/images/logo.png"
                alt="CIMtech Green Energy"
                width={140}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Primary navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-accent'
                      : 'text-muted hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop right side: phone + CTA */}
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="font-mono text-sm text-muted transition-colors hover:text-foreground"
              >
                {contactInfo.phoneDisplay}
              </a>
              <Button href="/contact" size="sm">
                Get a Quote
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-200 ${
                    mobileOpen ? 'translate-y-[4px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-200 ${
                    mobileOpen ? '-translate-y-[4px] -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </Container>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-background transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal={mobileOpen}
        aria-label="Navigation menu"
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-10 h-10"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <Container className="flex flex-col h-[calc(100%-56px)]">
          <nav className="flex-1 space-y-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-4 text-2xl font-semibold tracking-tight transition-colors ${
                  pathname === item.href
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom section: phone + CTA */}
          <div className="border-t border-border py-8 space-y-4">
            <a
              href={`tel:${contactInfo.phone}`}
              className="block font-mono text-lg text-muted"
            >
              {contactInfo.phoneDisplay}
            </a>
            <Button href="/contact" size="lg" className="w-full">
              Get a Quote
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
