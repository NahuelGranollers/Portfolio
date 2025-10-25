import React, { useRef, useEffect, useState, useMemo } from 'react';

interface Pixel {
  x: number;
  y: number;
}

interface Props {
  src: string;
  size?: number;
  width: number;
  height: number;
  className?: string;
  brushRadius?: number;
}

const isPixelSelected = (pixels: Pixel[], x: number, y: number) =>
  pixels.some(p => p.x === x && p.y === y);

const PixelatePhoto: React.FC<Props> = ({
  src, 
  size = 20, 
  width, 
  height, 
  className = '',
  brushRadius = 2 // Radio reducido
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selected, setSelected] = useState<Pixel[]>([]);
  const [hoverPixels, setHoverPixels] = useState<Pixel[]>([]);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Cachea la imagen en un canvas offscreen
  useEffect(() => {
    const img = imgRef.current;
    if (!img || !imgLoaded) return;

    const offscreen = document.createElement('canvas');
    offscreen.width = width;
    offscreen.height = height;
    const offCtx = offscreen.getContext('2d', { willReadFrequently: true });
    if (offCtx) {
      offCtx.drawImage(img, 0, 0, width, height);
      offscreenCanvasRef.current = offscreen;
    }
  }, [imgLoaded, width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { willReadFrequently: true });
    const offscreen = offscreenCanvasRef.current;
    if (!canvas || !ctx || !offscreen) return;

    ctx.clearRect(0, 0, width, height);

    // Dibuja píxeles seleccionados
    selected.forEach(pixel => {
      const avgColor = getAverageColorFast(offscreen, pixel.x, pixel.y, size);
      ctx.fillStyle = avgColor;
      ctx.fillRect(pixel.x, pixel.y, size, size);
    });

    // Dibuja píxeles hover
    hoverPixels.forEach(pixel => {
      if (!isPixelSelected(selected, pixel.x, pixel.y)) {
        const avgColor = getAverageColorFast(offscreen, pixel.x, pixel.y, size);
        ctx.fillStyle = avgColor;
        ctx.globalAlpha = 0.75;
        ctx.fillRect(pixel.x, pixel.y, size, size);
        ctx.globalAlpha = 1;
      }
    });
  }, [selected, hoverPixels, size, width, height]);

  const getAverageColorFast = (
    offscreen: HTMLCanvasElement,
    x: number,
    y: number,
    blockSize: number
  ): string => {
    const ctx = offscreen.getContext('2d', { willReadFrequently: true });
    if (!ctx) return 'rgba(128,128,128,1)';
    
    const imageData = ctx.getImageData(x, y, Math.min(blockSize, width - x), Math.min(blockSize, height - y));
    const data = imageData.data;

    let r = 0, g = 0, b = 0, count = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    return `rgb(${r},${g},${b})`;
  };

  const getPixelsInRadius = useMemo(() => {
    return (centerX: number, centerY: number): Pixel[] => {
      const pixels: Pixel[] = [];
      const radiusInPixels = brushRadius * size;

      for (let dy = -radiusInPixels; dy <= radiusInPixels; dy += size) {
        for (let dx = -radiusInPixels; dx <= radiusInPixels; dx += size) {
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance <= radiusInPixels) {
            const x = centerX + dx;
            const y = centerY + dy;
            if (x >= 0 && x < width && y >= 0 && y < height) {
              pixels.push({ x, y });
            }
          }
        }
      }

      return pixels;
    };
  }, [brushRadius, size, width, height]);

  const handleMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const centerX = Math.floor(mouseX / size) * size;
    const centerY = Math.floor(mouseY / size) * size;
    
    if (centerX >= 0 && centerX < width && centerY >= 0 && centerY < height) {
      const pixelsInBrush = getPixelsInRadius(centerX, centerY);
      setHoverPixels(pixelsInBrush);
    }
  };

  const handleLeave = () => setHoverPixels([]);

  const handleClick = () => {
    if (hoverPixels.length > 0) {
      const newPixels = hoverPixels.filter(
        hp => !isPixelSelected(selected, hp.x, hp.y)
      );
      setSelected(prev => [...prev, ...newPixels]);
    }
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        src={src}
        ref={imgRef}
        alt="Profile"
        onLoad={() => setImgLoaded(true)}
        className="block object-cover rounded-2xl"
        draggable={false}
        style={{ 
          width: `${width}px`, 
          height: `${height}px`,
          pointerEvents: 'none'
        }}
      />
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute left-0 top-0 cursor-crosshair rounded-2xl"
        style={{ width: `${width}px`, height: `${height}px` }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      />
    </div>
  );
};

export default PixelatePhoto;
