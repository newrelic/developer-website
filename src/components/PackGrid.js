import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const PackGrid = ({ children, className }) => {
  return (
    <div
      className={className}
      css={css`
        display: grid;
        grid-template-columns: repeat(4, minmax(260px, 1fr));
        grid-gap: 1rem;
        grid-auto-rows: minmax(var(--guide-list-row-height, 150px), auto);
        align-items: stretch;
        width: 100%;

        @media (max-width: 1180px) {
          grid-template-columns: 1fr;
          grid-gap: 3rem;
        }
      `}
    >
      {children}
    </div>
  );
};

PackGrid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PackGrid;
