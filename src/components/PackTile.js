import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { css } from '@emotion/react';
import {
  Surface,
  Icon,
  useTessen,
  useInstrumentedHandler,
} from '@newrelic/gatsby-theme-newrelic';
import PackImg from './PackImg';
import { QUICKSTART_SUPPORT_LEVELS } from '../data/constants';

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

const SHIELD_LEVELS = [
  QUICKSTART_SUPPORT_LEVELS.NEWRELIC,
  QUICKSTART_SUPPORT_LEVELS.VERIFIED,
];

const PackTile = ({
  id,
  view,
  name,
  fields,
  logoUrl,
  description,
  level,
  className,
}) => {
  const tessen = useTessen();

  const handlePackClick = useInstrumentedHandler(
    () => {
      tessen.track('observabilityPack', 'observabilityPackClick', {
        publicCatalogView: view,
        packName: name,
      });
      navigate(fields.slug);
    },
    {
      actionName: 'observabilityPackClick',
      publicCatalogView: view,
      packName: name,
    }
  );

  const handleBuildTileClick = useInstrumentedHandler(
    () => {
      tessen.track('observabilityPack', 'buildYourOwnObservabilityPackClick', {
        publicCatalogView: view,
        packName: name,
      });
    },
    {
      actionName: 'buildYourOwnObservabilityPackClick',
      publicCatalogView: view,
      packName: name,
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

        ${view === VIEWS.LIST &&
        css`
          display: flex;
          margin-bottom: 1em;
        `}
      `}
      onClick={fields ? handlePackClick : handleBuildTileClick}
    >
      <PackImg
        logoUrl={logoUrl}
        packName={name}
        css={css`
          height: 200px;
          background-color: var(--color-white);
          object-fit: scale-down;
          width: ${view === VIEWS.GRID ? 100 : 25}%;
          padding: 0 ${view === VIEWS.GRID ? 5 : 1}%;
          margin: ${view === VIEWS.GRID ? 'auto' : 0};

          ${view === VIEWS.LIST &&
          css`
            max-height: 150px;

            @media (max-width: 1080px) {
              display: none;
            }
          `}
        `}
      />
      <div
        css={css`
          padding: 1em;

          ${view === VIEWS.LIST &&
          css`
            width: 75%;

            @media (max-width: 1080px) {
              width: 100%;
            }
          `}
        `}
      >
        <h4>
          {name}{' '}
          {SHIELD_LEVELS.includes(level) && <Icon name="nr-check-shield" />}
        </h4>
        <p
          css={css`
            font-size: 0.875rem;
            color: var(--secondary-text-color);
          `}
        >
          {description}
        </p>
      </div>
    </Surface>
  );
};

PackTile.propTypes = {
  id: PropTypes.string.isRequired,
  view: PropTypes.oneOf(Object.values(VIEWS)).isRequired,
  name: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  logoUrl: PropTypes.string,
  description: PropTypes.string,
  level: PropTypes.string,
  className: PropTypes.string,
};

export default PackTile;
