import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeDef.module.scss';

const Identifier = ({ children }) => (
  <span className={styles.identifier}>{children}</span>
);

Identifier.propTypes = {
  children: PropTypes.node,
};

export default Identifier;
