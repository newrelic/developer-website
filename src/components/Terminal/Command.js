import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import AnimatedCommand from './AnimatedCommand';
import CommandLine from './CommandLine';
import ShellOutput from './ShellOutput';

const Command = ({ animate, command, getTokenProps, onDone, typingDelay }) => {
  return animate ? (
    <AnimatedCommand
      command={command}
      getTokenProps={getTokenProps}
      onDone={onDone}
      typingDelay={typingDelay}
    />
  ) : (
    <StaticCommand command={command} getTokenProps={getTokenProps} />
  );
};

Command.propTypes = {
  animate: PropTypes.bool,
  command: PropTypes.object.isRequired,
  getTokenProps: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  typingDelay: PropTypes.number,
};

Command.defaultProps = {
  typingDelay: 0,
};

const StaticCommand = ({ command, getTokenProps }) => (
  <>
    {command.lines.map((line, idx) => (
      <CommandLine
        animate={false}
        key={`command-${idx}`}
        line={line}
        prompt={idx > 0 ? '>' : '$'}
        getTokenProps={getTokenProps}
      >
        {line.map((token, key) => (
          // eslint-disable-next-line react/jsx-key
          <span
            css={css`
              display: inline-block;
              vertical-align: baseline;
            `}
            {...getTokenProps({ token, key })}
          />
        ))}
      </CommandLine>
    ))}

    {command.output.map((line, idx) => (
      <ShellOutput key={`output-${idx}`} line={line} />
    ))}
  </>
);

StaticCommand.propTypes = {
  command: PropTypes.object.isRequired,
  getTokenProps: PropTypes.func.isRequired,
};

export default Command;
