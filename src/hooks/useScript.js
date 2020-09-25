import { useEffect, useState } from 'react';
import useShallowMemo from './useShallowMemo';

const useScript = (src, options) => {
  const { attributes = {}, async: isAsync = true, crossOrigin } = options || {};
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const attrs = useShallowMemo(() => attributes, [attributes]);

  useEffect(() => {
    const script = window.document.createElement('script');

    script.async = isAsync;
    script.crossOrigin = crossOrigin;
    script.onload = () => {
      setLoaded(true);
    };
    script.onerror = setError;
    script.src = src;

    Object.entries(attrs).forEach(([attribute, value]) =>
      script.setAttribute(attribute, value)
    );

    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, [src, attrs, isAsync, crossOrigin]);

  return [loaded, { error }];
};

export default useScript;
