import React from 'react';
import { css } from '@emotion/react';

const QuickstartError = () => (
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
      Could not load quickstarts, try refreshing the page.
    </p>
  </div>
);

export default QuickstartError;
