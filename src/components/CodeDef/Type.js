import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Type = ({ className, children }) => (
  <span
    className={className}
    css={css`
      padding: 0.125rem;
      border-radius: 0.125rem;
      color: var(--color-green-500);
      background: var(--color-green-050);
      font-family: var(--code-font);

      .dark-mode & {
        color: var(--color-green-600);
        background: var(--color-green-100);
      }
    `}
  >
    {children}
  </span>
);

Type.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Type;
