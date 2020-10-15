import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Button, useClipboard } from '@newrelic/gatsby-theme-newrelic';
import SyntaxHighlighter from './SyntaxHighlighter';
import Cursor from './Cursor';
import theme from './theme';

const Terminal = ({ children }) => {
  const [copied, copy] = useClipboard();

  return (
    <div
      css={css`
        --chrome-color: #252526;
        --border-radius: 0.25rem;

        background: #1e1e1e;
        border-radius: var(--border-radius);
      `}
    >
      <div
        css={css`
          background: var(--chrome-color);
          display: grid;
          grid-template-columns: repeat(3, auto) 1fr 90px;
          grid-gap: 0.5rem;
          align-items: center;
          padding: 0.25rem 1rem;
          border-top-left-radius: var(--border-radius);
          border-top-right-radius: var(--border-radius);
        `}
      >
        <FrameButton color="#ed6b60" />
        <FrameButton color="#f5be4f" />
        <FrameButton color="#62c554" />
        <div
          css={css`
            color: #ccc;
            text-align: center;
            font-family: var(--code-font);
            font-size: 0.75rem;
          `}
        >
          bash
        </div>

        <Button
          variant={Button.VARIANT.LINK}
          size={Button.SIZE.SMALL}
          onClick={() => copy(children)}
          className="dark-mode"
          css={css`
            justify-self: end;
            white-space: nowrap;
          `}
        >
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
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
          <SyntaxHighlighter code={children.trim()} />
        </code>
      </pre>
    </div>
  );
};

const FrameButton = ({ color }) => (
  <div
    css={css`
      background: ${color};
      border-radius: 50%;
      width: 10px;
      height: 10px;
    `}
  />
);

FrameButton.propTypes = {
  color: PropTypes.string,
};

Terminal.propTypes = {
  children: PropTypes.string,
};

export default Terminal;
