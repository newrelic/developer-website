import React from 'react';
import { css } from '@emotion/react';
import SuperTile from './SuperTile';
import {
  Button,
  useInstrumentedHandler,
} from '@newrelic/gatsby-theme-newrelic';
import { navigate } from 'gatsby';
import Cookies from 'js-cookie';
import { SIGNUP_LINK, NR1_GUIDED_INSTALL_NERDLET } from '../data/constants';
import { getGuidedInstallStackedNr1Url } from '../utils/get-pack-nr1-url';

const GuidedInstallTile = () => {
  const isReturningUser = Boolean(Cookies.get('ajs_user_id'));

  const handleNavigation = () => {
    const platformUrl = isReturningUser
      ? getGuidedInstallStackedNr1Url(NR1_GUIDED_INSTALL_NERDLET)
      : SIGNUP_LINK;

    navigate(platformUrl);
  };

  const handleButtonClick = useInstrumentedHandler(
    handleNavigation,
    {
      eventName: 'clickSuperTile',
      category: 'QuickstartLanding',
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
            First step
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
            Guided install
          </h2>
          <span
            css={css`
              color: var(--color-neutrals-300);

              .dark-mode & {
                color: var(--primary-text-color);
              }
            `}
          >
            Many engineers start here. You'll install an agent with a single
            command and start monitoring your log and infrastructure data in
            real time.
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
