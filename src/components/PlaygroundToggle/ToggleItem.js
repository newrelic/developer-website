import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import ToolTip from '../Tooltip';

const PlaygroundToggleItem = ({ onClick, children, to, alt }) => {
  const ToggleButton = to ? (
    <Button
      css={css`
        padding: 2rem;
      `}
      variant={Button.VARIANT.OUTLINE}
      to={to}
      as={Link}
    >
      {children}
    </Button>
  ) : (
    <Button
      css={css`
        padding: 2rem;
      `}
      variant={Button.VARIANT.OUTLINE}
      onClick={onClick}
    >
      {children}
    </Button>
  );
  return (
    <>
      <ToolTip.Wrapper>
        {ToggleButton}{' '}
        <ToolTip
          css={css`
            top: 0;
            transform: translate(-100%);
            background-color: black;
            width: 100px;
          `}
        >
          {alt}
        </ToolTip>
      </ToolTip.Wrapper>
    </>
  );
};

PlaygroundToggleItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  to: PropTypes.string,
};

export default PlaygroundToggleItem;
