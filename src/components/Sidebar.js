import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import { BreadcrumbContext } from './BreadcrumbContext';

import FeatherIcon from './FeatherIcon';
import Logo from './Logo';
import { link } from '../types';
import styles from './Sidebar.module.scss';

// recursively create navigation
const renderNav = (pages, depthLevel = 0) => {
  return pages.map((page, index) => {
    const crumbs = useContext(BreadcrumbContext).flatMap((x) => x.displayName);
    const [isExpanded, setIsExpanded] = useState(
      crumbs.length === depthLevel || crumbs.includes(page.displayName)
    );
    const isCurrentPage = crumbs[crumbs.length - 1] === page.displayName;

    return (
      <li
        className={cx(styles[`navDepth${depthLevel}`], {
          [styles.isCurrentPage]: isCurrentPage,
        })}
        key={index}
      >
        {page.url ? (
          <Link className={styles.navItem} to={page.url}>
            {page.displayName}
            {isCurrentPage && (
              <FeatherIcon
                className={styles.currentPageIndicator}
                name="chevron-right"
              />
            )}
          </Link>
        ) : (
          <div
            className={styles.navItem}
            role="button"
            onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
            onKeyPress={() => setIsExpanded((isExpanded) => !isExpanded)}
            tabIndex={0}
          >
            {page.displayName}
          </div>
        )}
        {page.children && (
          <ul
            className={cx(styles.nestedNav, {
              [styles.isExpanded]: isExpanded,
            })}
          >
            {renderNav(page.children, depthLevel + 1)}
          </ul>
        )}
      </li>
    );
  });
};

const Sidebar = ({ className, pages, isOpen }) => (
  <aside className={cx(styles.sidebar, className, { [styles.isOpen]: isOpen })}>
    <Link to="/">
      <Logo className={styles.logo} />
    </Link>
    <nav className={styles.nav} role="navigation" aria-label="Sidebar">
      <ul className={styles.listNav}>{renderNav(pages)}</ul>
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
