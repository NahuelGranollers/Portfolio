import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { useNavigate, useParams } from 'react-router-dom';

export const LanguageSwitcher = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <button disabled={lang === 'es'} onClick={() => navigate('/es')}>ES</button>
      <button disabled={lang === 'ca'} onClick={() => navigate('/ca')}>CA</button>
      <button disabled={lang === 'en'} onClick={() => navigate('/en')}>EN</button>
    </div>
  );
};

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
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* ✅ Nullchecks con optional chaining y defaults */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          {PERSONAL_INFO?.name || 'Portfolio'}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-6 animate-slide-up animation-delay-100">
          {PERSONAL_INFO?.title || 'Creative Professional'}
        </p>
        
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
          {PERSONAL_INFO?.tagline || 'Creando experiencias visuales únicas'}
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-300">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary-dark transition-all hover:scale-105 shadow-lg shadow-brand-primary/20"
          >
            Ver Proyectos
          </button>
          
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-transparent border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-all hover:scale-105"
          >
            Hablemos
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
