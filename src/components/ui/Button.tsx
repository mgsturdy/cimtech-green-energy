import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'ghost' | 'outline';
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<'button'>, 'ref'>;

const base =
  'group relative inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] px-5 py-3 overflow-hidden transition-colors border';

const variants = {
  primary:
    'border-[var(--color-accent)] text-[var(--color-background)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]',
  outline:
    'border-[var(--color-border-strong)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost:
    'border-transparent text-[var(--color-foreground)] hover:text-[var(--color-accent)]',
};

export function Button({ href, variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
