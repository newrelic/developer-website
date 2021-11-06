import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Button, Icon, Surface, Link } from '@newrelic/gatsby-theme-newrelic';

const FeaturedGuideTile = ({
  guide: { description, duration, icon, title, url },
}) => (
  <Surface
    base={Surface.BASE.SECONDARY}
    css={css`
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      border-radius: 0.25rem;
      position: relative;
      padding: 1rem;
      transition: all 0.15s ease-out;
    `}
  >
    <div
      css={css`
        position: absolute;
        top: -2.75rem;
        left: 50%;
        margin-left: -2.75rem;
        width: 5.5rem;
        height: 5.5rem;
        border: 4px solid var(--color-white);
        background-color: var(--color-neutrals-200);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        .dark-mode & {
          background-color: var(--color-dark-050);
          border-color: var(--color-dark-100);
        }
      `}
    >
      {cloneElement(icon, { size: '2.5rem' })}
    </div>
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 0.5rem;
        align-items: baseline;
      `}
    >
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
        <Icon
          css={css`
            margin-right: 0.25rem;
          `}
          name="fe-clock"
        />
        {duration} min
      </div>
    </div>
    <h3
      css={css`
        text-align: center;
        margin-top: 0.5rem;
      `}
    >
      {title}
    </h3>
    <p
      css={css`
        font-size: 0.875rem;
        margin-bottom: 1.5rem;
        color: var(--secondary-text-color);
        flex: 1;
        text-align: center;
        padding: 0;
      `}
    >
      {description}
    </p>

    <Button
      to={url}
      as={Link}
      variant={Button.VARIANT.PRIMARY}
      css={css`
        justify-self: center;

        &:hover {
          transform: translateY(-1px);
        }
      `}
    >
      Start the guide
    </Button>
  </Surface>
);

FeaturedGuideTile.propTypes = {
  guide: PropTypes.shape({
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedGuideTile;
