import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './GuideListing.module.scss';

const Description = ({ children, className }) => {
  return <p className={cx(styles.description, className)}>{children}</p>;
};

Description.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Description;
