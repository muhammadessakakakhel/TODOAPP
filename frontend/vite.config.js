/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {

        target: 'https://todoapp-api-opal.vercel.app/',
        changeOrigin: true,
        secure: false,

      },
    },
  },
});
