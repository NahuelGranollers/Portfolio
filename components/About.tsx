import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a12]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-violet-300 mb-12 text-center">
          {t('about.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/profile.webp"
                alt="Nahuel Granollers"
                loading="lazy"
                className="w-full max-w-md h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Glitch overlay effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
                <div className="absolute inset-0 mix-blend-screen">
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-violet-400/10 to-transparent transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-cyan-400/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <div className="mb-6">
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-violet-300 font-semibold text-lg">Amazon Studios</span>
                  <span className="text-gray-300">—</span>
                  <span className="text-gray-100">{t('about.amazon')} | {t('about.amazonDuration')}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-violet-300 font-semibold text-lg">betevé</span>
                  <span className="text-gray-300">—</span>
                  <span className="text-gray-100">{t('about.beteve')} | {t('about.beteveDuration')}</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-base text-gray-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.intro') }} />
              <p className="text-base text-gray-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.experience') }} />
              <p className="text-base text-gray-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.approach') }} />
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-violet-300 mb-4">
                {t('about.skills')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {PERSONAL_INFO.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-900/80 text-white rounded-full text-sm border border-gray-600 hover:border-violet-300 hover:scale-105 transition-all"
                  >
                    {t(`skills.${skill}`, skill)}
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
