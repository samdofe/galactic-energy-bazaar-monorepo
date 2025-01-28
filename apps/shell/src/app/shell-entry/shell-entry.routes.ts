import { Route } from '@angular/router';
import { fedsCoreAuthGuard } from '@feds/core-auth';
import { ShellEntryComponent } from './shell-entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: ShellEntryComponent,
    children: [
      {
        path: 'trades',
        loadChildren: () => import('trades/Routes').then((m) => m!.remoteRoutes),
        canActivate: [fedsCoreAuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('dashboard/Routes').then((m) => m!.remoteRoutes),
        canActivate: [fedsCoreAuthGuard]
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ]
  }
];
