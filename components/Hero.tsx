import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          {t('hero.name')}
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-gray-400 mb-6"
        >
          {t('hero.title')}
        </p>
        
        <p 
          className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
        >
          {t('hero.tagline')}
        </p>

        {/* Botones CTA */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToProjects}
            aria-label="Ir a la sección de proyectos"
            className="px-8 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary-dark transition-all shadow-lg shadow-brand-primary/20"
          >
            {t('hero.viewProjects')}
          </button>
          
          <button
            onClick={scrollToContact}
            aria-label="Ir a la sección de contacto"
            className="px-8 py-3 bg-transparent border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-all"
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
