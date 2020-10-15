import React from 'react';
import PropTypes from 'prop-types';
import CommandLine from './CommandLine';
import ShellOutput from './ShellOutput';
import StaggeredShellOutput from './StaggeredShellOutput';
import { useMachine } from '@xstate/react';
import { assign, Machine } from 'xstate';

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

const Command = ({ animate, command, getTokenProps, onDone, typingDelay }) => {
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
          animate={animate}
          line={line}
          prompt={idx > 0 ? '>' : '$'}
          getTokenProps={getTokenProps}
          onDoneTyping={() => send('PRESS_ENTER')}
          typingDelay={idx === 0 ? typingDelay : 0}
        />
      ))}

      {(state.matches('commandEntered') || state.matches('finished')) && (
        <>
          {animate ? (
            <StaggeredShellOutput
              output={command.output}
              delay={1500}
              onDone={() => send('COMMAND_EXECUTED')}
            />
          ) : (
            command.output.map((line, idx) => (
              <ShellOutput key={idx} line={line} />
            ))
          )}
        </>
      )}
    </>
  );
};

Command.propTypes = {
  animate: PropTypes.bool,
  command: PropTypes.object.isRequired,
  getTokenProps: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  typingDelay: PropTypes.number,
};

Command.defaultProps = {
  typingDelay: 0,
};

export default Command;
