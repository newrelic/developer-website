import React from 'react';
import { css } from '@emotion/react';
import useMobileDetect from 'use-mobile-detect-hook';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import ioBanner from '../images/ioBanner.png';

const IOBanner = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <section>
      <img
        css={css`
          width: 100%;
        `}
        src={ioBanner}
        alt="New Relic IO"
      />
      <Button
        variant={Button.VARIANT.PRIMARY}
        as={Link}
        css={css`
          color: var(--color-neutrals-100);
          background: none;
          border: solid var(--color-neutrals-100) 1px;
          position: relative;
          top: ${isMobile ? '-60px' : '-80px'};
          left: ${isMobile ? '20px' : '50px'};
        `}
        to="https://www.youtube.com/watch?v=jN3Bk473R4w"
        instrumentation={{ component: 'IOBanner' }}
      >
        Learn more
      </Button>
    </section>
  );
};

export default IOBanner;
