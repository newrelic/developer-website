import React from 'react';
import { css, keyframes } from '@emotion/core';

const blink = keyframes`
  0%, 49% {
    background: none;
  }

  50%, 100% {
    background: #fafafa;
  }
`;

const Cursor = () => (
  <span
    css={css`
      display: inline-block;
      width: 1ch;
      height: 1.25em;
      animation: ${blink} 1s infinite;
      vertical-align: middle;
    `}
  />
);

export default Cursor;
