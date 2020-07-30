import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Header = ({ title, children }) => (
  <header
    css={css`
      grid-area: page-header;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--divider-color);

      @media screen and (max-width: 1080px) {
        flex-direction: column;
        align-items: flex-start;
      }
    `}
  >
    <h1
      css={css`
        font-family: var(--secondary-font-family);
        font-size: 2.5rem;
        font-weight: normal;
        margin-bottom: 0;
      `}
    >
      {title}
    </h1>
    {children}
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Header;
