import React from 'react';
import { css } from '@emotion/react';
import { Callout } from '@newrelic/gatsby-theme-newrelic';

const BetaBanner = () => (
  <Callout
    variant={Callout.VARIANT.COURSE}
    title="We're in beta!"
    css={css`
      margin-bottom: 1rem;
      margin-top: 1rem;
    `}
  >
    The New Relic I/O beta is currently available to all users, and will require
    a full user license for future usage. Note that New Relic's free forever
    tier comes with 1 free full user.
  </Callout>
);

export default BetaBanner;
