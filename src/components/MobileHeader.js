import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import Navigation from './Navigation';
import HamburgerMenu from './HamburgerMenu';
import styles from './MobileHeader.module.scss';

const MobileHeader = ({ className, isOpen, toggle }) => {
  return (
    <aside className={cx(styles.container, className)}>
      <div className={styles.menuBar}>
        <Link to="/" className={styles.logo} />

        <HamburgerMenu
          className={styles.hamburgerMenu}
          toggle={toggle}
          isOpen={isOpen}
        />
      </div>

      {isOpen && <Navigation className={styles.navigation} />}
    </aside>
  );
};

MobileHeader.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default MobileHeader;
