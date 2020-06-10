import React from 'react';
import SideBySide from './SideBySide';
import PropTypes from 'prop-types';

import styles from './Intro.module.scss';

const Intro = ({ children }) => (
  <SideBySide type="Video" className={styles.container}>
    {children}
  </SideBySide>
);

Intro.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Intro;
