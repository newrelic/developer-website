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
