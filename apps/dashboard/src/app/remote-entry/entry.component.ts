import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from '../pages/dashboard/dashboard.page';

console.log('Dashboard :: entry-component : ', process.env.MODE);

@Component({
  imports: [CommonModule, DashboardPageComponent],
  selector: 'dashboard-entry',
  template: `
    <dashboard-page></dashboard-page>
  `,
})
export class RemoteEntryComponent {}
