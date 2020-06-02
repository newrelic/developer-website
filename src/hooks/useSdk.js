import useScript from './useScript';
import useStylesheet from './useStylesheet';
import { JS_BUNDLE, CSS_BUNDLE } from '../utils/sdk';

const useSdk = () => {
  const scriptLoaded = useScript(JS_BUNDLE);
  const stylesheetLoaded = useStylesheet(CSS_BUNDLE, {
    insertBefore: 'sdk-overrides',
  });

  return scriptLoaded && stylesheetLoaded;
};

export default useSdk;
