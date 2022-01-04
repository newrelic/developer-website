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
import {
  SHIELD_LEVELS,
  RESERVED_QUICKSTART_IDS,
  QUICKSTARTS_COLLAPSE_BREAKPOINT,
} from '../data/constants';
import PackImg from './PackImg';

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
        display: flex;
        flex-direction: column;

        ${view === VIEWS.LIST &&
        css`
          margin-bottom: 1em;
          flex-direction: row;
        `}

        @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
          flex-direction: row;
        }
      `}
      onClick={() => handlePackClick(id)}
    >
      <PackImg
        logoUrl={logoUrl}
        packName={title || name}
        css={css`
          height: 200px;
          object-fit: scale-down;
          width: ${view === VIEWS.GRID ? 100 : 25}%;
          padding: 0 ${view === VIEWS.GRID ? 5 : 1}%;
          margin: 0 auto 10px;

          .dark-mode & {
            background-color: white;
          }

          ${view === VIEWS.LIST &&
          css`
            max-height: 150px;

            flex: 0 0 auto;
            @media (max-width: 1080px) {
              display: none;
            }
          `}

          @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
            display: none;
          }
        `}
      />
      <div
        css={css`
          padding: 1em;
          flex: 1 1 auto;
          ${view === VIEWS.LIST &&
          css`
            width: 100%;
            flex: 1 1 auto;
            @media (max-width: 1080px) {
              width: 100%;
            }
          `}
        `}
      >
        <h4>
          {title}{' '}
          {SHIELD_LEVELS.includes(level) && <Icon name="nr-check-shield" />}
        </h4>
        <p
          css={css`
            font-size: 0.875rem;
            color: var(--secondary-text-color);
          `}
        >
          {summary || 'No summary provided'}
        </p>
      </div>
      <div
        css={css`
          padding: 1em;
          display: flex;
          justify-content: flex-end;
          ${view === VIEWS.LIST &&
          css`
            flex-direction: column;
            justify-content: flex-end;
          `}
          span {
            color: var(--color-brand-500);
          }
          @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
            flex-direction: column;
            justify-content: flex-end;
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
