import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const ShellOutput = ({ line }) => (
  <div
    css={css`
      color: #fafafa;
      white-space: pre;
    `}
  >
    {line.map((token, key) => (
      <span
        key={key}
        css={css`
          color: ${OUTPUT_COLORS[token.color] || OUTPUT_COLORS.plain};

          &:empty {
            display: inline-block;
          }
        `}
      >
        {token.text}
      </span>
    ))}
  </div>
);

const OUTPUT_COLORS = {
  plain: 'currentColor',
  green: 'var(--color-nord-14)',
  red: 'var(--color-nord-11)',
  muted: 'var(--color-nord-3)',
  purple: 'var(--color-nord-15)',
  blue: 'var(--color-nord-9)',
  yellow: 'var(--color-nord-13)',
};

OUTPUT_COLORS.timestamp = OUTPUT_COLORS.muted;
OUTPUT_COLORS.variable = OUTPUT_COLORS.purple;
OUTPUT_COLORS.success = OUTPUT_COLORS.green;
OUTPUT_COLORS.error = OUTPUT_COLORS.red;

ShellOutput.propTypes = {
  line: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShellOutput;
