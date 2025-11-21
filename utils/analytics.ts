// Analytics utilities for tracking events and conversions
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    hj?: (...args: any[]) => void;
  }
}

export const analytics = {
  // GTM Event tracking
  event: (eventName: string, params: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params
      });
    }
  },

  // Track video interactions
  videoPlay: (videoId: number, videoTitle: string) => {
    analytics.event('video_play', {
      video_id: videoId,
      video_title: videoTitle,
      category: 'Video Interaction'
    });
  },

  videoComplete: (videoId: number, videoTitle: string) => {
    analytics.event('video_complete', {
      video_id: videoId,
      video_title: videoTitle,
      category: 'Video Interaction'
    });
  },

  // Track project clicks
  projectClick: (projectId: number, projectTitle: string, category: string) => {
    analytics.event('project_click', {
      project_id: projectId,
      project_title: projectTitle,
      project_category: category,
      category: 'Engagement'
    });
  },

  // Track external link clicks
  externalLink: (url: string, linkText: string) => {
    analytics.event('external_link_click', {
      link_url: url,
      link_text: linkText,
      category: 'Outbound Links'
    });
  },

  // Track form submissions
  formSubmit: (formName: string, success: boolean) => {
    analytics.event('form_submit', {
      form_name: formName,
      form_success: success,
      category: 'Lead Generation'
    });
  },

  formError: (formName: string, errorType: string) => {
    analytics.event('form_error', {
      form_name: formName,
      error_type: errorType,
      category: 'Form Errors'
    });
  },

  // Track page sections
  sectionView: (sectionName: string) => {
    analytics.event('section_view', {
      section_name: sectionName,
      category: 'Navigation'
    });
  },

  // Track filter usage
  filterChange: (filterType: string, filterValue: string) => {
    analytics.event('filter_change', {
      filter_type: filterType,
      filter_value: filterValue,
      category: 'User Interaction'
    });
  },

  // Track language changes
  languageChange: (from: string, to: string) => {
    analytics.event('language_change', {
      language_from: from,
      language_to: to,
      category: 'Localization'
    });
  },

  // Track scroll depth
  scrollDepth: (percentage: number) => {
    analytics.event('scroll_depth', {
      scroll_percentage: percentage,
      category: 'Engagement'
    });
  },

  // Track conversions
  conversion: (type: string, value?: number) => {
    analytics.event('conversion', {
      conversion_type: type,
      conversion_value: value,
      category: 'Conversions'
    });
  },

  // Hotjar integration
  hotjar: {
    trigger: (eventName: string) => {
      if (typeof window !== 'undefined' && window.hj) {
        window.hj('event', eventName);
      }
    },
    
    identify: (userId: string, attributes: Record<string, any>) => {
      if (typeof window !== 'undefined' && window.hj) {
        window.hj('identify', userId, attributes);
      }
    }
  }
};

// Hook for scroll depth tracking
export const useScrollDepth = () => {
  const [tracked, setTracked] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track at 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100];
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !tracked.has(milestone)) {
          analytics.scrollDepth(milestone);
          setTracked(prev => new Set([...prev, milestone]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tracked]);
};

export default analytics;
