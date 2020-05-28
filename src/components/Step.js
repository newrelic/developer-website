import React from 'react';
import styles from './Step.module.scss';
import Proptypes from 'prop-types';

const Step = ({ children, stepNumber, title }) => (
  <div className={styles.wrapper}>
    {stepNumber && <p className={styles.stepNumber}>{`Step ${stepNumber}`}</p>}
    {title && <p className={styles.title}>{title}</p>}
    <div className={styles.container}>{children}</div>
  </div>
);

Step.propTypes = {
  children: Proptypes.node.isRequired,
  stepNumber: Proptypes.string,
  title: Proptypes.string,
};

export default Step;
