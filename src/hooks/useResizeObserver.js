import { useLayoutEffect, useState, useRef } from 'react';

const useResizeObserver = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  // ResizeObserver is not available at build time
  const ResizeObserver = global.ResizeObserver || class ResizeObserver {};

  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      setHeight(entry.contentBoxSize.blockSize);
    });
  });

  useLayoutEffect(() => {
    resizeObserver.observe(ref.current);
  }, [resizeObserver]);

  return [ref, height];
};

export default useResizeObserver;
