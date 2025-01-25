import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

const { MODE } = process.env;

console.log('Dashboard :: entry-component : ', process.env['MODE']);

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'dashboard-entry',
  template: `
    <dashboard-nx-welcome></dashboard-nx-welcome>
  `,
})
export class RemoteEntryComponent {}
