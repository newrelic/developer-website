import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import styles from './CodeHighlight.module.scss';

const CodeHighlight = ({
  className,
  children,
  language,
  lineNumbers,
  wrap,
}) => (
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
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {lineNumbers && (
                  <div className={styles.lineNumber}>{i + 1}</div>
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

CodeHighlight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
  lineNumbers: PropTypes.bool,
  wrap: PropTypes.bool,
};

CodeHighlight.defaultProps = {
  wrap: false,
};

export default CodeHighlight;
