import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import Prompt from './Prompt';

const WHITESPACE = /^\s*$/;
const MULTILINE_COMMAND = /\\\s*$/;

const SyntaxHighlighter = ({ code }) => (
  <Highlight Prism={Prism} code={code} language="shell">
    {({ tokens, getLineProps, getTokenProps }) => {
      console.log(tokens);
      return tokens.map((line, idx) => {
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
              <Prompt character={isMultiline ? '>' : '$'} />
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
      });
    }}
  </Highlight>
);

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
