import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link, Icon, Surface } from '@newrelic/gatsby-theme-newrelic';
import NewRelicIcon from '@newrelic/gatsby-theme-newrelic/src/icons/logo/newrelic.js';

const PackGridTile = ({
  name,
  description,
  featuredImageUrl,
  supportLevel,
  to,
  className,
}) => (
  <Surface
    as={Link}
    to={to}
    className={className}
    base={Surface.BASE.PRIMARY}
    interactive
    css={css`
      display: grid;
      grid-template-rows: auto 1fr auto;
      border-radius: 0.25rem;
      transition: all 0.15s ease-out;
    `}
  >
    <div>
      <div 
        css={css`
          background-color: white;
        `}>
        {featuredImageUrl ? (
          <img
            src={featuredImageUrl}
            alt="Preview of the pack in action"
            css={css`
              display: block;
              object-fit: scale-down;
              margin-left: auto;
              margin-right: auto;
              width: 90%;
              height: 200px;
            `}
          />
        ) : (
          <NewRelicIcon
            css={css`
              display: block;
              object-fit: scale-down;
              width: 100%;
              height: 200px;
            `}
          />
        )}
      </div>
      <div
        css={css`
          padding: 1rem;
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr auto;
            grid-gap: 0.5rem;
            align-items: baseline;
          `}
        >
          <h4>
            {name}{' '}
            {supportLevel === 'NEWRELIC' && (
              <span title="New Relic supported">
                <Icon
                  css={css`
                    stroke: none;
                    width: 2rem;
                    height: 2rem;
                  `}
                  name="nr-check-shield"
                />
              </span>
            )}
          </h4>
        </div>
        <p
          css={css`
            font-size: 0.875rem;
            color: var(--secondary-text-color);
            flex: 1;
            text-align: left;
            padding: 0;
          `}
        >
          {description}
        </p>
      </div>
    </div>
  </Surface>
);

PackGridTile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featuredImageUrl: PropTypes.string,
  supportLevel: PropTypes.string,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PackGridTile;
