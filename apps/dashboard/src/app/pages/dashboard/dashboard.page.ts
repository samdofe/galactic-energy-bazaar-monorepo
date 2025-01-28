import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PlanetsListComponent } from '../../ui/planets-list/planets-list.component';
import { LeaderboardListComponent } from '../../ui/leaderboard-list/leaderboard-list.component';
import { TradesStore } from '@stores/trades';
import { SocketIOStore } from '@stores/socket-io';

@Component({
  selector: 'dashboard-page',
  imports: [
    CommonModule,
    PlanetsListComponent,
    LeaderboardListComponent,
    TranslateModule
  ],
  providers: [TradesStore, SocketIOStore],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPageComponent implements OnInit {
  socketIOStore = inject(SocketIOStore);
  latestTrade = this.socketIOStore.getLatestTrade;
  tradesStore = inject(TradesStore);
  queryParams = computed(() => {
    this.latestTrade();
    return {
      dateFrom: '2024-11-01',
      dateTo: '2025-01-15',
    }
  })

  constructor() {
    effect(() => {
      const trade = this.latestTrade();
      if (trade) {
        this.refetchData();
      }
    });
  }

  ngOnInit() {
    this.tradesStore.getTradeStats(this.queryParams);
    this.refetchData();
  }

  private refetchData() {
    this.tradesStore.getLeaderBoards();
  }
}
