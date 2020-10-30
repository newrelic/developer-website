import React from 'react';
import { BASE_URL } from './src/constants';

export const onPreRenderHTML = (
  { getPostBodyComponents, replacePostBodyComponents },
  pluginOptions
) => {
  const { release } = pluginOptions;

  replacePostBodyComponents([
    ...getPostBodyComponents(),
    <script
      async
      key="react-router"
      crossOrigin="anonymous"
      src="//nr1.nr-assets.net/lib/react-router/4.2.0/react-router.js"
    />,
    <script
      async
      key="react-router-dom"
      crossOrigin="anonymous"
      src="//nr1.nr-assets.net/lib/react-router-dom/4.2.2/react-router-dom.js"
    />,
    <script
      async
      key="d3"
      crossOrigin="anonymous"
      src="//nr1.nr-assets.net/lib/d3/3.5.17/d3.js"
    />,
    <script
      defer
      key="nr1-sdk"
      crossOrigin="anonymous"
      src={`${BASE_URL}-${release}.js`}
    />,
  ]);
};
