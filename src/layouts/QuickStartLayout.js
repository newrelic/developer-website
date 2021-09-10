import React from 'react';
import { Layout, GlobalHeader } from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import '../components/styles.scss';

const getSidebarWidth = () => {
  switch (true) {
    case !window.location:
      return 0;
    case window.location.pathname === '/instant-observability/':
      return 300;
    default:
      return 0;
  }
};

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
            --left-margin: ${getSidebarWidth()}px;

            max-width: calc(
              var(--site-max-width) - var(--site-content-padding) -
                var(--left-margin)
            );
            margin-left: var(--left-margin);

            @media screen and (max-width: 760px) {
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
