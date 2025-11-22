import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-violet-400 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('about.title')}
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1 flex justify-center group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                src="/images/profile.webp"
                alt="Nahuel Granollers"
                className="w-full max-w-md h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                whileHover={{ scale: 1.05 }}
              />
              {/* Glitch overlay effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
                <div className="absolute inset-0 mix-blend-screen">
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-violet-400/10 to-transparent transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-cyan-400/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
              {/* Scanline effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none bg-[linear-gradient(0deg,transparent_0%,rgba(139,92,246,0.1)_2%,transparent_4%)] bg-[length:100%_4px] animate-scan"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-violet-300 mb-4">
                {t('about.experienceTitle')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-violet-400 font-semibold text-lg">betevé</span>
                  <span className="text-gray-400">—</span>
                  <span className="text-gray-300">{t('about.beteve')}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-violet-400 font-semibold text-lg">Amazon Studios</span>
                  <span className="text-gray-400">—</span>
                  <span className="text-gray-300">{t('about.amazon')}</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-base text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.intro') }} />
              <p className="text-base text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.experience') }} />
              <p className="text-base text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.approach') }} />
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-violet-300 mb-4">
                {t('about.skills')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {PERSONAL_INFO.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-gray-800/50 text-gray-200 rounded-full text-sm border border-gray-700 hover:border-violet-400 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {t(`skills.${skill}`, skill)}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
