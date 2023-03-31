import React from 'react';
import useClipboard from '../hooks/useClipboard';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const IconReference = ({ type }) => {
  const { Icon } = window.__NR1_SDK__.default;
  const [copied, copyIcon] = useClipboard();
  return (
    <button
      css={css`
        border: 1px solid transparent;
        background: var(--primary-background-color);
        border-radius: 4px;
        text-align: center;
        padding: 1rem;
        position: relative;
        transition: all 0.3s;

        &:focus {
          outline: none;
        }

        &:hover {
          cursor: pointer;
          border: 1px solid var(--border-color);
          box-shadow: var(--boxshadow);
          z-index: 1;

          .iconName {
            visibility: visible;
          }
        }
      `}
      type="button"
      key={type}
      onClick={() => copyIcon(`Icon.TYPE.${type}`)}
    >
      <Icon
        css={css`
          color: var(--primary-text-color);
          display: inline-block;
          width: 100%;

          > svg {
            fill: currentColor;
          }
        `}
        type={Icon.TYPE[type]}
      />
      <span
        css={css`
          visibility: hidden;
          background-color: var(--system-text-primary-light);
          color: var(--color-white);
          text-align: center;
          border-radius: 3px;
          padding: 0.25rem;
          position: absolute;
          font-size: 0.85rem;
          top: calc(100% + 0.5rem);
          right: 0;
          z-index: 1;
        `}
      >
        {copied ? 'Copied!' : type}
      </span>
    </button>
  );
};

IconReference.propTypes = {
  type: PropTypes.string,
};

export default IconReference;
