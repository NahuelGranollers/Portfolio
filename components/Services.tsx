import { Service } from '../types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();

  const serviceKeys = ['videoEditing', 'directing', 'broadcast', 'camera', 'digitech'];

  // Handler para autocompletar mensaje y deslizar a contacto
  const handleServiceClick = (service: Service) => {
    // Obtener idioma actual
    const lang = i18n.language || 'es';
    // Definir textos por servicio e idioma
    const presets: Record<string, Record<string, { subject: string; message: string }>> = {
      es: {
        motion: {
          subject: 'Consulta sobre Motion Graphics',
          message: 'Hola, quiero saber más sobre el servicio de Motion Graphics.'
        },
        mapping: {
          subject: 'Consulta sobre Mapping',
          message: 'Hola, quiero saber más sobre el servicio de Mapping.'
        },
        videoEditing: {
          subject: 'Consulta sobre Video Editing',
          message: 'Hola, me interesa el servicio de Video Editing.'
        },
        directing: {
          subject: 'Consulta sobre Directing',
          message: 'Hola, me interesa el servicio de Directing.'
        },
        broadcast: {
          subject: 'Consulta sobre Broadcast',
          message: 'Hola, me interesa el servicio de Broadcast.'
        },
        camera: {
          subject: 'Consulta sobre Camera',
          message: 'Hola, me interesa el servicio de Camera.'
        },
        digitech: {
          subject: 'Consulta sobre Digitech',
          message: 'Hola, me interesa el servicio de Digitech.'
        }
      },
      en: {
        motion: {
          subject: 'Inquiry about Motion Graphics',
          message: 'Hi, I want to know more about the Motion Graphics service.'
        },
        mapping: {
          subject: 'Inquiry about Mapping',
          message: 'Hi, I want to know more about the Mapping service.'
        },
        videoEditing: {
          subject: 'Inquiry about Video Editing',
          message: 'Hi, I want to know more about the Video Editing service.'
        },
        directing: {
          subject: 'Inquiry about Directing',
          message: 'Hi, I want to know more about the Directing service.'
        },
        broadcast: {
          subject: 'Inquiry about Broadcast',
          message: 'Hi, I want to know more about the Broadcast service.'
        },
        camera: {
          subject: 'Inquiry about Camera',
          message: 'Hi, I want to know more about the Camera service.'
        },
        digitech: {
          subject: 'Inquiry about Digitech',
          message: 'Hi, I want to know more about the Digitech service.'
        }
      }
    };
    const preset = presets[lang]?.[service.id] || { subject: '', message: '' };
    localStorage.setItem('contactPresetSubject', preset.subject);
    localStorage.setItem('contactPresetMessage', preset.message);
    // Scroll suave a Contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('services.title') || ''}
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t('services.subtitle') || ''}
        </motion.p>
        
        {/* Grid responsivo de 5 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-brand-bg border border-brand-border rounded-lg p-6 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-200 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 1200, damping: 18 }}
              whileHover={{ y: -8, scale: 1.045, boxShadow: '0 8px 32px rgba(187,134,252,0.18)' }}
              onClick={() => handleServiceClick(service)}
            >
              <motion.div 
                className="text-4xl mb-3 text-center"
                whileHover={{ scale: 1.13 }}
                transition={{ type: 'spring', stiffness: 1200, damping: 18 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-3 text-brand-text text-center">
                {t(`services.${serviceKeys[index]}.title`)}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed text-center">
                {t(`services.${serviceKeys[index]}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
