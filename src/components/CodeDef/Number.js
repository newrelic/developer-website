import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeDef.module.scss';

const NumberValue = ({ value }) => (
  <span className={styles.number}>{value}</span>
);

NumberValue.propTypes = {
  value: PropTypes.number.isRequired,
};

export default NumberValue;
