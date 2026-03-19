import type { Metadata } from 'next';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { servicesContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Services',
  description: 'CIMtech offers NPI prototype development, repeat manufacturing, DFM, zero inventory program, electrolyzer & fuel cell solutions, and engineering development.',
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroStatic
        title="Our Services"
        description="Comprehensive manufacturing services from prototype to production"
      />

      {/* 2. Feature Grid */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl lg:text-4xl font-bold">
              End-to-End Manufacturing Services
            </h2>
          </div>
          <FeatureGrid
            items={servicesContent.services.map((s) => ({
              number: s.number,
              title: s.title,
              description: s.description,
            }))}
            columns={3}
          />
        </Container>
      </Section>

      {/* 3. CTA */}
      <Section>
        <Container>
          <CTASection
            title="Ready to Discuss Your Project?"
            description="Our team is ready to bring your manufacturing project to life with precision and speed."
            primaryCta={{ label: 'Contact Us', href: '/contact' }}
          />
        </Container>
      </Section>
    </>
  );
}
