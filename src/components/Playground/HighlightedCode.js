import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const nordTheme = css`
  .namespace {
    opacity: 0.7;
  }
  .token {
    &.plain:empty {
      display: inline-block;
    }
    &.comment,
    &.prolog,
    &.doctype,
    &.cdata {
      color: var(--color-nord-3);
    }
    &.tag,
    &.class-name {
      color: var(--color-nord-7);
    }
    &.function {
      color: var(--color-nord-8);
    }
    &.punctuation,
    &.operator,
    &.keyword,
    &.property,
    &.entity,
    &.atrule,
    &.attr-value,
    &.url {
      color: var(--color-nord-9);
    }
    &.regex,
    &.important,
    &.variable {
      color: var(--color-nord-12);
    }
    &.selector,
    &.attr-name,
    &.string,
    &.char,
    &.builtin,
    &.inserted {
      color: var(--color-nord-14);
    }
    &.property,
    &.boolean,
    &.constant,
    &.symbol,
    &.deleted,
    &.number {
      color: var(--color-nord-15);
    }
    &.important,
    &.bold {
      font-weight: bold;
    }
    &.italic {
      font-style: italic;
    }
    &.entity {
      cursor: help;
    }
  }
`;

const HighlightedCode = ({
  className,
  children,
  language = 'jsx',
  lineNumbers,
  wrap = false,
}) => (
  <Highlight Prism={Prism} code={children} language={language}>
    {({ tokens, getLineProps, getTokenProps }) => {
      const lineNumberWidth = String(tokens.length).length;

      return (
        <pre
          css={css`
            ${nordTheme};
            color: var(--color-nord-6);
            font-family: var(--code-font);
            font-size: 0.75rem;
            display: block;
            overflow: auto;
            white-space: ${wrap ? 'pre-wrap' : 'pre'};
            word-spacing: normal;
            word-break: normal;
            tab-size: 2;
            hyphens: none;
            text-shadow: none;
            ${lineNumbers &&
            css`
              .token-line {
                display: grid;
                grid-template-columns: ${lineNumberWidth}ch 1fr;
                grid-gap: 1rem;
              }
            `};
            .light-mode & {
              color: var(--color-nord-0);
            }
          `}
          className={className}
          data-language={language}
        >
          <code
            css={css`
              width: 100%;
              padding: 0;
              background: none;
              var,
              mark {
                font-size: inherit;
              }
              var {
                background: var(--color-nord-2);
                color: inherit;
              }
              a:hover var {
                background: var(--color-nord-3);
              }
              mark .token {
                color: var(--color-neutrals-900) !important;
              }
            `}
          >
            {tokens.map((line, idx) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: idx })}>
                {lineNumbers && (
                  <div
                    css={css`
                      user-select: none;
                      color: var(--color-nord-3);
                      text-align: right;
                    `}
                  >
                    {idx + 1}
                  </div>
                )}
                <div>
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/jsx-key
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            ))}
          </code>
        </pre>
      );
    }}
  </Highlight>
);

HighlightedCode.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  language: PropTypes.string,
  lineNumbers: PropTypes.bool,
  wrap: PropTypes.bool,
};

export default HighlightedCode;
