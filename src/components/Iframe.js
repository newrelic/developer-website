import React from 'react';
import { css } from '@emotion/core';

const Iframe = (props) => {
  // strip out width and then render iframe
  const { width, ...limitedProps } = props;

  return (
    <iframe
      {...limitedProps}
      css={css`
        width: 100%;
      `}
    />
  );
};

export default Iframe;
