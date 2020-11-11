import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/core';
import Prompt from './Prompt';
import Typist from 'react-typist';

const blink = keyframes`
  0%, 49% {
    background: #c0c5ce;
  }

  50%, 100% {
    background: none;
  }
`;

const CommandLine = ({
  animate,
  avgTypingDelay,
  cursor,
  children,
  prompt,
  typingDelay,
  onFinishedTyping,
}) => {
  const element = animate ? (
    <Typist
      startDelay={typingDelay}
      avgTypingDelay={avgTypingDelay}
      cursor={{ show: false }}
      onTypingDone={onFinishedTyping}
      css={css`
        &:empty {
          display: inline-block;
        }
      `}
    >
      {children}
    </Typist>
  ) : (
    children
  );

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
        {element}
      </div>
    </div>
  );
};

CommandLine.propTypes = {
  animate: PropTypes.bool,
  avgTypingDelay: PropTypes.number,
  children: PropTypes.node,
  cursor: PropTypes.bool,
  prompt: PropTypes.oneOf(['$', '>']),
  typingDelay: PropTypes.number,
  onFinishedTyping: PropTypes.func,
};

CommandLine.defaultProps = {
  animate: false,
  avgTypingDelay: 40,
  typingDelay: 0,
};

export default CommandLine;
