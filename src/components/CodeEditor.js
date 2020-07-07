import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import CodeHighlight from './CodeHighlight';
import { LiveContext } from 'react-live';
import styles from './CodeEditor.module.scss';

const CodeEditor = ({ value, language, lineNumbers }) => {
  const { onChange } = useContext(LiveContext);
  const [code, setCode] = useState(value);
  const lineNumberWidth = value.trim().split('\n').length.toString().length;

  useEffect(() => {
    setCode(value);
  }, [value]);

  useEffect(() => {
    onChange(code);
  }, [code, onChange]);

  return (
    <Editor
      value={code}
      padding={16}
      onValueChange={(code) => setCode(code)}
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
      textareaClassName={styles.editorTextarea}
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
