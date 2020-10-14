import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CodeBlock } from '@newrelic/gatsby-theme-newrelic';
import path from 'path';
import { css } from '@emotion/core';
import { darken } from 'polished';

const last = (arr) => arr[arr.length - 1];

const diffHighlightedLines = (diff) => {
  const { highlightedLines } = diff.reduce(
    ({ highlightedLines, currentLineNumber }, change) => {
      const { count, added, removed, value } = change;

      if (!added) {
        return {
          highlightedLines,
          currentLineNumber: removed
            ? currentLineNumber
            : currentLineNumber + count,
        };
      }

      const lines = value.split('\n').slice(0, count);

      // Don't highlight the last line if the last line is blank. Subtract at
      // least 1 because we want to include the current line in the range.
      const subtractAmount = last(lines) === '' ? 2 : 1;
      const rangeEnd = currentLineNumber + count - subtractAmount;
      const range =
        currentLineNumber === rangeEnd
          ? currentLineNumber
          : `${currentLineNumber}-${rangeEnd}`;

      return {
        highlightedLines: [...highlightedLines, range],
        currentLineNumber: currentLineNumber + count,
      };
    },
    { highlightedLines: [], currentLineNumber: 1 }
  );

  return highlightedLines.join(',');
};

const TutorialEditor = ({ codeBlock, files }) => {
  const [selectedFile, setSelectedFile] = useState(codeBlock.fileName);

  return (
    <div>
      <div
        css={css`
          display: flex;
          background: ${darken(0.05, '#2e3440')};
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        `}
      >
        {Array.from(files.keys()).map((fileName) => (
          <button
            key={fileName}
            type="button"
            onClick={() => setSelectedFile(fileName)}
            css={css`
              padding: 0.5rem 1rem;
              cursor: pointer;
              font-size: 0.75rem;
              border: 0;
              outline: 0;
              color: currentColor;
              background: ${fileName === selectedFile
                ? 'var(--color-nord-0)'
                : 'inherit'};
            `}
          >
            {path.basename(fileName)}
          </button>
        ))}
      </div>

      {Array.from(files.entries()).map(([fileName, { code, language }]) => (
        <CodeBlock
          key={fileName}
          lineNumbers
          language={language}
          fileName={fileName}
          highlightedLines={
            fileName === codeBlock.fileName && codeBlock.diff
              ? diffHighlightedLines(codeBlock.diff)
              : null
          }
          css={css`
            display: ${fileName === selectedFile ? 'block' : 'none'};

            > div:first-of-type {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }
          `}
        >
          {code}
        </CodeBlock>
      ))}
    </div>
  );
};

TutorialEditor.propTypes = {
  codeBlock: PropTypes.object.isRequired,
  files: PropTypes.instanceOf(Map).isRequired,
};

export default TutorialEditor;
