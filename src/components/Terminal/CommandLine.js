import React from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt';
import { css } from '@emotion/core';
import Cursor from './Cursor';

const CommandLine = ({ cursor, line, prompt, getTokenProps }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: 1ch 1fr;
      grid-gap: 1ch;
      align-items: center;
    `}
  >
    <Prompt character={prompt} />
    <div
      css={css`
        color: #fafafa;
        white-space: pre;
      `}
    >
      {line.map((token, key) => (
        // eslint-disable-next-line react/jsx-key
        <span {...getTokenProps({ token, key })} />
      ))}
      {cursor && <Cursor />}
    </div>
  </div>
);

CommandLine.propTypes = {
  cursor: PropTypes.bool,
  line: PropTypes.arrayOf(PropTypes.object).isRequired,
  getTokenProps: PropTypes.func.isRequired,
  prompt: PropTypes.oneOf(['$', '>']),
};

export default CommandLine;
