import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Accordion } from '@/components/sections/Accordion';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { Button } from '@/components/ui/Button';
import { servicesContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Services',
  description: 'CIMtech offers NPI prototype development, repeat manufacturing, DFM, zero inventory programs, complex system integration, and engineering development across all industries.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ SERVICES"
        label="ENGAGEMENT MODELS"
        title="How we engage."
        lede="From first prototype to full-scale repeat manufacturing — seven engagement models, one manufacturing partner."
      />

      <TickerDivider />

      <Section>
        <Container>
          <p className="mono-label text-[var(--color-accent)] mb-4">+ SERVICE OFFERINGS</p>
          <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-12 max-w-xl">
            End-to-end manufacturing services.
          </h2>
          <Accordion
            items={servicesContent.services.map(({ number, title, description }) => ({
              number,
              title,
              description,
            }))}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-16 corner-markers flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="mono-label text-[var(--color-accent)] mb-3">+ START YOUR PROJECT</p>
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
