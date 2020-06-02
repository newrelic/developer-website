import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Container.module.scss';

const Container = ({ children, className }) => (
  <div className={cx(styles.container, className)}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
