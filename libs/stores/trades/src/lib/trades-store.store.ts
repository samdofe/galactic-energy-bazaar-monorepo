import { inject } from "@angular/core"
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals"
import { rxMethod } from "@ngrx/signals/rxjs-interop"
import { tapResponse } from "@ngrx/operators"
import { TradesStoreService } from './trades-store.service';
import {
  ITradesStoreState,
  ITradesStoreTradesQueryParams,
  TTradesStoreTradesStatsQueryParams
} from './trades-store.model';

const initialState: ITradesStoreState = {
  isLoading: false,
  tradesStats: [],
  tradesList:{
    data: [],
    meta: {
      total: 0,
      page: 0,
      limit: 0
    }
  },
  leaderBoards: {
    planetLeaderboard: [],
    traderLeaderboard: [],
  },
  tradesFilters: {},
  tradesStatsFilters:{
    dateFrom: '',
    dateTo: ''
  }
}

export const TradesStore = signalStore(
  withState(initialState),
  withMethods((store, tradesStoreService = inject(TradesStoreService)) => {
    const updateTradesFilters = (updatedFilters: ITradesStoreTradesQueryParams) => {
      patchState(store, (state) => ({ tradesFilters: {...state.tradesFilters, ...updatedFilters}}) );
    }
    const updateTradesStatsFilters = (updatedFilters: TTradesStoreTradesStatsQueryParams) => {
      patchState(store, (state) => ({ tradesStatsFilters: {...state.tradesStatsFilters, ...updatedFilters}}) );
    }
    const getLeaderBoards = rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return tradesStoreService.getLeaderBoards().pipe(
            tapResponse({
              next: (leaderBoards) => {
                patchState(store, { leaderBoards });
              },
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          )
        }),
      ),
    );
    const getTradeStats = rxMethod<TTradesStoreTradesStatsQueryParams>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap((planetId) => {
          return tradesStoreService.getTradesStats(planetId).pipe(
            tapResponse({
              next: (tradesStats) => {
                patchState(store, { tradesStats })
              },
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          )
        }),
      ),
    );
    const getTrades = rxMethod<ITradesStoreTradesQueryParams>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap((query) => {
          return tradesStoreService.getTrades(query).pipe(
            tapResponse({
              next: (tradesList) => {
                patchState(store, { tradesList });
              },
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          )
        }),
      ),
    );

    return {
      getLeaderBoards,
      getTradeStats,
      getTrades,
      updateTradesFilters,
      updateTradesStatsFilters
    }
  }),
)

