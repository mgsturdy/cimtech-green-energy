import { Marquee } from './Marquee';

const ITEMS = [
  'RUNTIME: 21Y',
  '49.2827°N 123.1207°W',
  'STATUS: OPERATIONAL',
  'ISO 9001:2015',
  'AS9100D · AEROSPACE',
  'NPI IN 10 WORKING DAYS',
  'EST. 2005',
  'VANCOUVER / CANADA',
  '●',
];

export function TickerDivider() {
  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-3">
      <Marquee pauseOnHover={false}>
        {ITEMS.map((item, i) => (
          <span key={i} className="mono-label text-[var(--color-muted)] whitespace-nowrap">
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
