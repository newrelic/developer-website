import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';

const MenuBar = ({ copyable, copied, onCopy }) => (
  <div
    css={css`
      background: var(--chrome-color);
      display: grid;
      grid-template-columns: repeat(3, auto) 1fr 90px;
      grid-gap: 0.5rem;
      align-items: center;
      padding: 0 1rem;
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
      height: 38px;
    `}
  >
    <FrameButton color="#ed6b60" />
    <FrameButton color="#f5be4f" />
    <FrameButton color="#62c554" />
    <div
      css={css`
        color: #ccc;
        text-align: center;
        font-family: var(--code-font);
        font-size: 0.75rem;
      `}
    >
      bash
    </div>
    {copyable && (
      <Button
        variant={Button.VARIANT.LINK}
        size={Button.SIZE.SMALL}
        onClick={onCopy}
        className="dark-mode"
        css={css`
          justify-self: end;
          white-space: nowrap;
        `}
      >
        <Icon
          name={Icon.TYPE.COPY}
          css={css`
            margin-right: 0.5rem;
          `}
        />
        {copied ? 'Copied' : 'Copy'}
      </Button>
    )}
  </div>
);

MenuBar.propTypes = {
  copied: PropTypes.bool,
  copyable: PropTypes.bool,
  onCopy: PropTypes.func,
};

const FrameButton = ({ color }) => (
  <div
    css={css`
      background: ${color};
      border-radius: 50%;
      width: 10px;
      height: 10px;
    `}
  />
);

FrameButton.propTypes = {
  color: PropTypes.string,
};

export default MenuBar;
