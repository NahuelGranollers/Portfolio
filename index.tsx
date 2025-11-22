import './index.css';
import './i18n/config'; // Initialize i18n

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

console.log('Initializing App...');

registerSW();

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found');
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

// Renderizado simple para prueba de humo
const SimpleApp = () => (
  <div style={{ color: 'red', fontSize: '40px', padding: '50px', zIndex: 99999, position: 'relative' }}>
    REACT IS WORKING
  </div>
);

try {
  // Intenta renderizar la App completa
  root.render(
    <Suspense fallback={<div style={{ color: 'white', textAlign: 'center', marginTop: '20%' }}>Loading...</div>}>
      <App />
    </Suspense>
  );
  console.log('Render called');
} catch (e) {
  console.error('Render failed:', e);
  // Fallback de emergencia
  root.render(<SimpleApp />);
}
