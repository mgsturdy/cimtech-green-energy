import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

type HeroHomeProps = {
  badge: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  backgroundImage: string;
};

export function HeroHome({
  badge,
  headline,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
}: HeroHomeProps) {
  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={backgroundImage}
        fill
        className="object-cover"
        alt=""
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/92 to-[#0f2a1a]/88" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #16A34A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Content */}
      <Container className="relative z-10 py-20 lg:py-28">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-hover animate-[pulse-subtle_2s_infinite]" />
          <span className="font-mono text-xs text-accent-hover tracking-wide">
            {badge}
          </span>
        </span>

        {/* Headline */}
        <h1 className="font-sans text-5xl font-extrabold text-white leading-tight max-w-[680px] mb-5">
          {headline}
        </h1>

        {/* Description */}
        <p className="text-[17px] text-[#94A3B8] max-w-[560px] leading-relaxed mb-8">
          {description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          <Button
            href={secondaryCta.href}
            variant="secondary"
            size="lg"
            className="border-white/20 text-white hover:border-white/50 bg-transparent"
          >
            {secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
