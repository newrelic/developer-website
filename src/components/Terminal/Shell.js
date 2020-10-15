import React, { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Command from './Command';
import theme from './theme';
import rollupIntoCommands from './rollupIntoCommands';
import Cursor from './Cursor';

const Shell = ({ animate, highlight, code }) => {
  const ref = useRef();
  const [animated, setAnimated] = useState(false);
  const [height, setHeight] = useState(null);
  const [step, setStep] = useState(1);
  const { tokens, getTokenProps } = highlight;
  const commands = rollupIntoCommands(tokens, code);
  const shownCommands = animated ? commands.slice(0, step) : commands;
  const cursor = <Cursor />;

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setHeight(height);

    if (animate) {
      setAnimated(true);
    }
  }, [animate]);

  return (
    <pre
      ref={ref}
      css={css`
        ${theme};

        padding: 1rem;
        height: ${height}px;
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
        {shownCommands.map((command, idx) => (
          <Command
            key={idx}
            cursor={cursor}
            animate={animated}
            command={command}
            getTokenProps={getTokenProps}
            typingDelay={idx === 0 ? 2000 : 500}
            onDone={() => {
              setStep((step) => step + 1);
            }}
          />
        ))}
      </code>
    </pre>
  );
};

Shell.propTypes = {
  animate: PropTypes.bool,
  code: PropTypes.string.isRequired,
  highlight: PropTypes.shape({
    tokens: PropTypes.array.isRequired,
    getTokenProps: PropTypes.func.isRequired,
  }),
};

export default Shell;
