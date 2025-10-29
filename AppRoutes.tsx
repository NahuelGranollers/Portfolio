// src/AppRoutes.tsx o src/routes.tsx
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import { registerSW } from 'virtual:pwa-register';
import './i18n';

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

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/es" replace />} />
        <Route path=":lang" element={<LanguageWrapper><Home /></LanguageWrapper>} />
        <Route path=":lang/about" element={<LanguageWrapper><About /></LanguageWrapper>} />
        {/* ...más rutas */}
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </Router>
  );
}
