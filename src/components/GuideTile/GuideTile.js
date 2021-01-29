import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon, Surface } from '@newrelic/gatsby-theme-newrelic';
import Button from './Button';

const GuideTile = ({
  as: Component = 'div',
  duration,
  title,
  description,
  className,
  children,
  ...props
}) => (
  <Surface
    {...props}
    as={Component}
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
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
        color: var(--secondary-text-color);
        flex: 1;
        text-align: left;
        padding: 0;

        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      {description}
    </p>
    {children}
  </Surface>
);

GuideTile.Button = Button;

GuideTile.propTypes = {
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.elementType,
};

export default GuideTile;
