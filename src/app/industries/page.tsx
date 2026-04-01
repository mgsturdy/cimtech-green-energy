import type { Metadata } from 'next';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { SplitSection } from '@/components/sections/SplitSection';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { industriesContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'CIMtech serves defense, commercial, consumer, and clean energy sectors with precision manufacturing, NPI prototyping, and production scaling.',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <HeroStatic
        title="Built for Your Industry"
        description="Precision manufacturing across defense, commercial, consumer, and clean energy. Same engineering rigor. Tailored to your requirements."
      />

      {/* Overview */}
      <Section>
        <Container>
          <p className="text-muted leading-relaxed max-w-3xl">
            {industriesContent.overview}
          </p>
        </Container>
      </Section>

      {/* Industry Verticals */}
      {industriesContent.industries.map((industry, i) => (
        <Section key={industry.title} dark={i % 2 === 1}>
          <Container>
            <SplitSection
              badge={industry.number}
              title={industry.title}
              image={industry.image}
              imageAlt={industry.imageAlt}
              reverse={i % 2 === 1}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">What We Solve</h3>
                  <p className="text-sm text-muted leading-relaxed">{industry.whatWeSolve}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Why CIMtech</h3>
                  <p className="text-sm text-muted leading-relaxed">{industry.whyCimtech}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Typical Work</h3>
                  <p className="text-sm text-muted leading-relaxed">{industry.typicalWork}</p>
                </div>
              </div>
            </SplitSection>
          </Container>
        </Section>
      ))}

      {/* CTA */}
      <Section>
        <Container>
          <CTASection
            title="Ready to Discuss Your Project?"
            description="No matter your industry, our team is ready to bring your manufacturing project to life with precision and speed."
            primaryCta={{ label: 'Get a Quote', href: '/contact' }}
          />
        </Container>
      </Section>
    </>
  );
}
