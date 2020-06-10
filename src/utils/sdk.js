const RELEASE = 'release-1093';
const PROD_BASE_URL = '//hypertext-sandbox.nr-assets.net';
const LOCAL_BASE_URL = 'https://nr-local.net:4000';

function getBundleUrls() {
  // TODO: detect whether to load local version. This is used both at build time and run time
  // so perhaps an env var for build time that also injects some flag for runtime so the
  // developer doesn't have to do both a different command to start and remember to apply a
  // use_version query string.
  const useLocalSdk = true;

  const baseUrl = useLocalSdk ? LOCAL_BASE_URL : PROD_BASE_URL;
  const releasePath = useLocalSdk ? 'latest' : RELEASE;

  return {
    cssBundleUrl: `${baseUrl}/wanda--wanda-ec-ui--nr1-docs-${releasePath}.css`,
    jsBundleUrl: `${baseUrl}/wanda--wanda-ec-ui--nr1-docs-${releasePath}.js`,
  };
}

const { cssBundleUrl, jsBundleUrl } = getBundleUrls();

export const JS_BUNDLE = jsBundleUrl;
export const CSS_BUNDLE = cssBundleUrl;
