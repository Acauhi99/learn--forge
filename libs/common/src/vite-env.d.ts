/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOGCRAFT_URL?: string;
  readonly VITE_PORTFOLIO_URL?: string;
  readonly VITE_BLOG_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
