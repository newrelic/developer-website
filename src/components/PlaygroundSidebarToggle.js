import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';
import FeatherIcon from './FeatherIcon';

import useClipboard from '../hooks/useClipboard';

const PlaygroundSidebarToggle = ({ onClickHandler, code }) => {
  const [copied, copy] = useClipboard();
  return (
    <div
      css={css`
        width: auto;
        background-color: var(--secondary-background-color);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      `}
    >
      <Button
        css={css`
          padding: 1.75rem;
        `}
        variant={Button.VARIANT.OUTLINE}
        onClick={() => onClickHandler()}
      >
        <Icon size="1.25rem" name={Icon.TYPE.EDIT} />
      </Button>
      <Button
        css={css`
          padding: 1.75rem;
        `}
        variant={Button.VARIANT.OUTLINE}
        onClick={() => copy(code)}
      >
        {copied ? (
          <FeatherIcon size="1.25rem" name="checkmark-box" />
        ) : (
          <Icon size="1.25rem" name={Icon.TYPE.COPY} />
        )}
      </Button>
    </div>
  );
};

export default PlaygroundSidebarToggle;
