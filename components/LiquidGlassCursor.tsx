import { useRef, useEffect } from "react";

const LiquidGlassCursor = () => {
  const ref = useRef();
  // Usamos la API de RAF para mayor suavidad y rapidez
  useEffect(() => {
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
    const speed = 0.32; // Más alto = sigue más rápido (0.3-0.4 va bien elegante)

    const move = e => {
      mouseX = e.clientX - 47; // la mitad del tamaño
      mouseY = e.clientY - 47;
    };
    const follow = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      if (ref.current)
        ref.current.style.transform = `translate3d(${cursorX}px,${cursorY}px,0)`;
      requestAnimationFrame(follow);
    };
    window.addEventListener("pointermove", move);
    requestAnimationFrame(follow);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="liquid-glass-cursor"></div>;
};

export default LiquidGlassCursor;
