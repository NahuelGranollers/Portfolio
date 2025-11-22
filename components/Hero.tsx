import React from 'react';
import { useTranslation } from 'react-i18next';
import analytics from '../utils/analytics';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    analytics.event('cta_click', { button_name: 'view_projects' });
    const element = document.getElementById('proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    analytics.event('cta_click', { button_name: 'lets_talk' });
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
          {t('hero.name') || 'Nahuel Granollers'}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-4 sm:mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
          {t('hero.title') || 'Director Audiovisual & Técnico de Realización'}
        </p>
        <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          {t('hero.tagline') || 'Creando historias visuales que conectan y emocionan'}
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button
            onClick={scrollToProjects}
            aria-label="Ir a la sección de proyectos"
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary-dark transition-all shadow-lg shadow-brand-primary/20 hover:scale-105 active:scale-95"
          >
            {t('hero.viewProjects')}
          </button>
          <button
            onClick={scrollToContact}
            aria-label="Ir a la sección de contacto"
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            {t('hero.letsTalk')}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
