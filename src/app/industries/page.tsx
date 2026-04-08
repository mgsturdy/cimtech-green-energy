import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SplitSection } from '@/components/sections/SplitSection';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { Button } from '@/components/ui/Button';
import { industriesContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'CIMtech serves defense, commercial, consumer, and clean energy sectors with precision manufacturing, NPI prototyping, and production scaling.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ INDUSTRIES"
        label="SECTORS SERVED"
        title="Built for your industry."
        lede={industriesContent.overview}
      />

      <TickerDivider />

      {/* Industry verticals — alternating splits, unified section rhythm */}
      <Section>
        <Container>
          <div className="space-y-24 md:space-y-32">
            {industriesContent.industries.map((industry, i) => (
              <div
                key={industry.title}
                className={i > 0 ? 'pt-24 md:pt-32 border-t border-[var(--color-border)]' : ''}
              >
                <SplitSection
                  badge={industry.number}
                  title={industry.title}
                  image={industry.image}
                  imageAlt={industry.imageAlt}
                  reverse={i % 2 === 1}
                >
                  <div>
                    <p className="mono-label text-[var(--color-accent)] mb-2">WHAT WE SOLVE</p>
                    <p className="text-[var(--color-muted)] leading-relaxed">{industry.whatWeSolve}</p>
                  </div>
                  <div>
                    <p className="mono-label text-[var(--color-accent)] mb-2">WHY CIMTECH</p>
                    <p className="text-[var(--color-muted)] leading-relaxed">{industry.whyCimtech}</p>
                  </div>
                  <div>
                    <p className="mono-label text-[var(--color-accent)] mb-2">TYPICAL WORK</p>
                    <p className="text-[var(--color-muted)] leading-relaxed">{industry.typicalWork}</p>
                  </div>
                </SplitSection>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <TickerDivider />

      {/* CTA */}
      <Section>
        <Container>
          <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-16 corner-markers flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="mono-label text-[var(--color-accent)] mb-3">+ READY TO BUILD</p>
              <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] max-w-lg">
                Ready to discuss your project?
              </h2>
            </div>
            <Button href="/contact" variant="primary">Open a line</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
