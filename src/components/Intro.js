import React from 'react';
import SideBySide from './SideBySide';
import PropTypes from 'prop-types';

import styles from './Intro.module.scss';

const Intro = ({ children, type }) => (
  <SideBySide type={type} className={styles.container}>
    {children}
  </SideBySide>
);

// Only video or code is supported at the moment
const SUPPORTED_TYPES = PropTypes.oneOf(['Video', 'pre']);

Intro.propTypes = {
  children: PropTypes.node.isRequired,
  // either a single supported type, or an array of supported types
  type: PropTypes.oneOfType([
    SUPPORTED_TYPES,
    PropTypes.arrayOf(SUPPORTED_TYPES),
  ]),
};

Intro.defaultProps = {
  type: 'Video',
};

export default Intro;
