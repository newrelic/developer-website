import React from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt';
import { css } from '@emotion/core';

const CommandLine = ({ line, prompt, getTokenProps }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: 1ch 1fr;
      grid-gap: 1ch;
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
    </div>
  </div>
);

CommandLine.propTypes = {
  line: PropTypes.arrayOf(PropTypes.object).isRequired,
  getTokenProps: PropTypes.func.isRequired,
  prompt: PropTypes.oneOf(['$', '>']),
};

export default CommandLine;
