import React from 'react';
import PropTypes from 'prop-types';
import CommandLine from './CommandLine';
import ShellOutput from './ShellOutput';

const Command = ({ command, getTokenProps }) => {
  return (
    <>
      {command.lines.map((line, idx) => (
        <CommandLine
          key={`command-${idx}`}
          line={line}
          prompt={idx > 0 ? '>' : '$'}
          getTokenProps={getTokenProps}
        />
      ))}

      {command.output.map((line, idx) => (
        <ShellOutput key={`output-${idx}`} line={line} />
      ))}
    </>
  );
};

Command.propTypes = {
  command: PropTypes.object.isRequired,
  getTokenProps: PropTypes.func.isRequired,
};

export default Command;
