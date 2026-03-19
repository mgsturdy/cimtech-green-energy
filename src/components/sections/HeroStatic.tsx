import { Container } from '@/components/ui/Container';

type HeroStaticProps = {
  title: string;
  description?: string;
};

export function HeroStatic({ title, description }: HeroStaticProps) {
  return (
    <div className="bg-surface-elevated">
      <Container className="py-16 lg:py-20">
        <h1 className="font-sans text-4xl lg:text-5xl font-bold">{title}</h1>
        {description && (
          <p className="text-muted max-w-2xl mt-4 leading-relaxed">{description}</p>
        )}
      </Container>
    </div>
  );
}
