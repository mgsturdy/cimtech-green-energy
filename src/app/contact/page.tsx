import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ConsultationForm } from '@/components/sections/ConsultationForm';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { contactContent } from '@/data/content';
import { contactInfo } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact CIMtech Green Energy for precision manufacturing services. Headquarters in Surrey, BC, Canada with a US warehouse in Blaine, WA.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="/ CONTACT"
        label="OPEN A LINE"
        title="Open a line."
        lede={contactContent.description}
      />

      <TickerDivider />

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16">
            <div>
              <p className="mono-label text-[var(--color-accent)] mb-4">+ REACH US</p>
              <dl className="space-y-5 text-[var(--color-foreground)]">
                <div>
                  <dt className="mono-label text-[var(--color-subtle)] mb-1">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-[var(--color-accent)] transition-colors break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="mono-label text-[var(--color-subtle)] mb-1">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                      className="hover:text-[var(--color-accent)] transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="mono-label text-[var(--color-subtle)] mb-1">Hours</dt>
                  <dd className="text-[var(--color-muted)]">{contactInfo.hours}</dd>
                </div>
              </dl>
            </div>

            {contactInfo.offices.map((office) => (
              <div key={office.label}>
                <p className="mono-label text-[var(--color-accent)] mb-4">+ {office.label.toUpperCase()}</p>
                <address className="not-italic text-[var(--color-foreground)] space-y-1">
                  {office.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </div>
            ))}
          </div>

          <ConsultationForm
            title={contactContent.heading}
            description={contactContent.description}
          />
        </Container>
      </Section>
    </>
  );
}
