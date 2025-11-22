import './index.css';
import React, { useState, lazy, Suspense, useCallback, memo } from 'react';
import type { Video } from './types';
import { VIDEOS } from './constants';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import BackgroundEffect from './components/BackgroundEffect';
const FullscreenPlayer = lazy(() => import('./components/FullscreenPlayer'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
import { registerSW } from 'virtual:pwa-register';

registerSW();

function App(): React.ReactElement {
  const [fullscreenVideo, setFullscreenVideo] = useState<Video | null>(null);

  const handleSelectVideo = useCallback((video: Video) => {
    setFullscreenVideo(video);
  }, []);

  const handleCloseFullscreen = useCallback(() => {
    setFullscreenVideo(null);
  }, []);

  return (
    <ErrorBoundary>
      <BackgroundEffect />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <VideoGrid videos={VIDEOS} onSelectVideo={handleSelectVideo} />
          <Suspense fallback={<div className="min-h-screen" />}>
            <About />
            <Services />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
      
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
