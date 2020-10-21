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
            { actions: 'nextLine', cond: 'isMultilineCommand' },
            {
              target: 'waiting',
              cond: 'awaitsOutput',
              actions: assign({ timeout: 800 }),
            },
            { target: 'done' },
          ],
        },
      },
      waiting: {
        entry: assign({
          ref: ({ timeout }) =>
            spawn((send) => {
              const id = setTimeout(() => {
                send('ECHO');
              }, timeout);

              return () => clearTimeout(id);
            }),
        }),
        on: {
          ECHO: [
            {
              target: 'waiting',
              actions: [
                'nextLine',
                assign({
                  timeout: ({ lines, lineNumber }) => {
                    const { line: nextLine } = lines[lineNumber];

                    return ONLY_WHITESPACE.test(nextLine)
                      ? 0
                      : Math.max(30, gaussianRound(80, 50));
                  },
                }),
              ],
              cond: 'awaitsOutput',
            },
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
      awaitsOutput: ({ lines, lineNumber }) => {
        const line = lines[lineNumber];

        return ['OUTPUT', 'COMMAND'].includes(line.type) && !line.terminates;
      },
      isMultilineCommand: ({ lines, lineNumber }) =>
        lines[lineNumber].type === 'MULTILINE_COMMAND',
      isDone: ({ lines, lineNumber }) => lineNumber === lines.length - 1,
      hasNextCommand: ({ lines, lineNumber }) =>
        lines[lineNumber].terminates && lineNumber !== lines.length - 1,
    },
  }
);

export default machine;
