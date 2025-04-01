import { useEffect } from "react";

const preloadAssets = (files) => {
  for (const path in files) {
    files[path](); 
  }
};

const usePreloadAssets = () => {
  useEffect(() => {
    const svgContext = import.meta.glob("../assets/**/*.svg");
    const pngContext = import.meta.glob("../assets/**/*.png");

    const combinedContext = { ...svgContext, ...pngContext };

    preloadAssets(combinedContext);
  }, []);
};

export default usePreloadAssets;