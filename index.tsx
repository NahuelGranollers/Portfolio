import './index.css';
import './i18n/config'; // Initialize i18n

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

console.log('%c[REACT] index.tsx executing', 'color: purple; font-weight: bold');
console.log('[REACT] React version:', React.version);

try {
  console.log('[SW] Registering service worker...');
  registerSW();
  console.log('[SW] Service worker registered');
} catch (e) {
  console.error('[SW] Error registering service worker:', e);
}

const rootElement = document.getElementById('root');
console.log('[REACT] Root element found:', !!rootElement);
console.log('[REACT] Root element:', rootElement);

if (!rootElement) {
  console.error('%c[REACT] FATAL: Root element not found!', 'color: red; font-weight: bold; font-size: 16px');
  document.body.innerHTML = '<div style="color: white; padding: 20px; font-family: monospace;">ERROR: Root element #root not found in DOM</div>';
} else {
  try {
    console.log('[REACT] Creating React root...');
    const root = ReactDOM.createRoot(rootElement);
    console.log('[REACT] React root created successfully');
    
    console.log('[REACT] Rendering App component...');
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('%c[REACT] App rendered successfully', 'color: green; font-weight: bold');
  } catch (e) {
    console.error('%c[REACT] Error during render:', 'color: red; font-weight: bold');
    console.error(e);
    document.body.innerHTML = '<div style="color: white; padding: 20px; font-family: monospace;">ERROR: ' + (e as Error).message + '</div>';
  }
}
