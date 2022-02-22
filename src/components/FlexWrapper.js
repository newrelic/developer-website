import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const FlexWrapper = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        padding-bottom: 25px;
      `}
    >
      {children}
    </div>
  );
};

FlexWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FlexWrapper;
