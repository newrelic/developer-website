/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import wrapPageElement from './gatsby/wrap-page-element';

const onInitialClientRender = () => {
  function destyleMktoForm(mktoForm, options) {
    const formEl = mktoForm.getFormElem()[0];
    const arrayFrom = Function.prototype.call.bind(Array.prototype.slice);
    options = options || {};

    // remove element styles from <form> and children
    if (!options.keepInline) {
      const styledEls = arrayFrom(formEl.querySelectorAll('[style]')).concat(
        formEl
      );
      styledEls.forEach(function (el) {
        el.removeAttribute('style');
      });
    }
    // disable remote stylesheets and local styles
    if (!options.keepSheets) {
      const styleSheets = arrayFrom(document.styleSheets);
      styleSheets.forEach(function (ss) {
        if (
          // eslint-disable-next-line no-undef
          [mktoForms2BaseStyle, mktoForms2ThemeStyle].indexOf(ss.ownerNode) !=
            -1 ||
          formEl.contains(ss.ownerNode)
        ) {
          ss.disabled = true;
        }
      });
    }

    if (!options.moreStyles) {
      formEl.setAttribute('data-styles-ready', 'true');
    }
  }

  // eslint-disable-next-line no-undef
  MktoForms2.whenRendered(function (form) {
    destyleMktoForm(form);
  });
};

const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== `production` || typeof ga !== `function`) {
    return null;
  }

  // wrap inside a timeout to make sure react-helmet is done with it's changes (https://github.com/gatsbyjs/gatsby/issues/9139)
  // reactHelmet is using requestAnimationFrame: https://github.com/nfl/react-helmet/blob/5.2.0/src/HelmetUtils.js#L296-L299
  const sendPageView = () => {
    const pagePath = location
      ? location.pathname + location.search + location.hash
      : undefined;
    window.ga(`set`, `page`, pagePath);
    window.ga(`send`, `pageview`);
  };

  // Minimum delay for reactHelmet's requestAnimationFrame
  setTimeout(sendPageView, 32);

  return null;
};
export { onRouteUpdate, wrapPageElement, onInitialClientRender };
