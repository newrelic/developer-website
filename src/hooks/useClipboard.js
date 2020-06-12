import { useEffect, useState, useCallback } from 'react';
import copyToClipboard from '../utils/copyToClipboard';

const useClipboard = ({ duration = 1000 } = {}) => {
  const [copied, setCopied] = useState(false);
  const copy = useCallback((text) => {
    copyToClipboard(text);
    setCopied(true);
  }, []);

  useEffect(() => {
    if (copied && duration) {
      const id = setTimeout(() => {
        setCopied(false);
      }, duration);

      return () => {
        clearTimeout(id);
      };
    }
  }, [copied, duration]);

  return [copied, copy];
};

export default useClipboard;
