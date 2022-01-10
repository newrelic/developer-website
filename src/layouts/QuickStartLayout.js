import React, { useEffect, useState } from 'react';
import {
  Layout,
  GlobalHeader,
  NR_SITES,
} from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import '../components/styles.scss';
import { QUICKSTARTS_COLLAPSE_BREAKPOINT } from '../data/constants';

const QuickStartLayout = ({ children }) => {
  const [sidebarWidth, setSidebarWidth] = useState(0);

  useEffect(() => {
    if (window.location.pathname === '/instant-observability/') {
      setSidebarWidth(300);
    } else setSidebarWidth(0);
  }, [children]);

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
        <Layout.Footer
          css={css`
            --sidebar-offset: ${sidebarWidth}px;

            max-width: calc(var(--site-max-width) - var(--sidebar-offset));

            margin-left: calc(var(--sidebar-offset));

            @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
              margin-left: 0;
            }
          `}
        />
      </Layout>
    </>
  );
};

QuickStartLayout.propTypes = {
  children: PropTypes.node,
};

export default QuickStartLayout;
