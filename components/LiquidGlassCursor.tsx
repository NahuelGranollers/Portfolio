import { useRef, useEffect } from "react";

const LiquidGlassCursor = () => {
  const ref = useRef();

  useEffect(() => {
    const update = e => {
      if (ref.current)
        ref.current.style.transform =
          `translate3d(${e.clientX - 45}px,${e.clientY - 45}px,0)`;
    };
    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return <div ref={ref} className="liquid-glass-cursor"></div>;
};

export default LiquidGlassCursor;
