import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt';
import { css, keyframes } from '@emotion/core';
import Typist from 'react-typist';

const blink = keyframes`
  0%, 49% {
    background: none;
  }

  50%, 100% {
    background: #c0c5ce;
  }
`;

const cursor = css`
  &:after {
    content: '';
    display: block;
    width: 1ch;
    height: 1.25em;
    animation: ${blink} 1.5s infinite;
    position: absolute;
    top: 1px;
    right: -1ch;
  }
`;

const CommandLine = ({
  animate,
  line,
  prompt,
  getTokenProps,
  onDoneTyping,
  typingDelay,
}) => {
  const [showCursor, setShowCursor] = useState(true);
  const Element = animate ? Typist : 'div';

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

          ${showCursor && cursor}
        `}
      >
        <Element
          hideCursorWhenDone={false}
          startDelay={typingDelay}
          avgTypingDelay={40}
          onTypingDone={() => {
            setShowCursor(false);
            onDoneTyping();
          }}
          cursor={{ show: false }}
          css={css`
            color: #fafafa;
            white-space: pre;
          `}
        >
          {line.map((token, key) => (
            // eslint-disable-next-line react/jsx-key
            <span
              css={css`
                display: inline-block;
                vertical-align: baseline;
              `}
              {...getTokenProps({ token, key })}
            />
          ))}
        </Element>
      </div>
    </div>
  );
};

CommandLine.propTypes = {
  animate: PropTypes.bool,
  line: PropTypes.arrayOf(PropTypes.object).isRequired,
  getTokenProps: PropTypes.func.isRequired,
  prompt: PropTypes.oneOf(['$', '>']),
  onDoneTyping: PropTypes.func,
  typingDelay: PropTypes.number,
};

export default CommandLine;
