import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Engineering insights, certifications, capability briefs, and case studies from the CIMtech Green Energy team.',
};

const insights = [
  {
    title: 'Why DFM Matters Before You Tool',
    summary:
      'Design-for-manufacturing reviews catch the issues that quietly inflate unit cost — wall thickness, draft angles, secondary ops. We walk through the early-stage decisions that compound across volume.',
    meta: 'ENGINEERING NOTE · 6 MIN READ',
  },
  {
    title: 'From Prototype to 60,000 Units',
    summary:
      'How we scale a single first-article into repeat-manufacturing runs without rebuilding the supply chain — zero-inventory programs, ERP scheduling, and the lean processes that hold quality at volume.',
    meta: 'PROCESS · 8 MIN READ',
  },
  {
    title: 'Manufacturing for the Hydrogen Economy',
    summary:
      'What we have learned shipping 60,000+ fuel cell devices globally — membrane handling, G10/G7 composite end plates, autoclave bonding, and the assembly tolerances that define stack performance.',
    meta: 'CLEAN ENERGY · 7 MIN READ',
  },
];

const caseStudies = [
  {
    sector: 'CLEAN ENERGY',
    title: 'Rise Power: Building a Brand, Not Just a Product Line',
    summary:
      'Launched and scaled an entire clean-energy sub-brand under CIMtech — fuel cell stacks, electrolyzer components, and hydrogen power systems shipping to global OEMs.',
  },
  {
    sector: 'COMMERCIAL & INDUSTRIAL',
    title: 'OEM Volume with Zero-Inventory Operations',
    summary:
      'ERP-driven scheduling, repeat manufacturing, and supply-chain partnership — keeping commercial OEM clients on-time at volume while protecting unit cost.',
  },
  {
    sector: 'DEFENSE & MILITARY',
    title: 'AS9100D + Controlled Goods, End to End',
    summary:
      'Mil-spec components and ruggedized assemblies under full traceability, controlled facility access, and the documentation rigor defense programs require.',
  },
];

const certifications = [
  {
    code: 'ISO 9001',
    title: 'Quality Management',
    description:
      'Rigorous QMS governing every stage of design, manufacturing, inspection, and customer delivery.',
  },
  {
    code: 'AS9100D',
    title: 'Aerospace & Defense',
    description:
      'Aerospace-grade quality management — the standard required for mil-spec and aerospace program manufacturing.',
  },
  {
    code: 'CGP',
    title: 'Controlled Goods Program',
    description:
      'Canadian compliance program for safeguarding controlled goods, technologies, and program data.',
  },
];

const capabilityBriefs = [
  'Precision CNC Machining',
  'Injection Molding',
  'Fabrication & Welding',
  '3D Printing',
  'Assembly & Integration',
  'Quality Assurance',
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ RESOURCES"
        label="ENGINEERING NOTES"
        title="Insights, certifications, and case studies."
        lede="Two decades of precision manufacturing across defense, commercial, consumer, and clean energy — packaged as engineering notes, sector case studies, and the documentation behind the work."
      />

      <TickerDivider />

      {/* Insights */}
      <Section id="insights">
        <Container>
          <p className="mono-label text-[var(--color-accent)] mb-4">+ INSIGHTS</p>
          <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-12 max-w-2xl">
            Engineering perspectives from the shop floor.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((post, i) => (
              <article
                key={post.title}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 flex flex-col"
              >
                <p className="mono-label text-[var(--color-subtle)] mb-3">
                  {String(i + 1).padStart(2, '0')} · {post.meta}
                </p>
                <h3 className="font-semibold text-[var(--text-h3)] mb-3">{post.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{post.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <TickerDivider />

      {/* Case Studies */}
      <Section id="case-studies">
        <Container>
          <p className="mono-label text-[var(--color-accent)] mb-4">+ CASE STUDIES</p>
          <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-12 max-w-2xl">
            How partners move from prototype to production.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 flex flex-col"
              >
                <p className="mono-label text-[var(--color-accent)] mb-3">{cs.sector}</p>
                <h3 className="font-semibold text-[var(--text-h3)] mb-3">{cs.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{cs.summary}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <TickerDivider />

      {/* Certifications */}
      <Section>
        <Container>
          <p className="mono-label text-[var(--color-accent)] mb-4">+ CERTIFICATIONS</p>
          <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-12 max-w-2xl">
            Audited, accredited, traceable.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.code}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10"
              >
                <p className="mono-label text-[var(--color-accent)] mb-3">{cert.code}</p>
                <h3 className="font-semibold text-[var(--text-h3)] mb-3">{cert.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <TickerDivider />

      {/* Capability briefs */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-5">
              <p className="mono-label text-[var(--color-accent)] mb-4">+ CAPABILITY BRIEFS</p>
              <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-6">
                The full capability set, in one place.
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Five-axis CNC, injection molding, fabrication and welding, additive manufacturing,
                full assembly and integration, and CMM-laser quality. Six disciplines under one roof,
                serving four industry verticals.
              </p>
              <Button href="/capabilities" variant="primary">View capabilities</Button>
            </div>
            <ul className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilityBriefs.map((label, i) => (
                <li
                  key={label}
                  className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex items-baseline gap-3"
                >
                  <span className="mono-label text-[var(--color-subtle)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[var(--color-foreground)]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <TickerDivider />

      {/* Blog placeholder + CTA */}
      <Section id="blog">
        <Container>
          <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-16 corner-markers grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="mono-label text-[var(--color-accent)] mb-3">+ BLOG</p>
              <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-4">
                More long-form notes landing soon.
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed max-w-2xl">
                Shop-floor write-ups, certification updates, and behind-the-scenes looks at how we
                build. In the meantime, send a question — we will route it to the engineer closest to
                the answer.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                href="/contact"
                className="mono-label inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
              >
                ASK AN ENGINEER
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
