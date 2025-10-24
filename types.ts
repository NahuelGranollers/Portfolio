// Video interface con información extendida
export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  year?: string;
  role?: string;
  tools?: string[];
  category?: string;
  externalLink?: string;
  innovative?: boolean;
}

// Información personal y de contacto
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  about: {
    intro: string;
    experience: string;
    approach: string;
  };
  skills: string[];
  social: {
    email: string;
    linkedin?: string;
    instagram?: string;
    vimeo?: string;
    github?: string;
  };
}

// Servicios ofrecidos
export interface Service {
  title: string;
  description: string;
  icon: string;
}

// Form data para contacto
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Para nuevos videos (mantener compatibilidad)
export interface NewVideoData {
  title: string;
  description: string;
  videoFile: File;
  thumbnailBlob: Blob;
}

export interface VideoForDB {
  id: number;
  title: string;
  description: string;
  videoFile: Blob;
  thumbnailBlob: Blob;
}
