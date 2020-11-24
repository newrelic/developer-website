import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Checkbox = ({ id, checked, onChange, ...props }) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <input
        type="checkbox"
        css={css`
          opacity: 0;
          position: absolute;
          z-index: -1;
        `}
        id={id}
        {...props}
        onChange={() => onChange()}
      />
      <label
        htmlFor={id}
        css={css`
          display: flex;
          align-items: center;
          margin-bottom: 0;
        `}
      >
        <div
          css={css`
            background-color: green;
            border: solid 0.0675rem green;
            border-radius: 0.125rem;
            height: 1.5rem;
            width: 1.5rem;
            display: inline-block;
            margin-right: 0.5rem;
            margin-left: -1px;
            vertical-align: middle;
          `}
        >
          <svg viewBox="-4 -6 20 20">
            <g fill="none">
              {checked && (
                <path stroke="white" strokeWidth="2" d="M1.5 3.75l3 3 6-6" />
              )}
            </g>
          </svg>
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
