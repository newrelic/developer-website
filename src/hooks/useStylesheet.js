import { useEffect, useState } from 'react';

const useStylesheet = (src, { insertBefore } = {}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const link = window.document.createElement('link');

    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    link.onload = () => setLoaded(true);
    link.href = src;

    if (insertBefore) {
      document.head.insertBefore(link, document.getElementById(insertBefore));
    } else {
      document.body.appendChild(link);
    }

    return () => document.head.removeChild(link);
  }, [src, insertBefore]);

  return loaded;
};

export default useStylesheet;
