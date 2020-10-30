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
      async
      key="d3"
      crossOrigin="anonymous"
      src="//nr1.nr-assets.net/lib/d3/3.5.17/d3.js"
    />,
  ]);

  replacePostBodyComponents([
    ...getPostBodyComponents(),
    <script
      defer
      key="nr1-sdk"
      crossOrigin="anonymous"
      src={`${BASE_URL}-${release}.js`}
    />,
  ]);
};
