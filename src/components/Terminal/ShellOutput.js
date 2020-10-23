import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const TOKENS = /{([a-z]+)}(.*?(?={|$))/g;

const ShellOutput = ({ line }) => (
  <div
    css={css`
      color: #fafafa;
      white-space: pre;
    `}
  >
    {tokenize(line).map((token, key) => (
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

const tokenize = (text) => {
  const tokens = Array.from(text.matchAll(TOKENS));

  if (tokens.length === 0) {
    return [{ color: 'plain', text }];
  }

  const startOfColorIdx = text.indexOf('{');
  const coloredTokens = tokens.map(([, color, text]) => ({ color, text }));

  return startOfColorIdx === 0
    ? coloredTokens
    : [{ color: 'plain', text: text.slice(0, startOfColorIdx) }].concat(
        coloredTokens
      );
};

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
  line: PropTypes.string.isRequired,
};

export default ShellOutput;
