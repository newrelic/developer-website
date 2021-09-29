import React from 'react';
import { css } from '@emotion/react';
import { Callout } from '@newrelic/gatsby-theme-newrelic';

const BetaBanner = () => (
  <Callout
    variant={Callout.VARIANT.COURSE}
    title="Welcome to the New Relic I/O beta"
    css={css`
      margin-bottom: 1rem;
      margin-top: 1rem;
    `}
  >
    Everyone on your account has access for now. After the beta, anyone with
    full platform access can use the dashboards installed from here.
  </Callout>
);

export default BetaBanner;
