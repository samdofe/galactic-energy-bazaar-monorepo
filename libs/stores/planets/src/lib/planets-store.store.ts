import { inject } from "@angular/core"
import { pipe, switchMap, tap } from "rxjs"
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals"
import { rxMethod } from "@ngrx/signals/rxjs-interop"
import { tapResponse } from "@ngrx/operators"
import { IPLanetStoreState } from './planets-store.model';
import { PlanetsStoreService } from './planets-store.service';

const initialState: IPLanetStoreState = {
  isLoading: false,
}

export const PlanetStore = signalStore(
  withState(initialState),
  withMethods((store, planetStoreSrv = inject(PlanetsStoreService)) => {

    const getAllPlanets = rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return planetStoreSrv.getAllPlanet().pipe(
            tapResponse({
              next: (planets) => {
                patchState(store, { planets })
              },
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          )
        }),
      ),
    );

    const getPlanet = rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((planetId) => {
          return planetStoreSrv.getPlanet(planetId).pipe(
            tapResponse({
              next: (planet) => {
                patchState(store, { selectedPlanet : planet })
              },
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          )
        }),
      ),
    );

    return {
      getAllPlanets,
      getPlanet,
    }
  }),
)

