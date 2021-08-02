const noop = () => {};

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
  platform: '',
};
global.removeEventListener = noop;
global.addEventListener = noop;
global.requestAnimationFrame = noop;
global.cancelAnimationFrame = noop;
global.XMLHttpRequest = {};
global.crypto = {
  getRandomValues: () => [],
};
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
  addEventListener: global.addEventListener,
  document: global.document,
  history: {},
  navigator: global.navigator,
  location: {
    hostname: '',
    search: '',
  },
  requestAnimationFrame: global.requestAnimationFrame,
  cancelAnimationFrame: global.cancelAnimationFrame,
  React: require('react'),
  ReactDOM: require('react-dom'),
};
function Blob() {
  return { size: null };
}
global.Blob = Blob;

global.fetch = () => ({
  catch: noop,
  then: noop,
});
