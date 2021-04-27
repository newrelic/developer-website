import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Operator = ({ children }) => (
  <span
    css={css`
      color: var(--color-nord-9);
    `}
  >
    {children}
  </span>
);

Operator.propTypes = {
  children: PropTypes.node,
};

export default Operator;
