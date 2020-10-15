import React, {
  forwardRef,
  useState,
  useRef,
  useLayoutEffect,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Command from './Command';
import theme from './theme';
import rollupIntoCommands from './rollupIntoCommands';

const Shell = forwardRef(({ animate, highlight, code }, ref) => {
  const shellRef = useRef();
  const [animated, setAnimated] = useState(false);
  const [height, setHeight] = useState(null);
  const { tokens, getTokenProps } = highlight;
  const commands = rollupIntoCommands(tokens, code);
  const [shownCommands, setShownCommands] = useState(commands);

  useImperativeHandle(ref, () => ({
    startAnimation: () => {
      setAnimated(true);
      setShownCommands(commands.slice(0, 1));
    },
  }));

  useLayoutEffect(() => {
    const { height } = shellRef.current.getBoundingClientRect();
    setHeight(height);

    if (animate) {
      setShownCommands([]);
    }
  }, [animate]);

  return (
    <pre
      ref={shellRef}
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
            animate={animated}
            command={command}
            getTokenProps={getTokenProps}
            typingDelay={idx === 0 ? 2000 : 500}
            onDone={() => {
              setShownCommands((shownCommands) =>
                commands.slice(0, shownCommands.length)
              );
            }}
          />
        ))}
      </code>
    </pre>
  );
});

Shell.propTypes = {
  animate: PropTypes.bool,
  code: PropTypes.string.isRequired,
  highlight: PropTypes.shape({
    tokens: PropTypes.array.isRequired,
    getTokenProps: PropTypes.func.isRequired,
  }),
};

export default Shell;
