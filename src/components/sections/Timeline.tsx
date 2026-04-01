import { type TimelineItem } from '@/data/content';

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border" aria-hidden="true" />

      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.year} className="relative flex gap-6">
            {/* Dot */}
            <div className="relative z-10 flex-shrink-0 w-[47px] flex justify-center">
              <div className="w-3 h-3 rounded-full bg-accent mt-1.5" />
            </div>

            {/* Content */}
            <div className="pb-2">
              <div className="font-mono text-xs text-accent mb-1">{item.year}</div>
              <h3 className="font-sans text-base font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
