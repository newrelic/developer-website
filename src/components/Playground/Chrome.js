import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import root from 'react-shadow';
import NR1Logo from '../NR1Logo';
import { CSS_BUNDLE, SDK_VARS } from '../../utils/sdk';

const PlaygroundChrome = ({ children }) => {
  return (
    <root.div
      css={css`
        flex: 1;
        background: white;
      `}
    >
      <link rel="stylesheet" href={CSS_BUNDLE} />
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
          {children}
        </div>
      </div>
    </root.div>
  );
};

PlaygroundChrome.propTypes = {
  children: PropTypes.node,
};

export default PlaygroundChrome;
