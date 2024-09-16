declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HTTP_PORT: number;
    }
  }
}

export {};
