import type { HTMLAttributes } from 'react';

type SectionProps = HTMLAttributes<HTMLElement> & {
  /** @deprecated Will be removed in Phase 4 refactor — visual theming now uses tokens */
  dark?: boolean;
};

export function Section({ className = '', children, dark: _dark, ...rest }: SectionProps) {
  return (
    <section
      className={`relative py-[var(--spacing-section-y)] ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}
