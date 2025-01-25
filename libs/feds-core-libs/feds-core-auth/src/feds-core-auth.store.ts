import { inject } from '@angular/core';
import { map, mergeMap, pipe, switchMap, tap } from 'rxjs';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import {
  IFedsCoreAuthCredentials,
  IFedsCoreAuthState,
} from './feds-core-auth.model';
import { fedsCoreAuthService } from './feds-core-auth.service';

const initialState: IFedsCoreAuthState = {
  token: null,
  isLoading: false,
  user: null,
};

export const FedsCoreAuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, authService = inject(fedsCoreAuthService)) => {
    const me = rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return authService.me().pipe(
            tapResponse({
              next: (user) => patchState(store, { user }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    );

    const login = rxMethod<IFedsCoreAuthCredentials>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        mergeMap((query) => {
          return authService.login(query).pipe(
            tapResponse({
              next: ({ token }) => {
                localStorage.setItem('token', token);
                patchState(store, { token });
                // Automatically call "me" to fetch user details after login
              },
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        }),
        map(() => me())
      )
    );

    const logOut = () => {
      localStorage.removeItem('token');
      patchState(store, { token: null, user: null });
    };

    return {
      login,
      logOut,
      me,
    };
  })
);
