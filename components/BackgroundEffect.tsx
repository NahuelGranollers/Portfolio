import React, { useEffect } from 'react';

const BackgroundEffect: React.FC = () => {
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const particles = document.querySelectorAll('.bg-particle');
    particles.forEach((p) => {
      const el = p as HTMLElement;
      el.style.setProperty('--dx', `${Math.random() * 100 - 50}px`);
      el.style.setProperty('--dy', `${Math.random() * 100 - 50}px`);
    });
  }, [prefersReducedMotion]);

  // ✅ Renderizar partículas animadas en lugar de Fragment vacío
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20" aria-hidden="true">
      {/* Partículas de fondo */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="bg-particle absolute bg-brand-primary rounded-full opacity-5 blur-3xl animate-float"
          style={{
            width: `${200 + i * 80}px`,
            height: `${200 + i * 80}px`,
            left: `${10 + i * 20}%`,
            top: `${5 + i * 15}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${15 + i * 2}s`
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/50 to-brand-bg"></div>
    </div>
  );
};

export default BackgroundEffect;
