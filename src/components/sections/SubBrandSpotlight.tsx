import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

type SubBrandSpotlightProps = {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
};

export function SubBrandSpotlight({
  title,
  subtitle,
  description,
  link,
  linkLabel,
  image,
  imageAlt,
}: SubBrandSpotlightProps) {
  return (
    <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0f2a1a] rounded-2xl p-12 lg:p-16 overflow-hidden">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <Badge className="mb-4 text-accent-hover">{subtitle}</Badge>
          <h2 className="font-sans text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-[#94A3B8] leading-relaxed mb-6">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            {linkLabel} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden relative h-[300px]">
          <Image
            src={image}
            fill
            className="object-cover"
            alt={imageAlt}
          />
        </div>
      </div>
    </div>
  );
}
