import { HeroHome } from '@/components/sections/HeroHome';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { SplitSection } from '@/components/sections/SplitSection';
import { Accordion } from '@/components/sections/Accordion';
import { IndustryCards } from '@/components/sections/IndustryCard';
import { LogoBand } from '@/components/sections/LogoBand';
import { SubBrandSpotlight } from '@/components/sections/SubBrandSpotlight';
import { ConsultationForm } from '@/components/sections/ConsultationForm';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { homeContent } from '@/data/content';
import { portfolio } from '@/data/portfolio';

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

      {/* Industries Overview */}
      <Section className="bg-surface-elevated">
        <Container>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Industries We Serve</span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-sans text-3xl font-bold">Built for Your Industry</h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">The same engineering rigor and manufacturing depth, tailored to your sector.</p>
          </div>
          <IndustryCards items={homeContent.industries} />
        </Container>
      </Section>

      {/* Capabilities Accordion */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">What We Do</span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-sans text-3xl font-bold">Our Capabilities</h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">Over two decades of manufacturing expertise. NPI prototypes in as few as 14 days.</p>
          </div>
          <Accordion items={homeContent.capabilities} />
        </Container>
      </Section>

      {/* Client Logos */}
      <LogoBand logos={homeContent.clientLogos} label="Trusted By Industry Leaders" />

      {/* Rise Power Spotlight */}
      <Section>
        <Container>
          <SubBrandSpotlight {...homeContent.risePower} />
        </Container>
      </Section>

      {/* Consultation Form CTA */}
      <Section>
        <Container>
          <ConsultationForm
            title={homeContent.cta.title}
            description={homeContent.cta.description}
          />
        </Container>
      </Section>

      {/* Portfolio Strip */}
      <Section className="pb-0">
        <Container>
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2.5">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Our Work</span>
              <span className="h-px w-8 bg-accent" />
            </div>
          </div>
          <PortfolioGrid items={portfolio} />
        </Container>
      </Section>
    </>
  );
}
