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

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

const PackTile = ({
  id,
  metadata,
  view,
  featured,
  supportLevel,
  className,
  href,
}) => {
  const tessen = useTessen();

  const { displayName, slug, icon, summary } = metadata;

  const handlePackClick = (quickstartId) => {
    switch (true) {
      case quickstartId === RESERVED_QUICKSTART_IDS.GUIDED_INSTALL:
        tessen.track({
          eventName: 'instantObservability',
          category: 'GuidedInstallClick',
          publicCatalogView: view,
          quickstartName: slug,
        });
        break;
      case quickstartId === RESERVED_QUICKSTART_IDS.BUILD_YOUR_OWN_QUICKSTART:
        tessen.track({
          eventName: 'instantObservability',
          category: 'BuildYourOwnQuickstartClick',
          publicCatalogView: view,
          quickstartName: slug,
        });
        break;
      default:
        tessen.track({
          eventName: 'instantObservability',
          category: 'QuickstartClick',
          publicCatalogView: view,
          quickstartName: slug,
        });
    }
  };

  return (
    <Surface
      as={Link}
      to={href || `/instant-observability/${slug}/${id}` || '/'}
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
      `}
      onClick={() => handlePackClick(id)}
    >
      <PackImg
        logoUrl={icon.url}
        packName={displayName}
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
          {displayName}{' '}
          {SHIELD_LEVELS.includes(supportLevel) && (
            <Icon name="nr-check-shield" />
          )}
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
            @media (max-width: 1080px) {
              width: 100%;
            }
          `}
        `}
      >
        {featured && (
          <Tag
            css={css`
              background-color: var(--color-brand-300);
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
  metadata: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    icon: PropTypes.shape({ url: PropTypes.string }),
    summary: PropTypes.string,
  }),
  supportLevel: PropTypes.string,
  className: PropTypes.string,
  featured: PropTypes.bool,
  href: PropTypes.string,
};

export default PackTile;
