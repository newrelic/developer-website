import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link, Icon, Surface } from '@newrelic/gatsby-theme-newrelic';
import NewRelicIcon from '@newrelic/gatsby-theme-newrelic/src/icons/logo/newrelic.js';

const PackListTile = ({
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
      border-radius: 0.25rem;
      transition: all 0.15s ease-out;
      margin-bottom: 1rem;
    `}
  >
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-auto-rows: minmax(var(--guide-list-row-height, 150px), auto);

        @media (max-width: 1080px) {
          grid-template-columns: 1fr;
        }
      `}
    >
      <div
        css={css`
          padding: 1rem;
          max-height: 150px;
          background-color: white;

          @media (max-width: 1080px) {
            display: none;
          }
        `}
      >
        {featuredImageUrl ? (
          <img
            src={featuredImageUrl}
            alt="Preview of the pack in action"
            css={css`
              display: block;
              object-fit: scale-down;
              width: 90%;
              height: 100%;
              margin-left: auto;
              margin-right: auto;
              background-color: white;

              @media (max-width: 1080px) {
                display: none;
              }
            `}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                'https://via.placeholder.com/400x275.png?text=Image';
            }}
          />
        ) : (
          <NewRelicIcon
            css={css`
              display: block;
              object-fit: scale-down;
              width: 100%;
              height: 100%;
              margin-left: auto;
              margin-right: auto;
              background-color: white;

              @media (max-width: 1080px) {
                display: none;
              }
            `}
          />
        )}
      </div>
      <div
        css={css`
          padding: 1rem;
          width: 100%;
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

PackListTile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featuredImageUrl: PropTypes.string,
  supportLevel: PropTypes.string,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PackListTile;
