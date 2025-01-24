import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-nx-welcome',
  imports: [CommonModule],
  template: `
    <div id="dashboard-welcome">
      <h1>
        <span> Hello there, </span>
        Welcome dashboard 👋 and say Hi!!!!
      </h1>
    </div>
  `,
  styles: []
})
export class NxWelcomeComponent {}
