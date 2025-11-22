import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Video } from '../types';
import VideoThumbnail from './VideoThumbnail';
import analytics from '../utils/analytics';

interface VideoGridProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
}

// Componente del botón Glass con símbolo plateado
const GlassExpandButton: React.FC<{ expanded: boolean, onClick: () => void, t: any }> = ({ expanded, onClick, t }) => (
  <motion.button
    onClick={onClick}
    aria-label={expanded ? t('projects.viewLess') : t('projects.viewMore')}
    className="mx-auto mt-8 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 hover:border-brand-primary transition-all duration-300 flex items-center gap-2 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-gray-300 font-medium">
      {expanded ? t('projects.viewLess') : t('projects.viewMore')}
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
  </motion.button>
);

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onSelectVideo }) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const initialCount = 6; // Número de proyectos visibles inicialmente

  if (videos.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-xl">{t('projects.empty')}</p>
        <p className="mt-2">{t('projects.emptyHint')}</p>
      </div>
    );
  }

  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 1200, damping: 18 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">{t('projects.title') || ''}</h2>
          <p className="text-gray-200">{t('projects.subtitle') || ''}</p>
        </motion.div>

        {/* Grid de videos sin filtros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? videos : videos.slice(0, initialCount)).map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 1200, damping: 18 }}
            >
              <VideoThumbnail 
                video={video} 
                onSelectVideo={onSelectVideo} 
              />
            </motion.div>
          ))}
        </div>

        {/* Botón expandir/contraer */}
        {videos.length > initialCount && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 1200, damping: 18 }}
          >
            <GlassExpandButton 
              expanded={showAll} 
              onClick={() => setShowAll(!showAll)}
              t={t}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoGrid;
