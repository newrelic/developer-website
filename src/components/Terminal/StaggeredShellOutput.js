import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ShellOutput from './ShellOutput';
import guassianRound from './gaussianRound';

const StaggeredShellOutput = ({ output, delay, onDone }) => {
  const callback = useRef();
  const timeout = useRef(guassianRound(100, 25));
  const [step, setStep] = useState(0);
  const done = output.length === step;

  useEffect(() => {
    callback.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (done) {
      callback.current();
    }

    const id = setTimeout(
      () => {
        setStep((step) => step + 1);
        timeout.current = guassianRound(80, 50);
      },
      step === 0 ? delay : timeout.current
    );

    return () => clearTimeout(id);
  }, [step, done, delay]);

  return output
    .slice(0, step)
    .map((line, idx) => <ShellOutput key={idx} line={line} />);
};

StaggeredShellOutput.propTypes = {
  output: PropTypes.array.isRequired,
  delay: PropTypes.number,
  onDone: PropTypes.func.isRequired,
};

StaggeredShellOutput.defaultProps = {
  delay: 100,
};

export default StaggeredShellOutput;
