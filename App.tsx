import './index.css';
import React, { useState, lazy, Suspense } from 'react';
// import type { Video } from './types';
// import { VIDEOS } from './constants';
import ErrorBoundary from './components/ErrorBoundary';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import VideoGrid from './components/VideoGrid';
// import BackgroundEffect from './components/BackgroundEffect';
// import ParticlesCursor from './components/ParticlesCursor';
// const FullscreenPlayer = lazy(() => import('./components/FullscreenPlayer'));
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import { registerSW } from 'virtual:pwa-register';

registerSW();

function App(): React.ReactElement {
  return (
    <ErrorBoundary>
      <div style={{ padding: 20, color: 'white' }}>
        <h1>App Component Loaded</h1>
        <p>If you see this, App.tsx is mounting correctly.</p>
      </div>
    </ErrorBoundary>
  );
}

export default App;
