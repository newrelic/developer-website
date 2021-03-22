import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import HighlightedCode from './HighlightedCode';
import { css } from '@emotion/core';
import { Button } from '@newrelic/gatsby-theme-newrelic';

const ExampleEditor = ({ sourceCode, onAdd }) => {
  const [code, setCode] = useState(sourceCode);
  return (
    <div>
      <div
        css={css`
          padding: 1rem;
          background-color: var(--color-nord-0);
          border-radius: 0.25rem;
        `}
      >
        <Editor
          value={code}
          highlight={(code) => <HighlightedCode>{code}</HighlightedCode>}
          onValueChange={(code) => setCode(code)}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            height: '200px',
            overflow: 'scroll',
          }}
        />
      </div>
      <div
        css={css`
          color: var(--color-nord-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--color-nord-1);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          padding: 0 1rem;
          font-size: 0.75rem;
          .light-mode & {
            color: var(--color-nord-0);
            background: var(--color-nord-4);
          }
        `}
      >
        <div
          css={css`
            font-family: var(--code-font);
            white-space: nowrap;
            overflow: hidden;
            padding-right: 0.5rem;
          `}
        />
        <Button
          type="button"
          variant={Button.VARIANT.LINK}
          onClick={() => onAdd(code)}
          size={Button.SIZE.SMALL}
          css={css`
            white-space: nowrap;
          `}
        >
          Add to playground
        </Button>
      </div>
    </div>
  );
};

ExampleEditor.propTypes = {
  sourceCode: PropTypes.string,
  onAdd: PropTypes.func,
};

export default ExampleEditor;
