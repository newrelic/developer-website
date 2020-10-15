import React from 'react';
import { css, keyframes } from '@emotion/core';

const blink = keyframes`
  0%, 49% {
    background: none;
  }

  50%, 100% {
    background: #c0c5ce;
  }
`;

const Cursor = () => (
  <span
    css={css`
      display: inline-block;
      width: 1ch;
      height: 1.25em;
      animation: ${blink} 1.5s infinite;
      vertical-align: baseline;
      position: relative;
      top: 3px;
    `}
  />
);

export default Cursor;
