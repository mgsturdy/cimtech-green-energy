import type { ReactNode } from 'react';

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

export function Marquee({ children, reverse = false, pauseOnHover = true, className = '' }: MarqueeProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className={`flex w-max gap-12 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
      >
        <div className="flex gap-12 items-center shrink-0">{children}</div>
        <div className="flex gap-12 items-center shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
