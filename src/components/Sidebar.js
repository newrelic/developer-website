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

const Sidebar = ({ pages }) => (
  <aside className="Sidebar">
    <h3>Pages</h3>
    <nav role="navigation" aria-label="Sidebar">
      <ul>{pages.map(renderNav)}</ul>
    </nav>
  </aside>
);

Sidebar.propTypes = {
  pages: PropTypes.arrayOf(link),
};

export default Sidebar;
