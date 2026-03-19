import Image from 'next/image';
import { type PortfolioItem } from '@/data/portfolio';

type PortfolioGridProps = {
  items: PortfolioItem[];
  columns?: number;
};

export function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-1 rounded-xl overflow-hidden">
      {items.map((item) => (
        <div key={item.caption} className="relative group h-[120px]">
          <Image
            src={item.image}
            alt={item.caption}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-xs font-semibold text-center px-2">
              {item.caption}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
