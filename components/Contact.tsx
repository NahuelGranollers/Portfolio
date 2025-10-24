import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import type { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Autocierra feedback de éxito
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => setSubmitStatus('idle'), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvgweoqj', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-4 text-center">
          Trabajemos Juntos
        </h2>
        <p className="text-xl text-brand-text-secondary text-center mb-16">
          ¿Tienes un proyecto en mente? Me encantaría escucharte
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-brand-text mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.social.email}`}
                  className="flex items-center gap-3 text-brand-text-secondary hover:text-brand-primary transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {PERSONAL_INFO.social.email}
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-text mb-4">
                Sígueme en
              </h3>
              <div className="flex gap-4">
                {PERSONAL_INFO.social.linkedin && (
                  <a
                    href={PERSONAL_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
                Nombre
              </label>
             <input
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				required
				autoComplete="name"     // <-- añadido aquí
				className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary text-brand-text transition-colors"
				placeholder="Tu nombre"
			/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
				autoComplete="email"    // <-- añadido aquí
                className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary text-brand-text transition-colors"
                placeholder="tu@email.com"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-brand-text mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary text-brand-text transition-colors"
                placeholder="¿En qué puedo ayudarte?"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary text-brand-text transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-3 transition-all duration-300 rounded-lg font-semibold ${
                isSubmitting
                  ? "bg-brand-primary-dark cursor-not-allowed opacity-60"
                  : "bg-brand-primary text-white hover:bg-brand-primary-dark"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="loading-spinner"></span>
                  Enviando...
                </span>
              ) : (
                "Enviar Mensaje"
              )}
            </button>

            {/* Estado del formulario mejorado UX */}
            <div className="relative h-10 mt-2">
              {submitStatus === 'success' && (
                <div className="absolute inset-0 flex items-center justify-center text-green-400 animate-fade-in">
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ¡Mensaje enviado correctamente! Te responderé pronto.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="absolute inset-0 flex items-center justify-center text-red-400 animate-fade-in">
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Hubo un error. Por favor, intenta de nuevo.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
