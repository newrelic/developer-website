import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const StringValue = ({ value }) => (
  <span
    css={css`
      color: var(--color-nord-14);
    `}
  >
    "{value}"
  </span>
);

StringValue.propTypes = {
  value: PropTypes.string.isRequired,
};

export default StringValue;
