import './index.css';
import React, { useState, lazy, Suspense } from 'react';
import type { Video } from './types';
import { VIDEOS } from './constants';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
const FullscreenPlayer = lazy(() => import('./components/FullscreenPlayer'));
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import { registerSW } from 'virtual:pwa-register';
import './i18n';

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
    <>
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
    </>
  );
}

export default App;
