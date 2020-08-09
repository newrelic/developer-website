import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Logo from './Logo';
import Navigation from './Navigation';
import { HamburgerMenu, SearchInput } from '@newrelic/gatsby-theme-newrelic';

const MobileHeader = ({ className, isOpen, toggle }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header
      data-swiftype-index={false}
      className={className}
      css={css`
        position: relative;
        padding: 0 2rem;

        width: 100vw;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--height-mobile-nav-bar);
        `}
      >
        <Link to="/">
          <Logo
            css={css`
              display: block;
              width: 150px;
            `}
          />
        </Link>

        <HamburgerMenu onToggle={toggle} isOpen={isOpen} />
      </div>

      {isOpen && (
        <>
          <SearchInput
            placeholder="Search developer docs"
            onClear={() => setSearchTerm('')}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <Navigation
            searchTerm={searchTerm}
            css={css`
              font-size: 1rem;
              padding: 1.5rem 0rem;
              height: calc(
                100vh -
                  (var(--height-mobile-nav-bar) + var(--height-global-header))
              );
            `}
          />
        </>
      )}
    </header>
  );
};

MobileHeader.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default MobileHeader;
