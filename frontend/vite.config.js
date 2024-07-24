/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'http://localhost:8000',
=======
        target: 'https://todoapp-api-ashen.vercel.app/',
>>>>>>> 8e399352165d9fb0f370639cb065c02b491ca0dc
      },
    },
  },
});
