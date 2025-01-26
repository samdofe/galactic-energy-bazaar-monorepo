import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { fedsCoreAuthInterceptor } from '@feds/core/auth';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { fedsCoreI18nHttpLoaderFactory } from '@feds/core-i18n';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideNoopAnimations(),
    provideHttpClient(withInterceptors([fedsCoreAuthInterceptor])),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: fedsCoreI18nHttpLoaderFactory(`${process.env['API_I18N_ENDPOINT']}/`),
        deps: [HttpClient],
      },
    })])
  ],
};
