import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeDef.module.scss';

const Block = ({ children }) => <div className={styles.block}>{children}</div>;

Block.propTypes = {
  children: PropTypes.node,
};

export default Block;
