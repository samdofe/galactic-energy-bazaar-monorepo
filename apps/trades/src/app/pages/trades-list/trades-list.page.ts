import { Component, ChangeDetectionStrategy, inject, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradesListComponent } from '../../ui/trades-list/trades-list.component';
import { PageEvent } from '@angular/material/paginator';
import { TradesStore } from '@stores/trades';
import { FedsCoreAuthStore } from '@feds/core-auth';

@Component({
  selector: 'trades-list',
  imports: [ TradesListComponent, CommonModule ] ,
  providers: [TradesStore],
  templateUrl: './trades-list.page.html',
  styleUrls: ['./trades-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradesListPageComponent implements OnInit {
  tradesStore = inject(TradesStore);
  authStore = inject(FedsCoreAuthStore);
  me = this.authStore.me;

  ngOnInit(): void {
    this.loadTrades();
  }

  loadTrades(){
    const query = computed(() => {
      const me = this.me();
      let filtersMe = {};
      if(me){
        const { planetId, role } = me;
        filtersMe = role === 'trader' ? { planetId } : {};
      }
      const filtersQuery = this.tradesStore.tradesFilters();
      return {
        ...filtersMe,
        ...filtersQuery
      }
    })
    this.tradesStore.getTrades(query);
  }

  handlePageChange(event: PageEvent) {
    const {pageIndex, pageSize} = event;
    this.tradesStore.updateTradesFilters({page: pageIndex + 1, limit: pageSize});
  }
}