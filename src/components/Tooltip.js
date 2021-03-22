import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const ToolTipWrapper = ({ children, className }) => {
  return (
    <div
      className={className}
      css={css`
        position: relative;
        margin: 0;
        padding: 0;
        .tool-tip {
          display: none;
        }
        &:hover {
          cursor: pointer;
        }
        &:hover {
          .tool-tip {
            display: block;
          }
        }
      `}
    >
      {children}
    </div>
  );
};

const ToolTip = ({ children }) => {
  return (
    <div
      className="tool-tip"
      css={css`
        --arrow-size: 5px;
        --arrow-offset: 0.5rem;
        --background-color: white;
        --text-color: var(--color-neutrals-900);

        .dark-mode & {
          --text-color: var(--color-dark-900);
          --background-color: var(--color-dark-050);
        }
        width: 200px;

        position: absolute;

        background: var(--background-color);
        border-radius: 0.25rem;
        z-index: 10000000;
        padding: 0.5rem;
        box-shadow: 0 3px 8px 0 rgba(22, 38, 59, 0.2);
        right: var(---arrow-offset);
        font-size: 12px;

        &::before {
          content: '';
          position: absolute;
          top: var(--arrow-size);
          border-left: var(--arrow-size) solid transparent;
          border-right: var(--arrow-size) solid transparent;
          border-bottom: var(--arrow-size) solid var(--background-color);
          width: 0;
          height: 0;
          z-index: 1000;
        }
      `}
    >
      {children}
    </div>
  );
};

ToolTipWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
ToolTip.propTypes = {
  children: PropTypes.node,
};

ToolTip.Wrapper = ToolTipWrapper;

export default ToolTip;
