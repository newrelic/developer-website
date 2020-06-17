import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import { BreadcrumbContext } from './BreadcrumbContext';

import { link } from '../types';
import styles from './Sidebar.module.scss';

// recursively create navigation
const renderNav = (pages, depthLevel = 0) => {
  return pages.map((page, index) => {
    const crumbs = useContext(BreadcrumbContext).flatMap((x) => x.displayName);
    const [isDisplay, setIsDisplay] = useState(
      crumbs.length === depthLevel || crumbs.includes(page.displayName)
    );
    const isCurrentPage = crumbs[crumbs.length - 1] === page.displayName;

    const display = page.url ? (
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
    );
    let subNav;

    if (page.children) {
      subNav = renderNav(page.children, depthLevel + 1);
    }
    return (
      <li
        className={cx(styles[`navDepth${depthLevel}`], {
          [styles.isCurrentPage]: isCurrentPage,
        })}
        key={index}
      >
        {display}
        <ul className={cx(styles.nestedNav, { [styles.isDisplay]: isDisplay })}>
          {subNav}
        </ul>
      </li>
    );
  });
};

const Sidebar = ({ className, pages }) => (
  <aside className={cx(styles.sidebar, className)}>
    <Link to="/" className={styles.logo} />
    <nav role="navigation" aria-label="Sidebar">
      <ul className={styles.listNav}>{renderNav(pages)}</ul>
    </nav>
  </aside>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.arrayOf(link).isRequired,
};

export default Sidebar;
