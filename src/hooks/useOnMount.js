import { useEffect } from 'react';

const useOnMount = (fn) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fn, []);
};

export default useOnMount;
