import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { css } from '@emotion/react';
import {
  Surface,
  Icon,
  useTessen,
  useInstrumentedHandler,
  Tag,
} from '@newrelic/gatsby-theme-newrelic';
import PackImg from './PackImg';

const LEVELS = {
  NEWRELIC: 'NEWRELIC',
};

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

const PackTile = ({
  id,
  view,
  featured,
  name,
  fields,
  logoUrl,
  level,
  className,
  summary,
}) => {
  const tessen = useTessen();

  const handlePackClick = useInstrumentedHandler(
    () => {
      tessen.track('instantObservability', 'QuickstartClick', {
        publicCatalogView: view,
        quickstartName: name,
      });
      navigate(fields.slug);
    },
    {
      actionName: 'QuickstartClick',
      publicCatalogView: view,
      quickstartName: name,
    }
  );

  const handleBuildTileClick = useInstrumentedHandler(
    () => {
      tessen.track('instantObservability', 'BuildYourOwnQuickstartClick', {
        publicCatalogView: view,
        quickstartName: name,
      });
    },
    {
      actionName: 'BuildYourOwnQuickstartClick',
      publicCatalogView: view,
      quickstartName: name,
    }
  );

  return (
    <Surface
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
      onClick={fields ? handlePackClick : handleBuildTileClick}
    >
      <PackImg
        logoUrl={logoUrl}
        packName={title}
        css={css`
          height: 200px;
          background-color: var(--color-white);
          object-fit: scale-down;
          width: ${view === VIEWS.GRID ? 100 : 25}%;
          padding: 0 ${view === VIEWS.GRID ? 5 : 1}%;
          margin: 10px auto;

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
          {title} {level === LEVELS.NEWRELIC && <Icon name="nr-check-shield" />}
        </h4>
        <p
          css={css`
            font-size: 0.875rem;
            color: var(--secondary-text-color);
          `}
        >
          {summary}
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
};

export default PackTile;
