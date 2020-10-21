import { assign, spawn, Machine } from 'xstate';
import gaussianRound from './gaussianRound';

const ONLY_WHITESPACE = /^\s*$/;

const machine = Machine(
  {
    id: 'terminal',
    initial: 'boot',
    context: {
      renderedLines: [],
      lineNumber: 0,
    },
    states: {
      boot: {
        entry: assign({ renderedLines: ({ lines }) => lines }),
        on: {
          INIT: 'idle',
        },
      },
      idle: {
        entry: assign({ renderedLines: [] }),
        on: {
          BEGIN_TYPING: {
            target: 'typing',
            actions: assign({
              renderedLines: ({ lines }) => lines.slice(0, 1),
            }),
          },
        },
      },
      typing: {
        on: {
          PRESS_ENTER: [
            { target: 'waiting', cond: 'awaitsOutput' },
            { actions: 'nextLine', cond: 'isMultilineCommand' },
            { actions: 'nextLine', cond: 'hasNextCommand' },
            { target: 'done' },
          ],
        },
      },
      waiting: {
        entry: assign({
          ref: ({ lines, lineNumber }, event) => {
            return spawn((send) => {
              if (ONLY_WHITESPACE.test(lines[lineNumber].line)) {
                return send('ECHO');
              }

              const id = setTimeout(
                () => {
                  send('ECHO');
                },
                event.type === 'PRESS_ENTER'
                  ? 1000
                  : Math.max(30, gaussianRound(90, 40))
              );

              return () => clearTimeout(id);
            });
          },
        }),
        on: {
          ECHO: [
            { target: 'waiting', actions: 'nextLine', cond: 'awaitsOutput' },
            { target: 'typing', actions: 'nextLine', cond: 'hasNextCommand' },
            { target: 'done' },
          ],
        },
      },
      done: {
        type: 'final',
      },
    },
  },
  {
    actions: {
      nextLine: assign({
        lineNumber: (context) => context.lineNumber + 1,
        renderedLines: ({ renderedLines, lines, lineNumber }) => [
          ...renderedLines,
          lines[lineNumber + 1],
        ],
      }),
    },
    guards: {
      awaitsOutput: ({ lines, lineNumber }) =>
        lines[lineNumber + 1]?.type === 'OUTPUT',

      isMultilineCommand: ({ lines, lineNumber }) =>
        lines[lineNumber].type === 'MULTILINE_COMMAND',

      isDone: ({ lines, lineNumber }) => lineNumber === lines.length - 1,

      hasNextCommand: ({ lines, lineNumber }) =>
        lines[lineNumber + 1]?.type === 'COMMAND',
    },
  }
);

export default machine;
