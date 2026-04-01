import type { Metadata } from 'next';
import Image from 'next/image';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { Accordion } from '@/components/sections/Accordion';
import { SplitSection } from '@/components/sections/SplitSection';
import { Timeline } from '@/components/sections/Timeline';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { Badge } from '@/components/ui/Badge';
import { aboutContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'CIMtech Green Energy is a precision manufacturing partner serving defense, commercial, consumer, and clean energy sectors from Vancouver, Canada.',
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroStatic title="Your Manufacturing Partner" />

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

      {/* 3. History Timeline */}
      <Section dark>
        <Container>
          <h2 className="font-sans text-3xl font-bold text-center mb-10">
            Our Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            <Timeline items={aboutContent.timeline} />
          </div>
        </Container>
      </Section>

      {/* 4. Pillars Accordion */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <Badge className="mb-4">What Drives Us</Badge>
            <h2 className="font-sans text-3xl font-bold">Our Core Values</h2>
          </div>
          <Accordion
            items={aboutContent.pillars.map(({ number, title, description }) => ({
              number,
              title,
              description,
            }))}
          />
        </Container>
      </Section>

      {/* 5. Team Section */}
      <Section dark>
        <Container>
          <div className="text-center mb-10">
            <h2 className="font-sans text-3xl font-bold">Leadership</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
              <div className="relative w-32 h-32 flex-shrink-0 rounded-full overflow-hidden">
                <Image
                  src={aboutContent.team.image}
                  alt={aboutContent.team.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold">{aboutContent.team.name}</h3>
                <p className="text-muted text-sm mb-4">{aboutContent.team.title}</p>
                <blockquote className="border-l-2 border-accent pl-4 text-muted italic leading-relaxed">
                  {aboutContent.team.quote}
                </blockquote>
              </div>
            </div>
            <p className="text-muted leading-relaxed">{aboutContent.team.facilityDescription}</p>
          </div>
        </Container>
      </Section>

      {/* 6. Key Facts Split */}
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

      {/* 7. Vision CTA */}
      <Section>
        <Container>
          <CTASection
            title={aboutContent.vision}
            description=""
            primaryCta={{ label: 'Get a Quote', href: '/contact' }}
          />
        </Container>
      </Section>
    </>
  );
}
