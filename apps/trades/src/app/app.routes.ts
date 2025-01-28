import { Route } from '@angular/router';
import { fedsCoreAuthGuard } from '@feds/core-auth';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
    canActivate: [fedsCoreAuthGuard]
  },
];
