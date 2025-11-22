import './index.css';
import React, { useState, lazy, Suspense } from 'react';
import type { Video } from './types';
import { VIDEOS } from './constants';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
const FullscreenPlayer = lazy(() => import('./components/FullscreenPlayer'));
const BackgroundEffect = lazy(() => import('./components/BackgroundEffect'));
const ParticlesCursor = lazy(() => import('./components/ParticlesCursor'));
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { registerSW } from 'virtual:pwa-register';

registerSW();

function App(): React.ReactElement {
  console.log('[APP] Rendering full App');
  const [fullscreenVideo, setFullscreenVideo] = useState<Video | null>(null);

  const handleSelectVideo = (video: Video) => {
    setFullscreenVideo(video);
  };

  const handleCloseFullscreen = () => {
    setFullscreenVideo(null);
  };

  return (
    <ErrorBoundary>
      {/* Temporarily disabled effects to isolate crash
      <Suspense fallback={null}>
        <ParticlesCursor />
      </Suspense>
      <Suspense fallback={null}>
        <BackgroundEffect />
      </Suspense>
      */}
      <Navigation />
      <main>
        <Hero />
        <VideoGrid videos={VIDEOS} onSelectVideo={handleSelectVideo} />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      
      <Suspense fallback={null}>
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
