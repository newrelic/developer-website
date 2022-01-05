import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/react';
import {
  Surface,
  Icon,
  useTessen,
  Tag,
  Link,
} from '@newrelic/gatsby-theme-newrelic';
import { SHIELD_LEVELS, RESERVED_QUICKSTART_IDS } from '../data/constants';
import PackImg from './PackImg';

const IMAGE_BREAKPOINT = '1080px';

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

const PackTile = ({
  id,
  title,
  view,
  featured,
  name,
  fields,
  logoUrl,
  level,
  className,
  summary,
  href,
}) => {
  const tessen = useTessen();

  const handlePackClick = (quickstartId) => {
    switch (true) {
      case quickstartId === RESERVED_QUICKSTART_IDS.GUIDED_INSTALL:
        tessen.track({
          eventName: 'instantObservability',
          category: 'GuidedInstallClick',
          publicCatalogView: view,
          quickstartName: name,
        });
        break;
      case quickstartId === RESERVED_QUICKSTART_IDS.BUILD_YOUR_OWN_QUICKSTART:
        tessen.track({
          eventName: 'instantObservability',
          category: 'BuildYourOwnQuickstartClick',
          publicCatalogView: view,
          quickstartName: name,
        });
        break;
      default:
        tessen.track({
          eventName: 'instantObservability',
          category: 'QuickstartClick',
          publicCatalogView: view,
          quickstartName: name,
        });
    }
  };

  return (
    <Surface
      as={Link}
      to={href || fields?.slug || '/'}
      key={id}
      base={Surface.BASE.PRIMARY}
      className={className}
      interactive
      css={css`
        overflow: hidden;
        display: grid;
        grid-template-rows: 1fr 3.5fr 0.5fr;
        grid-template-columns: auto;
        ${view === VIEWS.GRID &&
        css`
          @media screen and (max-width: ${IMAGE_BREAKPOINT}) {
            grid-template-rows: 4.5fr 0.5fr;
          }
        `}

        ${view === VIEWS.LIST &&
        css`
          grid-template-columns: 1fr 3.5fr 0.5fr;
          grid-template-rows: auto;
          @media screen and (max-width: ${IMAGE_BREAKPOINT}) {
            grid-template-columns: 4.5fr 0.5fr;
          }
        `}
      `}
      onClick={() => handlePackClick(id)}
    >
      <div
        css={css`
          height: 130px;
          @media screen and (max-width: ${IMAGE_BREAKPOINT}) {
            display: none;
          }
        `}
      >
        <PackImg
          logoUrl={logoUrl}
          packName={title || name}
          css={css`
            object-fit: scale-down;
            padding: 5% 5%;
            margin: 0 auto 10px;
            height: 100%;

            .dark-mode & {
              background-color: white;
            }
          `}
        />
      </div>
      <div
        css={css`
          padding: 1em;
          flex: 1 1 auto;
          min-height: 0; /* needed to stop the summary text from pushing outside the flexbox */
          ${view === VIEWS.LIST &&
          css`
            width: 100%;
            flex: 1 1 auto;
          `}
        `}
      >
        <h4>
          {title}{' '}
          {SHIELD_LEVELS.includes(level) && <Icon name="nr-check-shield" />}
        </h4>
        <p
          css={css`
            font-size: 0.8rem;
            line-height: 1.4rem;
            color: var(--secondary-text-color);
            overflow: hidden;
            display: -webkit-box;
            white-space: normal;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          `}
        >
          {summary || 'No summary provided'}
        </p>
      </div>
      <div
        css={css`
          padding: 1rem;
          justify-self: end;
          align-self: end;
          span {
            color: var(--color-brand-500);
          }
        `}
      >
        {featured && (
          <Tag
            css={css`
              background-color: var(--color-brand-100);
            `}
          >
            Featured
          </Tag>
        )}
      </div>
    </Surface>
  );
};

PackTile.propTypes = {
  id: PropTypes.string.isRequired,
  view: PropTypes.oneOf(Object.values(VIEWS)).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  logoUrl: PropTypes.string,
  summary: PropTypes.string,
  level: PropTypes.string,
  className: PropTypes.string,
  featured: PropTypes.bool,
  href: PropTypes.string,
};

export default PackTile;
