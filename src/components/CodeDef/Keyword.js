import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeDef.module.scss';

const Keyword = ({ children }) => (
  <span className={styles.keyword}>{children}</span>
);

Keyword.propTypes = {
  children: PropTypes.node,
};

export default Keyword;
