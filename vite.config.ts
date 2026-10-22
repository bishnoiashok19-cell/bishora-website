import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Bishora — static marketing site.
// Build output is a plain static `dist/` folder (no SSR, no server runtime).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: false,
    // Keep the static payload small: inline anything under 2 KB.
    assetsInlineLimit: 2048,
  },
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
