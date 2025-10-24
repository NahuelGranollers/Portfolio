import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/Portfolio/', // Cambia "portfolio" por el nombre exacto de tu repositorio si es distinto
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: [
      'nahuel-granollers-portfolio.onrender.com'
    ]
  },
  define: {
    // Si necesitas usar variables de entorno descomenta y configura aquí
    // 'process.env.API_KEY': JSON.stringify('TU_API_KEY'),
    // 'process.env.GEMINI_API_KEY': JSON.stringify('TU_GEMINI_API_KEY')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor_react';
            }
            if (id.includes('lodash')) return 'vendor_lodash';
            return 'vendor';
          }
        }
      }
    }
  }
});
