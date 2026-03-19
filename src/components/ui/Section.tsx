import { type ReactNode } from 'react';

export function Section({
  children,
  className = '',
  id,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  const darkClasses = dark
    ? 'bg-gradient-to-br from-[#1A1A2E] to-[#0f2a1a] text-white [&_.text-muted]:text-[#94A3B8] [&_.text-foreground]:text-white [&_.border-border]:border-white/10 [&_.bg-surface]:bg-white/5 [&_.bg-surface-elevated]:bg-white/5'
    : '';

  return (
    <section id={id} className={`py-20 lg:py-28 ${darkClasses} ${className}`}>
      {children}
    </section>
  );
}
