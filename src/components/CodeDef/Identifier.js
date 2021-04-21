import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Identifier = ({ children }) => (
  <span
    css={css`
      color: var(--color-nord-6);

      .light-mode & {
        color: var(--color-nord-0);
      }
    `}
  >
    {children}
  </span>
);

Identifier.propTypes = {
  children: PropTypes.node,
};

export default Identifier;
