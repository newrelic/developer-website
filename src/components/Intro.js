import React from 'react';
import styles from './Intro.module.scss';
import Proptypes from 'prop-types';

const Intro = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Intro.propTypes = {
  children: Proptypes.node,
};

export default Intro;
