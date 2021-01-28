import React from 'react';
import { BASE_URL } from './src/constants';

export const onPreRenderHTML = (
  {
    getHeadComponents,
    replaceHeadComponents,
    getPostBodyComponents,
    replacePostBodyComponents,
  },
  pluginOptions
) => {
  const { release } = pluginOptions;

  replaceHeadComponents([
    ...getHeadComponents(),
    <script
      key="react"
      crossOrigin="anonymous"
      src="https://nr1.nr-assets.net/lib/react/16.6.3/react.development.js"
    />,
    <script
      key="react-dom"
      crossOrigin="anonymous"
      src="https://nr1.nr-assets.net/lib/react/16.6.3/react-dom.development.js"
    />,
    <script
      key="react-router"
      crossOrigin="anonymous"
      src="https://nr1.nr-assets.net/lib/react-router/4.2.0/react-router.js"
    />,
    <script
      key="react-router-dom"
      crossOrigin="anonymous"
      src="https://nr1.nr-assets.net/lib/react-router-dom/4.2.2/react-router-dom.js"
    />,
    <script
      key="d3"
      crossOrigin="anonymous"
      src="https://nr1.nr-assets.net/lib/d3/3.5.17/d3.js"
    />,
  ]);

  replacePostBodyComponents([
    ...getPostBodyComponents(),
    <script
      key="nr1-sdk"
      crossOrigin="anonymous"
      src={`${BASE_URL}-${release}.js`}
    />,
  ]);
};
