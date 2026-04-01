import Link from 'next/link';

type IndustryCardItem = {
  number: string;
  title: string;
  description: string;
  href: string;
};

type IndustryCardProps = {
  items: IndustryCardItem[];
};

export function IndustryCards({ items }: IndustryCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group border border-border bg-surface rounded-xl p-6 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="font-mono text-xs text-accent mb-3">{item.number}</div>
          <h3 className="font-sans text-lg font-bold mb-2 group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{item.description}</p>
          <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-4">
            Learn More <span aria-hidden="true">&rarr;</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
