import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Logo from './Logo';
import Navigation from './Navigation';
import SearchInput from './SearchInput';

const Sidebar = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <aside
      data-swiftype-index={false}
      className={className}
      css={css`
        padding: 2rem;
        border-right: 1px solid var(--divider-color);

        @media screen and (max-width: 760px) {
          height: 60px;
          border-bottom: 1px solid var(--divider-color);
        }
      `}
    >
      <Link to="/">
        <Logo
          css={css`
            width: 200px;

            @media screen and (max-width: 760px) {
              width: 160px;
            }
          `}
        />
      </Link>
      <SearchInput
        css={css`
          margin: 1rem 0;
        `}
        placeholder="Search developer docs"
        onClear={() => setSearchTerm('')}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <Navigation
        css={css`
          margin-top: 1rem;
        `}
        searchTerm={searchTerm}
      />
    </aside>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
