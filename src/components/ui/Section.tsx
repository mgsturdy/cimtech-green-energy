import type { HTMLAttributes } from 'react';

export function Section({ className = '', children, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={`relative py-[var(--spacing-section-y)] ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}
