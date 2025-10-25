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
import BackgroundEffect from './components/BackgroundEffect'; // ← Debe estar aquí
import { registerSW } from 'virtual:pwa-register';
registerSW();

function App(): React.ReactElement {
  const [fullscreenVideo, setFullscreenVideo] = useState(null as Video | null);

  const handleSelectVideo = (video: Video) => {
    setFullscreenVideo(video);
  };

  const handleCloseFullscreen = () => {
    setFullscreenVideo(null);
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      {/* BackgroundEffect - DEBE ESTAR AQUÍ */}
      <BackgroundEffect />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8">
        {/* ... resto del contenido ... */}
      </section>

      {/* About */}
      <About />

      {/* Services */}
      <Services />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Fullscreen Video Player */}
      {fullscreenVideo && (
        <Suspense fallback={<div>Cargando...</div>}>
          <FullscreenPlayer video={fullscreenVideo} onClose={handleCloseFullscreen} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
