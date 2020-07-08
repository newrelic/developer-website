import { useMemo, useRef } from 'react';
import shallowEqual from '../utils/shallowEqual';

const useShallowMemo = (callback, deps) => {
  const depsRef = useRef([]);
  const previous = depsRef.current;
  const equal =
    deps.length === previous.length &&
    deps.every((dep, idx) => shallowEqual(dep, previous[idx]));

  if (!equal) {
    depsRef.current = deps;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(callback, depsRef.current);
};

export default useShallowMemo;
