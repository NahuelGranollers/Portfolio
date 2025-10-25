import React, { useRef, useEffect, useState } from "react";

interface Props {
  src: string;
  depth: string;
  alpha: string;
  background?: string;
  width: number;
  height: number;
  intensity?: number;
  className?: string;
}

const DepthParallaxMasked: React.FC<Props> = ({
  src,
  depth,
  alpha,
  background,
  width,
  height,
  intensity = 5,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

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

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    const depthImg = new Image();
    const alphaImg = new Image();
    const bgImg = new Image();

    img.crossOrigin = "anonymous";
    depthImg.crossOrigin = "anonymous";
    alphaImg.crossOrigin = "anonymous";
    bgImg.crossOrigin = "anonymous";

    const renderDepthMasked = () => {
      // 1. Dibujar fondo primero
      if (background) {
        ctx.drawImage(bgImg, 0, 0, width, height);
      } else {
        ctx.fillStyle = "#1a2332";
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Obtener datos del mapa de profundidad
      const depthCanvas = document.createElement("canvas");
      depthCanvas.width = width;
      depthCanvas.height = height;
      const depthCtx = depthCanvas.getContext("2d");
      if (!depthCtx) return;
      depthCtx.drawImage(depthImg, 0, 0, width, height);
      const depthData = depthCtx.getImageData(0, 0, width, height).data;

      // 3. Obtener datos del mapa alpha
      const alphaCanvas = document.createElement("canvas");
      alphaCanvas.width = width;
      alphaCanvas.height = height;
      const alphaCtx = alphaCanvas.getContext("2d");
      if (!alphaCtx) return;
      alphaCtx.drawImage(alphaImg, 0, 0, width, height);
      const alphaData = alphaCtx.getImageData(0, 0, width, height).data;

      // 4. Calcular desplazamiento basado en mouse
      const offsetX = -(mousePos.x - 0.5) * intensity;
      const offsetY = -(mousePos.y - 0.5) * intensity;

      // 5. Canvas temporal para la imagen
      const imgCanvas = document.createElement("canvas");
      imgCanvas.width = width;
      imgCanvas.height = height;
      const imgCtx = imgCanvas.getContext("2d");
      if (!imgCtx) return;
      imgCtx.drawImage(img, 0, 0, width, height);
      const imgData = imgCtx.getImageData(0, 0, width, height);

      // 6. Crear imagen con desplazamiento por profundidad
      const displacedCanvas = document.createElement("canvas");
      displacedCanvas.width = width;
      displacedCanvas.height = height;
      const displacedCtx = displacedCanvas.getContext("2d");
      if (!displacedCtx) return;

      const displacedImageData = displacedCtx.createImageData(width, height);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;
          const depthValue = 1 - (depthData[i] / 255); // Invertido

          const displaceX = Math.round(x + offsetX * depthValue);
          const displaceY = Math.round(y + offsetY * depthValue);

          if (displaceX >= 0 && displaceX < width && displaceY >= 0 && displaceY < height) {
            const sourceI = (displaceY * width + displaceX) * 4;
            displacedImageData.data[i] = imgData.data[sourceI];
            displacedImageData.data[i + 1] = imgData.data[sourceI + 1];
            displacedImageData.data[i + 2] = imgData.data[sourceI + 2];
            displacedImageData.data[i + 3] = imgData.data[sourceI + 3];
          } else {
            displacedImageData.data[i] = imgData.data[i];
            displacedImageData.data[i + 1] = imgData.data[i + 1];
            displacedImageData.data[i + 2] = imgData.data[i + 2];
            displacedImageData.data[i + 3] = imgData.data[i + 3];
          }
        }
      }

      displacedCtx.putImageData(displacedImageData, 0, 0);

      // 7. Aplicar máscara alpha Y dibujar encima del fondo
      const finalImageData = displacedCtx.createImageData(width, height);

      for (let i = 0; i < displacedImageData.data.length; i += 4) {
        const alphaValue = alphaData[i];

        finalImageData.data[i] = displacedImageData.data[i];
        finalImageData.data[i + 1] = displacedImageData.data[i + 1];
        finalImageData.data[i + 2] = displacedImageData.data[i + 2];
        finalImageData.data[i + 3] = (alphaValue / 255) * displacedImageData.data[i + 3];
      }

      // 8. Dibujar la cara con alpha encima del fondo
      displacedCtx.putImageData(finalImageData, 0, 0);
      ctx.drawImage(displacedCanvas, 0, 0, width, height);
    };

    let loadedCount = 0;
    const onLoad = () => {
      loadedCount++;
      const requiredImages = background ? 4 : 3;
      if (loadedCount === requiredImages) renderDepthMasked();
    };

    img.onload = onLoad;
    depthImg.onload = onLoad;
    alphaImg.onload = onLoad;
    if (background) bgImg.onload = onLoad;

    img.src = src;
    depthImg.src = depth;
    alphaImg.src = alpha;
    if (background) bgImg.src = background;
  }, [src, depth, alpha, background, width, height, mousePos, intensity]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block overflow-visible ${className}`}
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
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
};

export default DepthParallaxMasked;
