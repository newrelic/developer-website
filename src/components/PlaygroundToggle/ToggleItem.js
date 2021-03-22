import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Button } from '@newrelic/gatsby-theme-newrelic';

const PlaygroundToggleItem = ({ onClick, children }) => (
  <Button
    css={css`
      padding: 1.75rem;
    `}
    variant={Button.VARIANT.OUTLINE}
    onClick={onClick}
  >
    {children}
  </Button>
);

PlaygroundToggleItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default PlaygroundToggleItem;
