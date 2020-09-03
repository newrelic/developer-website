const vm = require('vm');
const fetch = require('node-fetch');

const BASE_URL =
  'https://hypertext-sandbox.nr-assets.net/wanda--wanda-ec-ui--nr1-docs';

const getBundle = async (src, { cache }) => {
  const script = await cache.get(src);

  if (script) {
    return script;
  }

  const res = await fetch(src);

  return cache.set(src, await res.text());
};

module.exports = async (release, { cache }) => {
  require('./mockGlobals');

  const bundles = await Promise.all([
    getBundle('https://nr1.nr-assets.net/lib/d3/3.5.17/d3.js', { cache }),
    getBundle(
      'https://nr1.nr-assets.net/lib/react/16.6.3/react.development.js',
      { cache }
    ),
    getBundle(
      'https://nr1.nr-assets.net/lib/react/16.6.3/react-dom.development.js',
      { cache }
    ),
    getBundle(
      'https://nr1.nr-assets.net/lib/react-router-dom/4.2.2/react-router-dom.js',
      { cache }
    ),
    getBundle(`${BASE_URL}-${release}.js`, { cache }),
  ]);

  return vm.runInThisContext(
    [...bundles, '__NR1_SDK__.default'].join('\n'),
    `wanda--wanda-ec-ui--nr1-docs-${release}.js`
  );
};
