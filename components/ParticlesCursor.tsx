import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticlesCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

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

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles geometry
    const geometry = new THREE.BufferGeometry();
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 400; // X
      positions[i + 1] = (Math.random() - 0.5) * 300; // Y
      positions[i + 2] = (Math.random() - 0.5) * 200; // Z

      // Colores: azul, púrpura, cian
      const hue = Math.random() * 0.3 + 0.5; // Rango azul-púrpura
      const color = new THREE.Color().setHSL(hue, 0.7, 0.6);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;

      velocities[i] = (Math.random() - 0.5) * 0.5;
      velocities[i + 1] = (Math.random() - 0.5) * 0.5;
      velocities[i + 2] = (Math.random() - 0.5) * 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material
    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    // Points mesh
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (particles) {
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.0003;

        // Atrae partículas hacia el mouse
        const positionAttribute = geometry.getAttribute('position');
        const posArray = positionAttribute.array as Float32Array;

        for (let i = 0; i < particleCount * 3; i += 3) {
          const x = posArray[i];
          const y = posArray[i + 1];
          const z = posArray[i + 2];

          // Dirección hacia el mouse
          const dx = mouseX * 100 - x;
          const dy = mouseY * 100 - y;
          const dz = -z;

          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const attraction = distance < 150 ? 0.02 : 0;

          posArray[i] += dx * attraction + velocities[i];
          posArray[i + 1] += dy * attraction + velocities[i + 1];
          posArray[i + 2] += dz * attraction + velocities[i + 2];

          // Rebote en bordes
          if (Math.abs(posArray[i]) > 200) velocities[i] *= -1;
          if (Math.abs(posArray[i + 1]) > 150) velocities[i + 1] *= -1;
          if (Math.abs(posArray[i + 2]) > 100) velocities[i + 2] *= -1;
        }
        positionAttribute.needsUpdate = true;
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
      containerRef.current?.removeChild(renderer.domElement);
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
        zIndex: 9998,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesCursor;
