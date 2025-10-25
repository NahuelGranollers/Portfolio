import React, { useEffect, useRef, useState } from 'react';
import type { Video } from '../types';

interface FullscreenPlayerProps {
  video: Video;
  onClose: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const FullscreenPlayer: React.FC<FullscreenPlayerProps> = ({ video, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      // Trap focus with Tab
      if (event.key === 'Tab') {
        const focusable = containerRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

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
        onClose();
      }
    };

    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    // Set focus to container
    setTimeout(() => {
      const firstFocusable = containerRef.current?.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      firstFocusable?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      // Restore focus
      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  const videoType = `video/${video.videoUrl.split('.').pop()}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in" role="dialog" aria-modal="true" aria-label={`${video.title} video player`}>

      <div
        ref={containerRef}
        className="relative w-full max-w-4xl rounded-2xl shadow-1xl p-0 md:p-8"
      >
        {/* Video arriba, sin glass para la mejor experiencia */}
        <div className="aspect-video rounded-t-2xl overflow-hidden bg-black">
          <video
            key={video.id}
            controls
            autoPlay
            className="w-full h-full"
          >
            <source src={video.videoUrl} type={videoType} />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Glass Panel con los detalles */}
        <div className="bg-brand-surface/70 backdrop-blur-2x1 border border-white/20 rounded-b-2xl p-6 md:p-8 flex flex-col gap-4 shadow-inner -mt-2">
          <h2 className="text-2xl font-extrabold mb-2 text-white">{video.title}</h2>
          {video.description && (
            <div className="mb-2">
              <p
                className={
                  "text-brand-text-secondary text-base whitespace-pre-line mb-2 transition-all duration-300 " +
                  (showFullDescription ? "" : "line-clamp-2")
                }
                style={
                  !showFullDescription
                    ? { overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }
                    : {}
                }
              >
                {video.description}
              </p>
              <button
                className="text-brand-primary underline cursor-pointer text-sm"
                onClick={() => setShowFullDescription((v) => !v)}
              >
                {showFullDescription ? "Ver menos" : "Ver más"}
              </button>
            </div>
          )}
          {video.role && (
            <p className="text-brand-primary text-sm font-medium mb-1">
              {video.role}
            </p>
          )}
          {video.tools && video.tools.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {video.tools.map((tool, idx) => (
                <span key={idx} className="px-2 py-1 bg-brand-surface-light/70 text-brand-text-secondary text-xs rounded border border-brand-border">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 md:-top-5 md:-right-5 h-10 w-10 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-brand-primary hover:text-white transition-all duration-200 shadow-lg"
          aria-label="Close video player"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default FullscreenPlayer;
