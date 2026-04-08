import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { AccordionDetail } from '@/components/sections/AccordionDetail';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { Button } from '@/components/ui/Button';
import { capabilitiesContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'CIMtech offers precision CNC machining, injection molding, fabrication, 3D printing, assembly & integration, and quality assurance across defense, commercial, consumer, and clean energy sectors.',
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ CAPABILITIES"
        label="WHAT WE MAKE"
        title="What we make, to spec, at scale."
        lede={capabilitiesContent.overview}
      />

      <TickerDivider />

      {/* Capability detail accordion */}
      <Section>
        <Container>
          <p className="mono-label text-[var(--color-accent)] mb-4">+ PROCESSES</p>
          <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-12 max-w-xl">
            Six manufacturing disciplines. One partner.
          </h2>
          <AccordionDetail items={capabilitiesContent.capabilities} />
        </Container>
      </Section>

      <TickerDivider />

      {/* Equipment specs */}
      <Section>
        <Container>
          <p className="mono-label text-[var(--color-accent)] mb-4">+ EQUIPMENT</p>
          <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-12 max-w-xl">
            Facility specifications.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[var(--color-border)] bg-[var(--color-border)]">
            {[
              { label: 'MEASURING INSTRUMENTS', text: capabilitiesContent.equipment.measuring },
              { label: 'SECONDARY PROCESSES', text: capabilitiesContent.equipment.secondary },
              { label: 'ASSEMBLY EQUIPMENT', text: capabilitiesContent.equipment.assembly },
              { label: 'FABRICATION EQUIPMENT', text: capabilitiesContent.equipment.fabrication },
            ].map(({ label, text }) => (
              <div key={label} className="bg-[var(--color-surface)] p-8">
                <p className="mono-label text-[var(--color-accent)] mb-3">{label}</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats + CTA */}
      <Section>
        <Container>
          <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-16 corner-markers">
            <p className="mono-label text-[var(--color-accent)] mb-6">+ BY THE NUMBERS</p>
            <ul className="space-y-4 mb-10 max-w-2xl">
              {capabilitiesContent.stats.map((stat, i) => (
                <li key={i} className="flex items-start gap-4 border-b border-[var(--color-border)] pb-4 last:border-0 last:pb-0">
                  <span className="mono-label text-[var(--color-subtle)] shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[var(--color-muted)]">{stat}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="primary">Start a project</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
