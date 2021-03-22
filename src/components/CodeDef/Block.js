import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Block = ({ children }) => (
  <div
    css={css`
      margin-left: 1rem;
    `}
  >
    {children}
  </div>
);

Block.propTypes = {
  children: PropTypes.node,
};

export default Block;
