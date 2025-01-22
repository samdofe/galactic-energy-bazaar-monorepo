import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'dashboard-entry',
  template: `
    <h1>Dashboard</h1>
    <dashboard-nx-welcome></dashboard-nx-welcome>
  `,
})
export class RemoteEntryComponent {}
