import Image from 'next/image';

type ImageSpecimenProps = {
  src?: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  className?: string;
  duotone?: boolean;
  placeholderLabel?: string;
};

export function ImageSpecimen({
  src,
  alt,
  caption,
  width,
  height,
  className = '',
  duotone = true,
  placeholderLabel,
}: ImageSpecimenProps) {
  const aspect = `${width} / ${height}`;
  const hasImage = Boolean(src);

  return (
    <figure className={`relative corner-markers ${className}`}>
      <div
        className="relative overflow-hidden border border-[var(--color-border-strong)] bg-[var(--color-surface)]"
        style={!hasImage ? { aspectRatio: aspect } : undefined}
      >
        {hasImage ? (
          <Image
            src={src!}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto block"
            style={duotone ? { filter: 'url(#cimtech-duotone)' } : undefined}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Diagonal cross */}
            <svg
              className="absolute inset-0 w-full h-full text-[var(--color-border)]"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="relative mono-label text-[var(--color-subtle)]">
              {placeholderLabel ?? 'IMAGE / PLACEHOLDER'}
            </span>
          </div>
        )}
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
