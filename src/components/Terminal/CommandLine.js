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
  wrap,
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
        display: flex;
        flex-wrap: ${wrap ? 'wrap' : null};
        gap: 1ch;
        justify-content: start;
        align-items: flex-start;

        @supports not (gap: 1ch) {
          margin-right: 1ch;
        }
      `}
    >
      <Prompt character={prompt} />
      <div
        css={css`
          flex: 1;
          position: relative;
          color: #fafafa;
          white-space: ${wrap ? 'pre-wrap' : 'pre'};

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
  wrap: PropTypes.bool,
};

CommandLine.defaultProps = {
  animate: false,
  avgTypingDelay: 40,
  typingDelay: 0,
  wrap: false,
};

export default CommandLine;
