import React, { useRef, useEffect, useState } from 'react';

interface Pixel {
  x: number;
  y: number;
}

interface Props {
  src: string;
  size?: number; // tamaño del píxel
  width: number;
  height: number;
  className?: string;
}

// Helper para encontrar si un píxel está clickeado
const isPixelSelected = (pixels: Pixel[], x: number, y: number) =>
  pixels.some(p => p.x === x && p.y === y);

const PixelatePhoto: React.FC<Props> = ({
  src, size = 20, width, height, className = ''
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selected, setSelected] = useState<Pixel[]>([]);
  const [hoverPixel, setHoverPixel] = useState<Pixel | null>(null);

  // Dibuja los píxeles seleccionados y el hover
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imgRef.current;
    if (!canvas || !ctx || !img) return;

    ctx.clearRect(0, 0, width, height);

    // Píxeles fijos
    selected.forEach(pixel => {
      ctx.drawImage(
        img,
        pixel.x, pixel.y, size, size, // src
        pixel.x, pixel.y, size, size  // dst
      );
      ctx.save();
      ctx.filter = 'blur(2px)'; // Extra pixelado visual
      ctx.globalAlpha = 0.7;
      ctx.fillRect(pixel.x, pixel.y, size, size);
      ctx.restore();
    });

    // Pixel hover temporal si no está ya fijado
    if (
      hoverPixel &&
      !isPixelSelected(selected, hoverPixel.x, hoverPixel.y)
    ) {
      ctx.drawImage(
        img,
        hoverPixel.x, hoverPixel.y, size, size,
        hoverPixel.x, hoverPixel.y, size, size
      );
      ctx.save();
      ctx.filter = 'blur(2px)';
      ctx.globalAlpha = 0.5;
      ctx.fillRect(hoverPixel.x, hoverPixel.y, size, size);
      ctx.restore();
    }
  }, [selected, hoverPixel, src, size, width, height]);

  // Detecta pixel bajo el mouse
  const handleMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / size) * size;
    const y = Math.floor((e.clientY - rect.top) / size) * size;
    setHoverPixel({ x, y });
  };

  const handleLeave = () => setHoverPixel(null);

  const handleClick = () => {
    if (
      hoverPixel &&
      !isPixelSelected(selected, hoverPixel.x, hoverPixel.y)
    ) {
      setSelected(prev => [...prev, hoverPixel]);
    }
  };

  return (
    <div
      className={`relative group w-fit inline-block ${className}`}
      style={{ width, height }}
    >
      {/* Imagen de fondo */}
      <img
        src={src}
        ref={imgRef}
        alt="Profile"
        width={width}
        height={height}
        className="block object-cover rounded-md"
        draggable={false}
        style={{ pointerEvents: 'none', width, height }}
      />
      {/* Canvas Overlay */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute left-0 top-0 w-full h-full cursor-crosshair"
        style={{ zIndex: 5 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      />
      {/* Sombra extra para feedback */}
      <div
        className="absolute inset-0 pointer-events-none rounded-md"
        style={{ boxShadow: '0 4px 30px 8px rgba(70,0,140,0.07)' }}
      />
    </div>
  );
};

export default PixelatePhoto;
