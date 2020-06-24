import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import Logo from './Logo';
import Navigation from './Navigation';
import SearchInput from './SearchInput';
import styles from './Sidebar.module.scss';

const Sidebar = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <aside className={cx(styles.sidebar, className)}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <SearchInput
        className={styles.searchInput}
        placeholder="Search developer docs"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <Navigation className={styles.nav} searchTerm={searchTerm} />
    </aside>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
