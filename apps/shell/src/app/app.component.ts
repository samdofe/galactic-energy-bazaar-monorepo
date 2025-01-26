import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FedsCoreI18nService } from '@feds/core/i18n';
import * as defaultLanguageJSON from '../../public/i18n/en-US.json';

@Component({
  imports: [
    RouterModule,
    TranslateModule
  ],
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  i18nTranslate = inject(FedsCoreI18nService);
  constructor() {
    this.i18nTranslate.init({
      nameSpace: 'shell',
      defaultLangJSON: defaultLanguageJSON,
    });
  }
}
