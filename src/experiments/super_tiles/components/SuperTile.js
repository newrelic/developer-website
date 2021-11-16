import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const SuperTile = ({ children, className, type }) => {
  return (
    <div
      className={className}
      css={css`
        width: 100%;
        display: flex;
        border-radius: 8px;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        ${type === 'primary'
          ? `background: var(--color-brand-700);`
          : `background: var(--tertiary-background-color);`}
      `}
    >
      {children}
    </div>
  );
};

SuperTile.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SuperTile;
