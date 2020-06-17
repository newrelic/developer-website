import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import Logo from './Logo';
import Navigation from './Navigation';
import styles from './Sidebar.module.scss';

const Sidebar = ({ className }) => (
  <aside className={cx(styles.sidebar, className)}>
    <Link to="/">
      <Logo className={styles.logo} />
    </Link>
    <Navigation className={styles.nav} />
  </aside>
);

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
