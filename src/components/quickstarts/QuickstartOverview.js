import React from 'react';
import { css } from '@emotion/react';

import { quickstart } from '../../types';
import OverviewTile from './OverviewTile';

const QuickstartOverview = ({ quickstart }) => {
  return (
    <>
      <h3> What&apos;s included: </h3>
      <div
        css={css`
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(3, 1fr);

          @media (max-width: 1180px) {
            grid-template-columns: repeat(1, 1fr);
          }
        `}
      >
        {quickstart.dashboards.map((dashboard, index) => (
          <OverviewTile
            key={index}
            title={dashboard.name}
            image={dashboard.screenshots[0]}
            description={dashboard.description}
            tag="Dashboard"
          />
        ))}
        {quickstart.alerts.map((alert, index) => (
          <OverviewTile
            key={index}
            title={alert.name}
            description={alert.details}
            tag="Alert"
          />
        ))}
        {quickstart.documentation.map((doc, index) => (
          <OverviewTile
            key={index}
            title={doc.name}
            description={doc.description}
            tag="Doc"
          />
        ))}
      </div>
    </>
  );
};

QuickstartOverview.propTypes = {
  quickstart: quickstart.isRequired,
};

export default QuickstartOverview;
