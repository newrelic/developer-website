import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/core';

const MenuItem = ({ as, children, href, className, onClick }) => {
  const Component = as || (href ? Link : 'div');

  return (
    <Component
      onClick={onClick}
      className={className}
      to={href}
      css={css`
        display: block;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        transition: all 0.2s ease-out;
        color: var(--text-color);
        text-decoration: none;

        &:hover {
          color: var(--text-color);
          cursor: pointer;
          background: var(--color-neutrals-200);
          border-radius: 0.25rem;

          .dark-mode & {
            background: var(--color-dark-200);
          }
        }
      `}
    >
      {children}
    </Component>
  );
};

MenuItem.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default MenuItem;
