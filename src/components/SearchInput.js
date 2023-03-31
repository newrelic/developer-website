import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from './FeatherIcon';
import { css } from '@emotion/react';

const SearchInput = ({ className, onClear, value, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClear();
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClear();
  };
  return (
    <div
      css={css`
        display: inline-flex;
        align-items: center;
        width: 100%;
        position: relative;
        @media (max-width: 760px) {
          margin: 0.25rem 0;
        }
      `}
      className={className}
    >
      <input
        value={value}
        {...props}
        css={css`
          color: var(--primary-text-color);
          width: 100%;
          font-size: 0.875rem;
          padding: 0.5rem;
          padding-right: calc(1rem + 1em);
          background: var(--primary-background-color);

          &:focus {
            outline: none;
            border: 1px solid rgba(0, 126, 138, 0.6);
            box-shadow: 0 0 0 4px rgba(0, 126, 138, 0.1);
          }
        `}
        type="text"
        onKeyDown={handleKeyDown}
      />
      <div
        css={css`
          position: absolute;
          right: 0.5rem;
        `}
      >
        <button
          onClick={handleClick}
          css={css`
            display: block;
            background-color: transparent;
            border: none;
            margin: 0;
            padding: 0;
            outline: none;
            ${value &&
            css`
              &:hover {
                cursor: pointer;
              }
            `}
          `}
          onKeyDown={(e) => e.preventDefault()}
          type="button"
        >
          <FeatherIcon
            name={value ? 'x' : 'search'}
            css={css`
              display: block;
              stroke: var(--primary-text-color);
            `}
          />
        </button>
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  onClear: PropTypes.func,
  value: PropTypes.string,
};

export default SearchInput;
