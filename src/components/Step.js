import React from 'react';
import Proptypes from 'prop-types';
import SideBySide from './SideBySide';

import styles from './Step.module.scss';

const Step = ({ children, number, total }) => (
  <div className={styles.wrapper}>
    <p className={styles.stepNumber}>{`Step ${number} of ${total}`}</p>
    <div className={styles.stepDetails}>
      <SideBySide type={['pre', 'img']}>{children}</SideBySide>
    </div>
  </div>
);

Step.propTypes = {
  children: Proptypes.node.isRequired,
  number: Proptypes.number.isRequired,
  total: Proptypes.number.isRequired,
};

export default Step;
