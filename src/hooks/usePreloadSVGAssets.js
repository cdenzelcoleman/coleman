import { useEffect } from 'react';

const usePreloadSVGAssets = () => {
  useEffect(() => {
    const preloadImages = async () => {
      const images = [
        // List all SVG assets used in the project
        '/logo.svg',
        '/src/assets/about-photo.svg',
        '/src/assets/abstract-contact.svg',
        '/src/assets/about-1.png',
        '/src/assets/about-2.png',
        '/src/assets/og-image.png'
      ];

      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        console.log('All SVG assets preloaded');
      } catch (error) {
        console.warn('Error preloading assets:', error);
      }
    };

    preloadImages();
  }, []);
};

export default usePreloadSVGAssets;