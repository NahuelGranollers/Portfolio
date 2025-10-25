import React, { useRef, useEffect, useState } from "react";

interface Props {
  src: string;          // Imagen original
  depth: string;        // Mapa de profundidad
  width: number;
  height: number;
  intensity?: number;   // Intensidad del efecto (0-50)
  className?: string;
}

const Parallax3D: React.FC<Props> = ({
  src,
  depth,
  width,
  height,
  intensity = 30,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [images, setImages] = useState<{ base: HTMLImageElement; depth: HTMLImageElement | null }>({
    base: new window.Image(),
    depth: null,
  });

  // Cargar imágenes
  useEffect(() => {
    const img = new window.Image();
    const depthMap = new window.Image();

    img.crossOrigin = "anonymous";
    depthMap.crossOrigin = "anonymous";

    let loaded = 0;
    const onLoad = () => {
      loaded++;
      if (loaded === 2) {
        setImages({ base: img, depth: depthMap });
      }
    };

    img.onload = onLoad;
    depthMap.onload = onLoad;

    img.src = src;
    depthMap.src = depth;
  }, [src, depth]);

  // Detección de movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Renderizar efecto parallax
  useEffect(() => {
    if (!canvasRef.current || !images.base || !images.depth) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    // Obtener datos de profundidad
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCtx.drawImage(images.depth, 0, 0, width, height);
    const depthData = tempCtx.getImageData(0, 0, width, height).data;

    // Calcular offset basado en posición del mouse y profundidad
    const centerX = mousePos.x * 2 - 1; // -1 a 1
    const centerY = mousePos.y * 2 - 1; // -1 a 1

    // Crear capas parallax
    const layers = 8;
    for (let layer = 0; layer < layers; layer++) {
      const minDepth = (255 / layers) * layer;
      const maxDepth = (255 / layers) * (layer + 1);

      // Calculador offset para esta capa
      const layerDepth = layer / layers;
      const offsetX = centerX * intensity * layerDepth;
      const offsetY = centerY * intensity * layerDepth;

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
          maskData.data[i] = 255;
          maskData.data[i + 1] = 255;
          maskData.data[i + 2] = 255;
          maskData.data[i + 3] = 255;
        }
      }
      maskCtx.putImageData(maskData, 0, 0);

      // Dibujar esta capa con offset
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(maskCanvas, 0, 0);
      ctx.restore();

      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.translate(offsetX, offsetY);
      ctx.drawImage(images.base, 0, 0, width, height);
      ctx.restore();

      ctx.globalCompositeOperation = "lighten";
      ctx.drawImage(maskCanvas, 0, 0);
    }

    ctx.globalCompositeOperation = "source-over";
  }, [images, width, height, mousePos, intensity]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "1rem",
          display: "block",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Parallax3D;
