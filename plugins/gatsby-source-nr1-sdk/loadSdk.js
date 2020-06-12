const vm = require('vm');
const fetch = require('node-fetch');

const BASE_URL =
  'https://hypertext-sandbox.nr-assets.net/wanda--wanda-ec-ui--nr1-docs';

const getBundle = async (src) => {
  const res = await fetch(src);

  return res.text();
};

module.exports = async (release) => {
  require('./mockGlobals');

  const bundles = await Promise.all([
    getBundle('https://nr1.nr-assets.net/lib/d3/3.5.17/d3.js'),
    getBundle(
      'https://nr1.nr-assets.net/lib/react/16.6.3/react.development.js'
    ),
    getBundle(
      'https://nr1.nr-assets.net/lib/react/16.6.3/react-dom.development.js'
    ),
    getBundle(
      'https://nr1.nr-assets.net/lib/react-router-dom/4.2.2/react-router-dom.js'
    ),
    getBundle(`${BASE_URL}-${release}.js`),
  ]);

  return vm.runInThisContext([...bundles, '__NR1_SDK__'].join('\n'));
};
