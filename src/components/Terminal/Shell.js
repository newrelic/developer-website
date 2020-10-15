import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Command from './Command';
import theme from './theme';
import rollupIntoCommands from './rollupIntoCommands';

const Shell = ({ highlight, code }) => {
  return (
    <pre
      css={css`
        ${theme};

        padding: 1rem;
        font-family: var(--code-font);
        font-size: 0.75rem;
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        color: var(--color-nord-6);
        display: block;
        overflow: auto;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        tab-size: 2;
        hyphens: none;
        text-shadow: none;

        > code {
          background: none;
          padding: 0;
          width: 100%;
        }

        .token-line {
          display: grid;
          grid-template-columns: 1ch 1fr;
          grid-gap: 1rem;
        }
      `}
    >
      <code>
        {rollupIntoCommands(highlight.tokens, code).map((command, idx) => (
          <Command
            key={idx}
            command={command}
            getTokenProps={highlight.getTokenProps}
          />
        ))}
      </code>
    </pre>
  );
};

Shell.propTypes = {
  code: PropTypes.string.isRequired,
  highlight: PropTypes.object,
};

export default Shell;
