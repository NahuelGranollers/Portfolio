import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from '../utils/motionMock';
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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const initialCount = 6; // Número de proyectos visibles inicialmente

  // Extraer categorías únicas
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(videos.map(v => v.category).filter(Boolean))
    );
    return ['all', ...uniqueCategories];
  }, [videos]);

  // Filtrar videos por categoría
  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'all') return videos;
    return videos.filter(v => v.category === selectedCategory);
  }, [videos, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setShowAll(false);
    analytics.filterChange('category', category);
  };

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
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-gray-400">{t('projects.subtitle')}</p>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              aria-label={t('projects.filterBy', { category: category === 'all' ? t('projects.all') : category })}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30'
                  : 'bg-brand-surface text-gray-400 hover:bg-brand-surface/80 hover:text-brand-primary border border-brand-border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {category === 'all' ? t('projects.all') : t(`categories.${category}`, category)}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de videos filtrados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? filteredVideos : filteredVideos.slice(0, initialCount)).map((video) => (
            <VideoThumbnail 
              key={video.id} 
              video={video} 
              onSelectVideo={onSelectVideo} 
            />
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {filteredVideos.length === 0 && (
          <motion.div 
            className="text-center py-12 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg">{t('projects.noResults')}</p>
          </motion.div>
        )}

        {/* Botón expandir/contraer */}
        {filteredVideos.length > initialCount && (
          <GlassExpandButton 
            expanded={showAll} 
            onClick={() => setShowAll(!showAll)}
            t={t}
          />
        )}
      </div>
    </section>
  );
};

export default VideoGrid;
