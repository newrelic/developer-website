const MULTILINE_COMMAND = /\\\s*$/;
const OUTPUT_TAG = /^\[output\](\s|$)/;

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
          output: [...data.output, rawLines[idx].replace(OUTPUT_TAG, '')],
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

export default rollupIntoCommands;
