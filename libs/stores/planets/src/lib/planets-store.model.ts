import { TFedsCoreDefaultEnvironment } from '@feds/core-env';

export type TPlanetStoreEnvironment = TFedsCoreDefaultEnvironment & {
  API_PLANETS_DOMAIN:string;
  API_PLANETS_CONTEXT:string;
}

export interface IPlanetStoreImages {
  base: string,
  second?: string,
  third?: string
}
export interface IPlanetTradeStatsQueryParams {
  planetId: string;
  traderId: string;
  status: string;
  startDate: string;
  endDate: string;
  page: string | number;
  limit: string | number;
}

export interface IPlanetTradeStatsResponse {
  buyOrders: number,
  sellOrders: number,
  totalVolume: number,
  avgPrice: number,
  planetId: string,
  name: string,
  description: string,
  language: string,
  currency: string,
  images: IPlanetStoreImages,
  color: string,
  tradeVolume: number,
  riskFactors: string[],
  averageDailyConsumption: number,
  creditRating: string,
  createdAt: string,
  updatedAt: string
}

export interface IPlanetStorePlanetModel {
  images: IPlanetStoreImages,
  _id: string,
  planetId: string,
  name: string,
  description: string,
  language: string,
  currency: string,
  tradeVolume: number,
  riskFactors: string[],
  color: string,
  averageDailyConsumption: number,
  creditRating: string,
  createdAt: string,
  updatedAt: string
}

export interface IPLanetStoreState {
  isLoading: boolean,
  selectedPlanet?: IPlanetStorePlanetModel;
  planets?: IPlanetStorePlanetModel[];
}