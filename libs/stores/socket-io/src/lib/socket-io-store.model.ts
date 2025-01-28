import { TFedsCoreDefaultEnvironment } from '@feds/core-env';

export type TSocketStoreEnvironment = TFedsCoreDefaultEnvironment & {
  API_SOCKET_DOMAIN:string;
}

export interface ISocketStoreTradeModel {
  tradeId: string
  planetId: string
  traderId: string
  status: string
  tradeDate: string
  zetaJoules: number
  pricePerUnit: number
  totalPrice: number
}