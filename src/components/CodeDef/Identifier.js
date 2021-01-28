import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Identifier = ({ children }) => (
  <span
    css={css`
      color: var(--color-nord-6);
    `}
  >
    {children}
  </span>
);

Identifier.propTypes = {
  children: PropTypes.node,
};

export default Identifier;
