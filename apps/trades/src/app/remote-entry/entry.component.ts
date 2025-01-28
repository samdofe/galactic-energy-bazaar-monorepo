import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FedsCoreI18nService } from '@feds/core-i18n';
import { FedsCoreEnvSyncService } from '@feds/core-env';
import * as defaultLanguageJSON from '../../../public/i18n/en-US.json';
import { environment } from '../../environments/environment';
import { RouterOutlet } from '@angular/router';

console.log('Trades :: entry-component : ', process.env.MODE);

@Component({
  imports: [CommonModule, RouterOutlet],
  selector: 'trades-entry',
  template: `
    <section class="entry-container">
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrl: './entry.component.scss',
})
export class RemoteEntryComponent {
  i18nTranslate = inject(FedsCoreI18nService);
  envSrv = inject(FedsCoreEnvSyncService);
  environment = this.envSrv.environment();
  constructor() {
    this.envSrv.setEnvironment(environment);
    console.log('TRADES :: environment : ', this.environment());
    this.i18nTranslate.init({
      nameSpace: 'trades',
      defaultLangJSON: defaultLanguageJSON,
    });
  }
}
