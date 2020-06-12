import React from 'react';
import SideBySide from './SideBySide';
import PropTypes from 'prop-types';

import styles from './Intro.module.scss';

const Intro = ({ children, type }) => (
  <SideBySide type={type} className={styles.container}>
    {children}
  </SideBySide>
);

Intro.propTypes = {
  children: PropTypes.node.isRequired,
  // Only video or code is supported at the moment
  type: PropTypes.oneOf('Video', 'pre'),
};

Intro.defaultProps = {
  type: 'Video',
};

export default Intro;
