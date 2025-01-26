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
  tradeVolume: number,
  riskFactors: string[],
  averageDailyConsumption: number,
  creditRating: string,
  createdAt: Date,
  updatedAt: Date
}