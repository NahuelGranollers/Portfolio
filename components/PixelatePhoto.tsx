import React, { useRef, useEffect, useState } from 'react';

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
  brushRadius?: number; // Radio del pincel en píxeles
}

const isPixelSelected = (pixels: Pixel[], x: number, y: number) =>
  pixels.some(p => p.x === x && p.y === y);

const PixelatePhoto: React.FC<Props> = ({
  src, 
  size = 16, 
  width, 
  height, 
  className = '',
  brushRadius = 4 // Radio del pincel (4 píxeles alrededor)
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selected, setSelected] = useState<Pixel[]>([]);
  const [hoverPixels, setHoverPixels] = useState<Pixel[]>([]);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setImgLoaded(true);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { willReadFrequently: true });
    const img = imgRef.current;
    if (!canvas || !ctx || !img || !imgLoaded) return;

    ctx.clearRect(0, 0, width, height);

    // Dibuja píxeles seleccionados (fijos)
    selected.forEach(pixel => {
      const avgColor = getAverageColor(ctx, img, pixel.x, pixel.y, size);
      ctx.fillStyle = avgColor;
      ctx.fillRect(pixel.x, pixel.y, size, size);
    });

    // Dibuja píxeles hover (temporales)
    hoverPixels.forEach(pixel => {
      if (!isPixelSelected(selected, pixel.x, pixel.y)) {
        const avgColor = getAverageColor(ctx, img, pixel.x, pixel.y, size);
        ctx.fillStyle = avgColor;
        ctx.globalAlpha = 0.7;
        ctx.fillRect(pixel.x, pixel.y, size, size);
        ctx.globalAlpha = 1;
      }
    });
  }, [selected, hoverPixels, imgLoaded, size, width, height]);

  const getAverageColor = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    x: number,
    y: number,
    blockSize: number
  ): string => {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return 'rgba(128,128,128,1)';
    
    tempCtx.drawImage(img, 0, 0, width, height);
    const imageData = tempCtx.getImageData(x, y, blockSize, blockSize);
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

  // Calcula píxeles en el radio del pincel
  const getPixelsInRadius = (centerX: number, centerY: number): Pixel[] => {
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
      // Añade solo los píxeles del pincel que no estaban ya seleccionados
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
