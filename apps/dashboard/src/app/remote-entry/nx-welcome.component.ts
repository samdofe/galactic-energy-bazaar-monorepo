import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-nx-welcome',
  imports: [CommonModule],
  template: `
    <div id="welcome">
      <h1>
        <span> Hello there, </span>
        Welcome dashboard 👋 and say Hi!!!!
      </h1>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
