import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeDef.module.scss';

const StringValue = ({ value }) => (
  <span className={styles.string}>"{value}"</span>
);

StringValue.propTypes = {
  value: PropTypes.string.isRequired,
};

export default StringValue;
