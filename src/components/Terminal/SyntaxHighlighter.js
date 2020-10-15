import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import Command from './Command';
import Output from './Output';

const MULTILINE_COMMAND = /\\\s*$/;
const OUTPUT_TAG = /^\[output\](\s|$)/;
const OUTPUT_COLOR_TOKENS = /{([a-z]+)}(.*?(?={|$))/g;

const SyntaxHighlighter = ({ code }) => (
  <Highlight Prism={Prism} code={code} language="shell">
    {({ tokens, getTokenProps }) => {
      const commands = rollupIntoCommands(tokens, code);

      return commands.map(({ lines, output }, commandIdx) => (
        <>
          {lines.map((line, idx) => {
            return (
              <Command
                key={`${commandIdx}-${idx}`}
                line={line}
                prompt={idx > 0 ? '>' : '$'}
                getTokenProps={getTokenProps}
              />
            );
          })}
          {output.map((line, idx) => (
            <Output key={`${commandIdx}-${idx}`} line={line} />
          ))}
        </>
      ));
    }}
  </Highlight>
);

const collapse = (line) => {
  return line
    .filter((token) => !token.types.includes('comment'))
    .map((token) => token.content)
    .join('');
};

const rollupIntoCommands = (lines, code) => {
  const rawLines = code.split('\n');

  const { commands } = lines.reduce(
    ({ commands, terminated }, line, idx) => {
      const command = collapse(line);
      const updateIdx = terminated ? commands.length : commands.length - 1;
      const data = commands[updateIdx] || { lines: [], output: [] };
      const nextCommand = collapse(lines[idx + 1] || []);
      const continues =
        OUTPUT_TAG.test(nextCommand) || MULTILINE_COMMAND.test(command);

      if (OUTPUT_TAG.test(command)) {
        commands[updateIdx] = {
          ...data,
          output: [...data.output, tokenizeOutputLine(rawLines[idx])],
        };
      } else {
        commands[updateIdx] = { ...data, lines: [...data.lines, line] };
      }

      return { commands, terminated: !continues };
    },
    { commands: [{ lines: [], output: [] }], terminated: false }
  );

  return commands;
};

const tokenizeOutputLine = (line) => {
  const text = line.replace(OUTPUT_TAG, '');
  const tokens = Array.from(text.matchAll(OUTPUT_COLOR_TOKENS));

  if (tokens.length === 0) {
    return [{ color: 'plain', text }];
  }

  const startOfColorIdx = text.indexOf('{');
  const coloredTokens = tokens.map(([, color, text]) => ({ color, text }));

  return startOfColorIdx === 0
    ? coloredTokens
    : [{ color: 'plain', text: text.slice(0, startOfColorIdx) }].concat(
        coloredTokens
      );
};

SyntaxHighlighter.propTypes = {
  className: PropTypes.string,
  code: PropTypes.string.isRequired,
};

export default SyntaxHighlighter;
