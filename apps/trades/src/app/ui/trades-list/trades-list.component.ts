import { Component, input, output, computed, signal  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ITradesResponse } from '../../models/trades-list.model';
import { ITradesStoreTradesList } from '@stores/trades';

@Component({
  selector: 'trades-list-component',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './trades-list.component.html',
  styleUrls: ['./trades-list.component.scss'],
})
export class TradesListComponent {
  data = input.required<ITradesStoreTradesList>();
  pageChange = output<PageEvent>();
  displayedColumns = signal<string[]>([
    'traderName',
    'tradeId',
    'planetName',
    'type',
    'status',
    'tradeDate',
    'zetaJoules',
    'totalPrice',
  ]);

  onPageChange(event: PageEvent): void {
    const { pageSize } = event;
    event = this.data().meta.limit !== pageSize ? {...event, pageIndex: 0} : {...event};
    this.pageChange.emit(event);
  }

  getTraderName(element: any): string {
    return element.trader?.username || '';
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }

  formatCurrency(amount: number): string {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}