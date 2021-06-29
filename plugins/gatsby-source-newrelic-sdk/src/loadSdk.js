const vm = require('vm');
const fetch = require('node-fetch');
const { BASE_URL } = require('./constants');

const getBundle = (cache) => async (src) => {
  const script = await cache.get(src);

  if (script) {
    return script;
  }

  const res = await fetch(src);

  return cache.set(src, await res.text());
};

module.exports = async (release, { cache }) => {
  require('./mockGlobals');

  const bundle = getBundle(cache);

  const bundles = await Promise.all([
    bundle('https://nr1.nr-assets.net/lib/d3/3.5.17/d3.js'),
    bundle('https://nr1.nr-assets.net/lib/react/16.6.3/react.development.js'),
    bundle(
      'https://nr1.nr-assets.net/lib/react/16.6.3/react-dom.development.js'
    ),
    bundle(
      'https://nr1.nr-assets.net/lib/react-router-dom/4.2.2/react-router-dom.js'
    ),
    bundle(`${BASE_URL}-${release}-dev.js`),
  ]);

  return vm.runInThisContext(
    [...bundles, '__NR1_SDK__.default'].join('\n'),
    `doc-app-${release}-dev.js`
  );
};
