import React from 'react';
import { css } from '@emotion/react';
import GuidedInstallTile from './GuidedInstallTile';

const SuperTiles = () => {
  return (
    <div
      css={css`
        display: grid;
        margin-bottom: 16px;
        gap: 16px;
        grid-template-columns: repeat(1, 1fr);
      `}
    >
      <GuidedInstallTile />
    </div>
  );
};

export default SuperTiles;
