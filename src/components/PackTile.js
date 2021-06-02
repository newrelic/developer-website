import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link, Icon, Surface } from '@newrelic/gatsby-theme-newrelic';

const PackTile = ({ name, description, featuredImageUrl, to, className }) => (
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
      position: relative;
      padding: 1rem;
      transition: all 0.15s ease-out;
    `}
  >
    <div>
      {featuredImageUrl && (
        <img
          src={featuredImageUrl}
          css={css`
            display: block;
            width: 100%;
            height: 200px;
          `}
        />
      )}
    </div>
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 0.5rem;
        align-items: baseline;
      `}
    >
      <h3>{name}</h3>
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
  </Surface>
);

PackTile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featuredImageUrl: PropTypes.string,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PackTile;
