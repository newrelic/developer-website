const MULTILINE_COMMAND = /\\\s*$/;
const OUTPUT_TAG = /^\[output\](\s|$)/;
const OUTPUT_COLOR_TOKENS = /{([a-z]+)}(.*?(?={|$))/g;

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

const collapse = (line) => {
  return line
    .filter((token) => !token.types.includes('comment'))
    .map((token) => token.content)
    .join('');
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

export default rollupIntoCommands;
