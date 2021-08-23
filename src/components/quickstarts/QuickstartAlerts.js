import React from 'react';
import { css } from '@emotion/react';
import pluralize from 'pluralize';
import Intro from '../Intro';
import { quickstart } from '../../types';

const QuickstartAlerts = ({ quickstart }) => (
  <>
    <Intro
      css={css`
        margin-bottom: 16px;
      `}
    >
      {quickstart.name} observability quickstart contains{' '}
      {pluralize('alert', quickstart.alerts?.length ?? 0, true)}. These alerts
      detect changes in key performance metrics. Integrate these alerts with
      your favorite tools (like Slack, PagerDuty, etc.) and New Relic will let
      you know when something needs your attention.
    </Intro>

    <dl>
      {quickstart.alerts.map((alert, index) => (
        <div
          key={index}
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <dt
            css={css`
              font-weight: bold;
            `}
          >
            {alert.name}
          </dt>
          {alert.details && <dd>{alert.details}</dd>}
        </div>
      ))}
    </dl>
  </>
);

QuickstartAlerts.propTypes = {
  quickstart: quickstart.isRequired,
};

export default QuickstartAlerts;
