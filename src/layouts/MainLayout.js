import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import {
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
import { useLocation } from '@reach/router';

import bannerBackground from '../images/bannerBackground.svg';
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
      <div
        css={css`
          align-items: center;
          background: color-mix(
            in srgb,
            var(--attention-notification-announcement) 85%,
            var(--primary-background-color)
          );
          display: flex;
          font-size: 1.2rem;
          padding: 0 2rem;
          position: relative;
          height: 90px;
          & a {
            color: currentColor;
            font-weight: bolder;

            &:hover {
              color: var(--primary-hover-color);
            }
          }
          & p {
            z-index: 2;
          }
          @media screen and (max-width: 780px) {
            height: 120px;
          }

          @media screen and (max-width: 600px) {
            height: 140px;
          }

          @media screen and (max-width: 400px) {
            height: 180px;
          }
        `}
      >
        <div
          css={css`
            background-image: url(${bannerBackground});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            left: 0;
            height: 100%;
            opacity: 0.23;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;

            @media screen and (max-width: 780px) {
              background-size: 200%;
              background-position: center 8px;
            }

            @media screen and (max-width: 550px) {
              background-size: 150%;
              background-position: center 20px;
            }
          `}
        />
        <p>
          On August 31, 2024, we're EOLing developer.newrelic.com. All relevant
          content has been migrated to{' '}
          <a href="https://docs.newrelic.com">docs.newrelic.com</a>.
        </p>
      </div>
      <Layout
        css={css`
          display: ${isMobileNavOpen ? 'none' : 'grid'};
        `}
      >
        <Layout.Sidebar
          css={css`
            background: var(--erno-black);
            padding: 0.5rem 0;

            span,
            svg {
              color: #afe2e3;
            }
          `}
        >
          <div
            css={css`
              position: sticky;
              background: var(--erno-black);
              top: -2rem;
              z-index: 10;
              margin: -2rem -0.5rem 0rem;
              padding: 2rem 0.5rem 1rem;
              width: var(--sidebar-width);
              margin: -2rem -2rem 0rem;
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
              css={css`
                svg {
                  color: var(--primary-text-color);
                }
              `}
            />
          </div>
          <Navigation
            css={css`
              overflow-x: hidden;
              -ms-overflow-style: none;
              scrollbar-width: none;
              &::-webkit-scrollbar {
                display: none;
              }
            `}
            searchTerm={searchTerm}
          >
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
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default MainLayout;
