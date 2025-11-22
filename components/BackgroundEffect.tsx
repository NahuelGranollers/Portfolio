import React, { useEffect, useRef, useState } from 'react';

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prefersReducedMotion] = useState(
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Partículas flotantes
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      opacitySpeed: number;
    }

    const particles: Particle[] = [];
    const particleCount = 40;

    // Colores del tema (más sutiles)
    const colors = [
      'rgba(187, 134, 252', // Morado
      'rgba(3, 218, 198',   // Cyan
      'rgba(200, 200, 220', // Gris azulado claro
    ];

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.15,
        opacitySpeed: (Math.random() - 0.5) * 0.008,
      });
    }

    // Variables para el efecto de mouse
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let isMouseMoving = false;
    let mouseTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animación
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar conexiones entre partículas cercanas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(187, 134, 252, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Actualizar y dibujar partículas
      particles.forEach((particle) => {
        // Actualizar posición
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Efecto de atracción/repulsión del mouse (más sutil)
        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150;
            // Repulsión moderada
            particle.x -= (dx / distance) * force * 2.5;
            particle.y -= (dy / distance) * force * 2.5;
          }
        }

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Animar opacidad
        particle.opacity += particle.opacitySpeed;
        if (particle.opacity <= 0.1 || particle.opacity >= 0.7) {
          particle.opacitySpeed *= -1;
        }

        // Dibujar partícula con glow sutil
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}, ${particle.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `${particle.color}, ${particle.opacity * 0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <>
      <style>{`
        .bg-gradient-layer {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, #2d2d48 0%, #1f1f35 50%, #161625 80%, #0f0f1a 100%);
          z-index: -3;
          pointer-events: none;
        }

        .bg-glow-top {
          position: fixed;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          height: 80%;
          background: radial-gradient(
            ellipse at center,
            rgba(187,134,252,0.22) 0%,
            rgba(187,134,252,0.12) 30%,
            rgba(187,134,252,0.04) 60%,
            transparent 80%
          );
          filter: blur(100px);
          z-index: -2;
          pointer-events: none;
          animation: glow-pulse 8s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
        }

        .bg-glow-bottom {
          position: fixed;
          bottom: -40%;
          right: -20%;
          width: 100%;
          height: 80%;
          background: radial-gradient(
            circle at center,
            rgba(3,218,198,0.18) 0%,
            rgba(3,218,198,0.1) 30%,
            rgba(3,218,198,0.03) 60%,
            transparent 80%
          );
          filter: blur(120px);
          z-index: -2;
          pointer-events: none;
          animation: glow-pulse-slow 12s ease-in-out infinite;
        }

        @keyframes glow-pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }

        .bg-shimmer-overlay {
          position: fixed;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(187,134,252,0.06) 0%,
            rgba(150,120,230,0.02) 35%,
            transparent 40%,
            rgba(3,218,198,0.05) 100%
          );
          z-index: -1;
          pointer-events: none;
          animation: shimmer-move 15s ease-in-out infinite alternate;
        }

        @keyframes shimmer-move {
          0% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 0.7; transform: translateY(-20px); }
          100% { opacity: 0.4; transform: translateY(0); }
        }

        .bg-canvas-container {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 1;
        }

        .bg-canvas {
          width: 100%;
          height: 100%;
        }



        ${prefersReducedMotion ? `
          .bg-glow-top,
          .bg-glow-bottom,
          .bg-shimmer-overlay {
            animation: none !important;
          }
          .bg-canvas-container {
            display: none;
          }
        ` : ''}
      `}</style>

      <div className="bg-gradient-layer" aria-hidden="true" />
      <div className="bg-glow-top" aria-hidden="true" />
      <div className="bg-glow-bottom" aria-hidden="true" />
      <div className="bg-shimmer-overlay" aria-hidden="true" />
      <div className="bg-canvas-container" aria-hidden="true">
        <canvas ref={canvasRef} className="bg-canvas" />
      </div>
    </>
  );
};

export default BackgroundEffect;
