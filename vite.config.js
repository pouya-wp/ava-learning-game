import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: './',
  plugins: [
    legacy({
      targets: ['chrome >= 38', 'android >= 5'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2015'
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});
