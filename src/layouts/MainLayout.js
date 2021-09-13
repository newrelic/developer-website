import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import {
  CookieConsentDialog,
  GlobalHeader,
  Layout,
  Logo,
  MobileHeader,
  Navigation,
  NavItem,
  SearchInput,
  NR_SITES,
} from '@newrelic/gatsby-theme-newrelic';
import { Link } from 'gatsby';
import '../components/styles.scss';
import { useLocation } from '@reach/router';
import pages from '../data/nav.yml';
import useSDK from '../hooks/useSDK';
import { SdkContext } from '../components/SdkContext';

const MainLayout = ({ children, pageContext }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const { fileRelativePath } = pageContext;
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  const sdkStatus = useSDK();

  return (
    <>
      <GlobalHeader activeSite={NR_SITES.DEVELOPER} />
      <MobileHeader>
        <Navigation searchTerm={searchTerm}>
          {pages.map((page, idx) => (
            <NavItem key={idx} page={page} />
          ))}
        </Navigation>
      </MobileHeader>
      <Layout
        css={css`
          display: ${isMobileNavOpen ? 'none' : 'grid'};
        `}
      >
        <Layout.Sidebar>
          <div
            css={css`
              background: var(--primary-background-color);
              position: sticky;
              top: -2rem;
              z-index: 10;
              margin: -2rem -0.5rem 0rem;
              padding: 2rem 0.5rem 1rem;
            `}
          >
            <Link
              css={css`
                display: block;
                margin-bottom: 1rem;
              `}
              to="/"
            >
              <Logo />
            </Link>
            <SearchInput
              placeholder="Filter navigation"
              onClear={() => setSearchTerm('')}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>
          <Navigation searchTerm={searchTerm}>
            {pages.map((page, idx) => (
              <NavItem key={idx} page={page} />
            ))}
          </Navigation>
        </Layout.Sidebar>
        <SdkContext.Provider value={sdkStatus}>
          <Layout.Main>{children}</Layout.Main>
        </SdkContext.Provider>
        <Layout.Footer fileRelativePath={fileRelativePath} />
      </Layout>
      <CookieConsentDialog />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default MainLayout;
