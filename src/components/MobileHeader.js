import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import Navigation from './Navigation';
import styles from './MobileHeader.module.scss';

const MobileHeader = ({ className }) => (
  <aside className={cx(styles.container, className)}>
    <Link to="/" className={styles.logo} />
    {/* <Navigation /> */}
  </aside>
);

MobileHeader.propTypes = {
  className: PropTypes.string,
};

export default MobileHeader;
