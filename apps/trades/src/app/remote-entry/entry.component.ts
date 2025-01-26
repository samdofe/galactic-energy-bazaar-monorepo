import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as defaultLanguageJSON from '../../../public/i18n/en-US.json';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FedsCoreI18nService } from '@feds/core-i18n';

console.log('Trades :: entry-component : ', process.env.MODE);

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'trades-entry',
  template: `
    <section class="entry-container">
      <trades-nx-welcome />
    </section>
  `,
  styleUrl: './entry.component.scss',
})
export class RemoteEntryComponent {
  i18nTranslate = inject(FedsCoreI18nService);
  constructor() {
    this.i18nTranslate.init({
      nameSpace: 'trades',
      defaultLangJSON: defaultLanguageJSON,
    })
  }
}
