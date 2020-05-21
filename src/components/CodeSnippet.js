import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';

const CodeSnippet = ({ children, copy, className }) => {
  const language = className.replace('language-', '');
  return (
    <div className="CodeSnippet">
      <div className="CodeSnippet-code">
        <Highlight
          {...defaultProps}
          theme={github}
          code={children}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, padding: '20px' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      {copy !== 'false' && <div className="CodeSnippet-copy">COPY ME</div>}
    </div>
  );
};

CodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  copy: PropTypes.string, // TODO: limit options
  className: PropTypes.string,
};

CodeSnippet.defaultProps = {
  copy: 'true',
  className: 'language-javascript',
};

export default CodeSnippet;
