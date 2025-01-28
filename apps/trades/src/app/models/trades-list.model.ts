export interface ITraderList {
  _id: string;
  tradeId: string;
  planetId: string;
  traderId: string;
  type: 'SELL' | 'BUY';
  status: 'COMPLETED' | 'REJECTED' | 'PENDING';
  tradeDate: string;
  zetaJoules: number;
  pricePerUnit: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  planet: {
    planetId: string;
    name: string;
    images: {
      base: string;
      second: string;
      third: string;
    };
    color: string;
  };
  trader: {
    userId: string;
    username: string;
    images: {
      base: string;
    };
  };
}

export interface IPaginationMeta {
  total: number;
  page: number;
  limit: number;
}

export interface ITradesResponse {
  data: ITraderList[];
  meta: IPaginationMeta;
}