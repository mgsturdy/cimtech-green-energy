import { AnimatedHeadline } from '@/components/ui/AnimatedHeadline';

type PageHeroProps = {
  breadcrumb: string;
  label: string;
  title: string;
  lede: string;
};

export function PageHero({ breadcrumb, label, title, lede }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-end border-b border-[var(--color-border)] overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(168,255,31,0.08)] via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-[1440px] w-full px-[var(--spacing-pad-x)]">
        <p className="mono-label text-[var(--color-subtle)] mb-4">{breadcrumb}</p>
        <p className="mono-label text-[var(--color-accent)] mb-6">+ {label}</p>
        <AnimatedHeadline text={title} className="font-semibold text-[var(--text-h1)] leading-[1.05] max-w-4xl" />
        <p className="mt-6 max-w-xl text-[var(--color-muted)] text-[var(--text-body)] leading-relaxed">{lede}</p>
      </div>
    </section>
  );
}
