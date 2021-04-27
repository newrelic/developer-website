import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Editor from 'react-simple-code-editor';
import CodeHighlight from './CodeHighlight';
import * as styles from './CodeEditor.module.scss';

const CodeEditor = ({ value, language, lineNumbers, onChange }) => {
  const lineNumberWidth = value.trim().split('\n').length.toString().length;

  return (
    <Editor
      value={value}
      padding={16}
      onValueChange={onChange}
      highlight={(code) => (
        <CodeHighlight
          wrap
          className={styles.editor}
          language={language}
          lineNumbers={lineNumbers}
        >
          {code}
        </CodeHighlight>
      )}
      textareaClassName={cx({ [styles.lineNumbers]: lineNumbers })}
      style={{
        fontFamily: 'var(--code-font)',
        fontSize: '0.75rem',
        '--line-number-width': `${lineNumberWidth}ch`,
      }}
    />
  );
};

CodeEditor.propTypes = {
  language: PropTypes.string.isRequired,
  lineNumbers: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default CodeEditor;
