import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { link } from '../types';
// TODO: styles

// TODO: aria

// recursively create navigation
const renderNav = (page, index) => (
  <li key={index}>
    <Link to={page.url}>{page.displayName}</Link>
    {page.children && <ul>{page.children.map(renderNav)}</ul>}
  </li>
);

const Sidebar = ({ pages }) => (
  <aside className="Sidebar">
    <h3>Pages</h3>
    <nav>
      <ul>{pages.map(renderNav)}</ul>
    </nav>
  </aside>
);

Sidebar.propTypes = {
  pages: PropTypes.arrayOf(link),
};

export default Sidebar;
