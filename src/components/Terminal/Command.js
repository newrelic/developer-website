import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CommandLine from './CommandLine';
import ShellOutput from './ShellOutput';
import StaggeredShellOutput from './StaggeredShellOutput';

const Command = ({ animate, command, getTokenProps, onDone }) => {
  const callback = useRef();
  const [outputDone, setOutputDone] = useState(command.output.length === 0);
  const [step, setStep] = useState(1);
  const shownLines = command.lines.slice(0, step);
  const finishedTypingCommands = step > command.lines.length;

  useEffect(() => {
    callback.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (finishedTypingCommands && outputDone) {
      callback.current();
    }
  }, [finishedTypingCommands, outputDone]);

  return (
    <>
      {shownLines.map((line, idx) => (
        <CommandLine
          key={idx}
          animate={animate}
          line={line}
          prompt={idx > 0 ? '>' : '$'}
          getTokenProps={getTokenProps}
          onDoneTyping={() => {
            setStep((step) => step + 1);
          }}
          typingDelay={idx === 0 ? 2000 : 0}
        />
      ))}

      {step >= command.lines.length && (
        <>
          {animate ? (
            <StaggeredShellOutput
              output={command.output}
              delay={1500}
              onDone={() => setOutputDone(true)}
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
  onDone: PropTypes.func.isRequired,
};

export default Command;
