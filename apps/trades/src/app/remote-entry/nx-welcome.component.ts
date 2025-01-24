import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trades-nx-welcome',
  imports: [CommonModule],
  template: `
    <div id="trades-welcome">
      <h1>
        <span> Hello there, </span>
        Welcome trades 👋
      </h1>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
