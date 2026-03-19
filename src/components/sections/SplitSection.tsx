import Image from 'next/image';
import { type ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';

type SplitSectionProps = {
  badge?: string;
  title: string;
  children: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  imageOverlay?: string;
};

export function SplitSection({
  badge,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  imageOverlay,
}: SplitSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text side */}
      <div className={reverse ? 'lg:order-last' : ''}>
        {badge && <Badge className="mb-4">{badge}</Badge>}
        <h2 className="font-sans text-3xl font-bold mb-4">{title}</h2>
        {children}
      </div>

      {/* Image side */}
      <div className="rounded-xl overflow-hidden relative h-[380px]">
        <Image
          src={image}
          fill
          className="object-cover object-center"
          alt={imageAlt}
        />
        {imageOverlay && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
            <span className="text-white text-sm font-medium">
              {imageOverlay}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
