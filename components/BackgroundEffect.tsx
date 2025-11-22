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
      velocityX: number; // Velocidad de inercia
      velocityY: number; // Velocidad de inercia
      color: string;
      opacity: number;
      opacitySpeed: number;
    }

    const particles: Particle[] = [];
    const particleCount = 40;

    // Solo dos colores principales
    const colors = [
      'rgba(187, 134, 252', // Morado
      'rgba(3, 218, 198',   // Cyan
    ];

    // Crear partículas con diferentes formas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        velocityX: 0, // Velocidad de inercia inicial
        velocityY: 0, // Velocidad de inercia inicial
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.5, // Más brillantes
        opacitySpeed: 0,
      });
    }

    // Variables para el efecto de mouse
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let isMouseMoving = false;
    let mouseTimeout: NodeJS.Timeout;
    let lastMouseUpdate = 0;
    const mouseThrottle = 32;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseUpdate < mouseThrottle) return;
      
      lastMouseUpdate = now;
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 200);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });



    // Animación
    let animationFrameId: number;
    let lastFrameTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;
    
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameTime;
      
      if (deltaTime < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime = currentTime - (deltaTime % frameInterval);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar conexiones entre partículas cercanas (optimizado)
      const maxDistance = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          
          // Early exit si están muy lejos
          if (Math.abs(dx) > maxDistance || Math.abs(dy) > maxDistance) continue;
          
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(187, 134, 252, ${0.2 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Actualizar y dibujar partículas
      const repulsionRadius = 150;
      const repulsionForce = 2.5;
      
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        // Aplicar fricción a la velocidad de inercia (desaceleración gradual)
        const friction = 0.95;
        particle.velocityX *= friction;
        particle.velocityY *= friction;
        
        // Sistema de distribución espacial - buscar huecos vacíos
        let nearbyCount = 0;
        let avgX = 0;
        let avgY = 0;
        const detectionRadius = 200;
        
        for (let j = 0; j < particles.length; j++) {
          if (i === j) continue;
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < detectionRadius) {
            nearbyCount++;
            avgX += particles[j].x;
            avgY += particles[j].y;
          }
        }
        
        // Si hay muy pocas partículas cerca, moverse hacia zonas más pobladas
        if (nearbyCount < 3 && nearbyCount > 0) {
          avgX /= nearbyCount;
          avgY /= nearbyCount;
          const dx = avgX - particle.x;
          const dy = avgY - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0) {
            particle.velocityX += (dx / dist) * 0.02;
            particle.velocityY += (dy / dist) * 0.02;
          }
        }
        // Si hay demasiadas cerca, alejarse un poco para distribuirse
        else if (nearbyCount > 8) {
          avgX /= nearbyCount;
          avgY /= nearbyCount;
          const dx = particle.x - avgX;
          const dy = particle.y - avgY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0) {
            particle.velocityX += (dx / dist) * 0.015;
            particle.velocityY += (dy / dist) * 0.015;
          }
        }
        
        // Actualizar posición con velocidad base + velocidad de inercia
        particle.x += particle.speedX + particle.velocityX;
        particle.y += particle.speedY + particle.velocityY;

        // Efecto de repulsión del mouse con inercia
        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          
          if (Math.abs(dx) <= repulsionRadius && Math.abs(dy) <= repulsionRadius) {
            const distSq = dx * dx + dy * dy;
            const radiusSq = repulsionRadius * repulsionRadius;
            
            if (distSq < radiusSq) {
              const dist = Math.sqrt(distSq);
              const force = (repulsionRadius - dist) / repulsionRadius;
              // Añadir fuerza a la velocidad de inercia en lugar de mover directamente
              particle.velocityX -= (dx / dist) * force * repulsionForce;
              particle.velocityY -= (dy / dist) * force * repulsionForce;
            }
          }
        }

        // Rebote en los bordes (optimizado)
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Dibujar partícula difuminada
        ctx.fillStyle = `${particle.color}, ${particle.opacity})`;
        ctx.shadowBlur = 30;
        ctx.shadowColor = `${particle.color}, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

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
          background: radial-gradient(circle at 50% 30%, #1a1a28 0%, #131320 50%, #0d0d15 80%, #080810 100%);
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
            rgba(187,134,252,0.12) 0%,
            rgba(187,134,252,0.06) 30%,
            rgba(187,134,252,0.02) 60%,
            transparent 80%
          );
          filter: blur(100px);
          z-index: -2;
          pointer-events: none;
          animation: glow-pulse 8s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.4; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.7; transform: translateX(-50%) scale(1.05); }
        }

        .bg-glow-bottom {
          position: fixed;
          bottom: -40%;
          right: -20%;
          width: 100%;
          height: 80%;
          background: radial-gradient(
            circle at center,
            rgba(3,218,198,0.1) 0%,
            rgba(3,218,198,0.05) 30%,
            rgba(3,218,198,0.015) 60%,
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
      <div className="bg-canvas-container" aria-hidden="true">
        <canvas ref={canvasRef} className="bg-canvas" />
      </div>
    </>
  );
};

export default BackgroundEffect;
