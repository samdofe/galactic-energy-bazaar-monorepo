import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const fedsCoreI18nHttpLoaderFactory = (loaderPath='./i18n/', fileType= '.json') =>  (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http, loaderPath, fileType);
}