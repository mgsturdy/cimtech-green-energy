import type { Metadata } from 'next';
import { HeroStatic } from '@/components/sections/HeroStatic';
import { SplitSection } from '@/components/sections/SplitSection';
import { ConsultationForm } from '@/components/sections/ConsultationForm';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { productsContent, homeContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Fuel cell stacks, green hydrogen, and electrolyzer products manufactured by CIMtech Green Energy in Canada.',
};

export default function ProductsPage() {
  const [fuelCellStacks, greenHydrogen, electrolyzer] = productsContent.products;

  return (
    <>
      {/* 1. Hero */}
      <HeroStatic
        title="Our Products"
        description="Experts in fuel cell manufacturing"
      />

      {/* 2. Fuel Cell Stacks - image left, text right */}
      <Section>
        <Container>
          <SplitSection
            badge={fuelCellStacks.title}
            title={fuelCellStacks.title}
            image={fuelCellStacks.image}
            imageAlt={fuelCellStacks.imageAlt}
          >
            <p className="text-muted leading-relaxed">{fuelCellStacks.description}</p>
          </SplitSection>
        </Container>
      </Section>

      {/* 3. Green Hydrogen - text left, image right */}
      <Section>
        <Container>
          <SplitSection
            badge={greenHydrogen.title}
            title={greenHydrogen.title}
            image={greenHydrogen.image}
            imageAlt={greenHydrogen.imageAlt}
            reverse={true}
          >
            <p className="text-muted leading-relaxed">{greenHydrogen.description}</p>
          </SplitSection>
        </Container>
      </Section>

      {/* 4. Electrolyzer - image left, text right */}
      <Section>
        <Container>
          <SplitSection
            badge={electrolyzer.title}
            title={electrolyzer.title}
            image={electrolyzer.image}
            imageAlt={electrolyzer.imageAlt}
          >
            <p className="text-muted leading-relaxed">{electrolyzer.description}</p>
          </SplitSection>
        </Container>
      </Section>

      {/* 5. Consultation Form */}
      <Section>
        <Container>
          <ConsultationForm
            title={homeContent.cta.title}
            description={homeContent.cta.description}
          />
        </Container>
      </Section>
    </>
  );
}
