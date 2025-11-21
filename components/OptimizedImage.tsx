import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized image component with AVIF/WebP support and fallback
 * Automatically generates srcset for responsive images
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  sizes = '100vw',
  onLoad,
  onError
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract filename and extension
  const getImageVariants = (originalSrc: string) => {
    const lastDot = originalSrc.lastIndexOf('.');
    const basePath = originalSrc.substring(0, lastDot);
    const ext = originalSrc.substring(lastDot + 1);

    return {
      avif: `${basePath}.avif`,
      webp: `${basePath}.webp`,
      original: originalSrc,
      ext
    };
  };

  const variants = getImageVariants(src);

  // Generate srcset for responsive images
  const generateSrcSet = (imageSrc: string) => {
    const lastDot = imageSrc.lastIndexOf('.');
    const basePath = imageSrc.substring(0, lastDot);
    const ext = imageSrc.substring(lastDot);

    // Common responsive sizes
    return [
      `${basePath}${ext} 1x`,
      `${basePath}@2x${ext} 2x`
    ].join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  if (imageError) {
    // Fallback to original image or placeholder
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        onLoad={handleLoad}
      />
    );
  }

  return (
    <picture>
      {/* AVIF - Best compression */}
      <source
        type="image/avif"
        srcSet={generateSrcSet(variants.avif)}
        sizes={sizes}
      />

      {/* WebP - Good compression */}
      <source
        type="image/webp"
        srcSet={generateSrcSet(variants.webp)}
        sizes={sizes}
      />

      {/* Original format fallback */}
      <img
        src={variants.original}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
