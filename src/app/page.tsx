import { HeroHome } from '@/components/sections/HeroHome';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { SplitSection } from '@/components/sections/SplitSection';
import { Accordion } from '@/components/sections/Accordion';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { LogoBand } from '@/components/sections/LogoBand';
import { ConsultationForm } from '@/components/sections/ConsultationForm';
import { BlogList } from '@/components/sections/BlogList';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { homeContent } from '@/data/content';
import { blogPosts } from '@/data/blog';
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

      {/* Products Grid */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Our Products</span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-sans text-3xl font-bold">Experts In Fuel Cell Manufacturing</h2>
          </div>
          <FeatureGrid
            items={homeContent.products.map((p) => ({
              title: p.title,
              description: p.description,
              image: p.image,
              href: '/products',
            }))}
            columns={3}
          />
        </Container>
      </Section>

      {/* Client Logos */}
      <LogoBand logos={homeContent.clientLogos} label="Trusted By Industry Leaders" />

      {/* Consultation Form CTA */}
      <Section>
        <Container>
          <ConsultationForm
            title={homeContent.cta.title}
            description={homeContent.cta.description}
          />
        </Container>
      </Section>

      {/* Blog + Media side by side */}
      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blog */}
            <div className="bg-surface border border-border rounded-xl p-7">
              <Badge>Latest Insights</Badge>
              <div className="mt-4">
                <BlogList posts={blogPosts} limit={1} />
              </div>
            </div>
            {/* Media */}
            <div className="bg-surface border border-border rounded-xl p-7">
              <Badge>Media / News</Badge>
              <p className="text-sm text-muted leading-relaxed mt-4 mb-5">
                {homeContent.media.description}
              </p>
              {homeContent.media.downloads.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-2.5 py-2.5 border-b border-surface-elevated last:border-0 text-sm text-foreground"
                >
                  <span className="text-accent font-semibold">&rarr;</span> {d.label}
                </div>
              ))}
              <div className="mt-5 pt-4 border-t border-border text-sm text-muted">
                <div>
                  <strong className="text-foreground">Phone:</strong> {homeContent.media.phone}
                </div>
                <div>
                  <strong className="text-foreground">Email:</strong> {homeContent.media.email}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Portfolio Strip */}
      <Container>
        <div className="text-center mb-1">
          <div className="flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Our Work</span>
            <span className="h-px w-8 bg-accent" />
          </div>
        </div>
        <PortfolioGrid items={portfolio} />
      </Container>
    </>
  );
}
