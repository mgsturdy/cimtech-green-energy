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
import { TickerDivider } from '@/components/ui/TickerDivider';
import { homeContent } from '@/data/content';
import { portfolio } from '@/data/portfolio';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroHome {...homeContent.hero} />

      {/* Metrics */}
      <MetricsBand metrics={homeContent.metrics} />

      <TickerDivider />

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
            <p className="leading-relaxed">{homeContent.about.description}</p>
            <p className="text-sm leading-relaxed">{homeContent.about.secondaryText}</p>
          </SplitSection>
        </Container>
      </Section>

      <TickerDivider />

      {/* Industries Overview */}
      <Section>
        <Container>
          <div className="mb-12">
            <p className="mono-label text-[var(--color-accent)] mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--color-accent)]" />
              Industries We Serve
            </p>
            <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] max-w-xl">
              Built for Your Industry
            </h2>
            <p className="text-[var(--color-muted)] mt-4 max-w-xl">
              The same engineering rigor and manufacturing depth, tailored to your sector.
            </p>
          </div>
          <IndustryCards items={homeContent.industries} />
        </Container>
      </Section>

      <TickerDivider />

      {/* Capabilities Accordion */}
      <Section>
        <Container>
          <div className="mb-12">
            <p className="mono-label text-[var(--color-accent)] mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--color-accent)]" />
              What We Do
            </p>
            <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] max-w-xl">
              Our Capabilities
            </h2>
            <p className="text-[var(--color-muted)] mt-4 max-w-xl">
              Over two decades of manufacturing expertise. NPI prototypes in as few as 14 days.
            </p>
          </div>
          <Accordion items={homeContent.capabilities} />
        </Container>
      </Section>

      <TickerDivider />

      {/* Client Logos */}
      <LogoBand logos={homeContent.clientLogos} label="Trusted By Industry Leaders" />

      {/* Rise Power Spotlight */}
      <Section>
        <Container>
          <SubBrandSpotlight {...homeContent.risePower} />
        </Container>
      </Section>

      <TickerDivider />

      {/* Consultation Form CTA */}
      <Section>
        <Container>
          <ConsultationForm
            title={homeContent.cta.title}
            description={homeContent.cta.description}
          />
        </Container>
      </Section>

      <TickerDivider />

      {/* Portfolio Strip */}
      <Section>
        <Container>
          <div className="mb-12">
            <p className="mono-label text-[var(--color-accent)] flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--color-accent)]" />
              Our Work
            </p>
          </div>
          <PortfolioGrid items={portfolio} />
        </Container>
      </Section>
    </>
  );
}
