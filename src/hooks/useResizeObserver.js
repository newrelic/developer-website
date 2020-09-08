import { useLayoutEffect, useState, useRef } from 'react';

const useResizeObserver = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      setHeight(entry.contentBoxSize.blockSize);
    });
  });

  useLayoutEffect(() => {
    resizeObserver.observe(ref.current);
  }, []);

  return [ref, height];
};

export default useResizeObserver;
