import { Button } from '@/components/ui/Button';

type CTASectionProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0f2a1a] rounded-2xl p-16 overflow-hidden">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div className="relative text-center">
        <h2 className="font-sans text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-[#94A3B8] max-w-xl mx-auto mb-8">{description}</p>
        <div className="flex items-center justify-center gap-4">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
