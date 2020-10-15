import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ShellOutput from './ShellOutput';

const StaggeredShellOutput = ({ output, timeout, delay, onDone }) => {
  const callback = useRef();
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
      },
      step === 0 ? delay : timeout
    );

    return () => clearTimeout(id);
  }, [step, done, delay, timeout]);

  return output
    .slice(0, step)
    .map((line, idx) => <ShellOutput key={idx} line={line} />);
};

StaggeredShellOutput.propTypes = {
  output: PropTypes.array.isRequired,
  timeout: PropTypes.number,
  delay: PropTypes.number,
  onDone: PropTypes.func.isRequired,
};

StaggeredShellOutput.defaultProps = {
  delay: 100,
  timeout: 100,
};

export default StaggeredShellOutput;
