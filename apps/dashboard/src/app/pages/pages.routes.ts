import { Route } from '@angular/router';
import { DashboardPageComponent } from './dashboard/dashboard.page';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: DashboardPageComponent,
  },
];
