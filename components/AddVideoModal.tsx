import React, { useState, useRef, FormEvent } from 'react';
import type { NewVideoData } from '../types';

interface AddVideoModalProps {
  onClose: () => void;
  onAddVideo: (video: NewVideoData) => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const generateVideoThumbnail = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const url = URL.createObjectURL(file);

    video.src = url;
    video.muted = true;
    video.playsInline = true;

    video.addEventListener('loadeddata', () => {
      video.currentTime = 1; // Seek to 1 second
    });

    video.addEventListener('seeked', () => {
      if (!context) {
        URL.revokeObjectURL(url);
        return reject(new Error('Canvas context is not available'));
      }
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      
      canvas.toBlob((blob) => {
        URL.revokeObjectURL(url);
        if (blob) {
            resolve(blob);
        } else {
            reject(new Error('Failed to create blob from canvas'));
        }
      }, 'image/jpeg', 0.9);
    });
    
    video.addEventListener('error', (e) => {
        URL.revokeObjectURL(url);
        reject(new Error(`Failed to load video.`));
    });

    video.play().catch(err => {
        URL.revokeObjectURL(url);
        reject(err)
    });
  });
};


const AddVideoModal: React.FC<AddVideoModalProps> = ({ onClose, onAddVideo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !videoFile) {
        setError('Por favor, completa el título y selecciona un archivo de video.');
        return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const thumbnailBlob = await generateVideoThumbnail(videoFile);
      
      onAddVideo({
        title,
        description,
        videoFile,
        thumbnailBlob,
      });

    } catch (err) {
      console.error("Failed to process video:", err);
      setError('No se pudo procesar el video. Por favor, intenta con otro archivo.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="relative bg-brand-surface rounded-lg shadow-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-brand-primary mb-6">Añadir Nuevo Video</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-brand-text-secondary">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full bg-brand-bg border border-brand-surface rounded-md shadow-sm py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-brand-text-secondary">Descripción</label>
            <textarea
              id="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full bg-brand-bg border border-brand-surface rounded-md shadow-sm py-2 px-3 text-brand-text focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-text-secondary">Archivo de Video</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-brand-text-secondary border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-brand-text-secondary" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-brand-text-secondary">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-brand-surface rounded-md font-medium text-brand-primary hover:text-brand-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-primary">
                    <span>Sube un archivo</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="video/*" onChange={(e) => setVideoFile(e.target.files ? e.target.files[0] : null)} ref={fileInputRef} required/>
                  </label>
                  <p className="pl-1">o arrástralo aquí</p>
                </div>
                {videoFile && <p className="text-xs text-brand-text">{videoFile.name}</p>}
              </div>
            </div>
          </div>
          
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-brand-text rounded-md hover:bg-brand-bg">Cancelar</button>
            <button type="submit" disabled={isProcessing} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-brand-primary border border-transparent rounded-md shadow-sm hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:bg-gray-500 disabled:cursor-not-allowed">
              {isProcessing ? 'Procesando...' : 'Guardar Video'}
            </button>
          </div>
        </form>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 text-brand-text-secondary hover:text-white transition-colors"
          aria-label="Close add video modal"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default AddVideoModal;
