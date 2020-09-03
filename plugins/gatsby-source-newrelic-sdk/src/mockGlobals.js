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
};
global.removeEventListener = noop;
global.addEventListener = noop;
global.requestAnimationFrame = noop;
global.cancelAnimationFrame = noop;
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
};
