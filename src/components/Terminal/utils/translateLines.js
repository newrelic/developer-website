import collapseLine from './collapseLine';

const MULTILINE_COMMAND = /\\\s*$/;
const OUTPUT_TAG = /^\[output\](\s|$)/;

const translateLines = (lines, code) => {
  const rawLines = code.split('\n');

  return lines.map((line, idx) => {
    const command = collapseLine(line);
    const nextCommand = collapseLine(lines[idx + 1] || []);
    const awaitsOutput = OUTPUT_TAG.test(nextCommand);
    const isMultiline = MULTILINE_COMMAND.test(command);

    return OUTPUT_TAG.test(command)
      ? {
          type: 'OUTPUT',
          line: rawLines[idx].replace(OUTPUT_TAG, ''),
          terminates: !awaitsOutput,
        }
      : {
          type: isMultiline ? 'MULTILINE_COMMAND' : 'COMMAND',
          line,
          terminates: !awaitsOutput && !isMultiline,
        };
  });
};

export default translateLines;
