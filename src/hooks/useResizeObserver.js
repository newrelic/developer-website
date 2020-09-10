import { useLayoutEffect, useState } from 'react';

// ResizeObserver is not available at build time
const ResizeObserver = global.ResizeObserver || class ResizeObserver {};

const useResizeObserver = () => {
  const [ref, setRef] = useState(null);
  const [entry, setEntry] = useState(null);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => setEntry(entry));

    if (ref) {
      resizeObserver.observe(ref);
    }

    return () => resizeObserver.disconnect();
  }, [ref]);

  return [setRef, entry];
};

export default useResizeObserver;
