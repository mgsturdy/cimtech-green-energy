import type { Metadata } from 'next';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { Accordion } from '@/components/sections/Accordion';
import { SplitSection } from '@/components/sections/SplitSection';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { aboutContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'CIMtech Green Energy is a technological firm specializing in hydrogen fuel cell & electrolyzer manufacturing, offering assemblies since 2006.',
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroStatic title="About CIMtech Green Energy" />

      {/* 2. Company Story */}
      <Section>
        <Container>
          <Prose>
            {aboutContent.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Prose>
        </Container>
      </Section>

      {/* 3. 4 Pillars Accordion */}
      <Section className="bg-surface-elevated">
        <Container>
          <h2 className="font-sans text-3xl font-bold text-center mb-10">
            Our Core Values
          </h2>
          <Accordion
            items={aboutContent.pillars.map(({ number, title, description }) => ({
              number,
              title,
              description,
            }))}
          />
        </Container>
      </Section>

      {/* 4. Key Facts Split */}
      <Section>
        <Container>
          <SplitSection
            title="Our Growth"
            image={aboutContent.keyFacts.image}
            imageAlt={aboutContent.keyFacts.imageAlt}
          >
            <ul className="list-disc list-inside space-y-2 text-muted">
              {aboutContent.keyFacts.stats.map((stat, i) => (
                <li key={i}>{stat}</li>
              ))}
            </ul>
          </SplitSection>
        </Container>
      </Section>

      {/* 5. Vision CTA */}
      <Section>
        <Container>
          <CTASection
            title={aboutContent.vision}
            description=""
            primaryCta={{ label: 'Contact Us', href: '/contact' }}
          />
        </Container>
      </Section>
    </>
  );
}
