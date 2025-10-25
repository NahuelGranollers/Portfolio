import React from 'react';
import { PERSONAL_INFO } from '../constants';
import PixelatePhoto from './PixelatePhoto';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-violet-400 mb-12 text-center">
          Sobre Mí
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen de perfil */}
          <div className="order-2 md:order-1 flex justify-center">
            <PixelatePhoto 
              src="/images/profile.jpg" 
              width={550}  {/* ← AÑADIDO */}
              height={550} {/* ← AÑADIDO */}
              size={20} 
              brushRadius={2}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Contenido */}
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed">
              {PERSONAL_INFO.about.intro}
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              {PERSONAL_INFO.about.experience}
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              {PERSONAL_INFO.about.approach}
            </p>
            
            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-violet-300 mb-4">
                Habilidades & Herramientas
              </h3>
              <div className="flex flex-wrap gap-3">
                {PERSONAL_INFO.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800/50 text-gray-200 rounded-full text-sm border border-gray-700 hover:border-violet-400 transition-colors"
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
