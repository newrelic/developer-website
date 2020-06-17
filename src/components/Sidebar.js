import React, { Fragment, useState, useContext } from 'react';
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
  const crumbs = useContext(BreadcrumbContext).map((x) => x.displayName);

  const groupedPages = pages.reduce((groups, page) => {
    const { group = '' } = page;

    return {
      ...groups,
      [group]: [...(groups[group] || []), page],
    };
  }, {});

  return Object.entries(groupedPages).map(([group, pages]) => (
    <Fragment key={group}>
      {group && (
        <li className={cx(styles.navLink, styles.groupName)}>{group}</li>
      )}
      {pages.map((page) => {
        const [isExpanded, setIsExpanded] = useState(
          crumbs.includes(page.displayName)
        );
        const isCurrentPage = crumbs[crumbs.length - 1] === page.displayName;

        return (
          <li
            key={page.displayName}
            data-depth={depthLevel}
            className={cx({ [styles.isCurrentPage]: isCurrentPage })}
          >
            {page.url ? (
              <Link className={styles.navLink} to={page.url}>
                {page.displayName}
                {isCurrentPage && (
                  <FeatherIcon
                    className={styles.currentPageIndicator}
                    name="chevron-right"
                  />
                )}
              </Link>
            ) : (
              <button
                type="button"
                className={styles.navLink}
                onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
                onKeyPress={() => setIsExpanded((isExpanded) => !isExpanded)}
                tabIndex={0}
              >
                {page.displayName}
              </button>
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
      })}
    </Fragment>
  ));
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
