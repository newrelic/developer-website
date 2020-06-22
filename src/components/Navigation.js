import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import { BreadcrumbContext } from './BreadcrumbContext';
import FeatherIcon from './FeatherIcon';
import pages from '../data/sidenav.json';
import matchSearchString from '../utils/matchSearchString';

import styles from './Navigation.module.scss';

// TODO: Add this implementation
const filterPages = (pages, _searchTerm) => pages;

// recursively create navigation
const renderNav = (pages, searches, depthLevel = 0) => {
  const crumbs = useContext(BreadcrumbContext).flatMap((x) => x.displayName);
  const isHomePage = crumbs.length === 0 && depthLevel === 0;

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
          isHomePage || crumbs.includes(page.displayName)
        );

        const isCurrentPage = crumbs[crumbs.length - 1] === page.displayName;

        return (
          <li
            key={page.displayName}
            data-depth={depthLevel}
            className={cx(
              { [styles.isCurrentPage]: isCurrentPage },
              {
                [styles.isNotSearch]:
                  searches && !searches.includes(page.displayName),
              },
              {
                [styles.isSearch]:
                  searches && searches.includes(page.displayName),
              },
              { [styles.isBeingSearched]: searches }
            )}
          >
            {page.url ? (
              <Link
                className={cx(
                  { [styles.isCurrentPage]: isCurrentPage },
                  styles.navLink
                )}
                to={page.url}
              >
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
                onClick={() => setIsExpanded(!isExpanded)}
                onKeyPress={() => setIsExpanded(!isExpanded)}
                tabIndex={0}
              >
                {depthLevel > 0 && (
                  <FeatherIcon
                    className={cx(
                      { [styles.isExpanded]: isExpanded },
                      styles.nestedChevron
                    )}
                    name="chevron-right"
                  />
                )}
                {page.displayName}
              </button>
            )}
            {page.children && (
              <ul
                className={cx(styles.nestedNav, {
                  [styles.isExpanded]: isExpanded,
                })}
              >
                {renderNav(page.children, searches, depthLevel + 1)}
              </ul>
            )}
          </li>
        );
      })}
    </Fragment>
  ));
};

const searchPages = (pages, searchTerm, parent = []) => {
  return [
    ...new Set(
      pages.flatMap((page) => {
        if (page.children) {
          return searchPages(page.children, searchTerm, [
            ...parent,
            page.displayName,
          ]);
        } else if (matchSearchString(page.displayName, searchTerm)) {
          return [...parent, page.displayName];
        } else if (parent.some((el) => matchSearchString(el, searchTerm))) {
          return [...parent];
        }
      })
    ),
  ];
};

const Navigation = ({ className, searchTerm }) => {
  const searches =
    searchTerm !== '' ? searchPages(pages, searchTerm) : undefined;
  return (
    <nav
      className={cx(styles.container, className)}
      role="navigation"
      aria-label="Navigation"
    >
      <ul className={styles.listNav}>{renderNav(pages, searches)}</ul>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  searchTerm: PropTypes.string,
};

export default Navigation;
