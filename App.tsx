// src/AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import { VIDEOS } from './constants';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';

const FullscreenPlayer = lazy(() => import('./components/FullscreenPlayer'));

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (!['es', 'ca', 'en'].includes(lang ?? '')) {
    return <Navigate to="/es" replace />;
  }

  return <>{children}</>;
};

function AppContent() {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const handleSelectVideo = (video) => setFullscreenVideo(video);
  const handleCloseFullscreen = () => setFullscreenVideo(null);

  return (
    <>
      <BackgroundEffect />
      <Navigation />
      <main>
        <Hero />
        <VideoGrid videos={VIDEOS} onSelectVideo={handleSelectVideo} />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Suspense
        fallback={
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
          </div>
        }
      >
        {fullscreenVideo && (
          <FullscreenPlayer video={fullscreenVideo} onClose={handleCloseFullscreen} />
        )}
      </Suspense>
    </>
  );
}

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/es" replace />} />
        <Route path=":lang" element={<LanguageWrapper><AppContent /></LanguageWrapper>} />
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </Router>
  );
}
