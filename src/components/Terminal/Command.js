import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
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
  return animate ? (
    <AnimatedCommand
      command={command}
      getTokenProps={getTokenProps}
      onDone={onDone}
      typingDelay={typingDelay}
    />
  ) : (
    <StaticCommand command={command} getTokenProps={getTokenProps} />
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
          animate
          key={idx}
          line={line}
          prompt={idx > 0 ? '>' : '$'}
          getTokenProps={getTokenProps}
          onDoneTyping={() => send('PRESS_ENTER')}
          typingDelay={idx === 0 ? typingDelay : 0}
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

const StaticCommand = ({ command, getTokenProps }) => (
  <>
    {command.lines.map((line, idx) => (
      <CommandLine
        animate={false}
        key={`command-${idx}`}
        line={line}
        prompt={idx > 0 ? '>' : '$'}
        getTokenProps={getTokenProps}
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
    ))}

    {command.output.map((line, idx) => (
      <ShellOutput key={`output-${idx}`} line={line} />
    ))}
  </>
);

StaticCommand.propTypes = {
  command: PropTypes.object.isRequired,
  getTokenProps: PropTypes.func.isRequired,
};

export default Command;
