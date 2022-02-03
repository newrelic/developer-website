import React from 'react';
import { css } from '@emotion/react';
import bannerOverlayRight from '../images/io-banner/banner-style-right.svg';
import bannerOverlayLeft from '../images/io-banner/banner-style-left.svg';

const MOBILE_BREAKPOINT = '530px';

const BannerHeaderContent = () => (
  <div
    css={css`
      position: static;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      width: 568px;
      height: 192px;

      @media (max-width: ${MOBILE_BREAKPOINT}) {
        padding: 48px 24px;
      }
    `}
  >
    <h2
      css={css`
        color: var(--color-brand-300);

        @media (max-width: ${MOBILE_BREAKPOINT}) {
          font-weight: 400;
        }
      `}
    >
      Instant Observability
    </h2>
    <h1
      css={css`
        color: var(--color-neutrals-050);
        font-weight: 600;

        @media (max-width: ${MOBILE_BREAKPOINT}) {
          font-weight: 600;
        }
      `}
    >
      Dashboards, alerts, and integrations all in one place
    </h1>
    <body
      css={css`
        background: none;
        color: var(--color-brand-100);

        @media (max-width: ${MOBILE_BREAKPOINT}) {
          font-size: 12px;
          font-weight: 300;
        }
      `}
    >
      Our quickstarts bundle everything you need to start monitoring like a pro
      right out of the box.
    </body>
  </div>
);

const IOBanner = () => {
  return (
    <div
      css={css`
        --banner-height: 308px;
        --left-margin: calc(50% - 50vw);

        position: absolute;
        width: 100vw;
        left: var(--left-margin);
        height: var(--banner-height);
        margin: 0 0 0 var(--left-margin);

        background: var(--color-brand-500);
        border: 1px solid var(--color-brand-600);
        box-sizing: border-box;
      `}
    >
      <div
        css={css`
          margin: 60px 0 56px 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            margin-right: auto;

            @media (max-width: ${MOBILE_BREAKPOINT}) {
              display: none;
            }
          `}
        >
          <img
            css={css`
              width: 100%;
            `}
            src={bannerOverlayLeft}
            alt="banner-left"
            loading="lazy"
          />
        </div>
        <BannerHeaderContent />
        <div
          css={css`
            margin-left: auto;

            @media (max-width: ${MOBILE_BREAKPOINT}) {
              display: none;
            }
          `}
        >
          <img
            css={css`
              width: 100%;
            `}
            src={bannerOverlayRight}
            alt="banner-right"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default IOBanner;
