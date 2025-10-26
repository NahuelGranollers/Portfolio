import React, { useEffect, useRef, useState } from 'react';
import type { Video } from '../types';

interface FullscreenPlayerProps {
  video: Video;
  onClose: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ✅ Función helper para videoType con fallback
const getVideoType = (url: string): string => {
  const ext = url.split('.').pop()?.toLowerCase();
  const validTypes: Record<string, string> = {
    'mp4': 'video/mp4',
    'webm': 'video/webm',
    'mov': 'video/mp4',
    'avi': 'video/mp4'
  };
  return validTypes[ext || ''] || 'video/mp4';
};

const FullscreenPlayer: React.FC<FullscreenPlayerProps> = ({ video, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Función para cerrar y pausar
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }

      // Trap focus with Tab
      if (event.key === 'Tab') {
        const focusable = containerRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;

        const first = focusable as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;

        if (event.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            event.preventDefault();
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    setTimeout(() => {
      const firstFocusable = containerRef.current?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
      firstFocusable?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);

      if (videoRef.current) {
        videoRef.current.pause();
      }

      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  // ✅ Usar función helper con fallback
  const videoType = getVideoType(video.videoUrl);

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div ref={containerRef} className="relative w-full max-w-6xl">
        
        {/* Video */}
        <div className="mb-6 rounded-lg overflow-hidden shadow-2xl">
          {/* ✅ Agregar controls y preload */}
          <video
            ref={videoRef}
            className="w-full max-h-[70vh] bg-black"
            controls
            preload="metadata"
            autoPlay
            loop
            onClick={(e) => {
              e.stopPropagation();
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
              }
            }}
          >
            <source src={video.videoUrl} type={videoType} />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Glass Panel con los detalles */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-brand-primary">
            {video.title}
          </h2>

          {video.description && (
            <div className="mb-4">
              <p className={`text-gray-300 leading-relaxed ${!showFullDescription && 'line-clamp-3'}`}>
                {video.description}
              </p>
              {video.description.length > 150 && (
                <button
                  onClick={() => setShowFullDescription((v) => !v)}
                  className="text-brand-primary hover:underline text-sm mt-2"
                >
                  {showFullDescription ? 'Ver menos' : 'Ver más'}
                </button>
              )}
            </div>
          )}

          {video.role && (
            <p className="text-brand-primary font-medium mb-4">
              {video.role}
            </p>
          )}

          {video.tools && video.tools.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {/* ✅ Agregar key={idx} */}
              {video.tools.map((tool, idx) => (
                <span 
                  key={idx}
                  className="bg-brand-surface px-3 py-1 rounded-full text-sm text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Cerrar reproductor"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default FullscreenPlayer;
