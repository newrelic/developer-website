import React from 'react';
import { css } from '@emotion/react';
import useMobileDetect from 'use-mobile-detect-hook';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import ioBanner from '../images/ioBanner.svg';

const IOBanner = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <img
        css={css`
          width: 100%;
        `}
        src={ioBanner}
        alt="New Relic IO"
      />
      <div
        css={css`
          position: absolute;
          height: 0;
          width: 45%;
          color: var(--color-white);
          margin: 0;
          top: 15%;
          left: 5%;
        `}
      >
        <h1
          css={css`
            color: var(--color-white);
            font-size: ${isMobile ? '1rem' : '1.5vw'};
            @media (max-width: 500px) {
              margin-bottom: 10px;
            }
          `}
        >
          Instant observability
        </h1>
        <p
          css={css`
            font-size: 0.75vw;
            @media screen and (max-width: 1180px) {
              display: none;
            }
          `}
        >
          New Relic I/O equips you with integrations, dashboards, and other
          observability building blocks to get value from your data faster
        </p>
        <Button
          variant={Button.VARIANT.PRIMARY}
          as={Link}
          css={css`
            color: var(--color-neutrals-100);
            background: none;
            border: solid var(--color-neutrals-100) 1px;
            @media (max-width: 500px) {
              width: 45%;
              font-size: 0.65rem;
            }
          `}
          to="https://www.youtube.com/watch?v=jN3Bk473R4w"
          instrumentation={{ component: 'IOBanner' }}
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default IOBanner;
