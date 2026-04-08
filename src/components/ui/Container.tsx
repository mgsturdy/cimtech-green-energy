import type { HTMLAttributes } from 'react';

export function Container({ className = '', children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`w-full mx-auto max-w-[1440px] px-[var(--spacing-pad-x)] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
