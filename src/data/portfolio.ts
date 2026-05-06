export interface PortfolioItem {
  image: string;
  caption: string;
  category?: string;
}

export const portfolio: PortfolioItem[] = [
  { image: '/images/assemblies/aerospace-2.png', caption: 'Aerospace Assembly', category: 'AEROSPACE' },
  { image: '/images/assemblies/fuelcell-3.png', caption: 'Hydrogen Fuel Cell Stack', category: 'HYDROGEN FUEL CELL' },
  { image: '/images/assemblies/electrolyser-2.jpg', caption: 'Electrolyser Assembly', category: 'ELECTROLYSERS' },
  { image: '/images/assemblies/electronics-2.png', caption: 'Electronics Assembly', category: 'ELECTRONICS' },
  { image: '/images/assemblies/marine-1.png', caption: 'Marine Assembly', category: 'MARINE' },
  { image: '/images/assemblies/mining-2.png', caption: 'Mining Assembly', category: 'MINING' },
];
