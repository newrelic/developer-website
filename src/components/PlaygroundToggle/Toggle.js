import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import PlaygroundToggleItem from './ToggleItem';

const PlaygroundToggle = ({ children }) => {
  return (
    <div
      css={css`
        width: auto;
        background-color: var(--secondary-background-color);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      `}
    >
      {children}
    </div>
  );
};

PlaygroundToggle.propTypes = {
  children: PropTypes.node,
};

PlaygroundToggle.Item = PlaygroundToggleItem;

export default PlaygroundToggle;
