import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SplitSection } from '@/components/sections/SplitSection';
import { Timeline } from '@/components/sections/Timeline';
import { Accordion } from '@/components/sections/Accordion';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { Button } from '@/components/ui/Button';
import { aboutContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'CIMtech Green Energy is a precision manufacturing partner serving defense, commercial, consumer, and clean energy sectors from Vancouver, Canada.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ ABOUT"
        label="OUR STORY"
        title="Two decades of precision manufacturing."
        lede="From a single facility in Vancouver to a trusted partner for global defense, commercial, consumer, and clean energy programs."
      />

      {/* Leadership split */}
      <Section>
        <Container>
          <SplitSection
            badge="LEADERSHIP"
            title={aboutContent.team.name}
            image={aboutContent.team.image}
            imageAlt={aboutContent.team.name}
            imageOverlay={aboutContent.team.title}
          >
            <p className="italic">&ldquo;{aboutContent.team.quote}&rdquo;</p>
            <p className="mt-4">{aboutContent.team.facilityDescription}</p>
          </SplitSection>
        </Container>
      </Section>

      <TickerDivider />

      {/* History Timeline */}
      <Section>
        <Container>
          <p className="mono-label text-[var(--color-accent)] mb-4">+ MILESTONES</p>
          <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-12 max-w-xl">
            Our journey, by the numbers.
          </h2>
          <Timeline items={aboutContent.timeline} />
        </Container>
      </Section>

      <TickerDivider />

      {/* Core Values Accordion */}
      <Section>
        <Container>
          <p className="mono-label text-[var(--color-accent)] mb-4">+ CORE VALUES</p>
          <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-12 max-w-xl">
            What drives every build.
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

      {/* Key Facts Split */}
      <Section>
        <Container>
          <SplitSection
            badge="FACILITY"
            title={aboutContent.keyFacts.title}
            image={aboutContent.keyFacts.image}
            imageAlt={aboutContent.keyFacts.imageAlt}
          >
            <ul className="space-y-3">
              {aboutContent.keyFacts.stats.map((stat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-0.5">→</span>
                  <span>{stat}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/contact" variant="primary">Start a project</Button>
            </div>
          </SplitSection>
        </Container>
      </Section>
    </>
  );
}
