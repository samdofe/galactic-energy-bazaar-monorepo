import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { TradesListPageComponent } from '../pages/trades-list/trades-list.page';
import { TradesDetailsPageComponent } from '../pages/trades-details/trades-details.page';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path:'',
        component: TradesListPageComponent,
      },
      {
        path:'details/:tradeId',
        component: TradesDetailsPageComponent,
      },
    ]
  }
];
