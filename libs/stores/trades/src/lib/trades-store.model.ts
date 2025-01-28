import { TFedsCoreDefaultEnvironment } from '@feds/core-env';

export type TTradesStoreEnvironment = TFedsCoreDefaultEnvironment & {
  API_TRADES_DOMAIN:string;
  API_TRADES_CONTEXT:string;
}

export interface ITradesStoreImages {
  base: string,
  second?: string,
  third?: string
}
export interface ITradesStoreTradesQueryParams {
  planetId?: string;
  traderId?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: string | number;
  limit?: string | number;
}

export type TTradesStoreTradesStatsQueryParams = Required<Pick<ITradesStoreTradesQueryParams, 'dateTo' | 'dateFrom' >>

export interface ITradesStoreStatsModel {
  buyOrders: number,
  sellOrders: number,
  totalVolume: number,
  avgPrice: number,
  planetId: string,
  name: string,
  description: string,
  language: string,
  currency: string,
  images: ITradesStoreImages,
  color: string,
  tradeVolume: number,
  riskFactors: string[],
  averageDailyConsumption: number,
  creditRating: string,
  createdAt: string,
  updatedAt: string
}

export interface ITradesStoreTraderModel {
  userId: string,
  username: string,
  images: ITradesStoreImages
}

export interface ITradesStorePlanetModel {
  planetId: string,
  name: string,
  images: ITradesStoreImages,
  color: string
}

export interface ITradesStoreTradeModel {
  tradeId: string,
  planetId: string,
  traderId: string,
  type: string,
  status: string,
  tradeDate: string,
  zetaJoules: number,
  pricePerUnit: number,
  totalPrice: number,
  createdAt: string,
  updatedAt: string,
}


export interface ITradesStoreTradesModel extends ITradesStoreTradeModel {
  _id: string,
  planet: ITradesStorePlanetModel,
  trader: ITradesStoreTraderModel
}

export interface ITradesStoreMetaModel {
  total: number,
  page: number,
  limit: number
}

export interface ITradesStoreTradesList {
  data: ITradesStoreTradesModel[],
  meta: ITradesStoreMetaModel
}

export interface ITradesStoreLeaderModel {
  tradeCount : number,
  id: string,
  name: string,
  images: ITradesStoreImages,
}

export interface ITradesStoreGetLeaderBoardsResponse {
  planetLeaderboard: ITradesStoreLeaderModel[],
  traderLeaderboard: ITradesStoreLeaderModel[],
}

export interface ITradesStoreState {
  isLoading: boolean,
  tradesList?: ITradesStoreTradesList,
  leaderBoards?: ITradesStoreGetLeaderBoardsResponse,
  tradesStats?: ITradesStoreStatsModel[]
}
