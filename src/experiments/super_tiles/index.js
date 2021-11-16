import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useTreatment from '../../hooks/useTreatment';
import IOBanner from '../../components/IOBanner';
import CodeStreamTile from './components/CodeStreamTile';
import GuidedInstallTile from './components/GuidedInstallTile';

const SuperTilesExperiment = ({ isMobile }) => {
  const { treatment } = useTreatment('super_tiles');

  if (treatment === 'on') {
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
  }

  return <IOBanner isMobile={isMobile} />;
};

SuperTilesExperiment.propTypes = {
  isMobile: PropTypes.bool,
};

export default SuperTilesExperiment;
