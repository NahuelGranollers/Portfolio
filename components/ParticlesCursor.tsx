import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticlesCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 100;

    // Renderer optimizado
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false, // Menos consumo
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio * 0.5); // Reducido para performance
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles geometry - estilo BackgroundEffect
    const geometry = new THREE.BufferGeometry();
    const particleCount = 20; // Menos partículas
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);
    const phases = new Float32Array(particleCount); // Para animación ondulante

    // Colores del BackgroundEffect: morado (#BB86FC) y cyan (#03DAC6)
    const colorPalette = [
      new THREE.Color(0xBB86FC), // Morado
      new THREE.Color(0x03DAC6), // Cyan
      new THREE.Color(0xFFFFFF).multiplyScalar(0.4), // Blanco muy suave
    ];

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      // Mayor distribución espacial
      positions[idx] = (Math.random() - 0.5) * 400;
      positions[idx + 1] = (Math.random() - 0.5) * 350;
      positions[idx + 2] = (Math.random() - 0.5) * 200;

      // Asignar colores de la paleta
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[idx] = color.r;
      colors[idx + 1] = color.g;
      colors[idx + 2] = color.b;

      // Tamaños más pequeños (2-5px)
      sizes[i] = Math.random() * 3 + 2;

      // Velocidades más lentas
      velocities[idx] = (Math.random() - 0.5) * 0.08;
      velocities[idx + 1] = (Math.random() - 0.5) * 0.08;
      velocities[idx + 2] = (Math.random() - 0.5) * 0.05;

      phases[i] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Crear canvas para partículas redondas
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    // Material con glow y textura redonda
    const material = new THREE.PointsMaterial({
      size: 4, // Tamaño base más pequeño
      map: texture, // Textura redonda
      vertexColors: true,
      transparent: true,
      opacity: 0.3, // Mucho más translúcido
      sizeAttenuation: true,
      fog: false,
      blending: THREE.AdditiveBlending, // Efecto glow
      depthWrite: false,
    });

    // Points mesh
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse tracking con interpolación suave (lerp)
    const targetMouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Animation loop con transformación suave
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.016; // ~60fps

      if (particles) {
        // Interpolación suave del mouse (lerp) para evitar saltos
        const lerpFactor = 0.08; // Más bajo = más suave
        mouseRef.current.x += (targetMouse.x - mouseRef.current.x) * lerpFactor;
        mouseRef.current.y += (targetMouse.y - mouseRef.current.y) * lerpFactor;

        // Calcular velocidad interpolada (sin saltos)
        const smoothDx = targetMouse.x - mouseRef.current.x;
        const smoothDy = targetMouse.y - mouseRef.current.y;
        velocityRef.current.x = smoothDx;
        velocityRef.current.y = smoothDy;
        
        const mouseSpeed = Math.sqrt(smoothDx ** 2 + smoothDy ** 2);
        const speedFactor = Math.min(mouseSpeed * 8, 1);

        // Rotación muy sutil
        particles.rotation.y += 0.0002;

        const positionAttribute = geometry.getAttribute('position');
        const posArray = positionAttribute.array as Float32Array;
        const sizeAttribute = geometry.getAttribute('size');
        const sizeArray = sizeAttribute.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const idx = i * 3;

          const x = posArray[idx];
          const y = posArray[idx + 1];
          const z = posArray[idx + 2];

          // Distancia al mouse interpolado
          const dx = mouseRef.current.x * 180 - x;
          const dy = mouseRef.current.y * 180 - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Atracción y repulsión ultra suave
          let attraction = 0;
          if (distance < 100) {
            // Repulsión suave
            attraction = speedFactor > 0.05 ? -0.015 * speedFactor : 0.005;
          } else if (distance < 220) {
            // Atracción muy suave
            attraction = 0.002;
          }

          // Movimiento ondulante más lento (como float-particle del background)
          const wave = Math.sin(time * 0.4 + phases[i]) * 0.25;
          const waveY = Math.cos(time * 0.35 + phases[i]) * 0.25;

          // Movimiento ultra suave con interpolación
          const targetVelX = dx * attraction * 0.3 + velocities[idx] * 0.5 + wave;
          const targetVelY = dy * attraction * 0.3 + velocities[idx + 1] * 0.5 + waveY;
          
          posArray[idx] += targetVelX * 0.5;
          posArray[idx + 1] += targetVelY * 0.5;
          posArray[idx + 2] += velocities[idx + 2] * 0.25;

          // Boundaries suaves más amplios
          if (Math.abs(posArray[idx]) > 250) {
            velocities[idx] *= -0.6;
            posArray[idx] = Math.sign(posArray[idx]) * 250;
          }
          if (Math.abs(posArray[idx + 1]) > 200) {
            velocities[idx + 1] *= -0.6;
            posArray[idx + 1] = Math.sign(posArray[idx + 1]) * 200;
          }
          if (Math.abs(posArray[idx + 2]) > 120) {
            velocities[idx + 2] *= -0.6;
            posArray[idx + 2] = Math.sign(posArray[idx + 2]) * 120;
          }

          // Transformación sutil del tamaño con mejor respuesta al mouse
          const proximityScale = distance < 100 ? 1 + (1 - distance / 100) * 0.4 * speedFactor : 1;
          const pulseScale = 1 + Math.sin(time * 1.2 + phases[i]) * 0.08;
          sizeArray[i] = (2 + Math.random() * 3) * proximityScale * pulseScale;
        }

        positionAttribute.needsUpdate = true;
        sizeAttribute.needsUpdate = true;

        // Decay velocity del mouse muy lento para movimiento fluido
        velocityRef.current.x *= 0.88;
        velocityRef.current.y *= 0.88;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current?.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // DETRÁS de TODO (incluso del contenido)
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesCursor;
