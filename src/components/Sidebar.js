import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

import { link } from '../types';
import './Sidebar.scss';

// recursively create navigation
const renderNav = (page, index) => (
  <li key={index}>
    <Link to={page.url} className={cx({ 'is-active': page.active })}>
      {page.displayName}
    </Link>
    {page.children && <ul>{page.children.map(renderNav)}</ul>}
  </li>
);

const Sidebar = ({ pages, isOpen, toggle }) => (
  <aside className={cx('Sidebar', { 'is-open': isOpen })}>
    <div className="Sidebar-top">
      <h3>Pages</h3>
      <button
        aria-expanded={isOpen}
        className="Sidebar-toggle"
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
  toggle: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(link).isRequired,
  isOpen: PropTypes.bool,
};

Sidebar.defaultProps = {
  isOpen: false,
};

export default Sidebar;
