import type { Metadata } from 'next';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { ContactForm } from '@/components/sections/ContactForm';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { contactContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact CIMtech Green Energy for precision manufacturing services. Located in Surrey, BC, Canada.',
};

export default function ContactPage() {
  return (
    <>
      <HeroStatic
        title={contactContent.heading}
        description={contactContent.description}
      />
      <Section>
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
