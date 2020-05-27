import React from 'react';
import styles from './Step.module.scss';

const Step = ({ children, stepNumber, stepTitle }) => (
  <div className={styles.wrapper}>
    {stepNumber && <p className={styles.stepNumber}>{`Step ${stepNumber}`}</p>}
    {stepTitle && <p className={styles.stepTitle}>{stepTitle}</p>}
    <div className={styles.container}>{children}</div>
  </div>
);

export default Step;
