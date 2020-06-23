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
  ];
};

const Navigation = ({ className, searchTerm }) => {
  const searchTermSanitized = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const filteredPageNames =
    searchTerm !== '' ? filterPageNames(pages, searchTermSanitized) : undefined;

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
        />
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  searchTerm: PropTypes.string,
};

export default Navigation;
