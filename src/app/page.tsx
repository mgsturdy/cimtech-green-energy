import { HeroHome } from '@/components/sections/HeroHome';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { SplitSection } from '@/components/sections/SplitSection';
import { Accordion } from '@/components/sections/Accordion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { homeContent } from '@/data/content';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroHome {...homeContent.hero} />

      {/* Metrics */}
      <MetricsBand metrics={homeContent.metrics} />

      {/* About Split */}
      <Section>
        <Container>
          <SplitSection
            badge={homeContent.about.badge}
            title={homeContent.about.title}
            image={homeContent.about.image}
            imageAlt={homeContent.about.imageAlt}
            imageOverlay={homeContent.about.imageCaption}
          >
            <p className="text-muted leading-relaxed mb-3">{homeContent.about.description}</p>
            <p className="text-sm text-muted leading-relaxed">{homeContent.about.secondaryText}</p>
          </SplitSection>
        </Container>
      </Section>

      {/* Capabilities Accordion */}
      <Section className="bg-surface-elevated">
        <Container>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">What We Do</span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-sans text-3xl font-bold">Our Capabilities</h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">With over two decades of manufacturing experience, our prototype engineering team is ready to tackle your NPI projects in just 14 days.</p>
          </div>
          <Accordion items={homeContent.capabilities} />
        </Container>
      </Section>
    </>
  );
}
