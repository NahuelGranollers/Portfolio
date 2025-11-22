import './index.css';
import './i18n/config'; // Initialize i18n

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

// DIAGNOSTICS
console.log('--- APP INITIALIZATION START ---');
console.log('React Version:', React.version);
// @ts-ignore
window.React = React;
// @ts-ignore
window.ReactDOM = ReactDOM;

if (!React) console.error('CRITICAL: React is undefined');
if (!ReactDOM) console.error('CRITICAL: ReactDOM is undefined');
if (!React.Children) console.error('CRITICAL: React.Children is undefined (This causes the Framer Motion crash)');

registerSW();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

// Renderizado simple para prueba de humo
const SimpleApp = () => (
  <div style={{ color: 'red', fontSize: '40px', padding: '50px', zIndex: 99999, position: 'relative', background: 'white' }}>
    REACT IS WORKING (Fallback Mode)
    <br/>
    <span style={{fontSize: '20px', color: 'black'}}>If you see this, App.tsx crashed.</span>
  </div>
);

const MinimalApp = () => (
  <div style={{ background: '#111', color: 'white', minHeight: '100vh', padding: '20px' }}>
    <h1>Minimal App Mode</h1>
    <p>If you see this, the core React environment is healthy.</p>
  </div>
);

try {
  console.log('Attempting to render App...');
  root.render(
    <Suspense fallback={<div style={{ color: 'white', textAlign: 'center', marginTop: '20%' }}>Loading Suspense...</div>}>
      <App />
    </Suspense>
  );
  console.log('Render called successfully');
} catch (e) {
  console.error('Render failed synchronously:', e);
  root.render(<SimpleApp />);
}
