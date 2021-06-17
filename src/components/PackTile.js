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
import DEFAULT_IMAGE from '../images/new-relic-logo.png';

const LEVELS = {
  NEWRELIC: 'NEWRELIC',
};

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};
const PackTile = ({ id, view, name, fields, logoUrl, description, level }) => {
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
  return (
    <Surface
      key={id}
      base={Surface.BASE.PRIMARY}
      className="pack-tile-instrument"
      interactive
      css={css`
        overflow: hidden;

        ${view === VIEWS.LIST &&
        css`
          display: flex;
          margin-bottom: 1em;
        `}
      `}
      onClick={handlePackClick}
    >
      <img
        src={logoUrl || DEFAULT_IMAGE}
        alt={name}
        onError={(e) => {
          e.preventDefault();
          e.target.src = DEFAULT_IMAGE;
        }}
        css={css`
          display: block;
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
          {name} {level === LEVELS.NEWRELIC && <Icon name="nr-check-shield" />}
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
};

export default PackTile;
