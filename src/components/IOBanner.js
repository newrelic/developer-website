import React from 'react';
import { css } from '@emotion/react';
import bannerOverlayRight from '../images/io-banner/banner-style-right.svg';
import bannerOverlayLeft from '../images/io-banner/banner-style-left.svg';
import { SearchInput } from '@newrelic/gatsby-theme-newrelic';
import { QUICKSTARTS_COLLAPSE_BREAKPOINT } from '../data/constants';

const MOBILE_BREAKPOINT = '530px';

const BannerHeaderContent = ({ search, setSearch }) => (
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
    <div
      css={css`
        margin-top: 12px;
        align-items: center;
        background-color: var(--secondary-background-color);
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;

        input {
          font-size: 14px;
          padding: 0.5rem;
          padding-left: 2.25rem;
          background: var(--color-white);
          border: 1px solid var(--color-neutrals-600);
          border-radius: 4px;

          &::placeholder {
            color: var(--color-neutrals-600);
            padding-left: 0.5rem;
          }
        }

        .dark-mode & {
          background-color: var(--tertiary-background-color);
          input {
            background: var(--color-dark-400);

            &::placeholder {
              color: var(primary-text-color);
            }
          }
        }
        @media (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
          background-color: var(--primary-background-color);
          padding: 0;
        }
      `}
    >
      <SearchInput
        size={SearchInput.SIZE.LARGE}
        value={search || ''}
        placeholder="What do you want to monitor? (e.g., AWS, LAMP, Kubernetes)"
        onClear={() => setSearch('')}
        onChange={(e) => setSearch(e.target.value)}
        css={css`
          --svg-color: var(--color-neutrals-700);
          box-shadow: none;
          max-width: 630px;
          line-height: 1;
          svg {
            width: 16px;
            height: 16px;
            color: var(--svg-color);
          }

          .dark-mode & {
            --svg-color: var(--primary-text-color);
          }

          @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
            font-size: 11px;
            max-width: 100%;
          }
        `}
      />
    </div>
  </div>
);

const IOBanner = ({ search, setSearch }) => {
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
        <BannerHeaderContent search={search} setSearch={setSearch} />
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
