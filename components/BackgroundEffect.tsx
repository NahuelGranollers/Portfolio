// src/components/BackgroundEffect.tsx

import React from 'react';

const BackgroundEffect: React.FC = () => {
  // Respect user preference for reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return (
      <>
        <style>{`
          .top-glow {
            position: fixed;
            top: -20%;
            left:50%;
            transform: translateX(-50%);
            width:100%;
            height:50%;
            background: radial-gradient(ellipse, rgba(187,134,252,0.04)0%, transparent60%);
            pointer-events: none;
            z-index:0;
          }
        `}</style>
        <div className="top-glow" aria-hidden="true" />
      </>
    );
  }

  return (
    <>
      <style>{`
        /* Encapsulated background gradient (don't modify body) */
        .bg-gradient-fixed {
          background: linear-gradient(180deg, #0a0a0f0%, #12121250%, #0f0f0f100%);
          background-attachment: fixed;
          position: fixed;
          inset:0;
          z-index:0;
          pointer-events: none;
        }

        .particles-container {
          position: fixed;
          top:0;
          left:0;
          width:100%;
          height:100%;
          overflow: hidden;
          pointer-events: none;
          z-index:0;
        }

        .particle { position: absolute; border-radius:50%; animation: float linear infinite; }
        .particle-1{ width:4px; height:4px; background:rgba(187,134,252,0.28); top:20%; left:15%; animation-duration:8s; }
        .particle-2{ width:6px; height:6px; background:rgba(3,218,198,0.18); top:60%; left:80%; animation-duration:12s; }
        .particle-3{ width:3px; height:3px; background:rgba(187,134,252,0.34); top:40%; left:40%; animation-duration:10s; }

        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity:0.3; }
          50% { transform: translateY(-60px) scale(1.05); opacity:0.6; }
          100% { transform: translateY(0) scale(1); opacity:0.3; }
        }

        .top-glow {
          position: fixed;
          top: -20%;
          left:50%;
          transform: translateX(-50%);
          width:100%;
          height:50%;
          background: radial-gradient(ellipse, rgba(187,134,252,0.04)0%, transparent60%);
          pointer-events: none;
          z-index:0;
        }
      `}</style>

      <div className="bg-gradient-fixed" aria-hidden="true" />
      <div className="top-glow" aria-hidden="true" />
      <div className="particles-container" aria-hidden="true">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
      </div>
    </>
  );
};

export default BackgroundEffect;
