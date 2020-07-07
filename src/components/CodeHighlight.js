import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import styles from './CodeHighlight.module.scss';

const CodeHighlight = ({ children, language, lineNumbers }) => (
  <Highlight Prism={Prism} code={children.trim()} language={language}>
    {({ tokens, getLineProps, getTokenProps }) => {
      const characterWidth = String(tokens.length).length;

      return (
        <pre className={styles.container} data-language={language}>
          <code>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {lineNumbers && (
                  <span
                    className={styles.lineNumber}
                    style={{
                      '--character-width': `${characterWidth}ch`,
                    }}
                  >
                    {i + 1}
                  </span>
                )}
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      );
    }}
  </Highlight>
);

CodeHighlight.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
  lineNumbers: PropTypes.bool,
};

export default CodeHighlight;
