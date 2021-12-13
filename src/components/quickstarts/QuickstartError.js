import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const QuickstartError = ({ singular = false }) => (
  <div
    css={css`
      margin-top: 2rem;
    `}
  >
    <p
      css={css`
        text-align: center;
      `}
    >
      {`Could not load quickstart${
        singular ? '' : 's'
      }, try refreshing the page.`}
    </p>
  </div>
);

QuickstartError.propTypes = {
  singular: PropTypes.bool,
};

export default QuickstartError;
