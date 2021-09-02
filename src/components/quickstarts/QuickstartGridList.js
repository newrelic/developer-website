import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { ExternalLink } from '@newrelic/gatsby-theme-newrelic';
import { quickstart } from '../../types';
import {
  QUICKSTARTS_REPO,
  QUICKSTART_CATALOG_VIEWS,
} from '../../data/constants';
import PackTile from '../PackTile';
import BUILD_YOUR_OWN from '../../images/build-your-own.svg';

const QuickstartGridList = ({
  quickstarts,
  view = QUICKSTART_CATALOG_VIEWS.GRID,
}) => {
  return (
    <>
      <div
        css={css`
          margin: 2em 0;
        `}
      >
        <span>Showing {quickstarts.length} results</span>
      </div>
      <div
        css={css`
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(var(--guide-list-row-height, 150px), auto);

          @media (max-width: 1450px) {
            grid-template-columns: repeat(3, 1fr);
          }

          @media (max-width: 1180px) {
            grid-template-columns: repeat(1, 1fr);
          }

          ${view === QUICKSTART_CATALOG_VIEWS.LIST &&
          css`
            display: initial;
          `}
        `}
      >
        <ExternalLink
          href={QUICKSTARTS_REPO}
          css={css`
            text-decoration: none;
          `}
        >
          <PackTile
            css={
              view === QUICKSTART_CATALOG_VIEWS.GRID &&
              css`
                height: 100%;
              `
            }
            view={view}
            logoUrl={BUILD_YOUR_OWN}
            name="Build your own quickstart"
            description="Can't find a pack with what you need? Check out our README and build your own."
            fields={{ slug: '' }}
            id={''}
          />
        </ExternalLink>
        {quickstarts.map((pack) => (
          <PackTile key={pack.id} view={view} {...pack} />
        ))}
      </div>
    </>
  );
};

QuickstartGridList.propTypes = {
  quickstarts: PropTypes.arrayOf(quickstart).isRequired,
  view: PropTypes.oneOf(Object.values(QUICKSTART_CATALOG_VIEWS)),
};

export default QuickstartGridList;
