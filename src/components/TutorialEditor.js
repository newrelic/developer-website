import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CodeBlock } from '@newrelic/gatsby-theme-newrelic';
import path from 'path';
import { css } from '@emotion/core';
import { darken } from 'polished';

const TutorialEditor = ({ initialSelectedFile, files }) => {
  const [selectedFile, setSelectedFile] = useState(initialSelectedFile);
  const { diff } = files.get(selectedFile);

  const [highlightedLines] = diff.reduce(
    ([highlightedLines, lineNumber], change) => {
      const { count, added, removed } = change;
      // Include current line when counting the end of the range
      const rangeEnd = lineNumber + count - 1;

      return [
        added
          ? [
              ...highlightedLines,
              lineNumber === rangeEnd
                ? lineNumber
                : `${lineNumber}-${lineNumber + count - 1}`,
            ]
          : highlightedLines,
        removed ? lineNumber : lineNumber + count,
      ];
    },
    [[], 1]
  );

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
            fileName === selectedFile ? highlightedLines.join(',') : null
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
  initialSelectedFile: PropTypes.string.isRequired,
  files: PropTypes.instanceOf(Map).isRequired,
};

export default TutorialEditor;
