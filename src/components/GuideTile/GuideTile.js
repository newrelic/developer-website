import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link, Icon, Surface } from '@newrelic/gatsby-theme-newrelic';

const GuideTile = ({ duration, title, description, className, to }) => (
  <Surface
    as={Link}
    to={to}
    className={className}
    base={Surface.BASE.SECONDARY}
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
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 0.5rem;
        align-items: baseline;
      `}
    >
      <h3>{title}</h3>
      <div
        css={css`
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          text-align: right;
          color: var(--accent-text-color);
          padding: 0.3rem 0 0.2rem 1.2rem;
          justify-self: end;
        `}
      >
        {duration ? (
          <Icon
            css={css`
              margin-right: 0.25rem;
            `}
            name="fe-clock"
          />
        ) : (
          <span>&nbsp;</span>
        )}
        {duration}
      </div>
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

GuideTile.propTypes = {
  duration: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default GuideTile;
