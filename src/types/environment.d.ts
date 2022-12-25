export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SERVER_BASEURL: string;
    }
  }
}