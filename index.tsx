import './index.css';
import './i18n/config'; // Initialize i18n

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

registerSW();

// Suppress Framer Motion + React 19 compatibility error
window.addEventListener('error', (event) => {
  if (
    event.message?.includes('Cannot set properties of undefined') &&
    event.message?.includes('Activity')
  ) {
    event.preventDefault();
    event.stopPropagation();
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
