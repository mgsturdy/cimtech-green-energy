import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ConsultationForm } from '@/components/sections/ConsultationForm';
import { TickerDivider } from '@/components/ui/TickerDivider';
import { contactContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact CIMtech Green Energy for precision manufacturing services. Located in Surrey, BC, Canada.',
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
          <ConsultationForm
            title={contactContent.heading}
            description={contactContent.description}
          />
        </Container>
      </Section>
    </>
  );
}
