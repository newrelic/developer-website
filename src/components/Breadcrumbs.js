import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/react';
import { Link } from '@newrelic/gatsby-theme-newrelic';

const Breadcrumbs = ({ segments, separator }) => {
  return (
    <div
      css={css`
        margin: 2em 0;
        > :first-child {
          margin-left: 0;
        }
        > * {
          margin-left: 0.5em;
        }
      `}
      aria-label="breadcrumb"
    >
      {segments.map((segment) => {
        const elem = segment.url ? (
          <Link to={segment.url}>{segment.name}</Link>
        ) : (
          segment.name
        );
        return (
          <span
            key={`breadcrumb-${segment.name}`}
            css={css`
              :after {
                margin-left: 0.5em;
                content: ' ${separator} ';
              }
              :last-child {
                :after {
                  content: '';
                }
              }
            `}
          >
            {elem}
          </span>
        );
      })}
    </div>
  );
};

Breadcrumbs.defaultProps = {
  separator: '/',
};

Breadcrumbs.propTypes = {
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
  separator: PropTypes.string,
};

export default Breadcrumbs;
