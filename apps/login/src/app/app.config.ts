import {
  ApplicationConfig,
  importProvidersFrom,
  provideAppInitializer,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { fedsCoreAuthInterceptor } from '@feds/core/auth';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { fedsCoreI18nHttpLoaderFactory } from '@feds/core/i18n';
import { fedsCoreEnvInitializerSync } from '@feds/core-env';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAppInitializer(fedsCoreEnvInitializerSync(environment)),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([fedsCoreAuthInterceptor])),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: fedsCoreI18nHttpLoaderFactory(`${environment.API_I18N_ENDPOINT}/`),
        deps: [HttpClient],
      },
    })])
  ],
};
