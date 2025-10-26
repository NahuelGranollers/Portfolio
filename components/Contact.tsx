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
  const [errorMessage, setErrorMessage] = useState<string>('');

  // ✅ CRÍTICO: Formspree ID desde variable de entorno
  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'mvgweoqj';

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

  // ✅ VALIDACIÓN COMPLETA
  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'El nombre es requerido';
    if (!formData.email.includes('@') || !formData.email.includes('.')) return 'Email inválido';
    if (!formData.message.trim()) return 'El mensaje es requerido';
    if (formData.message.length > 1000) return 'El mensaje no puede exceder 1000 caracteres';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // ✅ VALIDAR ANTES DE ENVIAR
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Hubo un error al enviar. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Por favor, verifica tu internet.');
    }

    setIsSubmitting(false);
  };

  return (
    // ✅ CRÍTICO: Agregar id="contacto" para scroll desde Hero
    <section id="contacto" className="py-20 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Información de contacto */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Trabajemos Juntos</h2>
            <p className="text-gray-400 mb-8">¿Tienes un proyecto en mente? Me encantaría escucharte</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.social.email}`} className="text-brand-primary hover:underline">
                    {PERSONAL_INFO.social.email}
                  </a>
                </div>
              </div>

              {PERSONAL_INFO.social.linkedin && (
                <div className="flex items-center gap-3">
                                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a 
                      href={PERSONAL_INFO.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline"
                    >
                      Conéctate conmigo
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-surface border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary transition"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              {/* ✅ type="email" para validación nativa del navegador */}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-surface border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary transition"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-surface border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
              {/* ✅ maxLength para limitar caracteres */}
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                maxLength={1000}
                className="w-full px-4 py-3 bg-brand-surface border border-brand-border rounded-lg focus:outline-none focus:border-brand-primary transition resize-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">{formData.message.length}/1000 caracteres</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-400">
                ✓ ¡Mensaje enviado correctamente! Te responderé pronto.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-400">
                ✗ {errorMessage || 'Hubo un error. Por favor, intenta de nuevo.'}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
