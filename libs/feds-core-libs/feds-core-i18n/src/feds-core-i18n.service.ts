import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IFedsCoreI18nInitParams } from './feds-core-i18n.model';
import { catchError, of } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class FedsCoreI18nService {
  defaultLangs = [
    'SOL',
    'AETH',
    'ULTH',
    'CRYO',
    'JOV',
    'ZARX',
    'GALCOM',
    'DRAC',
    'HYP',
    'NEB',
  ];
  defaultLangsMap = {
    SOL: 'en-US',
    AETH: 'es-ES',
    ULTH: 'en-US',
    CRYO: 'es-ES',
    JOV: 'en-US',
    ZARX: 'es-ES',
    GALCOM: 'en-US',
    DRAC: 'es-ES',
    HYP: 'en-US',
    NEB: 'es-ES',
  };
  defaultLang = 'GALCOM';
  translate = inject(TranslateService);

  init({
    nameSpace,
    defaultLangJSON,
    addLangs = this.defaultLangs,
    useLang = this.defaultLang,
    defaultLang = this.defaultLang,
  }: IFedsCoreI18nInitParams) {
    const mappedLangs = addLangs.map(
      (lang) => this.getMappedLang(nameSpace, lang),
    );
    const mappedUseLang = this.getMappedLang(nameSpace, useLang);
    const mappedDefaultLang = this.getMappedLang(nameSpace, defaultLang);
    this.translate.addLangs(mappedLangs);
    this.translate.setDefaultLang(mappedDefaultLang);
    //this.translate.setTranslation(mappedDefaultLang, defaultLangJSON);
    // Try to load translations from the backend
    this.translate.use(mappedUseLang).pipe(
      catchError(() => {
        // If it fails, load default translations
        console.error('Translation service failed. Loading default translations.');
        this.translate.setTranslation(mappedDefaultLang, defaultLangJSON, true);
        this.translate.use(mappedDefaultLang);
        return of(null);
      })
    ).subscribe();
  }

  getMappedLang(nameSpace: string | undefined, lang: string): string {
    return nameSpace
      ? `${nameSpace}/${this.defaultLangsMap[lang as keyof typeof this.defaultLangsMap] ?? 'en-US'}`
      : `${this.defaultLangsMap[lang as keyof typeof this.defaultLangsMap] ?? 'en-US'}`;

  };
}

/*"language": "SOL" - español - es,
  "language": "AETH" - frances - fr,
  "language": "ULTH" - italiano - it,
  "language": "CRYO",
  "language": "JOV",
  "language": "ZARX",
  "language": "GALCOM" - ingles - en,
  "language": "DRAC" - aleman - de,
  "language": "HYP" - ,
  "language": "NEB" - netherlandes - ne,*/
