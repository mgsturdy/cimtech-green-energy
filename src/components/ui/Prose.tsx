import { type ReactNode } from 'react';

export function Prose({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-none text-muted leading-relaxed [&_strong]:text-foreground [&_a]:text-accent [&_a:hover]:text-accent-hover [&_h2]:font-sans [&_h2]:text-foreground [&_h3]:font-sans [&_h3]:text-foreground [&_li]:marker:text-accent ${className}`}
    >
      {children}
    </div>
  );
}
