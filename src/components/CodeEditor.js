import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import CodeHighlight from './CodeHighlight';
import { css } from '@emotion/react';

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
          css={css`
            padding: 0 !important;
          `}
          language={language}
          lineNumbers={lineNumbers}
        >
          {code}
        </CodeHighlight>
      )}
      textareaClassName={css`
        ${lineNumbers &&
        css`
          padding-left: calc(2rem + var(--line-number-width)) !important;
        `}
      `}
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
