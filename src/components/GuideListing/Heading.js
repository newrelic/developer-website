import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './GuideListing.module.scss';

const Heading = ({ children, className }) => {
  return <h1 className={cx(styles.heading, className)}>{children}</h1>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;
