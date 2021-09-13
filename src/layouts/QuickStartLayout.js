import React from 'react';
import {
  Layout,
  GlobalHeader,
  NR_SITES,
} from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import '../components/styles.scss';

const QuickStartLayout = ({ children }) => {
  return (
    <>
      <GlobalHeader activeSite={NR_SITES.IO} />
      <Layout
        css={css`
          --sidebar-width: 0;
        `}
      >
        <Layout.Main
          css={css`
            min-height: 100vh;
            padding: 0;

            > * {
              margin: var(--site-content-padding);
            }
          `}
        >
          {children}
        </Layout.Main>
        <Layout.Footer />
      </Layout>
    </>
  );
};

QuickStartLayout.propTypes = {
  children: PropTypes.node,
};

export default QuickStartLayout;
