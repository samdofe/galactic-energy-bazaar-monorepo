import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradesListComponent } from '../../ui/trades-list/trades-list.component';
import { PageEvent } from '@angular/material/paginator';
import { TradesStore } from '@stores/trades';

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

  ngOnInit(){
    this.tradesStore.updateTradesFilters({planetId: 'NOV07'});
    const query = this.tradesStore.tradesFilters;
    this.tradesStore.getTrades(query);
  }

  handlePageChange(event: PageEvent) {
    const {pageIndex, pageSize} = event;
    this.tradesStore.updateTradesFilters({page: pageIndex + 1, limit: pageSize});
  }
}