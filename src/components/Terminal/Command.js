import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CommandLine from './CommandLine';
import StaggeredShellOutput from './StaggeredShellOutput';

const Command = ({ command, getTokenProps, onRendered }) => {
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

      <StaggeredShellOutput
        output={command.output}
        delay={1500}
        onRendered={onRendered}
      />
    </>
  );
};

Command.propTypes = {
  command: PropTypes.object.isRequired,
  getTokenProps: PropTypes.func.isRequired,
  onRendered: PropTypes.func.isRequired,
};

export default Command;
