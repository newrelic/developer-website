import React from 'react';
import PropTypes from 'prop-types';
import useMobileDetect from 'use-mobile-detect-hook';

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

  const isMobile = useMobileDetect().isMobile();

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

  const isListView = () => view === VIEWS.LIST;

  return (
    <Surface
      as={Link}
      to={href || fields?.slug || '/'}
      key={id}
      base={Surface.BASE.PRIMARY}
      className={className}
      interactive
      css={css`
        --tile-image-height: 100px; /* Logo image height */
        --title-row-height: 0.5fr; /* Title height to allow space for longer string */
        padding: 1rem;
        overflow: hidden;

        /* Default grid view */
        display: grid;
        grid-gap: 0.2rem;
        grid-template-rows: var(--tile-image-height) var(--title-row-height) 1fr 1fr;
        grid-template-columns: auto;
        grid-template-areas:
          'logo logo'
          'title title'
          'summary summary'
          '. tag';

        /* Grid view without logo */
        ${!isListView() &&
        css`
          @media screen and (max-width: ${IMAGE_BREAKPOINT}) {
            grid-template-rows: var(--title-row-height) 1fr 1fr;
            grid-template-areas:
              'title title'
              'summary summary'
              '. tag';
          }
        `}

        /* List view */
        ${isListView() &&
        css`
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas:
            'logo title title'
            'logo summary summary'
            'logo tag tag';
          grid-template-rows: auto;
        `}

        ${isMobile &&
        css`
          grid-template-areas:
            'logo title title'
            'logo summary summary';
            'logo summary summary';
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 0.5fr 1fr;
          padding: 0.2rem 0.5rem;
        `}
      `}
      onClick={() => handlePackClick(id)}
    >
      <div
        css={css`
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: center;
          margin-bottom: 1rem;

          ${isListView() &&
          css`
            margin-right: 0.5rem;
          `}
          .dark-mode & {
            background-color: white;
          }
          grid-area: logo;
        `}
      >
        <div
          css={css`
            height: var(--tile-image-height);
          `}
        >
          <PackImg
            logoUrl={logoUrl}
            packName={title || name}
            css={css`
              object-fit: scale-down;
              height: 100%;
            `}
          />
        </div>
      </div>
      <h4
        css={css`
          grid-area: title;

          ${isMobile &&
          css`
            align-self: end;
            font-size: 14px;
            font-weight: 300;
            margin: 0;
          `}
        `}
      >
        {title}{' '}
        {SHIELD_LEVELS.includes(level) && <Icon name="nr-check-shield" />}
      </h4>

      <div
        css={css`
          grid-area: summary;
        `}
      >
        <p
          css={css`
            font-size: 0.8rem;
            color: var(--secondary-text-color);

            /* Limits the number of lines */
            overflow: hidden;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          `}
        >
          {summary || 'No summary provided'}
        </p>
      </div>
      <div
        css={css`
          justify-self: end;
          align-self: end;
          span {
            color: var(--color-brand-500);
          }
          grid-area: tag;

          ${isMobile && 'display: none'}
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
