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
          [mktoForms2BaseStyle, mktoForms2ThemeStyle].indexOf(ss.ownerNode) !==
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

  if (typeof window !== 'undefined' && window.MktoForms2) {
    // eslint-disable-next-line no-undef
    MktoForms2.whenRendered(function (form) {
      destyleMktoForm(form);
    });
  }
};

const onClientEntry = () => {
  // Expose both globals so that the NR1 docs can read it.
  window.React = require('react');
  window.ReactDOM = require('react-dom');
};
const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation && prevLocation.search && !location.search) {
    location.search = prevLocation.search;
  }
};

export {
  wrapPageElement,
  onInitialClientRender,
  onClientEntry,
  onRouteUpdate,
  // onPreRouteUpdate,
};
