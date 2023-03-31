import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import { css } from '@emotion/react';
import { partition, range } from '../utils/array';

const CodeHighlight = ({
  className,
  children,
  highlightedLines: highlightedLineString,
  language,
  lineNumbers,
  wrap,
}) => {
  const highlightedLines = getHighlightedLines(highlightedLineString);

  return (
    <Highlight Prism={Prism} code={children.trim()} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => {
        const lineNumberWidth = String(tokens.length).length;

        return (
          <pre
            css={css`
              color: var(--code-console-text-primary);
              font-family: var(--code-font);
              font-size: 0.75rem;
              display: block;
              overflow: auto;
              white-space: pre;
              word-spacing: normal;
              word-break: normal;
              tab-size: 2;
              hyphens: none;
              text-shadow: none;
              padding: 1rem;

              > code {
                display: table;
                width: 100%;
                padding: 0 !important;
                background: none !important;
              }

              :global(.light-mode) & {
                color: var(--color-background);
                background: var(--code-console-text-primary);
              }
              ${wrap &&
              css`
                white-space: pre-wrap;
              `}
              ${lineNumbers &&
              css`
                :global(.token-line) {
                  display: grid;
                  grid-template-columns: var(--line-number-width) 1fr;
                  grid-gap: 1rem;
                }
              `}
            `}
            className={className}
            style={{
              '--line-number-width': `${lineNumberWidth}ch`,
            }}
            data-language={language}
          >
            <code>
              {tokens.map((line, idx) => (
                // eslint-disable-next-line react/jsx-key
                <div
                  {...getLineProps({
                    line,
                    key: idx,
                    css: css`
                      ${highlightedLines.has(idx + 1) &&
                      css`  
                      background: var(--color-current-line);

                      :global(.light-mode) & {
                        background: var(---color-comment);
                      `}
                    `,
                  })}
                >
                  {lineNumbers && (
                    <div
                      css={css`
                        user-select: none;
                        color: var(--color-selection);
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
};

const getHighlightedLines = (highlightedLineString) => {
  if (!highlightedLineString) {
    return new Set();
  }

  const groups = highlightedLineString.split(',').map((str) => str.trim());
  const [ranges, lines] = partition(groups, (group) => group.includes('-'));

  const lineRanges = ranges
    .map((range) => range.split('-').map(Number))
    .reduce((acc, [a, b]) => acc.concat(range(a, b)), []);

  return new Set(lines.map(Number).concat(lineRanges));
};

CodeHighlight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  highlightedLines: PropTypes.string,
  language: PropTypes.string,
  lineNumbers: PropTypes.bool,
  wrap: PropTypes.bool,
};

CodeHighlight.defaultProps = {
  wrap: false,
};

export default CodeHighlight;
