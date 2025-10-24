import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-12 text-center">
          Sobre Mí
        </h2>
        
       <div className="grid md:grid-cols-2 gap-12 items-center">
  {/* Imagen de perfil */}
  <div className="order-2 md:order-1">
    <div className="aspect-square bg-brand-surface-light rounded-2xl overflow-hidden shadow-2xl">
      <img 
        src="/images/profile.jpg" 
        alt="Nahuel Granollers" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
          
          {/* Contenido */}
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-lg text-brand-text leading-relaxed">
              {PERSONAL_INFO.about.intro}
            </p>
            <p className="text-lg text-brand-text leading-relaxed">
              {PERSONAL_INFO.about.experience}
            </p>
            <p className="text-lg text-brand-text leading-relaxed">
              {PERSONAL_INFO.about.approach}
            </p>
            
            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-brand-secondary mb-4">
                Habilidades & Herramientas
              </h3>
              <div className="flex flex-wrap gap-3">
                {PERSONAL_INFO.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-brand-bg text-brand-text rounded-full text-sm border border-brand-border hover:border-brand-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
