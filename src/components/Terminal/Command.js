import React from 'react';
import PropTypes from 'prop-types';
import AnimatedCommand from './AnimatedCommand';
import StaticCommand from './StaticCommand';

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

export default Command;
