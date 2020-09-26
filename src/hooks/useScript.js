import { useEffect, useState, useRef } from 'react';
import useShallowMemo from './useShallowMemo';

const noop = () => {};

const useScript = (src, options) => {
  const {
    attributes = {},
    async: isAsync = true,
    crossOrigin,
    onLoad = noop,
    onError = noop,
  } = options || {};
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const attrs = useShallowMemo(() => attributes, [attributes]);
  const onLoadHandler = useRef();
  const onErrorHandler = useRef();

  useEffect(() => {
    onLoadHandler.current = onLoad;
  }, [onLoad]);

  useEffect(() => {
    onErrorHandler.current = onError;
  }, [onError]);

  useEffect(() => {
    const script = window.document.createElement('script');

    script.async = isAsync;
    script.crossOrigin = crossOrigin;
    script.onload = () => {
      setLoaded(true);
      onLoadHandler.current();
    };

    script.onerror = () => {
      setError(true);
      onErrorHandler.current();
    };

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
