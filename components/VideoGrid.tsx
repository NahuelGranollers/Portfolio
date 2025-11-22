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
    // ✅ aria-label para accesibilidad
    aria-label={expanded ? 'Mostrar menos proyectos' : 'Mostrar más proyectos'}
    className="mx-auto mt-8 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 hover:border-brand-primary transition-all duration-300 flex items-center gap-2 group"
  >
    <span className="text-gray-300 font-medium">
      {expanded ? 'Ver menos' : 'Ver más proyectos'}
    </span>
    {expanded ? (
      <svg 
        className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
      </svg>
    ) : (
      <svg 
        className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    )}
  </button>
);

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onSelectVideo }) => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 6; // Número de proyectos visibles inicialmente

  if (videos.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-xl">Tu portafolio está vacío.</p>
        <p className="mt-2">Añade videos a la carpeta `videos/` y configúralos en el archivo `constants.ts` para empezar.</p>
      </div>
    );
  }

  return (
    // ✅ CRÍTICO: Agregar id="proyectos" para scroll desde Hero
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Grid layout responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ✅ Agregar key={video.id} */}
          {(showAll ? videos : videos.slice(0, initialCount)).map((video) => (
            <VideoThumbnail 
              key={video.id} 
              video={video} 
              onSelectVideo={onSelectVideo} 
            />
          ))}
        </div>

        {/* Botón expandir/contraer */}
        {videos.length > initialCount && (
          <GlassExpandButton 
            expanded={showAll} 
            onClick={() => setShowAll(!showAll)}
          />
        )}
      </div>
    </section>
  );
};

export default VideoGrid;
