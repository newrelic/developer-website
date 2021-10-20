import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

import check from '../../images/check.svg';

const QuickstartFilter = ({
  name,
  type,
  icon,
  count,
  filters,
  handleFilter,
  className,
}) => (
  <div
    className={className}
    key={name}
    css={css`
      padding: 1rem 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      color: var(--primary-text-color);
      font-weight: 100;
    `}
  >
    <div>
      <Icon
        name={icon}
        css={css`
          fill: currentColor;
          stroke-width: ${name === 'All' ? 1 : 0.25};

          margin: 0 0.5rem;
        `}
      />
      {`${name} (${count})`}
    </div>
    <input
      type="checkbox"
      checked={
        filters.includes(type) || (filters.length === 0 && type === 'all')
      }
      id={type}
      onChange={(e) => handleFilter(type, e)}
      css={css`
        appearance: none;
        border: solid 1px var(--primary-text-color);
        height: 1rem;
        width: 1rem;
        border-radius: 3px;
        :checked {
          background-color: var(--color-brand-500);
          border: solid 1px var(--color-brand-500);
          background-image: url(${check});
          background-position: 50%;
          background-repeat: no-repeat;
        }
      `}
    />
  </div>
);

QuickstartFilter.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  count: PropTypes.number,
  filters: PropTypes.arrayOf(PropTypes.string),
  handleFilter: PropTypes.func,
  className: PropTypes.string,
};

export default QuickstartFilter;
