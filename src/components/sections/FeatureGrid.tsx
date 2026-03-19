import Image from 'next/image';
import Link from 'next/link';

type FeatureItem = {
  number?: string;
  title: string;
  description: string;
  image?: string;
  href?: string;
};

type FeatureGridProps = {
  items: FeatureItem[];
  columns?: 2 | 3;
};

export function FeatureGrid({ items, columns = 3 }: FeatureGridProps) {
  const colClass = columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${colClass} gap-5`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="border border-border rounded-xl overflow-hidden bg-surface transition-all hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-lg"
        >
          {item.image && (
            <div className="relative h-[200px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-5">
            {item.number && (
              <div className="font-mono text-xs text-accent mb-2">
                {item.number}
              </div>
            )}
            <h3 className="font-sans text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              {item.description}
            </p>
            {item.href && (
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold"
              >
                Learn More <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
