import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo96tAMvDU1e03WaCngf_C1he1H3TNOvU",
  authDomain: "asme-cc6da.firebaseapp.com",
  projectId: "asme-cc6da",
  storageBucket: "asme-cc6da.appspot.com",
  messagingSenderId: "351027294964",
  appId: "1:351027294964:web:8553c6b504018020f5a4a1",
  measurementId: "G-8KRE26HXCR"
};
// Create a context for image URLs
const ImageUrlContext = createContext();

export function ImageUrlProvider({ children }) {
  const [imageUrls, setImageUrls] = useState(() => {
    // Initialize state with cached URLs if available
    const cachedUrls = sessionStorage.getItem('cachedImageUrls');
    return cachedUrls ? JSON.parse(cachedUrls) : [];
  });

  useEffect(() => {
    const fetchImageUrls = async () => {
      // If URLs are already loaded, don't fetch again
      if (imageUrls.length > 0) return;

      const app = initializeApp(firebaseConfig);
      const storage = getStorage(app);
      const imagesRef = ref(storage, 'gallery/');

      try {
        const res = await listAll(imagesRef);
        const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
        setImageUrls(urls);
        // Cache the URLs in sessionStorage
        sessionStorage.setItem('cachedImageUrls', JSON.stringify(urls));
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageUrls();
  }, [imageUrls.length]);

  return (
    <ImageUrlContext.Provider value={imageUrls}>
      {children}
    </ImageUrlContext.Provider>
  );
}

export function useImageUrls() {
  return useContext(ImageUrlContext);
}
