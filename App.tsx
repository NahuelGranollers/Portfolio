import './index.css';
import React, { useState, lazy, Suspense } from 'react';
import type { Video } from './types';
import { VIDEOS } from './constants';
import ErrorBoundary from './components/ErrorBoundary';
import { registerSW } from 'virtual:pwa-register';

// Lazy load ALL components to prevent import-time errors from blocking App rendering
const Navigation = lazy(() => import('./components/Navigation'));
const Hero = lazy(() => import('./components/Hero'));
const VideoGrid = lazy(() => import('./components/VideoGrid'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const FullscreenPlayer = lazy(() => import('./components/FullscreenPlayer'));
const BackgroundEffect = lazy(() => import('./components/BackgroundEffect'));
const ParticlesCursor = lazy(() => import('./components/ParticlesCursor'));

registerSW();

function App(): React.ReactElement {
  console.log('[APP] Rendering App with Lazy Components');
  const [fullscreenVideo, setFullscreenVideo] = useState<Video | null>(null);

  const handleSelectVideo = (video: Video) => {
    setFullscreenVideo(video);
  };

  const handleCloseFullscreen = () => {
    setFullscreenVideo(null);
  };

  const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="animate-pulse">Loading...</div>
    </div>
  );

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Navigation />
        <main>
          <Hero />
          <VideoGrid videos={VIDEOS} onSelectVideo={handleSelectVideo} />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
        
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
