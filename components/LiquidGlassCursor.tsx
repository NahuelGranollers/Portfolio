import { useRef, useEffect } from "react";

const LiquidGlassCursor = () => {
  const ref = useRef();
  // Últimas posiciones y energía del movimiento
  useEffect(() => {
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, vx = 0, vy = 0;
    const speed = 0.43;
    let lastTime = performance.now();

    const move = e => {
      mouseX = e.clientX - 45;
      mouseY = e.clientY - 45;
    };

    const follow = (now) => {
      const dt = Math.max((now-lastTime)/16.67, 1); // corrige delta si lag
      lastTime = now;
      let prevX = cursorX, prevY = cursorY;

      cursorX += (mouseX - cursorX) * speed * dt;
      cursorY += (mouseY - cursorY) * speed * dt;

      vx = cursorX - prevX;
      vy = cursorY - prevY;
      // calcula "stretch" en base a la velocidad (muy dinámico si movimiento brusco)
      const stretch = Math.min(Math.sqrt(vx*vx+vy*vy)/9, 1);
      const angle = Math.atan2(vy, vx) * 180/Math.PI;

      if (ref.current)
        ref.current.style.transform =
          `translate3d(${cursorX}px,${cursorY}px,0) scale(${1 + stretch*0.36},${1 - stretch*0.23}) rotate(${angle/5}deg)`;

      // Opcional: feedback visual cuando está parado
      ref.current.style.opacity = (0.27 + 0.14*stretch).toFixed(2);

      requestAnimationFrame(follow);
    };
    window.addEventListener("pointermove", move);
    requestAnimationFrame(follow);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="liquid-glass-cursor"></div>;
};

export default LiquidGlassCursor;
