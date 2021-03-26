import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import useDropdown from './useDropdown';

const ARROW_ALIGNMENTS = {
  left: css`
    left: var(--arrow-offset);
  `,
  center: css`
    left: 50%;
    transform: translateX(-50%);
  `,
  right: css`
    right: var(--arrow-offset);
  `,
};

const Menu = ({ children }) => {
  const { align, open } = useDropdown();

  return (
    <div
      css={css`
        --arrow-size: 5px;
        --arrow-offset: 0.5rem;
        --background-color: white;
        --text-color: var(--color-neutrals-900);

        .dark-mode & {
          --text-color: var(--color-dark-900);
          --background-color: var(--color-dark-050);
        }

        position: absolute;
        top: calc(100% + var(--arrow-size));
        display: ${open ? 'block' : 'none'};
        background: var(--background-color);
        border-radius: 0.25rem;
        z-index: 1000;
        padding: 0.5rem;
        box-shadow: 0 3px 8px 0 rgba(22, 38, 59, 0.2);

        &::before {
          content: '';
          position: absolute;
          display: block;
          top: calc(-1 * var(--arrow-size));
          border-left: var(--arrow-size) solid transparent;
          border-right: var(--arrow-size) solid transparent;
          border-bottom: var(--arrow-size) solid var(--background-color);
          width: 0;
          height: 0;
          z-index: 1000;

          ${ARROW_ALIGNMENTS[align]};
        }
      `}
    >
      <div
        css={css`
          max-height: 20rem;
          min-width: 100px;
          overflow-y: auto;
        `}
      >
        {children}
      </div>
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
};

export default Menu;
