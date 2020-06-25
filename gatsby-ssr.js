/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');
const { JS_BUNDLE } = require('./src/utils/sdk');
const wrapPageElement = require('./gatsby/wrap-page-element').default;

exports.wrapPageElement = wrapPageElement;

// This is needed to ensure the NR1 SDK can load properly
exports.onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  getPostBodyComponents,
  replacePostBodyComponents,
}) => {
  replaceHeadComponents([
    ...getHeadComponents(),
    <script
      key="react"
      crossOrigin="anonymous"
      src="//nr1.nr-assets.net/lib/react/16.6.3/react.development.js"
    />,
    <script
      key="react-dom"
      crossOrigin="anonymous"
      src="//nr1.nr-assets.net/lib/react/16.6.3/react-dom.development.js"
    />,
    <script
      key="react-router"
      crossOrigin="anonymous"
      src="//nr1.nr-assets.net/lib/react-router/4.2.0/react-router.js"
    />,
    <script
      key="react-router-dom"
      crossOrigin="anonymous"
      src="//nr1.nr-assets.net/lib/react-router-dom/4.2.2/react-router-dom.js"
    />,
    <script
      key="d3"
      crossOrigin="anonymous"
      src="//nr1.nr-assets.net/lib/d3/3.5.17/d3.js"
    />,
  ]);

  replacePostBodyComponents([
    ...getPostBodyComponents(),
    <script key="nr1-sdk" crossOrigin="anonymous" src={JS_BUNDLE} />,
  ]);
};
