import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';

const WHITESPACE = /^\s*$/;
const MULTILINE_COMMAND = /\\\s*$/;

const SyntaxHighlighter = ({ code }) => (
  <Highlight Prism={Prism} code={code} language="shell">
    {({ tokens, getLineProps, getTokenProps }) => (
      <pre
        css={css`
          ${nordTheme};

          color: var(--color-nord-6);
          display: block;
          overflow: auto;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          tab-size: 2;
          hyphens: none;
          text-shadow: none;

          .token-line {
            display: grid;
            grid-template-columns: 1ch 1fr;
            grid-gap: 1rem;
          }
        `}
      >
        <code
          css={css`
            display: table;
            width: 100%;
            padding: 0;
            background: none;
          `}
        >
          {tokens.map((line, idx) => {
            const previousLine = collapse(tokens[idx - 1] || [])
              .map((token) => token.content)
              .join(' ');
            const isMultiline = MULTILINE_COMMAND.test(previousLine);

            return (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: idx })}>
                <div
                  css={css`
                    display: grid;
                    grid-template-columns: 1ch 1fr;
                    grid-gap: 1ch;
                  `}
                >
                  <span
                    css={css`
                      color: var(--color-nord-10);
                      user-select: none;
                    `}
                  >
                    {isMultiline ? '>' : '$'}
                  </span>
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
              </div>
            );
          })}
        </code>
      </pre>
    )}
  </Highlight>
);

const nordTheme = css`
  .namespace {
    opacity: 0.7;
  }
  .token {
    &.plain:empty {
      display: inline-block;
    }

    &.comment {
      color: var(--color-nord-3);
    }

    &.punctuation,
    &.operator {
      color: var(--color-nord-9);
    }

    &.constant {
      color: var(--color-nord-15);
    }

    &.string {
      color: var(--color-nord-14);
    }
  }
`;

const collapse = (line) => {
  return line.filter(
    (token) =>
      !WHITESPACE.test(token.content) && !token.types.includes('comment')
  );
};

SyntaxHighlighter.propTypes = {
  className: PropTypes.string,
  code: PropTypes.string.isRequired,
};

export default SyntaxHighlighter;
