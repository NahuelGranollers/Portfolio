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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: 0 }} 
        >
          {t('hero.name') || 'Nahuel Granollers'}
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: 0 }}
        >
          {t('hero.title') || 'Director Audiovisual'}
        </motion.p>
        
        <motion.p 
          className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('hero.tagline') || ''}
        </motion.p>

        {/* Botones CTA */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={scrollToProjects}
            aria-label="Ir a la sección de proyectos"
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary-dark transition-all shadow-lg shadow-brand-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.viewProjects')}
          </motion.button>
          
          <motion.button
            onClick={scrollToContact}
            aria-label="Ir a la sección de contacto"
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.letsTalk')}
          </motion.button>
        </motion.div>
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
