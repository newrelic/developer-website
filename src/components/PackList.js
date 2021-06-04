import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const PackList = ({ children, className }) => {
  return (
    <div
      className={className}
      css={css`
        display: list-item;
        align-items: stretch;
        width: 100%;
      `}
    >
      {children}
    </div>
  );
};

PackList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PackList;
