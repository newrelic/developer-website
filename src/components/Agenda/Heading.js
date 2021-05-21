import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Cell from './Cell';

const Heading = ({ children, className }) => (
  <Cell
    inactive
    as="h5"
    className={className}
    css={css`
      color: var(--color-teal-600);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0.75rem;
      text-align: center;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.5px;

      .dark-mode & {
        color: #ade7ec;
      }
    `}
  >
    {children}
  </Cell>
);

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;
