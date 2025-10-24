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

  const handleClick = () => {
    if (video.externalLink) {
      window.open(video.externalLink, '_blank', 'noopener,noreferrer');
    } else {
      onSelectVideo(video);
    }
  };

  return (
    <div
      className="group cursor-pointer animate-scale-in"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-brand-surface video-thumbnail-wrapper">
        {/* Thumbnail */}
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />
        
        {/* Preview Video - Ahora se muestra para TODOS los proyectos */}
        <video
          ref={videoPreviewRef}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={video.videoUrl} type={`video/${video.videoUrl.split('.').pop()}`} />
        </video>
        {/* MEDALLA DE INNOVACIÓN: ESQUINA INFERIOR IZQUIERDA */}
		{video.innovative && (
			<span className="absolute bottom-4 right-4 px-3 py-1 bg-red-500/80 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-xl">
				Innovación
			</span>
			)}        
        {/* Category Badge */}
        {video.category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-brand-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
              {video.category}
            </span>
          </div>
        )}
        
        {/* Year Badge */}
        {video.year && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-brand-bg/90 text-brand-text text-xs font-semibold rounded-full backdrop-blur-sm">
              {video.year}
            </span>
          </div>
        )}
        
        {/* Badge de "¡Pruébalo!" si tiene link externo */}
        {video.externalLink && (
          <div className="absolute bottom-4 right-4">
            <span className="px-3 py-1 bg-brand-secondary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
              ↗ ¡Pruébalo!
            </span>
          </div>
        )}
      </div>
      
      {/* Info */}
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold text-brand-text group-hover:text-brand-primary transition-colors">
          {video.title}
        </h3>
        
        {video.description && (
          <p className="text-brand-text-secondary text-sm line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        )}
        
        {video.role && (
          <p className="text-brand-primary text-sm font-medium">
            {video.role}
          </p>
        )}
        
        {video.tools && video.tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {video.tools.map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-brand-surface text-brand-text-secondary text-xs rounded border border-brand-border"
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
