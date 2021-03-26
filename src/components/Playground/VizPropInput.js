import React, { useState } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import HighlightedCode from './HighlightedCode';
import Editor from 'react-simple-code-editor';

const VizPropInput = ({ onChange, propName }) => {
  const [code, setCode] = useState('');
  return (
    <>
      <div>{propName}</div>
      <div
        css={css`
          background-color: var(--color-nord-0);
          padding: 0.25rem;
          margin-left: 0.5rem;
          margin-bottom: 0.5rem;
          border-radius: 4px;
          height: 1.5rem;
        `}
      >
        <Editor
          value={code}
          highlight={(code) => <HighlightedCode>{code}</HighlightedCode>}
          onValueChange={(code) => {
            setCode(code);
            onChange(code);
          }}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            height: '1rem',
          }}
        />
      </div>
    </>
  );
};

VizPropInput.propTypes = {
  onChange: PropTypes.func,
  propName: PropTypes.string,
};

export default VizPropInput;
