import React, { useRef, useEffect, useState } from "react";

interface Props {
  src: string;        // Imagen original
  depth: string;      // Mapa de profundidad (escala de grises)
  width: number;
  height: number;
  blurIntensity?: number; // 0-50 (cuanto más, más desenfoque)
  className?: string;
}

const DepthOfField: React.FC<Props> = ({
  src,
  depth,
  width,
  height,
  blurIntensity = 25,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRendering, setIsRendering] = useState(false);

  useEffect(() => {
    // Cargar ambas imágenes
    const loadImages = async () => {
      const img = new Image();
      const depthMap = new Image();

      img.crossOrigin = "anonymous";
      depthMap.crossOrigin = "anonymous";

      await Promise.all([
        new Promise((resolve) => {
          img.onload = resolve;
          img.src = src;
        }),
        new Promise((resolve) => {
          depthMap.onload = resolve;
          depthMap.src = depth;
        }),
      ]);

      // Renderizar efecto
      renderDepthEffect(img, depthMap);
    };

    loadImages().catch(console.error);
  }, [src, depth, width, height, blurIntensity]);

  const renderDepthEffect = (img: HTMLImageElement, depthMap: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsRendering(true);
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Dibujar imagen original
    ctx.drawImage(img, 0, 0, width, height);

    // Obtener datos de profundidad
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCtx.drawImage(depthMap, 0, 0, width, height);
    const depthData = tempCtx.getImageData(0, 0, width, height).data;

    // Aplicar blur basado en profundidad usando capas
    const blurLayers = 6;
    for (let layer = 0; layer < blurLayers; layer++) {
      const minDepth = (255 / blurLayers) * layer;
      const maxDepth = (255 / blurLayers) * (layer + 1);

      // Crear máscara para esta capa
      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = width;
      maskCanvas.height = height;
      const maskCtx = maskCanvas.getContext("2d");
      if (!maskCtx) continue;

      const maskData = maskCtx.createImageData(width, height);
      for (let i = 0; i < depthData.length; i += 4) {
        const depthValue = depthData[i];
        if (depthValue >= minDepth && depthValue < maxDepth) {
          maskData.data[i] = 255;     // R
          maskData.data[i + 1] = 255; // G
          maskData.data[i + 2] = 255; // B
          maskData.data[i + 3] = 255; // A
        }
      }
      maskCtx.putImageData(maskData, 0, 0);

      // Aplicar blur progresivo
      const blurAmount = (blurIntensity * layer) / blurLayers;
      ctx.save();
      ctx.filter = `blur(${blurAmount}px)`;
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(maskCanvas, 0, 0);
      ctx.restore();

      // Superponer imagen blureada
      ctx.save();
      ctx.filter = `blur(${blurAmount}px)`;
      ctx.globalCompositeOperation = "destination-over";
      ctx.drawImage(img, 0, 0, width, height);
      ctx.restore();

      ctx.globalCompositeOperation = "source-over";
    }

    setIsRendering(false);
  };

  return (
    <div className={`relative inline-block ${className}`} style={{ width, height }}>
      nvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "1rem",
          display: "block",
        }} }}
      />
      {isRendering && (
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          Renderizando...
        </div>
      )}
    </div>
  );
};

export default DepthOfField;
