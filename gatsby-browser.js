/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import wrapPageElement from './gatsby/wrap-page-element';

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
export { onRouteUpdate, wrapPageElement };
