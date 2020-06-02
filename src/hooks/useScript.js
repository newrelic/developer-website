import { useEffect, useState } from 'react';

const useScript = (src) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = window.document.createElement('script');

    script.async = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => setLoaded(true);
    script.src = src;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, [src]);

  return loaded;
};

export default useScript;
