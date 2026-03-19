import { Container } from '@/components/ui/Container';

type HeroStaticProps = {
  title: string;
  description?: string;
};

export function HeroStatic({ title, description }: HeroStaticProps) {
  return (
    <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0f2a1a] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #16A34A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <Container className="relative z-10 py-24 lg:py-32">
        <h1 className="font-sans text-4xl lg:text-5xl font-bold text-white">{title}</h1>
        {description && (
          <p className="text-[#94A3B8] max-w-2xl mt-4 leading-relaxed">{description}</p>
        )}
      </Container>
    </div>
  );
}
