import React from 'react';
import './CallToAction.scss';
import PropTypes from 'prop-types';

const CallToAction = ({ text, children }) => {
  return (
    <div className="callToAction">
      {text && <h3>{text}</h3>}
      {children}
    </div>
  );
};
CallToAction.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default CallToAction;
