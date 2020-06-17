import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import Navigation from './Navigation';
import HamburgerMenu from './HamburgerMenu';
import styles from './MobileHeader.module.scss';

const MobileHeader = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={cx(styles.container, className)}>
      <Link to="/" className={styles.logo} />

      <HamburgerMenu
        className={styles.hamburgerMenu}
        toggle={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      />

      {/* <Navigation /> */}
    </aside>
  );
};

MobileHeader.propTypes = {
  className: PropTypes.string,
};

export default MobileHeader;
