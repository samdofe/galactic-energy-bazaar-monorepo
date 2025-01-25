declare namespace NodeJS {
  export interface ProcessEnv {
    API_AUTH_DOMAIN: string;
    MODE: string;
    FEATURE_FLAG:string;
  }
}