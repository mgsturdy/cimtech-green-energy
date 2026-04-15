export interface PortfolioItem {
  image: string;
  caption: string;
}

export const portfolio: PortfolioItem[] = [
  { image: '/images/fuel-cell-assembly.jpg', caption: 'Precision Fuel Cell Assembly' },
  { image: '/images/pvdf-machined.jpg', caption: 'PVDF Machined Components' },
  { image: '/images/g10-fr4-end-plates.jpg', caption: 'G10 FR4 End Plates' },
  { image: '/images/multi-component-assembly.jpg', caption: 'Multi-Component Assembly' },
  { image: '/images/pem-electrolyzer.jpg', caption: 'PEM Electrolyzer System' },
  { image: '/images/production-scale.jpg', caption: 'Production-Scale Deployment' },
];
