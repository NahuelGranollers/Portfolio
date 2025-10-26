import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Servicios</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Soluciones audiovisuales profesionales adaptadas a tus necesidades
        </p>
        
        {/* ✅ Grid responsivo completo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ✅ Agregar key={index} */}
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-brand-bg border border-brand-border rounded-lg p-6 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-text">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
