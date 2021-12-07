import React from 'react';
import { css } from '@emotion/react';
import CodeStreamTile from './CodeStreamTile';
import GuidedInstallTile from './GuidedInstallTile';

const SuperTiles = () => {
  return (
    <div
      css={css`
        display: grid;
        margin-bottom: 16px;
        gap: 16px;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: 1180px) {
          grid-template-columns: repeat(1, 1fr);
        }
      `}
    >
      <GuidedInstallTile />
      <CodeStreamTile />
    </div>
  );
};

export default SuperTiles;
