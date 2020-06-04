import React from 'react';
import styles from './CallToAction.module.scss';
import PropTypes from 'prop-types';

const CallToAction = ({ step, text, children }) => {
  return (
    <div className={styles.container}>
      {step && <div className={styles.step}>{step}</div>}
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
