import React from 'react';
import cx from 'classnames';
import Heading from './Heading';
import Description from './Description';
import List from './List';
import PropTypes from 'prop-types';
import styles from './GuideListing.module.scss';

const GuideListing = ({ className, children }) => (
  <div className={cx(styles.guideListing, className)}>{children}</div>
);

GuideListing.Heading = Heading;
GuideListing.Description = Description;
GuideListing.List = List;

GuideListing.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default GuideListing;
