import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CodeBlock } from '@newrelic/gatsby-theme-newrelic';
import path from 'path';
import { css } from '@emotion/react';
import { darken } from 'polished';

const TutorialEditor = ({ className, focusedFileName, diff, project }) => {
  const [selectedFile, setSelectedFile] = useState(focusedFileName);

  return (
    <div className={className}>
      <div
        css={css`
          display: flex;
          background: ${darken(0.05, '#212c30')};
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        `}
      >
        {Array.from(project.keys()).map((fileName) => (
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
              color: var(--code-console-text-primary);
              background: ${fileName === selectedFile
                ? 'var(--code-console-background-main)'
                : 'inherit'};
            `}
          >
            {path.basename(fileName)}
          </button>
        ))}
      </div>

      {Array.from(project.entries()).map(([fileName, { code, language }]) => (
        <CodeBlock
          key={fileName}
          lineNumbers
          language={language}
          fileName={fileName}
          highlightedLines={
            fileName === focusedFileName && diff
              ? diffHighlightedLines(diff)
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
  className: PropTypes.string,
  focusedFileName: PropTypes.string.isRequired,
  diff: PropTypes.array,
  project: PropTypes.instanceOf(Map).isRequired,
};

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

      // Don't highlight blank lines at the start or end of a change
      const firstNonBlankLine = lines.findIndex(Boolean);
      const lastNonBlankLine = lines.reverse().findIndex(Boolean);

      // Subtract 1 because we want to include the current line number in the range
      const rangeStart = currentLineNumber + firstNonBlankLine;
      const rangeEnd = currentLineNumber + count - 1 - lastNonBlankLine;
      const range =
        rangeStart === rangeEnd ? rangeStart : `${rangeStart}-${rangeEnd}`;

      return {
        highlightedLines: [...highlightedLines, range],
        currentLineNumber: currentLineNumber + count,
      };
    },
    { highlightedLines: [], currentLineNumber: 1 }
  );

  return highlightedLines.join(',');
};

export default TutorialEditor;
