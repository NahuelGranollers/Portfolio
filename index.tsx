import './index.css';
import './i18n/config'; // Initialize i18n

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

// Prevent Framer Motion initialization errors with React 19
const originalObjectDefineProperty = Object.defineProperty;
Object.defineProperty = function(obj, prop, descriptor) {
  if (!obj) {
    console.warn(`Attempted to define property '${String(prop)}' on undefined object`);
    return obj;
  }
  return originalObjectDefineProperty.call(this, obj, prop, descriptor);
};

registerSW();

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initApp() {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
  }
}
