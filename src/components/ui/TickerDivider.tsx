import { Marquee } from './Marquee';

const ITEMS = [
  'RUNTIME: 23Y',
  '43.6532°N 79.3832°W',
  'STATUS: OPERATIONAL',
  'ISO 9001:2015',
  'NPI IN 14 DAYS',
  'EST. 2001',
  'ONTARIO / CANADA',
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
