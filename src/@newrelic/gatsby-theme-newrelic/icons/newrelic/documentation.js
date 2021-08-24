import React from 'react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';
import { css } from '@emotion/react';

const DocumentationIcon = () => (
  <SVG
    viewBox="0 0 16 16"
    css={css`
      fill: none;
      stroke: currentColor;
      stroke-width: 1;
      stroke-linecap: round;
      stroke-linejoin: round;
    `}
  >
    <path
      fillRule="evenodd"
      d="M8 11v1H5v-1h3zm2-3v1H5V8h5zM7.7 0H2v15h11V5.3L7.7 0zM8 1.7L11.3 5H8V1.7zM12 14H3V1h4v5h5v8z"
    />
  </SVG>
);

export default DocumentationIcon;
