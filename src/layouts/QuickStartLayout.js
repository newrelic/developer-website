import React from 'react';
import {
  Layout,
  GlobalHeader,
  MobileHeader,
} from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useLocation } from '@reach/router';
import '../components/styles.scss';

const QuickStartLayout = ({ children }) => {
  const location = useLocation();
  const isLanding = location.pathname === '/observability-packs/';
  return (
    <>
      <GlobalHeader />
      <MobileHeader>New sidebar here</MobileHeader>
      <Layout
        css={css`
          --sidebar-width: ${isLanding ? '300px' : '0'};
        `}
      >
        {isLanding && <Layout.Sidebar>New sidebar here</Layout.Sidebar>}
        <Layout.Main
          css={css`
            min-height: 100vh;
          `}
        >
          {children}
        </Layout.Main>
      </Layout>
    </>
  );
};

QuickStartLayout.propTypes = {
  children: PropTypes.node,
};

export default QuickStartLayout;
