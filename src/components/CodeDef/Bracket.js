import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeDef.module.scss';

const Bracket = ({ children }) => (
  <span className={styles.bracket}>{children}</span>
);

Bracket.propTypes = {
  children: PropTypes.node,
};

export default Bracket;
