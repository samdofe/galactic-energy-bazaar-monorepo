import { inject } from "@angular/core"
import { pipe, switchMap, tap } from "rxjs"
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals"
import { rxMethod } from "@ngrx/signals/rxjs-interop"
import { tapResponse } from "@ngrx/operators"
import type { IFedsCoreAuthCredentials, IFedsCoreAuthState } from "./feds-core-auth.model"
import { FedsCoreAuthService } from "./feds-core-auth.service"

const initialState: IFedsCoreAuthState = {
  token: null,
  isLoading: false,
  me: null,
}

export const FedsCoreAuthStore = signalStore(
  { providedIn: "root" },
  withState(initialState),
  withMethods((store, authService = inject(FedsCoreAuthService)) => {
    const updateToken = (newToken: string) => {
      patchState(store, { token: newToken })
    }

    const getMeHelper = () => authService.fetchMe().pipe(
      tapResponse({
        next: (me) => patchState(store, { me }),
        error: console.error,
        finalize: () => patchState(store, { isLoading: false }),
      }),
    )

    const getMe = rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => getMeHelper()),
      ),
    )

    const login = rxMethod<IFedsCoreAuthCredentials>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((query) => {
          return authService.login(query).pipe(
            tapResponse({
              next: ({ token }) => {
                localStorage.setItem("token", token)
                patchState(store, { token })
              },
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            }),
            switchMap(() => getMeHelper())
          )
        }),
      ),
    )

    const logOut = () => {
      localStorage.removeItem("token")
      patchState(store, { token: null, me: null })
    }

    return {
      updateToken,
      login,
      logOut,
      getMe,
    }
  }),
)

