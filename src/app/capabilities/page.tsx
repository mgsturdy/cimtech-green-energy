import type { Metadata } from 'next';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { AccordionDetail } from '@/components/sections/AccordionDetail';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { capabilitiesContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'CIMtech offers precision CNC machining, injection molding, fabrication, 3D printing, assembly & integration, and quality assurance across defense, commercial, consumer, and clean energy sectors.',
};

export default function CapabilitiesPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroStatic title="Our Capabilities" />

      {/* 2. Overview */}
      <Section>
        <Container>
          <Badge className="mb-4">Manufacturing Excellence</Badge>
          <p className="text-muted leading-relaxed max-w-3xl mb-8">
            {capabilitiesContent.overview}
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {capabilitiesContent.stats.map((stat, i) => (
              <li key={i}>{stat}</li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 3. Accordion Detail */}
      <Section dark>
        <Container>
          <h2 className="font-sans text-3xl font-bold text-center mb-10">
            What We Do
          </h2>
          <AccordionDetail items={capabilitiesContent.capabilities} />
        </Container>
      </Section>

      {/* 4. Equipment Specs */}
      <Section>
        <Container>
          <h2 className="font-sans text-3xl font-bold text-center mb-10">
            Equipment &amp; Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold text-sm text-foreground mb-2">
                Measuring Instruments
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {capabilitiesContent.equipment.measuring}
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-sm text-foreground mb-2">
                Secondary Processes
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {capabilitiesContent.equipment.secondary}
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-sm text-foreground mb-2">
                Assembly Equipment
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {capabilitiesContent.equipment.assembly}
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-sm text-foreground mb-2">
                Fabrication Equipment
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {capabilitiesContent.equipment.fabrication}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. CTA */}
      <Section>
        <Container>
          <CTASection
            title="Ready to Start Your Project?"
            description="Our team is ready to bring your manufacturing project to life with precision and speed."
            primaryCta={{ label: 'Contact Us', href: '/contact' }}
          />
        </Container>
      </Section>
    </>
  );
}
