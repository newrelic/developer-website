import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import root from 'react-shadow';
import NR1Logo from '../NR1Logo';
import { SDK_VARS } from '../../utils/sdk';
import { useStaticQuery, graphql } from 'gatsby';

const PlaygroundChrome = ({ children }) => {
  const { newRelicSdk } = useStaticQuery(graphql`
    query {
      newRelicSdk {
        assets {
          css
        }
      }
    }
  `);
  const [stylesLoaded, setStylesLoaded] = useState(false);
  return (
    <root.div
      css={css`
        flex: 1;
        background: white;
      `}
    >
      <link
        rel="stylesheet"
        href={newRelicSdk.assets.css}
        onLoad={() => setStylesLoaded(true)}
      />
      <style type="text/css">{SDK_VARS}</style>
      <div className="body">
        <header className="nr1-header">
          <a
            className="nr1-logo-link"
            href="https://one.newrelic.com?nerdpacks=local"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NR1Logo />
          </a>
        </header>
        <div className="nr1-app-header">
          <h3 className="nr1-header-title">My Awesome Nerdpack</h3>
          <hr className="nr1-divider" />
        </div>
        <div
          css={css`
            margin-left: 1rem;
          `}
        >
          {stylesLoaded && children}
        </div>
      </div>
    </root.div>
  );
};

PlaygroundChrome.propTypes = {
  children: PropTypes.node,
};

export default PlaygroundChrome;
