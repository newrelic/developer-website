import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Navigation from './Navigation';
import { Logo, SearchInput } from '@newrelic/gatsby-theme-newrelic';

const Sidebar = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <aside
      data-swiftype-index={false}
      className={className}
      css={css`
        padding: 0 2rem 2rem;
        border-right: 1px solid var(--divider-color);

        @media screen and (max-width: 760px) {
          height: 60px;
          border-bottom: 1px solid var(--divider-color);
        }
      `}
    >
      <div
        css={css`
          background: var(--primary-background-color);
          position: sticky;
          top: 0;
          z-index: 10;
          padding: 1rem 0.5rem;
          margin: 0 -0.5rem 0.5rem;
        `}
      >
        <Link
          css={css`
            display: block;
            margin-bottom: 1rem;
          `}
          to="/"
        >
          <Logo
            css={css`
              display: block;
              width: 150px;

              @media screen and (max-width: 760px) {
                width: 160px;
              }
            `}
          />
        </Link>
        <SearchInput
          placeholder="Filter developer docs"
          onClear={() => setSearchTerm('')}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      <Navigation searchTerm={searchTerm} />
    </aside>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
