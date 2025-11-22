import './index.css';
import React, { useState, lazy, Suspense } from 'react';
import type { Video } from './types';
import { VIDEOS } from './constants';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import BackgroundEffect from './components/BackgroundEffect';
// import ParticlesCursor from './components/ParticlesCursor';
const FullscreenPlayer = lazy(() => import('./components/FullscreenPlayer'));
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { registerSW } from 'virtual:pwa-register';

registerSW();

function App(): React.ReactElement {
  // ✅ Tipo simplificado
  const [fullscreenVideo, setFullscreenVideo] = useState<Video | null>(null);

  const handleSelectVideo = (video: Video) => {
    setFullscreenVideo(video);
  };

  const handleCloseFullscreen = () => {
    setFullscreenVideo(null);
  };

  return (
    <ErrorBoundary>
      <div style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 9999, color: '#00ff00', background: 'rgba(0,0,0,0.8)', padding: '5px', borderRadius: '4px', fontSize: '12px', pointerEvents: 'none' }}>
        System Status: Active
      </div>
      {/* <ParticlesCursor /> */}
      <BackgroundEffect />
      <Navigation />
      <main>
        <Hero />
        {/* VideoGrid tiene id="proyectos", Contact tiene id="contacto" */}
        <VideoGrid videos={VIDEOS} onSelectVideo={handleSelectVideo} />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      
      <Suspense fallback={
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
        </div>
      }>
        {fullscreenVideo && (
          <FullscreenPlayer
            video={fullscreenVideo}
            onClose={handleCloseFullscreen}
          />
        )}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
