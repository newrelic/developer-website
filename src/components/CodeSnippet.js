import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import styles from './CodeSnippet.module.scss';

const copyCode = (code) => {
  const textArea = document.createElement('textarea');
  textArea.value = code;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};

const CodeSnippet = ({ children, copy, className, lineNumbers }) => {
  const language = className.replace('language-', '');

  return (
    <div>
      <div className={styles.CodeSnippet}>
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
        <div className={styles.CodeSnippetCopyBar}>
          <button type="button" onClick={() => copyCode(children)}>
            Copy output
          </button>
        </div>
      )}
    </div>
  );
};

CodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  copy: PropTypes.string, // TODO: limit options
  className: PropTypes.string,
  lineNumbers: PropTypes.string,
};

CodeSnippet.defaultProps = {
  copy: 'true',
  lineNumbers: 'true',
  className: 'language-javascript',
};

export default CodeSnippet;
