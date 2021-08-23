import React from 'react';
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

    {quickstart.alerts.map((alert, index) => (
      <div key={index}>
        <h3>{alert.name}</h3>
        {alert.details && (
          <>
            <h4>Description</h4>
            <p>{alert.details}</p>
          </>
        )}
      </div>
    ))}
  </>
);

QuickstartAlerts.propTypes = {
  quickstart: quickstart.isRequired,
};

export default QuickstartAlerts;
