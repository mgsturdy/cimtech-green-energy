import { type Metric } from '@/data/content';
import { Container } from '@/components/ui/Container';

type MetricsBandProps = { metrics: Metric[] };

export function MetricsBand({ metrics }: MetricsBandProps) {
  return (
    <Container className="-mt-10 relative z-10">
      <div className="bg-surface border border-border rounded-xl p-9 grid grid-cols-2 md:grid-cols-4">
        {metrics.map((metric, i) => (
          <div
            key={metric.label}
            className={`text-center py-4 md:py-0 ${i !== 0 ? 'md:border-l md:border-border' : ''}`}
          >
            <div className="font-sans text-4xl font-extrabold text-accent">
              {metric.value}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted mt-1.5">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
