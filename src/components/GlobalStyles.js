import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      // hide tooltips created by the NR1 SDK charts that render outside the
      // shadow DOM in the live previews
      [data-tooltip-chart-id] {
        display: none;
      }
    `}
  />
);

export default GlobalStyles;
