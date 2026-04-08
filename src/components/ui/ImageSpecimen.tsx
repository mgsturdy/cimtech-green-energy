import Image from 'next/image';

type ImageSpecimenProps = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  className?: string;
  duotone?: boolean;
};

export function ImageSpecimen({
  src,
  alt,
  caption,
  width,
  height,
  className = '',
  duotone = true,
}: ImageSpecimenProps) {
  return (
    <figure className={`relative corner-markers ${className}`}>
      <div className="relative overflow-hidden border border-[var(--color-border-strong)] bg-[var(--color-surface)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto block"
          style={duotone ? { filter: 'url(#cimtech-duotone)' } : undefined}
        />
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60"
          style={{ filter: 'url(#cimtech-grain)' }}
        />
      </div>
      {caption && (
        <figcaption className="mono-label mt-2 flex items-center gap-2">
          <span className="h-px w-6 bg-[var(--color-accent)]" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
