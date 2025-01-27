import { IImage } from './image.model';

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
  images: IImage,
  color: string,
  tradeVolume: number,
  riskFactors: string[],
  averageDailyConsumption: number,
  creditRating: string,
  createdAt: string,
  updatedAt: string
}