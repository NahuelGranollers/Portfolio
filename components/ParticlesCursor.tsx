import { useRef, useEffect } from "react";

const COLORS = [
  "#8ec5fc", "#e0c3fc", "#fbda61", "#ff5acd", "#43e97b", "#38f9d7", "#fff6b7", "#f6416c"
];

const LINE_COUNT = 16; // Líneas simultáneas, puedes bajar/subir

const AnimatedLinesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lines = useRef(
    Array.from({ length: LINE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: 0,
      vy: 0,
      length: 70 + Math.random() * 40,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    }))
  );
  const mouse = useRef({ x: window.innerWidth/2, y: window.innerHeight/2, vx: 0, vy: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let lastX = mouse.current.x, lastY = mouse.current.y;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const handleMouse = e => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);

    function animate() {
      // Velocidad del mouse para estirar líneas
      mouse.current.vx = mouse.current.x - lastX;
      mouse.current.vy = mouse.current.y - lastY;
      lastX = mouse.current.x;
      lastY = mouse.current.y;

      ctx.clearRect(0, 0, width, height);

      // Fondo claro/gradient muy suave
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#f5f5fa");
      gradient.addColorStop(1, "#eaf2ff");
      ctx.globalAlpha = 0.17;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;

      // Animar líneas coloridas
      for (let line of lines.current) {
        // distanciado básico a mouse
        let dx = mouse.current.x - line.x;
        let dy = mouse.current.y - line.y;
        let distance = Math.sqrt(dx*dx + dy*dy);

        // Que mantengan distancia mínima, si están cerca se expanden
        let spring = distance < 120 ? 0.28 : 0.12;
        line.vx = line.vx * 0.74 + dx * spring * 0.029;
        line.vy = line.vy * 0.74 + dy * spring * 0.029;

        // Expansión según velocidad del cursor
        let stretch = Math.min(Math.sqrt(mouse.current.vx*mouse.current.vx + mouse.current.vy*mouse.current.vy) / 25, 1) + 1;
        let lineLength = line.length * stretch;

        line.x += line.vx;
        line.y += line.vy;

        // Mantener dentro de pantalla y nunca sobre textos (no sube el z-index)
        line.x = Math.max(0, Math.min(width, line.x));
        line.y = Math.max(0, Math.min(height, line.y));

        // Transparencia variable, más cuando están lejos
        let alpha = Math.max(0.12, 1 - distance / 420);

        ctx.save();
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = line.color;
        ctx.shadowBlur = 18;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
          line.x + line.vx * lineLength,
          line.y + line.vy * lineLength
        );
        ctx.stroke();
        ctx.restore();
      }

      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        zIndex: 1, // NUNCA tapa textos
        opacity: 1,
      }}
    />
  );
};

export default AnimatedLinesBackground;
