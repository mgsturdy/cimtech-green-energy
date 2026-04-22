import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { TickerDivider } from '@/components/ui/TickerDivider';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Insights, case studies, and manufacturing know-how from the CIMtech Green Energy engineering team.',
};

const categories = [
  {
    number: '01',
    title: 'Insights',
    description:
      'Engineering perspectives on DFM, manufacturing scale-up, and the state of precision production across defense, consumer, and clean energy sectors.',
  },
  {
    number: '02',
    title: 'Case Studies',
    description:
      'How CIMtech partners move from prototype to production — program breakdowns, cost-reduction wins, and assembly-integration stories.',
  },
  {
    number: '03',
    title: 'Blog',
    description:
      'Shop-floor notes, certification updates, industry news, and behind-the-scenes looks at how we build.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ RESOURCES"
        label="RESOURCES + BLOGS"
        title="Insights from the shop floor."
        lede="Engineering perspectives, case studies, and updates from the CIMtech team. New articles landing soon."
      />

      <TickerDivider />

      <Section>
        <Container>
          <p className="mono-label text-[var(--color-accent)] mb-4">+ BROWSE</p>
          <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-12 max-w-xl">
            What you&rsquo;ll find here.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-mono text-[var(--color-accent)]">{cat.number}</span>
                  <h3 className="font-semibold text-[var(--text-h3)]">{cat.title}</h3>
                </div>
                <p className="text-[var(--color-muted)] leading-relaxed mb-6">{cat.description}</p>
                <p className="mono-label text-[var(--color-subtle)] mt-auto">Coming soon</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <TickerDivider />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <p className="mono-label text-[var(--color-accent)] mb-4">+ STAY CLOSE</p>
            <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-6">
              First articles are on the way.
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We&rsquo;re packaging up two decades of manufacturing lessons into something worth your time.
              In the meantime, have a specific question? Reach out directly and we&rsquo;ll walk you through
              the work.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
