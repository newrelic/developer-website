import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Objectives = ({ children }) => (
  <div
    css={css`
      flex: 1;
    `}
  >
    {children}
  </div>
);

Objectives.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Objectives;
