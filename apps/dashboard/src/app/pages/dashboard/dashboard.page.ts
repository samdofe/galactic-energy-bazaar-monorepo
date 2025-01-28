import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FedsCoreI18nService } from '@feds/core-i18n';
import { FedsCoreEnvSyncService } from '@feds/core/env';
import {environment} from '../../../environments/environment';
import * as defaultLanguageJSON from '../../../../public/i18n/en-US.json';
import { PlanetsListComponent } from '../../ui/planets-list/planets-list.component';
import { LeaderboardListComponent } from '../../ui/leaderboard-list/leaderboard-list.component';
import { TradesStore } from '@stores/trades';

@Component({
  selector: 'dashboard-page',
  imports: [
    CommonModule,
    PlanetsListComponent,
    LeaderboardListComponent,
    TranslateModule
  ],
  providers: [TradesStore],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPageComponent implements OnInit {
  i18nTranslate = inject(FedsCoreI18nService);
  envSrv = inject(FedsCoreEnvSyncService);
  environment = this.envSrv.environment();
  tradesStore = inject(TradesStore);
  queryParams = {
    dateFrom: '2024-11-01',
    dateTo: '2025-01-15',
  }
  constructor() {
    this.envSrv.setEnvironment(environment);
    console.log('DASHBOARD :: environment : ', this.environment());
    this.i18nTranslate.init({
      nameSpace: 'dashboard',
      defaultLangJSON: defaultLanguageJSON,
    });
  }

  ngOnInit() {
    this.tradesStore.getTradeStats(this.queryParams);
    this.tradesStore.getLeaderBoards();
  }
}
