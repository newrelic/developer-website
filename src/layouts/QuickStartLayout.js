import React, { useState } from 'react';
import {
  Layout,
  GlobalHeader,
  MobileHeader,
  Navigation,
  NavItem,
} from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const EmbedLayout = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <MobileHeader>New sidebar here</MobileHeader>
      <Layout>
        <Layout.Sidebar>New sidebar here</Layout.Sidebar>
        <Layout.Main
          css={css`
            min-height: 100vh;
          `}
          className="light-mode"
        >
          {children}
        </Layout.Main>
      </Layout>
    </>
  );
};

EmbedLayout.propTypes = {
  children: PropTypes.node,
};

export default EmbedLayout;
