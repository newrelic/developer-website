import React from 'react';
import styles from './Intro.module.scss';

const Intro = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Intro;
