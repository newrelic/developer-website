import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import Logo from './Logo';
import Navigation from './Navigation';
import HamburgerMenu from './HamburgerMenu';
import SearchInput from './SearchInput';
import styles from './MobileHeader.module.scss';

const MobileHeader = ({ className, isOpen, toggle }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className={cx(styles.container, className)}>
      <div className={styles.menuBar}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>

        <HamburgerMenu
          className={styles.hamburgerMenu}
          toggle={toggle}
          isOpen={isOpen}
        />
      </div>

      {isOpen && (
        <>
          <SearchInput
            className={styles.searchInput}
            placeholder="Search developer docs"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <Navigation
            mobile
            searchTerm={searchTerm}
            className={styles.navigation}
          />
        </>
      )}
    </header>
  );
};

MobileHeader.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default MobileHeader;
