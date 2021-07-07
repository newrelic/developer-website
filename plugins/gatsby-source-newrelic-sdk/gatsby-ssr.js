import React from 'react';

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  replaceHeadComponents([
    ...getHeadComponents(),
    <link
      key="space-mono"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
    />,
    <script
      key="react-router"
      defer
      crossOrigin="anonymous"
      src="https://nr1.nr-assets.net/lib/react-router/4.2.0/react-router.js"
    />,
    <script
      key="react-router-dom"
      defer
      crossOrigin="anonymous"
      src="https://nr1.nr-assets.net/lib/react-router-dom/4.2.2/react-router-dom.js"
    />,
    <script
      key="d3"
      crossOrigin="anonymous"
      src="https://nr1.nr-assets.net/lib/d3/3.5.17/d3.js"
    />,
  ]);
};
