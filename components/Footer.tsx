import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-brand-primary mb-2">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-brand-text-secondary">
              {PERSONAL_INFO.title}
            </p>
          </div>

          <div className="flex gap-4">
            {PERSONAL_INFO.social.linkedin && (
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-secondary hover:text-brand-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-border text-center text-brand-text-secondary text-sm">
          <p>&copy; {currentYear} {PERSONAL_INFO.name}. Todos los derechos reservados.</p>
		  <p className="mt-2">
		</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;