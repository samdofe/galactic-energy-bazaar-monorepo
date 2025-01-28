import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    loadChildren: () =>
      import('../pages/pages.routes').then((m) => m.remoteRoutes),
  },
];
