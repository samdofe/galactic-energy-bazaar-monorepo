export interface IImages {
  dayUrl: string;
  nightUrl?: string;
  cloudsUrl?: string;
}

export interface IPlanetInfo {
  buyOrders: number,
  sellOrders: number,
  totalVolume: number,
  avgPrice: number,
  planetId: string,
  name: string,
  description: string,
  language: string,
  currency: string,
  images: IImages,
  color: string,
  tradeVolume: number,
  riskFactors: string[],
  averageDailyConsumption: number,
  creditRating: string,
  createdAt: Date,
  updatedAt: Date
}