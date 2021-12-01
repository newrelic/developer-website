import React from 'react';
import { css } from '@emotion/react';
import pluralize from 'pluralize';
import { Surface, Tag } from '@newrelic/gatsby-theme-newrelic';
import Intro from '../Intro';
import PropTypes from 'prop-types';

const QuickstartAlerts = ({ displayName, alerts }) => (
  <>
    <Intro
      css={css`
        margin-bottom: 16px;
      `}
    >
      {displayName} observability quickstart contains{' '}
      {pluralize('alert', alerts?.length ?? 0, true)}. These alerts detect
      changes in key performance metrics. Integrate these alerts with your
      favorite tools (like Slack, PagerDuty, etc.) and New Relic will let you
      know when something needs your attention.
    </Intro>

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
      {alerts.map((alert, index) => (
        <Surface
          key={index}
          base={Surface.BASE.PRIMARY}
          css={css`
            padding: 1rem;
          `}
        >
          <h3>{alert.displayName}</h3>
          {alert.type && (
            <Tag
              css={css`
                display: inline-block;
                margin-bottom: 1rem;
              `}
            >
              Alert Type: {alert.type}
            </Tag>
          )}
          {alert.description && <p>{alert.description}</p>}
        </Surface>
      ))}
    </div>
  </>
);

QuickstartAlerts.propTypes = {
  alerts: PropTypes.object.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default QuickstartAlerts;
