/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { JS_BUNDLE } from './src/utils/sdk';
import wrapPageElement from './gatsby/wrap-page-element';

// This is needed to ensure the NR1 SDK can load properly
const onPreRenderHTML = ({
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
    <script
      key="marketo-form"
      src="//app-abj.marketo.com/js/forms2/js/forms2.min.js"
    />,
  ]);
};

const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV !== `production`) {
    return null;
  }
  // Pre-connect to google analytics
  return setHeadComponents([
    <link
      rel="preconnect"
      key="preconnect-google-analytics"
      href="https://www.google-analytics.com"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google-analytics"
      href="https://www.google-analytics.com"
    />,
  ]);
};

export { onPreRenderHTML, onRenderBody, wrapPageElement };
