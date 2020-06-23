import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import lightTheme from 'prism-react-renderer/themes/github';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import MiddleEllipsis from 'react-middle-ellipsis';
import FeatherIcon from './FeatherIcon';
import styles from './CodeSnippet.module.scss';
import useClipboard from '../hooks/useClipboard';
import useFormattedCode from '../hooks/useFormattedCode';
import Prism from 'prism-react-renderer/prism';
import useDarkMode from 'use-dark-mode';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-ruby');

const CodeSnippet = ({ children, copy, className, lineNumbers, fileName }) => {
  const language = className.replace('language-', '');
  const formattedCode = useFormattedCode(children ?? '');
  const [copied, copyCode] = useClipboard();
  const darkMode = useDarkMode();

  return (
    <div>
      <div className={styles.container}>
        <Highlight
          {...defaultProps}
          theme={darkMode.value ? darkTheme : lightTheme}
          code={formattedCode.trim()}
          language={language}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre className={styles.codeContainer} style={style}>
              <code>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {lineNumbers !== 'false' && (
                      <span className={styles.lineNumber}>{i + 1}</span>
                    )}
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
      {(copy !== 'false' || fileName) && (
        <div className={styles.bottomBar}>
          <div className={styles.fileName}>
            {fileName && (
              <MiddleEllipsis>
                <span title={fileName}>{fileName}</span>
              </MiddleEllipsis>
            )}
          </div>
          {copy !== 'false' && (
            <button
              className={styles.copyButton}
              type="button"
              onClick={() => copyCode(formattedCode.trim())}
            >
              <FeatherIcon
                name="copy"
                size="1rem"
                className={styles.copyIcon}
              />
              {copied ? 'Copied!' : 'Copy output'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

CodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  copy: PropTypes.string,
  fileName: PropTypes.string,
  lineNumbers: PropTypes.string,
};

CodeSnippet.defaultProps = {
  className: 'language-javascript',
  copy: 'true',
  lineNumbers: 'true',
};

export default CodeSnippet;
