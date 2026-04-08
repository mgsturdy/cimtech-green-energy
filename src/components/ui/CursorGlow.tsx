'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';

type CursorGlowProps = {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: string;
};

export function CursorGlow({
  children,
  className = '',
  color = 'rgba(168, 255, 31, 0.18)',
  size = '15rem',
}: CursorGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `radial-gradient(${size} at var(--mx, 50%) var(--my, 50%), ${color}, transparent 70%)`,
      }}
    >
      {children}
    </div>
  );
}
