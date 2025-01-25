import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

console.log('Login :: entry-component : ', process.env.MODE);

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-login-entry',
  template: `<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntryComponent {}
