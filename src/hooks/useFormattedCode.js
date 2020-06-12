import { useMemo } from 'react';
import formatCode from '../utils/formatCode';

const useFormattedCode = (code, options) => {
  return useMemo(() => {
    try {
      return formatCode(code, options);
    } catch (e) {
      return code;
    }
  }, [code, options]);
};

export default useFormattedCode;
