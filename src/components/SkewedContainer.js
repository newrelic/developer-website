import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './SkewedContainer.module.scss';

const SkewedContainer = ({ className, children }) => (
  <div className={cx(styles.container, className)}>
    <div className={styles.content}>{children}</div>
  </div>
);

SkewedContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SkewedContainer;
