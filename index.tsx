import './index.css';
import './i18n/config'; // Initialize i18n

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

console.log('Initializing App...');

registerSW();

const root = ReactDOM.createRoot(document.getElementById('root')!);

try {
  root.render(
    <Suspense fallback={<div style={{ color: 'white', textAlign: 'center', marginTop: '20%' }}>Loading...</div>}>
      <App />
    </Suspense>
  );
  console.log('Render called');
} catch (e) {
  console.error('Render failed:', e);
}
