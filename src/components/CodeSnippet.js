import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import styles from './CodeSnippet.module.scss';
import cx from 'classnames';

const copyCode = (code, setCopied) => {
  const textArea = document.createElement('textarea');
  textArea.value = code;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  setCopied(true);
};

const CodeSnippet = ({ children, copy, className, lineNumbers }) => {
  const language = className.replace('language-', '');
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <div className={styles.container}>
        <Highlight
          {...defaultProps}
          theme={github}
          code={children}
          language={language}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre style={{ ...style, padding: '20px' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {lineNumbers !== 'false' && i < tokens.length - 1 && (
                    <span className={styles.lineNumber}>{i + 1}</span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      {copy !== 'false' && (
        <div className={cx({ [styles.copied]: copied }, styles.copyBar)}>
          <button type="button" onClick={() => copyCode(children, setCopied)}>
            {copied ? 'Copied!' : 'Copy output'}
          </button>
        </div>
      )}
    </div>
  );
};

CodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  copy: PropTypes.string,
  className: PropTypes.string,
  lineNumbers: PropTypes.string,
};

CodeSnippet.defaultProps = {
  copy: 'true',
  lineNumbers: 'true',
  className: 'language-javascript',
};

export default CodeSnippet;
