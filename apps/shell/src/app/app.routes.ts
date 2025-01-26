import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./shell-entry/shell-entry.routes').then((m) => m!.remoteRoutes),
  }
];
