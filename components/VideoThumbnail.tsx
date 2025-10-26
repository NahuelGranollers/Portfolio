import React, { useState, useRef } from 'react';
import type { Video } from '../types';

interface VideoThumbnailProps {
  video: Video;
  onSelectVideo: (video: Video) => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ video, onSelectVideo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoPreviewRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoPreviewRef.current) {
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

  // ✅ Touch handlers para móvil
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

  return (
    <div 
      className="group relative bg-brand-surface rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-500 hover:scale-[1.02]"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ✅ loading="lazy" y alt text */}
      <img 
        src={video.thumbnailUrl} 
        alt={video.title}
        loading="lazy"
        className={`w-full h-64 object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Preview Video */}
      <video
        ref={videoPreviewRef}
        src={video.videoUrl}
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-64 object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Category Badge */}
      {video.category && (
        <div className="absolute top-4 right-4 bg-brand-primary/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
          {video.category}
        </div>
      )}

      {/* Year Badge */}
      {video.year && (
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
          {video.year}
        </div>
      )}

      {/* Badge de "¡Pruébalo!" si tiene link externo */}
      {video.externalLink && (
        <div className="absolute bot-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
          ↗ ¡Pruébalo!
        </div>
      )}

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary transition">
          {video.title}
        </h3>
        
        {video.description && (
          <p className="text-sm text-gray-400 mb-2 line-clamp-2">
            {video.description}
          </p>
        )}

        {video.role && (
          <p className="text-xs text-brand-primary font-medium mb-2">
            {video.role}
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
