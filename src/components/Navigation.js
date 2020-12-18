import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';
import pages from '../data/sidenav.json';
import styles from './Navigation.module.scss';

const filterPages = (pages, regex) => {
  return pages
    .map((page) => {
      const filteredPages = filterPages(page.pages || [], regex);

      if (filteredPages.length > 0) {
        return { ...page, pages: filteredPages };
      } else if (regex.test(page.title)) {
        return page.url ? { ...page, pages: [] } : page;
      }

      return null;
    })
    .filter(Boolean);
};

const Navigation = ({ className, searchTerm }) => {
  const searchTermSanitized = searchTerm?.replace(
    /[.*+?^${}()|[\]\\]/g,
    '\\$&'
  );

  const filteredPages = useMemo(() => {
    return searchTermSanitized
      ? filterPages(pages, new RegExp(searchTermSanitized, 'i'))
      : pages;
  }, [searchTermSanitized]);

  if (filteredPages.length === 0) {
    return <div className={styles.emptyResults}>No results found</div>;
  }

  return (
    <nav
      className={cx(styles.container, className)}
      role="navigation"
      aria-label="Navigation"
    >
      {filteredPages.map((page) => (
        <NavItem key={page.title} page={page} />
      ))}
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  searchTerm: PropTypes.string,
};

export default Navigation;
