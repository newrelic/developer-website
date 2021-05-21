import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import * as styles from './CodeHighlight.module.scss';
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
            className={cx(styles.container, className, {
              [styles.wrap]: wrap,
              [styles.lineNumbers]: lineNumbers,
            })}
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
                    className: cx({
                      [styles.highlightLine]: highlightedLines.has(idx + 1),
                    }),
                  })}
                >
                  {lineNumbers && (
                    <div className={styles.lineNumber}>{idx + 1}</div>
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
