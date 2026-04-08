export function DuotoneFilter() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <filter id="cimtech-duotone">
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0    0    0    1 0"
          />
          <feComponentTransfer colorInterpolationFilters="sRGB">
            <feFuncR tableValues="0.016 0.659" />
            <feFuncG tableValues="0.122 1.000" />
            <feFuncB tableValues="0.102 0.122" />
          </feComponentTransfer>
        </filter>
        <filter id="cimtech-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0" />
        </filter>
      </defs>
    </svg>
  );
}
