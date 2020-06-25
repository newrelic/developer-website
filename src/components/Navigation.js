import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import NavigationItems from './NavigationItems';
import pages from '../data/sidenav.json';
import matchSearchString from '../utils/matchSearchString';
import styles from './Navigation.module.scss';

const filterPageNames = (pages, searchTerm, parent = []) => {
  return [
    ...new Set(
      pages.flatMap((page) => {
        if (page.children) {
          return filterPageNames(page.children, searchTerm, [
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
  ].filter((el) => el !== undefined);
};

const Navigation = ({ className, searchTerm, mobile }) => {
  const searchTermSanitized = searchTerm?.replace(
    /[.*+?^${}()|[\]\\]/g,
    '\\$&'
  );

  const filteredPageNames = searchTerm
    ? filterPageNames(pages, searchTermSanitized)
    : undefined;

  if (filteredPageNames?.length === 0) {
    return <div className={styles.emptyResults}>No results found.</div>;
  }

  return (
    <nav
      className={cx(styles.container, className)}
      role="navigation"
      aria-label="Navigation"
    >
      <ul className={styles.listNav}>
        <NavigationItems
          searchTerm={searchTermSanitized}
          pages={pages}
          filteredPageNames={filteredPageNames}
          mobile={mobile}
        />
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  searchTerm: PropTypes.string,
  mobile: PropTypes.bool,
};

export default Navigation;
