import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Requirements = ({ children }) => (
  <div
    css={css`
      flex: 1;
    `}
  >
    {children}
  </div>
);

Requirements.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Requirements;
