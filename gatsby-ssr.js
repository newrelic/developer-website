/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import wrapPageElement from './gatsby/wrap-page-element';

// This is needed to ensure the NR1 SDK can load properly
const onPreRenderHTML = ({
  getPostBodyComponents,
  replacePostBodyComponents,
}) => {
  replacePostBodyComponents([
    ...getPostBodyComponents(),
    <script
      async
      key="marketo-form"
      src="//app-abj.marketo.com/js/forms2/js/forms2.min.js"
    />,
  ]);
};

export { onPreRenderHTML, wrapPageElement };
