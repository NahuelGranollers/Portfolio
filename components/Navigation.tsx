import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import analytics from '../utils/analytics';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-brand-bg/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="text-2xl font-bold text-brand-primary hover:text-brand-primary-dark transition-colors"
          >
            NG
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => { scrollToSection('proyectos'); analytics.sectionView('projects'); }}
              className="text-brand-text hover:text-brand-primary transition-colors"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => { scrollToSection('sobre-mi'); analytics.sectionView('about'); }}
              className="text-brand-text hover:text-brand-primary transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => { scrollToSection('servicios'); analytics.sectionView('services'); }}
              className="text-brand-text hover:text-brand-primary transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => { scrollToSection('contacto'); analytics.sectionView('contact'); }}
              className="px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors"
            >
              {t('nav.contact')}
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brand-text p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => { scrollToSection('proyectos'); analytics.sectionView('projects'); }}
                className="text-brand-text hover:text-brand-primary transition-colors text-left"
              >
                {t('nav.projects')}
              </button>
              <button
                onClick={() => { scrollToSection('sobre-mi'); analytics.sectionView('about'); }}
                className="text-brand-text hover:text-brand-primary transition-colors text-left"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => { scrollToSection('servicios'); analytics.sectionView('services'); }}
                className="text-brand-text hover:text-brand-primary transition-colors text-left"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => { scrollToSection('contacto'); analytics.sectionView('contact'); }}
                className="px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors text-left"
              >
                {t('nav.contact')}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
