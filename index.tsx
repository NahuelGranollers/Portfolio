import './index.css';
import './i18n/config'; // Initialize i18n

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

// Suppress Framer Motion React 19 compatibility warnings
const originalError = console.error;
console.error = (...args: any[]) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('Cannot set properties of undefined') ||
     args[0].includes('Activity'))
  ) {
    return;
  }
  originalError.apply(console, args);
};

registerSW();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
