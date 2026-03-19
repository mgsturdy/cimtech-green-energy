import Image from 'next/image';

type LogoBandProps = {
  logos: { src: string; alt: string }[];
  label?: string;
};

export function LogoBand({ logos, label }: LogoBandProps) {
  return (
    <div className="py-12 border-y border-border text-center">
      {label && (
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent mb-7">
          {label}
        </p>
      )}
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={40}
            className="h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
}
