import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import root from 'react-shadow';
import { CSS_BUNDLE } from '../utils/sdk';

const PlaygroundChrome = ({ children, className }) => {
  return (
    <root.div
      className={className}
      css={css`
        background-color: white;
      `}
    >
      <link rel="stylesheet" href={CSS_BUNDLE} />
      {children}
    </root.div>
  );
};

PlaygroundChrome.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PlaygroundChrome;
