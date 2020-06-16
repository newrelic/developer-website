import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeDef.module.scss';

const Punctuation = ({ children }) => (
  <span className={styles.bracket}>{children}</span>
);

Punctuation.propTypes = {
  children: PropTypes.node,
};

export default Punctuation;
