import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CommandLine from './CommandLine';
import ShellOutput from './ShellOutput';
import StaggeredShellOutput from './StaggeredShellOutput';

const Command = ({ animate, command, getTokenProps, onRendered }) => {
  const [steps, setStep] = useState(1);
  const shownLines = command.lines.slice(0, steps);
  const done = steps >= command.lines.length;

  return (
    <>
      {shownLines.map((line, idx) => (
        <CommandLine
          key={`command-${idx}`}
          line={line}
          prompt={idx > 0 ? '>' : '$'}
          getTokenProps={getTokenProps}
          onDoneTyping={() => setStep((step) => step + 1)}
          typingDelay={idx === 0 ? 2000 : 0}
        />
      ))}

      {done && (
        <>
          {animate ? (
            <StaggeredShellOutput
              output={command.output}
              delay={1500}
              onRendered={onRendered}
            />
          ) : (
            command.output.map((line, idx) => (
              <ShellOutput key={idx} line={line} />
            ))
          )}
        </>
      )}
    </>
  );
};

Command.propTypes = {
  animate: PropTypes.bool,
  command: PropTypes.object.isRequired,
  getTokenProps: PropTypes.func.isRequired,
  onRendered: PropTypes.func.isRequired,
};

export default Command;
