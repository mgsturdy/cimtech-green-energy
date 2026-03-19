import type { Metadata } from 'next';
import Image from 'next/image';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { TabSection } from '@/components/sections/TabSection';
import { BlogList } from '@/components/sections/BlogList';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { Card } from '@/components/ui/Card';
import { resourcesContent } from '@/data/content';
import { blogPosts } from '@/data/blog';
import { portfolio } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'CIMtech Green Energy resources including company history, team, blog, careers, portfolio, and media.',
};

const historyTab = (
  <Prose>
    {resourcesContent.history.map((paragraph, i) => (
      <p key={i}>{paragraph}</p>
    ))}
  </Prose>
);

const teamTab = (
  <div>
    <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
      <div className="relative w-32 h-32 flex-shrink-0 rounded-full overflow-hidden">
        <Image
          src={resourcesContent.team.image}
          alt={resourcesContent.team.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-sans text-xl font-bold">{resourcesContent.team.name}</h3>
        <p className="text-muted text-sm mb-4">{resourcesContent.team.title}</p>
        <blockquote className="border-l-2 border-accent pl-4 text-muted italic leading-relaxed">
          {resourcesContent.team.quote}
        </blockquote>
      </div>
    </div>
    <p className="text-muted leading-relaxed">{resourcesContent.team.facilityDescription}</p>
  </div>
);

const blogTab = <BlogList posts={blogPosts} />;

const careersTab = (
  <div>
    <p className="text-muted leading-relaxed mb-8">{resourcesContent.careers.mission}</p>
    <div className="space-y-4">
      {resourcesContent.careers.openings.map((opening) => (
        <Card key={opening.title}>
          <h3 className="font-sans text-base font-semibold mb-2">{opening.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{opening.description}</p>
        </Card>
      ))}
    </div>
  </div>
);

const portfolioTab = <PortfolioGrid items={portfolio} columns={3} />;

const mediaTab = (
  <div>
    <p className="text-muted leading-relaxed mb-8">{resourcesContent.media.description}</p>
    <ul className="space-y-3 mb-8">
      {resourcesContent.media.downloads.map((download) => (
        <li key={download.label}>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:text-accent-hover transition-colors"
          >
            <span aria-hidden="true">&darr;</span>
            {download.label}
          </a>
        </li>
      ))}
    </ul>
    <div className="space-y-1 text-sm text-muted">
      <p>
        <span className="font-medium text-foreground">Phone: </span>
        <a href="tel:+16045758853" className="text-accent hover:text-accent-hover transition-colors">
          +1 (604) 575-8853
        </a>
      </p>
      <p>
        <span className="font-medium text-foreground">Email: </span>
        <a href="mailto:info@cimtech.green" className="text-accent hover:text-accent-hover transition-colors">
          info@cimtech.green
        </a>
      </p>
    </div>
  </div>
);

const tabs = [
  { id: 'history', label: 'History', content: historyTab },
  { id: 'team', label: 'Team', content: teamTab },
  { id: 'blog', label: 'Blog', content: blogTab },
  { id: 'careers', label: 'Careers', content: careersTab },
  { id: 'portfolio', label: 'Portfolio', content: portfolioTab },
  { id: 'media', label: 'Media', content: mediaTab },
];

export default function ResourcesPage() {
  return (
    <>
      <HeroStatic
        title="Resources"
        description="Company history, team, blog, careers, portfolio, and media."
      />
      <Section>
        <Container>
          <TabSection tabs={tabs} />
        </Container>
      </Section>
    </>
  );
}
