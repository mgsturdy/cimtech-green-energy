import { CountUp } from '@/components/ui/CountUp';

type MetricRaw = { value: string; label: string };

/** Parse a value string like "20+", "60K+", "10K", "4" into { num, suffix } */
function parseMetric(raw: string): { num: number; suffix: string } {
  // Match leading number (optionally followed by K/M) plus any trailing characters
  const match = raw.match(/^(\d+(?:\.\d+)?)(K|M)?(.*)/i);
  if (!match) return { num: 0, suffix: raw };
  let num = parseFloat(match[1]);
  const scale = match[2]?.toUpperCase();
  const rest = match[3] ?? '';
  if (scale === 'K') num *= 1000;
  if (scale === 'M') num *= 1_000_000;
  // Reconstruct suffix: scale abbreviation + trailing chars (e.g. "+")
  const suffix = scale ? `${scale}${rest}` : rest;
  return { num, suffix };
}

export function MetricsBand({ metrics }: { metrics: MetricRaw[] }) {
  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1440px] px-[var(--spacing-pad-x)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
        {metrics.map((m, i) => {
          const { num, suffix } = parseMetric(m.value);
          return (
            <div key={i} className="py-14 px-6 first:pl-0 last:pr-0">
              <p className="mono-label mb-4">{m.label}</p>
              <p className="font-semibold text-[var(--text-h1)] tracking-[-0.03em] leading-none flex items-baseline">
                <CountUp to={num} suffix={suffix} />
                <span className="ml-1 w-2 h-8 bg-[var(--color-accent)] animate-blink" />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
