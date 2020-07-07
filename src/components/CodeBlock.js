import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import styles from './CodeBlock.module.scss';

const CodeBlock = ({ children, language }) => {
  return (
    <Highlight Prism={Prism} code={children.trim()} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className={`${styles.container} language-${language}`}>
          <code>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeBlock.defaultProps = {};

export default CodeBlock;
