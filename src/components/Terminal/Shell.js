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
import CommandLine from './CommandLine';
import theme from './theme';
import rollupIntoCommands from './rollupIntoCommands';
import { assign, Machine } from 'xstate';
import { useMachine } from '@xstate/react';

const Shell = forwardRef(({ animate, highlight, code }, ref) => {
  const { tokens, getTokenProps } = highlight;
  const commands = rollupIntoCommands(tokens, code);
  const [state, send] = useMachine(machine, {
    context: { commands, step: 0 },
  });
  const shellRef = useRef();
  const [height, setHeight] = useState(null);

  const shownCommands = state.matches('boot')
    ? commands
    : commands.slice(0, state.context.step);

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
        {shownCommands.map((command, idx) => (
          <Command
            key={idx}
            animate={!state.matches('boot')}
            command={command}
            getTokenProps={getTokenProps}
            typingDelay={idx === 0 ? 2000 : 500}
            onDone={() => {
              send('COMMAND_EXECUTED');
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

const machine = Machine(
  {
    id: 'shell',
    initial: 'boot',
    states: {
      boot: {
        on: {
          INIT: 'idle',
        },
      },
      idle: {
        entry: assign({ step: 0 }),
        on: {
          BEGIN_TYPING: {
            target: 'typing',
            actions: assign({ step: 1 }),
          },
        },
      },
      typing: {
        on: {
          COMMAND_EXECUTED: [
            { target: 'done', cond: 'enteredEveryCommand' },
            { actions: assign({ step: (context) => context.step + 1 }) },
          ],
        },
      },
      done: {
        final: true,
      },
    },
  },
  {
    guards: {
      enteredEveryCommand: ({ commands, step }) => step === commands.length,
    },
  }
);

export default Shell;
