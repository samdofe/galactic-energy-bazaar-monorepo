import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FedsCoreEnvSyncService } from '@feds/core-env';
import {
  ITradesStoreGetLeaderBoardsResponse,
  ITradesStoreStatsModel,
  ITradesStoreTradeModel,
  ITradesStoreTradesList,
  ITradesStoreTradesQueryParams,
  TTradesStoreEnvironment,
  TTradesStoreTradesStatsQueryParams,
} from './trades-store.model';
import { Observable } from 'rxjs';

@Injectable()
export class TradesStoreService {
  readonly #http = inject(HttpClient);
  readonly #envSrv = inject(FedsCoreEnvSyncService);
  readonly #environment = this.#envSrv.environment();
  readonly #apiTradesDomain = (this.#environment() as TTradesStoreEnvironment)
    .API_TRADES_DOMAIN;
  readonly #apiTradesContext = (this.#environment() as TTradesStoreEnvironment)
    .API_TRADES_CONTEXT;
  readonly #apiBase = `${this.#apiTradesDomain}${this.#apiTradesContext}`;

  getTrades(
    query: ITradesStoreTradesQueryParams
  ): Observable<ITradesStoreTradesList> {
    let queryParams = '';
    Object.entries(query).forEach(([key, value], idx) => {
      queryParams = idx === 0 ? `?${key}=${value}` : `&${key}=${value}`;
    });
    return this.#http.get<ITradesStoreTradesList>(
      `${this.#apiBase}${queryParams}`
    );
  }

  getTradesStats({
    dateTo,
    dateFrom,
  }: TTradesStoreTradesStatsQueryParams): Observable<ITradesStoreStatsModel[]> {
    const queryParams = `?dateFrom=${dateFrom}&dateTo=${dateTo}`;
    return this.#http.get<ITradesStoreStatsModel[]>(
      `${this.#apiBase}/tradeStats${queryParams}`
    );
  }

  getTrade(tradeId: string): Observable<ITradesStoreTradeModel> {
    return this.#http.get<ITradesStoreTradeModel>(
      `${this.#apiBase}/${tradeId}`
    );
  }

  getLeaderBoards(): Observable<ITradesStoreGetLeaderBoardsResponse> {
    return this.#http.get<ITradesStoreGetLeaderBoardsResponse>(
      `${this.#apiBase}/leaderBoards`
    );
  }

  /**
   * OUT OF SCOPE
   * NEW PLANET
   * UPDATE PLANET
   * DELETE PLANET
   * **/
}
