export interface IFedsCoreI18nInitParams {
  addLangs?: string[];
  defaultLang?: string;
  nameSpace?: string;
  useLang? : string;
  defaultLangJSON: Record<string, unknown>;
}