import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import CommandLine from './CommandLine';
import StaggeredShellOutput from './StaggeredShellOutput';
import Typist from 'react-typist';
import { assign, Machine } from 'xstate';
import { useMachine } from '@xstate/react';

const AnimatedCommand = ({ command, getTokenProps, onDone, typingDelay }) => {
  const [state, send] = useMachine(machine, {
    context: { command },
    actions: {
      notifyFinished: onDone,
    },
  });
  const { currentLine } = state.context;

  return (
    <>
      {command.lines.slice(0, currentLine).map((line, idx) => (
        <CommandLine
          key={idx}
          cursor={state.matches('typing')}
          prompt={idx > 0 ? '>' : '$'}
        >
          <Typist
            startDelay={idx === 0 ? typingDelay : 0}
            avgTypingDelay={40}
            onTypingDone={() => {
              send('PRESS_ENTER');
            }}
            cursor={{ show: false }}
            css={css`
              &:empty {
                display: inline-block;
              }
            `}
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
          </Typist>
        </CommandLine>
      ))}

      {(state.matches('commandEntered') || state.matches('finished')) && (
        <StaggeredShellOutput
          output={command.output}
          delay={1500}
          onDone={() => send('COMMAND_EXECUTED')}
        />
      )}
    </>
  );
};

AnimatedCommand.propTypes = {
  command: PropTypes.object.isRequired,
  getTokenProps: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  typingDelay: PropTypes.number,
};

const machine = Machine(
  {
    id: 'command',
    initial: 'typing',
    context: {
      currentLine: 1,
      command: null,
    },
    states: {
      typing: {
        on: {
          PRESS_ENTER: [
            {
              target: 'commandEntered',
              cond: 'enteredEveryLine',
            },
            {
              actions: assign({
                currentLine: (context) => context.currentLine + 1,
              }),
            },
          ],
        },
      },
      commandEntered: {
        always: [{ target: 'finished', cond: 'hasNoOutput' }],
        on: {
          COMMAND_EXECUTED: 'finished',
        },
      },
      finished: {
        final: true,
        entry: ['notifyFinished'],
      },
    },
  },
  {
    guards: {
      hasNoOutput: ({ command }) => command.output.length === 0,
      enteredEveryLine: ({ command, currentLine }) => {
        return currentLine === command.lines.length;
      },
    },
  }
);

export default AnimatedCommand;
