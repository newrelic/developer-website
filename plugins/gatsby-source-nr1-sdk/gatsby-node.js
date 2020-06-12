const fetch = require('node-fetch');
const vm = require('vm');

const noop = () => {};

const BASE_URL =
  'https://hypertext-sandbox.nr-assets.net/wanda--wanda-ec-ui--nr1-docs';

const getBundle = async (src) => {
  const res = await fetch(src);
  return res.text();
};

exports.sourceNodes = async ({ actions }, { release }) => {
  // const { createNode } = actions;
  global.Element = {
    prototype: {
      setAttribute: noop,
    },
  };
  global.CSSStyleDeclaration = {
    prototype: {
      setAttribute: noop,
    },
  };
  global.navigator = {
    userAgent: '',
  };
  global.removeEventListener = noop;
  global.addEventListener = noop;
  global.document = {
    cookie: '',
    getElementsByTagName() {
      return [];
    },
    body: {
      appendChild: noop,
      removeChild: noop,
    },
    createElement() {
      return {
        setAttribute: noop,
        style: {},
      };
    },
  };

  global.btoa = noop;

  global.window = {
    document: global.document,
    history: {},
    navigator: global.navigator,
    location: {
      hostname: '',
      search: '',
    },
  };

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
    '__NR1_SDK__',
  ]);

  const sdk = vm.runInThisContext(bundles.join('\n'));

  console.log(sdk);
};
