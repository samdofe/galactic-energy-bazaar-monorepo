import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from '../pages/dashboard/dashboard.page';
import { RouterOutlet } from '@angular/router';

console.log('Dashboard :: entry-component : ', process.env['MODE']);

@Component({
  imports: [CommonModule, RouterOutlet],
  selector: 'dashboard-entry',
  template: `
    <router-outlet/>
  `,
})
export class RemoteEntryComponent {}
