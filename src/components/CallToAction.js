import React from 'react';
import './CallToAction.scss';
import PropTypes from 'prop-types';

const CallToAction = ({ step, text, children }) => {
  return (
    <div className="CallToAction">
      {step && <div className="CallToAction-step">{step}</div>}
      {text && <h3>{text}</h3>}
      {children}
    </div>
  );
};
CallToAction.propTypes = {
  step: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default CallToAction;
