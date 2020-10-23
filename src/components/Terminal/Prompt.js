import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Prompt = ({ character }) => (
  <span
    css={css`
      color: var(--color-nord-10);
      user-select: none;
    `}
  >
    {character || ' '}
  </span>
);

Prompt.propTypes = {
  character: PropTypes.string,
};

export default Prompt;
