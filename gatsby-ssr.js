/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// This is needed to ensure the NR1 SDK can load properly
const React = require('react');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
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
};
