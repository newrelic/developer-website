import React from 'react';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const NewRelicSVG = (props) => (
  <SVG
    {...props}
    viewBox="0 0 24 24"
    css={css`
      fill: none;
      stroke: currentColor;
      stroke-width: 1;
      stroke-linecap: round;
      stroke-linejoin: round;
    `}
  />
);

NewRelicSVG.defaultProps = {
  size: '1em',
};

export default NewRelicSVG;
