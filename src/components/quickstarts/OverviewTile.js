import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import { Surface, Tag } from '@newrelic/gatsby-theme-newrelic';

const truncateDescription = (description) => {
  if (description.length > 250) {
    return `${description.slice(0, 244)} . . .`;
  }

  return description;
};

const OverviewTile = ({ key, title, image, description, tag }) => {
  return (
    <Surface key={key} base={Surface.BASE.PRIMARY}>
      <div
        css={css`
          padding: 1em;
        `}
      >
        <h3>{title}</h3>
        <div>
          {image && (
            <img
              src={image}
              alt="Dashboard"
              css={css`
                width: 100%;
                height: 100px;
                object-fit: cover;
              `}
            />
          )}
          {description && !image && (
            <p
              css={css`
                font-size: 0.875rem;
                color: var(--secondary-text-color);
              `}
            >
              {truncateDescription(description)}
            </p>
          )}
        </div>
        <div
          css={css`
            margin-top: 1rem;
          `}
        >
          <Tag>{tag}</Tag>
        </div>
      </div>
    </Surface>
  );
};

OverviewTile.propTypes = {
  key: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.string.isRequired,
};

export default OverviewTile;
