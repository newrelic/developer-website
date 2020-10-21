import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import CommandLine from './CommandLine';
import ShellOutput from './ShellOutput';
import theme from './theme';
import translateLines from './utils/translateLines';
import { useMachine } from '@xstate/react';
import machine from './machine';
import gaussianRound from './gaussianRound';
import MenuBar from './MenuBar';
import { useIntersection } from 'react-use';
import { useClipboard } from '@newrelic/gatsby-theme-newrelic';

const Shell = ({ animate, copyable, highlight, code }) => {
  const { tokens, getTokenProps } = highlight;
  const lines = translateLines(tokens, code);

  const [height, setHeight] = useState(null);
  const ref = useRef();
  const shellRef = useRef();
  const [state, send] = useMachine(machine, {
    context: { lines },
  });

  const [copied, copy] = useClipboard();

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px 0px -50% 0px',
  });

  useEffect(() => {
    if (animate && intersection?.isIntersecting) {
      send('BEGIN_TYPING');
    }
  }, [animate, intersection, send]);

  useLayoutEffect(() => {
    const { height } = shellRef.current.getBoundingClientRect();
    setHeight(height);

    if (animate) {
      send('INIT');
    }
  }, [animate, send]);

  const { lineNumber, renderedLines } = state.context;

  return (
    <div
      ref={ref}
      css={css`
        --chrome-color: #252526;
        --border-radius: 0.25rem;

        background: #1e1e1e;
        border-radius: var(--border-radius);
      `}
    >
      <MenuBar
        copyable={copyable}
        copied={copied}
        onCopy={() => copy(getCopyOutput(lines))}
      />
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
            const previousLine = renderedLines[idx - 1];

            return type === 'OUTPUT' ? (
              <ShellOutput key={idx} line={line} />
            ) : (
              <CommandLine
                key={idx}
                cursor={state.matches('typing') && idx === lineNumber}
                animate={!state.matches('boot')}
                prompt={
                  type === 'MULTILINE_COMMAND' &&
                  previousLine?.type === 'MULTILINE_COMMAND'
                    ? '>'
                    : '$'
                }
                typingDelay={getTypingDelay(line, previousLine)}
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
    </div>
  );
};

const getCopyOutput = (lines) => {
  return lines
    .filter(({ type }) => ['COMMAND', 'MULTILINE_COMMAND'].includes(type))
    .map(({ line }) =>
      line
        .filter((token) => !token.types.includes('comment'))
        .map((token) => token.content)
        .join('')
        .trimEnd()
    )
    .filter(Boolean)
    .join('\n');
};

const getTypingDelay = (line, previousLine) => {
  // Delay the first line more than every other line to allow time for the user
  // to adjust to the animation after scrolling the terminal into view
  if (!previousLine) {
    return 1500;
  }

  // Allow commands immediately following output space to breathe so that the
  // user has time to ingest the output before the typing animation begins again
  if (previousLine.type === 'OUTPUT') {
    return Math.max(800, gaussianRound(1000, 50));
  }

  // If we are starting a new command after typing a previous command, delay
  // the typing just a bit, unless we are continuing a multiline command
  if (line.type === 'COMMAND' || previousLine.type !== 'MULTILINE_COMMAND') {
    return Math.max(250, gaussianRound(250, 25));
  }

  return 0;
};

Shell.propTypes = {
  animate: PropTypes.bool,
  code: PropTypes.string.isRequired,
  copyable: PropTypes.bool,
  highlight: PropTypes.shape({
    tokens: PropTypes.array.isRequired,
    getTokenProps: PropTypes.func.isRequired,
  }),
};

export default Shell;
