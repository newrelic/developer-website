import React from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt';
import { css } from '@emotion/core';
import Typist from 'react-typist';
import Cursor from './Cursor';

const CommandLine = ({
  animate,
  line,
  prompt,
  getTokenProps,
  onDoneTyping,
  typingDelay,
}) => {
  const Element = animate ? Typist : 'div';

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1ch 1fr;
        grid-gap: 1ch;
        align-items: baseline;
      `}
    >
      <Prompt character={prompt} />
      <Element
        hideCursorWhenDone
        startDelay={typingDelay}
        avgTypingDelay={40}
        onTypingDone={onDoneTyping}
        cursor={Cursor}
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
