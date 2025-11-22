import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Video } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface VideoThumbnailProps {
  video: Video;
  onSelectVideo: (video: Video) => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ video, onSelectVideo }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const videoPreviewRef = useRef<HTMLVideoElement>(null);
  const { ref: containerRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '100px',
    freezeOnceVisible: true
  });

  // Cargar video solo cuando es visible
  useEffect(() => {
    if (isVisible && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isVisible, hasLoaded]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoPreviewRef.current) {
      // Reproducir inmediatamente sin esperar
      videoPreviewRef.current.currentTime = 0;
      videoPreviewRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoPreviewRef.current) {
      videoPreviewRef.current.pause();
      videoPreviewRef.current.currentTime = 0;
    }
  };

  // Touch handlers para móvil
  const handleTouchStart = () => {
    setIsHovered(true);
    if (videoPreviewRef.current) {
      videoPreviewRef.current.currentTime = 0;
      videoPreviewRef.current.play().catch(() => {});
    }
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (videoPreviewRef.current) {
      videoPreviewRef.current.pause();
      videoPreviewRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (video.externalLink) {
      window.open(video.externalLink, '_blank', 'noopener,noreferrer');
    } else {
      onSelectVideo(video);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      ref={containerRef}
      className="group relative bg-brand-surface rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300 hover:scale-[1.02]"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label={`Ver proyecto: ${video.title}`}
    >
      {/* ✅ loading="lazy" y alt text */}
      <img 
        src={video.thumbnailUrl} 
        alt={video.title}
        loading="lazy"
        className={`w-full h-64 object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Preview Video - Precargar metadata para reproducción instantánea */}
      <video
        ref={videoPreviewRef}
        src={video.videoUrl}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className={`absolute inset-0 w-full h-64 object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.3s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1)' }}
      />

      {/* Category Badge */}
      {video.category && (
        <div className="absolute top-4 right-4 bg-brand-primary/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
          {t(`categories.${video.category}`, video.category)}
        </div>
      )}

      {/* Year Badge */}
      {video.year && (
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
          {video.year}
        </div>
      )}

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition" style={{ transition: 'color 0.3s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1)' }}>
          {t(`videos.${video.id}.title`, video.title)}
        </h3>
        
        {video.description && (
          <p className="text-sm text-gray-200 mb-2 line-clamp-2">
            {t(`videos.${video.id}.description`, video.description)}
          </p>
        )}

        {video.role && (
          <p className="text-xs text-violet-300 font-medium mb-2">
            {t(`videos.${video.id}.role`, video.role)}
          </p>
        )}

        {video.tools && video.tools.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {/* ✅ Agregar key={index} */}
            {video.tools.map((tool, index) => (
              <span 
                key={index}
                className="text-xs bg-brand-bg px-2 py-1 rounded text-gray-400"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoThumbnail;
