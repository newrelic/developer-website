import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const NewRelicSVG = ({ children, className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    css={css`
      --accent-color: #0ab0bf;

      fill: none;
      stroke: currentColor;
      stroke-width: 1;
      stroke-linecap: round;
      stroke-linejoin: round;
      width: ${size};
      height: ${size};
    `}
  >
    {children}
  </svg>
);

NewRelicSVG.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
};

NewRelicSVG.defaultProps = {
  size: '1em',
};

export default NewRelicSVG;
