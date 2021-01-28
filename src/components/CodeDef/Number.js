import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const NumberValue = ({ value }) => (
  <span
    css={css`
      color: var(--color-nord-15);
    `}
  >
    {value}
  </span>
);

NumberValue.propTypes = {
  value: PropTypes.number.isRequired,
};

export default NumberValue;
