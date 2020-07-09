import useShallowMemo from './useShallowMemo';
import formatCode from '../utils/formatCode';

const useFormattedCode = (code, options) => {
  return useShallowMemo(() => {
    try {
      return formatCode(code, options);
    } catch (e) {
      return code;
    }
  }, [code, options]);
};

export default useFormattedCode;
