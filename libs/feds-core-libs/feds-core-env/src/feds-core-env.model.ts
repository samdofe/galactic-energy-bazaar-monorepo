export type TFedsCoreBaseEnvironment = {
  API_AUTH_DOMAIN: string,
  API_AUTH_CONTEXT: string,
  API_I18N_ENDPOINT: string,
  MODE: string,
}
export type TFedsCoreDefaultEnvironment = Partial<TFedsCoreBaseEnvironment> & Record<string, unknown>

