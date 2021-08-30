import React from 'react';
import { Layout, GlobalHeader } from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import '../components/styles.scss';

const QuickStartLayout = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <Layout
        css={css`
          --sidebar-width: 0;
        `}
      >
        <Layout.Main
          css={css`
            min-height: 100vh;
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
