import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-4 text-center">
          Servicios
        </h2>
        <p className="text-xl text-brand-text-secondary text-center mb-16 max-w-3xl mx-auto">
          Soluciones audiovisuales profesionales adaptadas a tus necesidades
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-brand-surface p-6 rounded-xl hover:bg-brand-surface-light transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-brand-border hover:border-brand-primary"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-brand-text mb-3">
                {service.title}
              </h3>
              <p className="text-brand-text-secondary leading-relaxed">
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
