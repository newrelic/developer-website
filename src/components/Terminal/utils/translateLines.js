import collapseLine from './collapseLine';

const MULTILINE_COMMAND = /\\\s*$/;
const OUTPUT_TAG = /^\[output\](\s|$)/;

const translateLines = (lines, code) => {
  const rawLines = code.split('\n');

  return lines.map((line, idx) => {
    const command = collapseLine(line);

    return OUTPUT_TAG.test(command)
      ? {
          type: 'OUTPUT',
          line: rawLines[idx].replace(OUTPUT_TAG, ''),
        }
      : {
          type:
            MULTILINE_COMMAND.test(command) ||
            MULTILINE_COMMAND.test(collapseLine(lines[idx - 1] || []))
              ? 'MULTILINE_COMMAND'
              : 'COMMAND',
          line,
        };
  });
};

export default translateLines;
