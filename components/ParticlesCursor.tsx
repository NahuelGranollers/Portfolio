import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticlesCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

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

    // Particles geometry - menos partículas
    const geometry = new THREE.BufferGeometry();
    const particleCount = 350; // Reducido de 800
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const ages = new Float32Array(particleCount); // Track age para desvanecimiento

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 400;
      positions[idx + 1] = (Math.random() - 0.5) * 300;
      positions[idx + 2] = (Math.random() - 0.5) * 200;

      // Colores azul-púrpura-cian con variación
      const hue = Math.random() * 0.35 + 0.45;
      const color = new THREE.Color().setHSL(hue, 0.6, 0.55);
      colors[idx] = color.r;
      colors[idx + 1] = color.g;
      colors[idx + 2] = color.b;

      velocities[idx] = (Math.random() - 0.5) * 0.3;
      velocities[idx + 1] = (Math.random() - 0.5) * 0.3;
      velocities[idx + 2] = (Math.random() - 0.5) * 0.3;

      ages[i] = Math.random() * 100; // Edad aleatoria inicial
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material optimizado
    const material = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.5, // Más translúcido
      sizeAttenuation: true,
      fog: false,
    });

    // Points mesh
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    let frameCount = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      frameCount++;

      // Actualizar solo cada 2 frames para mejor performance
      if (frameCount % 2 !== 0) {
        renderer.render(scene, camera);
        return;
      }

      if (particles) {
        particles.rotation.x += 0.00005;
        particles.rotation.y += 0.00015;

        const positionAttribute = geometry.getAttribute('position');
        const posArray = positionAttribute.array as Float32Array;
        const colorAttribute = geometry.getAttribute('color');
        const colorArray = colorAttribute.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const idx = i * 3;

          // Incrementa edad y desvanecimiento
          ages[i]++;
          const maxAge = 200;
          const fadeOut = Math.max(0, 1 - ages[i] / maxAge);

          // Cuando se desvanecen completamente, reinicia
          if (ages[i] > maxAge) {
            posArray[idx] = (Math.random() - 0.5) * 400;
            posArray[idx + 1] = (Math.random() - 0.5) * 300;
            posArray[idx + 2] = (Math.random() - 0.5) * 200;
            ages[i] = 0;
            velocities[idx] = (Math.random() - 0.5) * 0.3;
            velocities[idx + 1] = (Math.random() - 0.5) * 0.3;
            velocities[idx + 2] = (Math.random() - 0.5) * 0.3;
          }

          const x = posArray[idx];
          const y = posArray[idx + 1];
          const z = posArray[idx + 2];

          // Atracción suave hacia el mouse
          const dx = mouseRef.current.x * 120 - x;
          const dy = mouseRef.current.y * 120 - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const attraction = distance < 180 ? 0.008 : 0; // Menos agresivo

          posArray[idx] += dx * attraction + velocities[idx];
          posArray[idx + 1] += dy * attraction + velocities[idx + 1];
          posArray[idx + 2] += velocities[idx + 2];

          // Rebote suave en bordes (con damping)
          if (Math.abs(posArray[idx]) > 220) {
            velocities[idx] *= -0.8;
            posArray[idx] = Math.sign(posArray[idx]) * 220;
          }
          if (Math.abs(posArray[idx + 1]) > 170) {
            velocities[idx + 1] *= -0.8;
            posArray[idx + 1] = Math.sign(posArray[idx + 1]) * 170;
          }
          if (Math.abs(posArray[idx + 2]) > 120) {
            velocities[idx + 2] *= -0.8;
            posArray[idx + 2] = Math.sign(posArray[idx + 2]) * 120;
          }

          // Aplicar desvanecimiento al color (reducir opacity)
          colorArray[idx] = (colorArray[idx] * 0.7 + 0.3) * fadeOut;
          colorArray[idx + 1] = (colorArray[idx + 1] * 0.7 + 0.3) * fadeOut;
          colorArray[idx + 2] = (colorArray[idx + 2] * 0.7 + 0.3) * fadeOut;
        }

        positionAttribute.needsUpdate = true;
        colorAttribute.needsUpdate = true;
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
        zIndex: 1, // DETRÁS de todo
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesCursor;
