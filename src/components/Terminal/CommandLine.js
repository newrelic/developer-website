import React from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt';
import { css, keyframes } from '@emotion/core';

const blink = keyframes`
  0%, 49% {
    background: #c0c5ce;
  }

  50%, 100% {
    background: none;
  }
`;

const CommandLine = ({ cursor, children, prompt }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1ch auto;
        grid-gap: 1ch;
        justify-content: start;
        align-items: baseline;
      `}
    >
      <Prompt character={prompt} />
      <div
        css={css`
          position: relative;
          color: #fafafa;
          white-space: pre;

          &:empty {
            height: 100%;
          }

          ${cursor &&
          css`
            &:after {
              content: '';
              display: block;
              width: 1ch;
              height: 1.25em;
              animation: ${blink} 1.25s infinite;
              position: absolute;
              top: 1px;
              right: -1ch;
            }
          `};
        `}
      >
        {children}
      </div>
    </div>
  );
};

CommandLine.propTypes = {
  children: PropTypes.node,
  cursor: PropTypes.bool,
  prompt: PropTypes.oneOf(['$', '>']),
};

export default CommandLine;
