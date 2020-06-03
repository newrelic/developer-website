import { useEffect, useState } from 'react';

const useStylesheet = (src) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const link = window.document.createElement('link');

    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    link.onload = () => setLoaded(true);
    link.href = src;
    document.head.prepend(link);

    return () => document.head.removeChild(link);
  }, [src]);

  return loaded;
};

export default useStylesheet;
