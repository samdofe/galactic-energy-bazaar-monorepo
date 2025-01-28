import { Route } from '@angular/router';
import { TradesListPageComponent } from './trades-list/trades-list.page';
import { TradesDetailsPageComponent } from './trades-details/trades-details.page';

export const remoteRoutes: Route[] = [
  {
    path:'',
    component: TradesListPageComponent,
  },
  {
    path:'details/:tradeId',
    component: TradesDetailsPageComponent,
  },
];
