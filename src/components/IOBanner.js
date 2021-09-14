import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import ioBanner from '../images/ioBanner.svg';

const IOBanner = ({ isMobile }) => {
  return (
    <section
      css={css`
        position: relative;
        margin-bottom: ${isMobile ? 0 : '2rem'};
      `}
    >
      <img
        css={css`
          width: 100%;
          @media (max-width: 500px) {
            height: 150px;
            object-fit: cover;
            width: 100vw;
          }
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
          top: ${!isMobile ? '25%' : '15%'};
          left: 5%;
        `}
      >
        <h1
          css={css`
            color: var(--color-white);
            font-size: ${isMobile ? '1rem' : '1.5vw'};
          `}
        >
          Instant observability
        </h1>
        <p
          css={css`
            font-size: 0.75vw;
            @media screen and (max-width: 1280px) {
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
            @media (max-width: 850px) {
              width: 55%;
              font-size: 0.65rem;
            }
          `}
          to="https://www.youtube.com/watch?v=jN3Bk473R4w"
          instrumentation={{ component: 'IOBanner' }}
        >
          Learn more
        </Button>
      </div>
    </section>
  );
};

IOBanner.propTypes = {
  isMobile: PropTypes.bool,
};

export default IOBanner;
