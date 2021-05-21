import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Bracket = ({ children }) => (
  <span
    css={css`
      color: var(--color-nord-9);
    `}
  >
    {children}
  </span>
);

Bracket.propTypes = {
  children: PropTypes.node,
};

export default Bracket;
