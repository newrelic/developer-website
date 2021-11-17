import React from 'react';
import { css } from '@emotion/react';
import SuperTile from './SuperTile';
import {
  Button,
  useInstrumentedHandler,
} from '@newrelic/gatsby-theme-newrelic';
import { navigate } from 'gatsby';
import { SIGNUP_LINK } from '../../../data/constants';

const GuidedInstallTile = () => {
  const handleButtonClick = useInstrumentedHandler(
    () => navigate(SIGNUP_LINK),
    {
      tessenEventName: 'clickSuperTile',
      tessenCategoryName: 'QuickstartLanding',
      tile: 'guided',
    },
    'tessen'
  );

  return (
    <SuperTile type="primary">
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          gap: 40px;
        `}
      >
        <div>
          <span
            css={css`
              color: #faa44a;
              font-size: 14px;
              line-height: 20px;
            `}
          >
            First Steps
          </span>
          <h2
            css={css`
              font-size: 24px;
              font-weight: 600;
              line-height: 30px;
              color: var(--color-white);

              .dark-mode & {
                color: var(--heading-text-color);
              }
            `}
          >
            Guided Install
          </h2>
          <span
            css={css`
              color: var(--color-neutrals-300);

              .dark-mode & {
                color: var(--primary-text-color);
              }
            `}
          >
            Install the New Relic agent with a single command line and start
            monitoring your log and infrastructure data in real time.
          </span>
        </div>
        <div>
          <Button onClick={handleButtonClick} variant={Button.VARIANT.PRIMARY}>
            Install New Relic
          </Button>
        </div>
      </div>
    </SuperTile>
  );
};

export default GuidedInstallTile;
