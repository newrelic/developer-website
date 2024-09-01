/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React, { createContext } from 'react';
import wrapPageElement from './gatsby/wrap-page-element';

global.window = {
  requestAnimationFrame: () => {},
};

// This is needed to ensure the NR1 SDK can load properly
const onPreRenderHTML = ({
  getPostBodyComponents,
  replacePostBodyComponents,
}) => {
  replacePostBodyComponents([
    ...getPostBodyComponents(),
    <script
      key="marketo-form"
      src="//app-abj.marketo.com/js/forms2/js/forms2.min.js"
    />,
  ]);
};

export { onPreRenderHTML, wrapPageElement };
