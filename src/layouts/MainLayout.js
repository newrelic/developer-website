import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import {
  CookieConsentDialog,
  GlobalHeader,
  Layout,
  Logo,
  Navigation,
  NavItem,
  SearchInput,
} from '@newrelic/gatsby-theme-newrelic';
import MobileHeader from '../components/MobileHeader';
import { Link } from 'gatsby';
import '../components/styles.scss';
import { useLocation } from '@reach/router';
import pages from '../data/nav.yml';

const MainLayout = ({ children, pageContext }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const { fileRelativePath } = pageContext;
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <>
      <GlobalHeader />
      <MobileHeader
        css={css`
          @media (min-width: 761px) {
            display: none;
          }
        `}
        isOpen={isMobileNavOpen}
        toggle={() => setIsMobileNavOpen(!isMobileNavOpen)}
      />
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
              margin: -2rem -0.5rem 1rem;
              padding: 1rem 0.5rem;
            `}
          >
            <Link
              css={css`
                display: block;
                margin-bottom: 1rem;
              `}
              to="/"
            >
              <Logo
                css={css`
                  display: block;
                  width: 150px;

                  @media screen and (max-width: 760px) {
                    width: 160px;
                  }
                `}
              />
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
        <Layout.Main>{children}</Layout.Main>
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
