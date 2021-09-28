import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Header = ({ title, children, className, icon }) => (
  <header
    className={className}
    css={css`
      grid-area: page-header;
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: 1rem;

      @media screen and (max-width: 1080px) {
        flex-direction: column;
        align-items: flex-start;
      }
    `}
  >
    <h1
      css={css`
        margin-bottom: 0;

        ${children &&
        css`
          @media screen and (max-width: 1080px) {
            margin-bottom: 0.5rem;
          }
        `}
      `}
    >
      {title}
      {icon}
    </h1>
    {children}
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default Header;
