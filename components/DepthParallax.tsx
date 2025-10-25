import React, { useRef, useEffect, useState } from "react";

interface Props {
  src: string;
  depth: string;
  width: number;
  height: number;
  intensity?: number;
  className?: string;
}

const DepthParallax: React.FC<Props> = ({
  src,
  depth,
  width,
  height,
  intensity = 20,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const depthRef = useRef<HTMLImageElement | null>(null);

  // Cargar imágenes
  useEffect(() => {
    const img = new Image();
    const depthImg = new Image();

    img.crossOrigin = "anonymous";
    depthImg.crossOrigin = "anonymous";

    let loaded = 0;
    const onLoad = () => {
      loaded++;
      if (loaded === 2) {
        imgRef.current = img;
        depthRef.current = depthImg;
        setImagesLoaded(true);
      }
    };

    img.onload = onLoad;
    depthImg.onload = onLoad;

    img.src = src;
    depthImg.src = depth;
  }, [src, depth]);

  // Movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Renderizar con depth map
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || !imgRef.current || !depthRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgRef.current;
    const depthImg = depthRef.current;

    // Obtener datos del mapa de profundidad
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCtx.drawImage(depthImg, 0, 0, width, height);
    const depthData = tempCtx.getImageData(0, 0, width, height);

    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);

    // Calcular desplazamiento basado en mouse
    const offsetX = (mousePos.x - 0.5) * intensity;
    const offsetY = (mousePos.y - 0.5) * intensity;

    // Dibujar imagen con desplazamiento por profundidad
    const imageData = ctx.createImageData(width, height);
    tempCtx.clearRect(0, 0, width, height);
    tempCtx.drawImage(img, 0, 0, width, height);
    const imgData = tempCtx.getImageData(0, 0, width, height);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4;
        
        // Obtener valor de profundidad (0-255)
        const depthValue = depthData.data[i] / 255;
        
        // Calcular posición desplazada según profundidad
        const displaceX = Math.round(x + offsetX * depthValue);
        const displaceY = Math.round(y + offsetY * depthValue);
        
        // Verificar límites
        if (displaceX >= 0 && displaceX < width && displaceY >= 0 && displaceY < height) {
          const sourceI = (displaceY * width + displaceX) * 4;
          imageData.data[i] = imgData.data[sourceI];
          imageData.data[i + 1] = imgData.data[sourceI + 1];
          imageData.data[i + 2] = imgData.data[sourceI + 2];
          imageData.data[i + 3] = imgData.data[sourceI + 3];
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, [imagesLoaded, mousePos, width, height, intensity]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
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
        }}
      />
    </div>
  );
};

export default DepthParallax;
