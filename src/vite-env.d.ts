/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Optional GA4 Measurement ID override, e.g. a test data stream during
   * local QA. Production falls back to the ID in `src/config/analytics.ts`.
   */
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
