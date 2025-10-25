import React, { useRef, useEffect, useState } from "react";

interface Props {
  src: string;         // Ruta de la imagen original
  depth: string;       // Ruta del mapa de profundidad (en escala de grises)
  width: number;
  height: number;
  blurAmount?: number; // Solo para ajustar la intensidad del desenfoque
  className?: string;
}

const DepthEffectPhoto: React.FC<Props> = ({
  src,
  depth,
  width,
  height,
  blurAmount = 20, // Cuanto mayor, más desenfoque en la zona más profunda
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    const depthImg = new window.Image();
    let bothLoaded = 0;

    img.onload = () => {
      bothLoaded += 1;
      if (bothLoaded === 2) setLoaded(true);
    };
    depthImg.onload = () => {
      bothLoaded += 1;
      if (bothLoaded === 2) setLoaded(true);
    };

    img.src = src;
    depthImg.src = depth;

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
    }

    if (!loaded) return;

    // Pintamos todo después de cargar
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      // Dibujar la imagen base
      ctx.drawImage(img, 0, 0, width, height);

      // Obtener píxeles profundidad
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = width;
      tempCanvas.height = height;
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return;

      tempCtx.drawImage(depthImg, 0, 0, width, height);
      const depthData = tempCtx.getImageData(0, 0, width, height);

      // Para cada rango de profundidad, aplica más blur y pinta la parte correspondiente
      // Para mejor efecto, lo dividimos en pasos (capas graduales)
      const steps = 8;
      for (let s = 0; s < steps; s++) {
        // Crea una máscara
        tempCtx.clearRect(0, 0, width, height);
        tempCtx.globalAlpha = 1;
        const minGray = (255 / steps) * s;
        const maxGray = (255 / steps) * (s + 1);

        // Pinta solo los píxeles cuyo valor de profundidad está entre minGray y maxGray
        const mask = tempCtx.createImageData(width, height);
        for (let i = 0; i < depthData.data.length; i += 4) {
          const gray = depthData.data[i];
          if (gray >= minGray && gray < maxGray) {
            mask.data[i] = 255;
            mask.data[i + 1] = 255;
            mask.data[i + 2] = 255;
            mask.data[i + 3] = 255;
          }
        }
        tempCtx.putImageData(mask, 0, 0);

        // Aplica blur
        ctx.save();
        ctx.filter = `blur(${(blurAmount * s) / steps}px)`;
        ctx.globalCompositeOperation = "destination-in";
        ctx.drawImage(tempCanvas, 0, 0);
        ctx.restore();

        // Mezcla la imagen base en esas áreas blurreadas
        ctx.save();
        ctx.filter = `blur(${(blurAmount * s) / steps}px)`;
        ctx.globalCompositeOperation = "destination-over";
        ctx.drawImage(img, 0, 0, width, height);
        ctx.restore();

        ctx.globalCompositeOperation = "source-over";
      }
    }
    // Solo repintar tras cargarse todo
    // eslint-disable-next-line
  }, [src, depth, width, height, blurAmount, loaded]);

  // Solo renderiza el canvas
  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{ width, height, display: "block", borderRadius: "1rem" }}
    />
  );
};

export default DepthEffectPhoto;
