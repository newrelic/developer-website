import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import lightTheme from 'prism-react-renderer/themes/github';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import styles from './InlineCodeSnippet.module.scss';
import cx from 'classnames';
import useDarkMode from 'use-dark-mode';

const InlineCodeSnippet = ({ children, language }) => {
  const darkMode = useDarkMode();

  return (
    <Highlight
      {...defaultProps}
      theme={darkMode.value ? darkTheme : lightTheme}
      code={children}
      language={language}
    >
      {({ style, className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cx(styles.container, className)}
          style={{ ...style, background: 'none' }}
        >
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
  );
};

InlineCodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};

export default InlineCodeSnippet;
