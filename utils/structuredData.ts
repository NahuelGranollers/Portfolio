import type { Video } from '../types';

// Generate VideoObject schema for a video
export const generateVideoSchema = (video: Video) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `https://nahuelgranollers.com${video.thumbnailUrl}`,
    "contentUrl": `https://nahuelgranollers.com${video.videoUrl}`,
    "uploadDate": video.year ? `${video.year}-01-01` : new Date().toISOString().split('T')[0],
    "duration": "PT3M", // Placeholder, ajustar según duración real
    "creator": {
      "@type": "Person",
      "name": "Nahuel Granollers"
    },
    ...(video.category && { "genre": video.category }),
    ...(video.tools && {
      "keywords": video.tools.join(', ')
    })
  };
};

// Generate BreadcrumbList schema
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Generate AggregateRating schema
export const generateRatingSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Service",
      "name": "Servicios Audiovisuales Nahuel Granollers"
    },
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "47"
  };
};

// Generate CreativeWork schema for portfolio
export const generatePortfolioSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Portfolio Audiovisual de Nahuel Granollers",
    "author": {
      "@type": "Person",
      "name": "Nahuel Granollers",
      "jobTitle": "Director Audiovisual y Técnico de Realización",
      "url": "https://nahuelgranollers.com"
    },
    "datePublished": "2025-01-01",
    "inLanguage": ["es", "en"],
    "about": "Portfolio profesional de dirección audiovisual, motion graphics y edición de video"
  };
};

// Generate ItemList schema for video gallery
export const generateVideoListSchema = (videos: Video[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": videos.slice(0, 10).map((video, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://nahuelgranollers.com/#proyectos`,
      "name": video.title
    }))
  };
};

// Inject schema into page
export const injectSchema = (schema: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  const scriptId = `schema-${schema['@type']}`;
  let script = document.getElementById(scriptId) as HTMLScriptElement;

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

// Remove schema from page
export const removeSchema = (type: string) => {
  if (typeof window === 'undefined') return;
  
  const scriptId = `schema-${type}`;
  const script = document.getElementById(scriptId);
  
  if (script) {
    script.remove();
  }
};
