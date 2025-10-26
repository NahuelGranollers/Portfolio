import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Sobre Mí</h2>
        
        {/* ✅ Grid layout responsivo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Columna izquierda: Textos */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              {PERSONAL_INFO.about.intro}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {PERSONAL_INFO.about.experience}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {PERSONAL_INFO.about.approach}
            </p>
          </div>
          
          {/* Columna derecha: Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">
              Habilidades & Herramientas
            </h3>
            <div className="flex flex-wrap gap-3">
              {/* ✅ Agregar key={index} */}
              {PERSONAL_INFO.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-brand-primary/10 border border-brand-primary text-brand-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
