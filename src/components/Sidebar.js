import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import Navigation from './Navigation';
import styles from './Sidebar.module.scss';

const Sidebar = ({ className }) => (
  <aside className={cx(styles.sidebar, className)}>
    <Link to="/" className={styles.logo} />
    <Navigation />
  </aside>
);

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
