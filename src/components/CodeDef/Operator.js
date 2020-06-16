import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeDef.module.scss';

const Operator = ({ children }) => (
  <span className={styles.operator}>{children}</span>
);

Operator.propTypes = {
  children: PropTypes.node,
};

export default Operator;
