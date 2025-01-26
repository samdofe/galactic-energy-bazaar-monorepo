declare namespace NodeJS {
  export interface ProcessEnv {
    API_AUTH_DOMAIN: string;
    API_AUTH_CONTEXT: string;
    MODE: string;
    FEATURE_FLAG:string;
  }
}