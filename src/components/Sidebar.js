import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

import { link } from '../types';
import styles from './Sidebar.module.scss';

// recursively create navigation
const renderNav = (page, index) => (
  <li key={index}>
    {page.url ? (
      <Link to={page.url} className={cx({ [styles.isActive]: page.active })}>
        {page.displayName}
      </Link>
    ) : (
      <div>{page.displayName}</div>
    )}
    {page.children && <ul>{page.children.map(renderNav)}</ul>}
  </li>
);

const Sidebar = ({ className, pages, isOpen, toggle }) => (
  <aside className={cx(styles.Sidebar, className, { [styles.isOpen]: isOpen })}>
    <div className={styles.top}>
      <h3>Pages</h3>
      <button
        aria-expanded={isOpen}
        aria-label="Main Menu Toggle"
        type="button"
        onClick={() => toggle()}
      >
        {isOpen ? 'close' : 'open'}
      </button>
    </div>
    <nav role="navigation" aria-label="Sidebar">
      <ul>{pages.map(renderNav)}</ul>
    </nav>
  </aside>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(link).isRequired,
  isOpen: PropTypes.bool,
};

Sidebar.defaultProps = {
  isOpen: false,
};

export default Sidebar;
