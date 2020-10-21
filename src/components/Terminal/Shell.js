import React, {
  forwardRef,
  useState,
  useRef,
  useLayoutEffect,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import CommandLine from './CommandLine';
import ShellOutput from './ShellOutput';
import theme from './theme';
import translateLines from './utils/translateLines';
import { useMachine } from '@xstate/react';
import machine from './machine';

const Shell = forwardRef(({ animate, highlight, code }, ref) => {
  const { tokens, getTokenProps } = highlight;
  const lines = translateLines(tokens, code);
  const [state, send] = useMachine(machine, {
    context: { lines },
  });
  const shellRef = useRef();
  const [height, setHeight] = useState(null);
  const { lineNumber, renderedLines } = state.context;

  useImperativeHandle(ref, () => ({
    startAnimation: () => send('BEGIN_TYPING'),
  }));

  useLayoutEffect(() => {
    const { height } = shellRef.current.getBoundingClientRect();
    setHeight(height);

    if (animate) {
      send('INIT');
    }
  }, [animate, send]);

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
        {state.matches('idle') && <CommandLine cursor prompt="$" />}
        {renderedLines.map(({ type, line }, idx) => {
          const animate = !state.matches('boot');

          return type === 'OUTPUT' ? (
            <ShellOutput key={idx} line={line} />
          ) : (
            <CommandLine
              key={idx}
              cursor={animate && idx === lineNumber}
              animate={animate}
              prompt={type === 'MULTILINE_COMMAND' ? '>' : '$'}
              typingDelay={idx === 0 ? 1500 : 0}
              onFinishedTyping={() => send('PRESS_ENTER')}
            >
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span
                  css={css`
                    display: inline-block;
                    vertical-align: baseline;
                  `}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </CommandLine>
          );
        })}
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
