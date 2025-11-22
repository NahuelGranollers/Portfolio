import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  base: '/', // Cambia "portfolio" por el nombre exacto de tu repositorio si es distinto
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg', 'favicon.ico', 
        'robots.txt', 'apple-touch-icon.png'
      ],
      manifest: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'Portfolio de Nahuel Granollers',
        theme_color: '#000000',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
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
      'react': path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor_react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor_motion';
            }
            if (id.includes('three')) {
              return 'vendor_three';
            }
            return 'vendor';
          }
        }
      }
    }
  }
});
