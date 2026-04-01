import type { Metadata } from 'next';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { SplitSection } from '@/components/sections/SplitSection';
import { SubBrandSpotlight } from '@/components/sections/SubBrandSpotlight';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { whatWeBuildContent } from '@/data/content';
import { portfolio } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'What We Build',
  description: 'From precision components to full assemblies, prototypes to production scale. See what CIMtech manufacturing delivers across industries.',
};

export default function WhatWeBuildPage() {
  return (
    <>
      {/* Hero */}
      <HeroStatic
        title="From Concept to Production"
        description="Prototypes, production runs, and everything in between. See what precision manufacturing looks like."
      />

      {/* Capability Categories - alternating splits */}
      {whatWeBuildContent.categories.map((category, i) => (
        <Section key={category.title}>
          <Container>
            <SplitSection
              badge={category.title}
              title={category.title}
              image={category.image}
              imageAlt={category.imageAlt}
              reverse={i % 2 === 1}
            >
              <p className="text-muted leading-relaxed">{category.description}</p>
            </SplitSection>
          </Container>
        </Section>
      ))}

      {/* Portfolio Grid */}
      <Section className="bg-surface-elevated">
        <Container>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Portfolio</span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-sans text-3xl font-bold">Our Work</h2>
          </div>
          <PortfolioGrid items={portfolio} columns={3} />
        </Container>
      </Section>

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
          <CTASection
            title="Ready to Build Something?"
            description="From a single prototype to production at scale. Tell us what you need."
            primaryCta={{ label: 'Get a Quote', href: '/contact' }}
          />
        </Container>
      </Section>
    </>
  );
}
