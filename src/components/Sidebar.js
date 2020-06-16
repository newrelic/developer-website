import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import { BreadcrumbContext } from './BreadcrumbContext';

import { link } from '../types';
import styles from './Sidebar.module.scss';

// recursively create navigation
const renderNav = (page, index) => {
  const crumbs = useContext(BreadcrumbContext).flatMap((x) => x.displayName);
  const [isDisplay, setIsDisplay] = useState(crumbs.includes(page.displayName));

  return (
    <li key={index}>
      {page.url ? (
        <Link to={page.url}>{page.displayName}</Link>
      ) : (
        <div
          role="button"
          onClick={() => setIsDisplay(!isDisplay)}
          onKeyPress={() => setIsDisplay(!isDisplay)}
          tabIndex={0}
        >
          {page.displayName}
        </div>
      )}
      {page.children && (
        <ul className={cx(styles.nestedNav, { [styles.isDisplay]: isDisplay })}>
          {page.children.map(renderNav)}
        </ul>
      )}
    </li>
  );
};

const Sidebar = ({ className, pages, isOpen }) => (
  <aside className={cx(styles.sidebar, className, { [styles.isOpen]: isOpen })}>
    <Link to="/" className={styles.logo} />
    <nav role="navigation" aria-label="Sidebar">
      <ul className={styles.listNav}>{pages.map(renderNav)}</ul>
    </nav>
  </aside>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.arrayOf(link).isRequired,
  isOpen: PropTypes.bool,
};

Sidebar.defaultProps = {
  isOpen: false,
};

export default Sidebar;
