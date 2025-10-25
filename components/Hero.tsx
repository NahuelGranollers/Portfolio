import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
  <div className="max-w-4xl mx-auto text-center relative z-20">
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-brand-primary mb-6">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold text-brand-text mb-4">
            {PERSONAL_INFO.title}
          </p>
          <p className="text-lg sm:text-xl text-brand-text-secondary max-w-2xl mx-auto mb-12">
            {PERSONAL_INFO.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 min-w-[140px] bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Proyectos
            </button>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 min-w-[140px] border-2 border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Hablemos
            </button>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
