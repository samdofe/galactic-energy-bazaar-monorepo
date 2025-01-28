import { Component, input, output, computed, signal  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ITradesResponse } from '../../models/trades-list.model';

@Component({
  selector: 'trades-list-component',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './trades-list.component.html',
  styleUrls: ['./trades-list.component.scss']
})
export class TradesListComponent {
  data = input.required<ITradesResponse>();
  totalPages = input.required<number>();
  pageChange = output<PageEvent>();

  displayedColumns = signal<string[]>(['traderName', 'type', 'status', 'tradeDate', 'zetaJoules', 'totalPrice']);

  startIndex = computed(() => (this.data().meta.page - 1) * this.data().meta.limit + 1);
  endIndex = computed(() => Math.min(this.data().meta.page * this.data().meta.limit, this.data().meta.total));

  currentPage = signal(1);
  itemsPerPage = signal(10);

  onPageChange(event: PageEvent): void {
    this.currentPage.set(event.pageIndex + 1);
    this.itemsPerPage.set(event.pageSize);
    this.pageChange.emit(event);
  }

  getTraderName(element: any): string {
    return element.trader?.username || '';
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }

  formatCurrency(amount: number): string {
    return amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}