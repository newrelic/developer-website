import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeDef.module.scss';

const Type = ({ children }) => <span className={styles.type}>{children}</span>;

Type.propTypes = {
  children: PropTypes.node,
};

export default Type;
