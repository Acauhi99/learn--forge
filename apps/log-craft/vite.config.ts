/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { join } from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/log-craft',
  plugins: [react(), nxViteTsPaths()],
  resolve: {
    alias: {
      '@learn--forge/common': join(__dirname, '../../libs/common/src'),
    },
  },
  test: {
    globals: true,
    cache: { dir: '../../node_modules/.vitest' },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
  server: {
    port: 4204,
    host: 'localhost',
    fs: {
      allow: ['../../'],
    },
  },
  build: {
    outDir: '../../dist/apps/log-craft',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
  },
});
