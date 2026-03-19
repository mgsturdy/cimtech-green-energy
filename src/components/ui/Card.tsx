import Link from 'next/link';
import { type ReactNode } from 'react';

export function Card({
  children,
  href,
  className = '',
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const base = `border border-border bg-surface rounded-xl p-6 lg:p-8 ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} block transition-all duration-300 hover:border-accent/30 hover:bg-surface-elevated group`}
      >
        {children}
      </Link>
    );
  }

  return <div className={base}>{children}</div>;
}
