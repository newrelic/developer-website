import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import styles from './CodeBlock.module.scss';

const CodeHighlight = ({ children, language }) => {
  return (
    <Highlight Prism={Prism} code={children.trim()} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cx(styles.container, {
            [`language-${language}`]: Boolean(language),
          })}
        >
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

const CodeBlock = ({ children, language }) => (
  <CodeHighlight language={language}>{children}</CodeHighlight>
);

CodeHighlight.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;
