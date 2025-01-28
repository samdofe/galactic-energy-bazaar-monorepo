import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as defaultLanguageJSON from '../../../public/i18n/en-US.json';
import { FedsCoreI18nService } from '@feds/core-i18n';
import { FedsCoreEnvSyncService } from '@feds/core-env';
import { environment} from '../../environments/environment';

@Component({
  imports: [CommonModule, RouterOutlet],
  selector: 'dashboard-entry',
  template: `
    <router-outlet/>
  `,
})
export class RemoteEntryComponent {
  i18nTranslate = inject(FedsCoreI18nService);
  envSrv = inject(FedsCoreEnvSyncService);
  environment = this.envSrv.environment();
  constructor(){
    this.envSrv.setEnvironment(environment);
    console.log('DASHBOARD :: environment : ', this.environment());
    this.i18nTranslate.init({
      nameSpace: 'dashboard',
      defaultLangJSON: defaultLanguageJSON,
    });
  }
}
