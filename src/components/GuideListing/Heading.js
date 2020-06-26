import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './GuideListing.module.scss';

const Heading = ({ children, className }) => {
  return <h2 className={cx(styles.heading, className)}>{children}</h2>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;
