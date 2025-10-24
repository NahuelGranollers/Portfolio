import type { VideoForDB } from './types';

const DB_NAME = 'VideoPortfolioDB';
const DB_VERSION = 1;
const STORE_NAME = 'videos';

let db: IDBDatabase;

export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (db) {
      return resolve(db);
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error('Database error:', request.error);
      reject('Error opening database');
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };
  });
};

export const saveVideo = async (videoData: Omit<VideoForDB, 'id'>): Promise<number> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.add(videoData);

    request.onsuccess = () => {
        resolve(request.result as number);
    };

    request.onerror = () => {
        console.error('Error saving video:', request.error);
        reject('Could not save video');
    };
  });
};


export const getAllVideos = async (): Promise<VideoForDB[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
        resolve(request.result as VideoForDB[]);
    };

    request.onerror = () => {
        console.error('Error fetching videos:', request.error);
        reject('Could not fetch videos');
    };
  });
};

export const deleteVideo = async (id: number): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      console.error('Error deleting video:', request.error);
      reject('Could not delete video');
    };
  });
};

export const updateVideoTitle = async (id: number, title: string): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const getRequest = store.get(id);

    getRequest.onsuccess = () => {
      const video = getRequest.result;
      if (video) {
        video.title = title;
        const putRequest = store.put(video);
        putRequest.onsuccess = () => {
          resolve();
        };
        putRequest.onerror = () => {
          console.error('Error updating video title:', putRequest.error);
          reject('Could not update video title');
        };
      } else {
        reject('Video not found');
      }
    };
    
    getRequest.onerror = () => {
        console.error('Error fetching video for update:', getRequest.error);
        reject('Could not find video to update');
    };
  });
};