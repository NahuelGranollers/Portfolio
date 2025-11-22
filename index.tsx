import './index.css';
import './i18n/config'; // Initialize i18n

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

console.log('[REACT] Starting React initialization');

try {
  registerSW();
} catch (e) {
  console.warn('[SW] Service worker registration failed:', e);
}

// Force render with retry mechanism
const initReact = () => {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('[REACT] Root element not found');
      return;
    }
    
    console.log('[REACT] Creating React root');
    const root = ReactDOM.createRoot(rootElement);
    
    console.log('[REACT] Rendering App');
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log('[REACT] Render complete');
  } catch (e) {
    console.error('[REACT] Error during initialization:', e);
    // Retry without StrictMode if it fails
    setTimeout(() => {
      console.log('[REACT] Retrying without StrictMode');
      try {
        const rootElement = document.getElementById('root');
        if (rootElement) {
          const root = ReactDOM.createRoot(rootElement);
          root.render(<App />);
          console.log('[REACT] Retry successful');
        }
      } catch (retryError) {
        console.error('[REACT] Retry failed:', retryError);
      }
    }, 100);
  }
};

// Try immediate initialization
initReact();

// Fallback: retry after DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('[REACT] DOMContentLoaded - retrying init');
    initReact();
  });
}
