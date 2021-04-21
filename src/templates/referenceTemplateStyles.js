/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { css } from '@emotion/react';

export const Section = (props) => (
  <section
    {...props}
    css={css`
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    `}
  />
);

export const SectionTitle = (props) => (
  <h2
    {...props}
    css={css`
      margin-bottom: 1rem;
      font-size: 1.75rem;
      font-weight: bold;
    `}
  />
);
