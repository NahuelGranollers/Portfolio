import React, { useEffect } from 'react';

const BackgroundEffect: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const particles = document.querySelectorAll('.particle');
    particles.forEach((p) => {
      const el = p as HTMLElement;
      el.style.setProperty('--dx', `${Math.random() * 100 - 50}px`);
      el.style.setProperty('--dy', `${Math.random() * 100 - 50}px`);
    });
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <>
        <style>{`
          .top-glow {
            position: fixed;
            top: -20%;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 50%;
            background: radial-gradient(ellipse, rgba(187,134,252,0.05) 0%, transparent 60%);
            pointer-events: none;
            z-index: 0;
          }
        `}</style>
        <div className="top-glow" aria-hidden="true" />
      </>
    );
  }

  return (
    <>
      <style>{`
        .bg-gradient-fixed {
          background: radial-gradient(circle at 50% 20%, #111 0%, #0a0a0f 50%, #050505 100%);
          background-attachment: fixed;
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-gradient-fixed::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(187,134,252,0.08) 0%, rgba(3,218,198,0.05) 100%);
          animation: shimmer 12s ease-in-out infinite alternate;
        }

        @keyframes shimmer {
          0% {opacity: 0.3; transform: scale(1);}
          50% {opacity: 0.6; transform: scale(1.02);}
          100% {opacity: 0.3; transform: scale(1);}
        }

        .particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: var(--color, rgba(255,255,255,0.25));
          width: var(--size, 4px);
          height: var(--size, 4px);
          top: var(--top, 50%);
          left: var(--left, 50%);
          animation: float var(--duration, 10s) ease-in-out infinite;
        }

        .particle:nth-child(1) { --color: rgba(187,134,252,0.4); --size: 6px; --top: 30%; --left: 15%; --duration: 8s; }
        .particle:nth-child(2) { --color: rgba(3,218,198,0.3); --size: 8px; --top: 60%; --left: 70%; --duration: 12s; }
        .particle:nth-child(3) { --color: rgba(255,255,255,0.3); --size: 4px; --top: 50%; --left: 40%; --duration: 10s; }
        .particle:nth-child(4) { --color: rgba(187,134,252,0.25); --size: 5px; --top: 75%; --left: 25%; --duration: 14s; }
        .particle:nth-child(5) { --color: rgba(3,218,198,0.22); --size: 3px; --top: 20%; --left: 80%; --duration: 9s; }

        @keyframes float {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.4; }
          25%  { transform: translate(var(--dx, 20px), var(--dy, -30px)) scale(1.1); opacity: 0.7; }
          50%  { transform: translate(calc(var(--dx, 20px)*-1), calc(var(--dy, -30px)*-1)) scale(1); opacity: 0.5; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
        }

        .top-glow {
          position: fixed;
          top: -25%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 60%;
          background: radial-gradient(circle at center, rgba(187,134,252,0.12) 0%, transparent 70%);
          filter: blur(60px);
          z-index: 0;
          pointer-events: none;
          animation: pulse 10s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {opacity: 0.5;}
          50% {opacity: 0.8;}
        }
      `}</style>

      <div className="bg-gradient-fixed" aria-hidden="true" />
      <div className="top-glow" aria-hidden="true" />
      <div className="particles-container" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
    </>
  );
};

export default BackgroundEffect;
