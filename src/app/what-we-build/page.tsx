import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SplitSection } from '@/components/sections/SplitSection';
import { SubBrandSpotlight } from '@/components/sections/SubBrandSpotlight';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { Button } from '@/components/ui/Button';
import { whatWeBuildContent } from '@/data/content';
import { portfolio } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'What We Build',
  description: 'From precision components to full assemblies, prototypes to production scale. See what CIMtech manufacturing delivers across industries.',
};

export default function WhatWeBuildPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ WHAT WE BUILD"
        label="PORTFOLIO"
        title="From concept to production."
        lede="Prototypes, production runs, and everything in between. Precision manufacturing across four industries."
      />

      <TickerDivider />

      {/* Capability categories — alternating splits */}
      {whatWeBuildContent.categories.map((category, i) => (
        <Section key={category.title}>
          <Container>
            <SplitSection
              badge={String(i + 1).padStart(2, '0')}
              title={category.title}
              image={category.image}
              imageAlt={category.imageAlt}
              reverse={i % 2 === 1}
            >
              <p>{category.description}</p>
            </SplitSection>
          </Container>
        </Section>
      ))}

      <TickerDivider />

      {/* Portfolio grid */}
      <Section>
        <Container>
          <p className="mono-label text-[var(--color-accent)] mb-4">+ PORTFOLIO</p>
          <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-12 max-w-xl">
            Our work.
          </h2>
          <PortfolioGrid items={portfolio} columns={3} />
        </Container>
      </Section>

      <TickerDivider />

      {/* Rise Power Spotlight */}
      <Section>
        <Container>
          <SubBrandSpotlight
            title={whatWeBuildContent.risePower.title}
            subtitle="Our Clean Energy Brand"
            description={whatWeBuildContent.risePower.description}
            link={whatWeBuildContent.risePower.link}
            linkLabel={whatWeBuildContent.risePower.linkLabel}
            image={whatWeBuildContent.risePower.image}
            imageAlt={whatWeBuildContent.risePower.imageAlt}
          />
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-16 corner-markers flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="mono-label text-[var(--color-accent)] mb-3">+ READY TO BUILD</p>
              <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] max-w-lg">
                Ready to build something?
              </h2>
            </div>
            <Button href="/contact" variant="primary">Start a project</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
