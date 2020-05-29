import React from 'react';
import styles from './Step.module.scss';
import Proptypes from 'prop-types';

const Step = ({ children, number, total, title }) => (
  <div className={styles.wrapper}>
    <p className={styles.stepNumber}>{`Step ${number} of ${total}`}</p>
    {title && <p className={styles.title}>{title}</p>}
    <div className={styles.container}>{children}</div>
  </div>
);

Step.propTypes = {
  children: Proptypes.node.isRequired,
  number: Proptypes.number.isRequired,
  total: Proptypes.number.isRequired,
  title: Proptypes.string,
};

export default Step;
