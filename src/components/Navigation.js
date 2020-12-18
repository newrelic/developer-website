import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';
import pages from '../data/sidenav.json';

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
    return (
      <div
        css={css`
          font-size: 0.875rem;
          padding-top: 1rem;
          font-style: italic;
        `}
      >
        No results found
      </div>
    );
  }

  return (
    <nav className={className} role="navigation" aria-label="Navigation">
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
