import React, { useState } from 'react';
import type { Video } from '../types';
import VideoThumbnail from './VideoThumbnail';

interface VideoGridProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
}

// Componente del botón Glass con símbolo plateado
const GlassExpandButton: React.FC<{ expanded: boolean, onClick: () => void }> = ({ expanded, onClick }) => (
  <button
    onClick={onClick}
    className="mx-auto block mt-12 focus:outline-none bg-white/20 backdrop-blur-xl rounded-full shadow-2xl border border-white/30 w-20 h-20 flex items-center justify-center transition-all hover:scale-110 hover:bg-white/30 opacity-90 hover:opacity-100"
    aria-label={expanded ? "Ocultar proyectos" : "Mostrar más proyectos"}
    style={{ WebkitBackdropFilter: 'blur(18px)' }}
  >
    {expanded ? (
      // Icono "menos" plateado
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
        <rect x="10" y="19" width="22" height="4" rx="2" fill="url(#silver-gradient)" />
        <defs>
          <linearGradient id="silver-gradient" x1="10" y1="19" x2="32" y2="23" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E8E8E8" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#C0C0C0" />
          </linearGradient>
        </defs>
      </svg>
    ) : (
      // Icono "más" plateado
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
        <rect x="10" y="19" width="22" height="4" rx="2" fill="url(#silver-gradient-plus)" />
        <rect x="19" y="10" width="4" height="22" rx="2" fill="url(#silver-gradient-plus)" />
        <defs>
          <linearGradient id="silver-gradient-plus" x1="10" y1="10" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E8E8E8" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#C0C0C0" />
          </linearGradient>
        </defs>
      </svg>
    )}
  </button>
);

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onSelectVideo }) => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 6; // Número de proyectos visibles inicialmente

  if (videos.length === 0) {
    return (
      <div className="text-center py-20 px-4">
        <h2 className="text-2xl font-semibold text-brand-text">Tu portafolio está vacío.</h2>
        <p className="mt-2 text-brand-text-secondary">
          Añade videos a la carpeta `videos/` y configúralos en el archivo `constants.ts` para empezar.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {(showAll ? videos : videos.slice(0, initialCount)).map((video) => (
          <VideoThumbnail
            key={video.id}
            video={video}
            onSelectVideo={onSelectVideo}
          />
        ))}
      </div>

      {/* Botón expandir/contraer (solo si hay más proyectos) */}
      {videos.length > initialCount && (
        <GlassExpandButton
          expanded={showAll}
          onClick={() => setShowAll(!showAll)}
        />
      )}
    </div>
  );
};

export default VideoGrid;
