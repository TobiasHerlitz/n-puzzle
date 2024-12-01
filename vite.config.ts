/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@globalStyle': resolve(__dirname, './src/style/global.css'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react(), tsconfigPaths()],
  base: '/n-puzzle',
  server: {
    host: true, // Needed to run in docker
    port: 8000,
  },
});
